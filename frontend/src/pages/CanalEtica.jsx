import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  ShieldCheck, ArrowRight, ArrowLeft, Copy, CheckCircle2, Paperclip, X, Info,
} from "lucide-react";
import { Reveal, Overline } from "@/components/Reveal";
import { usePageMeta } from "@/components/usePageMeta";

const ease = [0.22, 1, 0.36, 1];

const stepLabels = ["Identificação", "Relação", "Tipo de relato", "Detalhes", "Evidências", "Revisão"];

const relacoes = ["Colaborador", "Cliente", "Município ou órgão público", "Fornecedor", "Parceiro", "Candidato", "Outro"];

const tipos = [
  "Conflito de interesse", "Fraude ou corrupção", "Assédio moral", "Assédio sexual",
  "Discriminação", "Uso indevido de informações", "Violação de privacidade ou proteção de dados",
  "Segurança da informação", "Conduta inadequada com agente público",
  "Descumprimento de política interna", "Outro",
];

const initial = {
  modo: "", nome: "", email: "", telefone: "", prefContato: "",
  relacao: "", tipo: "", titulo: "", descricao: "", data: "", local: "",
  envolvidos: "", continua: "", comunicado: "", conhecimento: "",
  arquivos: [], c1: false, c2: false, c3: false,
};

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const maskPhone = (v) => {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const inputCls =
  "w-full rounded-xl border border-white/10 bg-slate-900/60 px-5 py-3.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-[border-color,box-shadow] duration-300 focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)]";
const errCls = "border-red-400/60";

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs font-medium text-red-400">
      {msg}
    </p>
  );
}

function RadioCards({ options, value, onChange, name, cols = "sm:grid-cols-2" }) {
  return (
    <div className={`grid gap-3 ${cols}`} role="radiogroup" aria-label={name}>
      {options.map((o, idx) => (
        <button
          type="button"
          key={o}
          role="radio"
          aria-checked={value === o}
          onClick={() => onChange(o)}
          data-testid={`radio-${name}-${idx}`}
          className={`rounded-xl border px-5 py-3.5 text-left text-sm font-medium transition-[border-color,background-color] duration-200 ${
            value === o
              ? "border-emerald-400/60 bg-emerald-400/10 text-slate-50"
              : "border-white/10 bg-slate-900/60 text-slate-300 hover:border-white/25"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default function CanalEtica() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [protocol, setProtocol] = useState("");
  const navigate = useNavigate();

  usePageMeta({
    title: "Canal de Ética AFRICON — Demonstração",
    description:
      "Canal de Ética AFRICON: comunique, de boa-fé, situações em desacordo com nossos princípios éticos. Nesta etapa, o canal é uma demonstração visual.",
  });

  const dirty = JSON.stringify(data) !== JSON.stringify(initial);
  useEffect(() => {
    const warn = (e) => {
      if (dirty && !submitted) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty, submitted]);

  const set = (k, v) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = (s) => {
    const e = {};
    if (s === 0) {
      if (!data.modo) e.modo = "Escolha como deseja realizar o relato.";
      if (data.modo === "De forma identificada") {
        if (!data.nome.trim()) e.nome = "Informe seu nome completo.";
        if (!data.email.trim()) e.email = "Informe seu e-mail.";
        else if (!emailOk(data.email)) e.email = "Informe um e-mail válido.";
        if (data.telefone && data.telefone.replace(/\D/g, "").length < 10)
          e.telefone = "Informe um telefone válido com DDD.";
        if (!data.prefContato) e.prefContato = "Escolha uma preferência de contato.";
      }
    }
    if (s === 1 && !data.relacao) e.relacao = "Selecione sua relação com a AFRICON.";
    if (s === 2 && !data.tipo) e.tipo = "Selecione o tipo de relato.";
    if (s === 3) {
      if (!data.titulo.trim()) e.titulo = "Informe um título para o relato.";
      if (!data.descricao.trim()) e.descricao = "Descreva a situação.";
      else if (data.descricao.trim().length < 30) e.descricao = "Descreva com pelo menos 30 caracteres.";
      if (!data.continua) e.continua = "Informe se o fato continua acontecendo.";
      if (!data.comunicado) e.comunicado = "Informe se o relato já foi comunicado.";
    }
    if (s === 5) {
      if (!data.c1) e.c1 = "Confirme que as informações foram fornecidas de boa-fé.";
      if (!data.c2) e.c2 = "É necessário estar ciente do aviso de privacidade.";
      if (!data.c3) e.c3 = "É necessário compreender que esta versão é uma demonstração.";
    }
    return e;
  };

  const isStepValid = (s) => Object.keys(validate(s)).length === 0;

  const next = () => {
    const e = validate(step);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setStep(step + 1);
      window.__lenis?.scrollTo(0, { duration: 0.8 });
    } else {
      toast.error("Verifique os campos destacados antes de continuar.");
    }
  };

  const submit = () => {
    const e = validate(5);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    const p = `AFR-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    setProtocol(p);
    setSubmitted(true);
    window.__lenis?.scrollTo(0, { immediate: true });
  };

  const copyProtocol = async () => {
    try {
      await navigator.clipboard.writeText(protocol);
      toast.success("Protocolo copiado.");
    } catch {
      toast.error("Não foi possível copiar automaticamente.");
    }
  };

  const label = (txt) => (
    <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">{txt}</span>
  );

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center pt-[72px]">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease }}>
            <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-400" data-testid="confirmacao-icone" />
            <h1 className="font-display mt-8 text-4xl font-black tracking-tight text-slate-50">
              Relato registrado na demonstração
            </h1>
            <p className="mt-5 text-slate-400 md:text-lg">
              Seu número de protocolo simulado é:
            </p>
            <div className="glass mx-auto mt-6 flex max-w-sm items-center justify-between gap-4 rounded-2xl px-6 py-4">
              <span className="font-mono2 text-lg font-bold tracking-wider text-emerald-400" data-testid="protocolo-numero">
                {protocol}
              </span>
              <button
                onClick={copyProtocol}
                data-testid="copiar-protocolo-button"
                aria-label="Copiar número do protocolo"
                className="rounded-lg border border-white/10 p-2.5 text-slate-300 transition-[color,border-color] duration-200 hover:border-emerald-400/50 hover:text-emerald-400"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <p className="mx-auto mt-8 max-w-md rounded-xl border border-amber-400/20 bg-amber-400/5 px-5 py-4 text-xs leading-relaxed text-slate-300">
              Atenção: esta é uma demonstração visual. As informações fornecidas não foram
              transmitidas nem armazenadas. O envio definitivo será habilitado após a integração
              com o backend.
            </p>
            <button
              onClick={() => navigate("/")}
              data-testid="voltar-site-button"
              className="mt-10 rounded-full bg-emerald-400 px-8 py-4 text-base font-bold text-slate-950 transition-[transform,box-shadow] duration-300 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(52,211,153,0.45)]"
            >
              Voltar ao site
            </button>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section data-testid="canal-etica-hero" className="bg-grid relative overflow-hidden pb-12 pt-40 lg:pt-48">
        <div className="pointer-events-none absolute -top-20 left-1/3 h-[400px] w-[500px] rounded-full bg-emerald-500/10 blur-[160px]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal y={24}>
            <Overline>Canal de Ética</Overline>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display mt-6 text-4xl font-black leading-[1.06] tracking-tighter text-slate-50 sm:text-5xl">
              Canal de Ética{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                AFRICON
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl leading-relaxed text-slate-400 md:text-lg">
              Utilize este canal para comunicar, de boa-fé, situações que possam estar em desacordo
              com os princípios éticos, as políticas internas ou a legislação aplicável.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 flex items-start gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-4 text-sm text-slate-300">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
              Nesta etapa, o canal é uma demonstração visual. O envio definitivo e o armazenamento
              seguro dos relatos serão habilitados após a integração com o backend.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28 pt-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <nav aria-label="Etapas do relato" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2">
              {stepLabels.map((l, i) => (
                <li key={l} className="flex items-center gap-2">
                  <span
                    aria-current={step === i ? "step" : undefined}
                    className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors duration-300 ${
                      i === step
                        ? "bg-emerald-400 text-slate-950"
                        : i < step
                          ? "bg-emerald-400/15 text-emerald-300"
                          : "bg-white/5 text-slate-500"
                    }`}
                  >
                    <span className="font-mono2">{i + 1}</span>
                    <span className="hidden sm:inline">{l}</span>
                  </span>
                  {i < stepLabels.length - 1 && <span className="h-px w-4 bg-white/15" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </nav>

          <form data-testid="canal-etica-form" onSubmit={(e) => e.preventDefault()} noValidate>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease }}
                className="glass rounded-3xl p-8 md:p-10"
              >
                {step === 0 && (
                  <fieldset>
                    <legend className="font-display text-xl font-bold text-slate-50 md:text-2xl">
                      Como deseja realizar o relato?
                    </legend>
                    <div className="mt-6">
                      <RadioCards
                        name="modo"
                        options={["De forma anônima", "De forma identificada"]}
                        value={data.modo}
                        onChange={(v) => set("modo", v)}
                      />
                      <FieldError msg={errors.modo} />
                    </div>
                    <AnimatePresence>
                      {data.modo === "De forma identificada" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">
                            <div>
                              <label htmlFor="ce-nome">{label("Nome completo *")}</label>
                              <input id="ce-nome" data-testid="canal-nome-input" className={`${inputCls} ${errors.nome ? errCls : ""}`} value={data.nome} onChange={(e) => set("nome", e.target.value)} placeholder="Seu nome" />
                              <FieldError msg={errors.nome} />
                            </div>
                            <div>
                              <label htmlFor="ce-email">{label("E-mail *")}</label>
                              <input id="ce-email" type="email" data-testid="canal-email-input" className={`${inputCls} ${errors.email ? errCls : ""}`} value={data.email} onChange={(e) => set("email", e.target.value)} placeholder="voce@exemplo.com" />
                              <FieldError msg={errors.email} />
                            </div>
                            <div>
                              <label htmlFor="ce-telefone">{label("Telefone")}</label>
                              <input id="ce-telefone" data-testid="canal-telefone-input" className={`${inputCls} ${errors.telefone ? errCls : ""}`} value={data.telefone} onChange={(e) => set("telefone", maskPhone(e.target.value))} placeholder="(00) 00000-0000" />
                              <FieldError msg={errors.telefone} />
                            </div>
                            <div>
                              <label htmlFor="ce-pref">{label("Preferência de contato *")}</label>
                              <select id="ce-pref" data-testid="canal-pref-contato-select" className={`${inputCls} appearance-none ${errors.prefContato ? errCls : ""} ${data.prefContato ? "" : "text-slate-500"}`} value={data.prefContato} onChange={(e) => set("prefContato", e.target.value)}>
                                <option value="" disabled>Selecione…</option>
                                <option value="E-mail">E-mail</option>
                                <option value="Telefone">Telefone</option>
                                <option value="Qualquer um">Qualquer um</option>
                              </select>
                              <FieldError msg={errors.prefContato} />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </fieldset>
                )}

                {step === 1 && (
                  <fieldset>
                    <legend className="font-display text-xl font-bold text-slate-50 md:text-2xl">
                      Qual é a sua relação com a AFRICON?
                    </legend>
                    <div className="mt-6">
                      <RadioCards name="relacao" options={relacoes} value={data.relacao} onChange={(v) => set("relacao", v)} cols="sm:grid-cols-2 lg:grid-cols-3" />
                      <FieldError msg={errors.relacao} />
                    </div>
                  </fieldset>
                )}

                {step === 2 && (
                  <fieldset>
                    <legend className="font-display text-xl font-bold text-slate-50 md:text-2xl">
                      Qual é o tipo do relato?
                    </legend>
                    <div className="mt-6">
                      <RadioCards name="tipo" options={tipos} value={data.tipo} onChange={(v) => set("tipo", v)} cols="sm:grid-cols-2" />
                      <FieldError msg={errors.tipo} />
                    </div>
                  </fieldset>
                )}

                {step === 3 && (
                  <fieldset className="space-y-5">
                    <legend className="font-display text-xl font-bold text-slate-50 md:text-2xl">
                      Detalhes do relato
                    </legend>
                    <div>
                      <label htmlFor="ce-titulo">{label("Título do relato *")}</label>
                      <input id="ce-titulo" data-testid="canal-titulo-input" className={`${inputCls} ${errors.titulo ? errCls : ""}`} value={data.titulo} onChange={(e) => set("titulo", e.target.value)} placeholder="Resumo breve da situação" />
                      <FieldError msg={errors.titulo} />
                    </div>
                    <div>
                      <label htmlFor="ce-descricao">{label("Descrição detalhada *")}</label>
                      <textarea id="ce-descricao" rows={5} data-testid="canal-descricao-input" className={`${inputCls} resize-none ${errors.descricao ? errCls : ""}`} value={data.descricao} onChange={(e) => set("descricao", e.target.value)} placeholder="Descreva o que aconteceu, quando e quem estava envolvido (mínimo de 30 caracteres)" />
                      <FieldError msg={errors.descricao} />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="ce-data">{label("Data aproximada")}</label>
                        <input id="ce-data" type="date" data-testid="canal-data-input" className={`${inputCls} [color-scheme:dark]`} value={data.data} onChange={(e) => set("data", e.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="ce-local">{label("Local ou área relacionada")}</label>
                        <input id="ce-local" data-testid="canal-local-input" className={inputCls} value={data.local} onChange={(e) => set("local", e.target.value)} placeholder="Ex.: setor comercial, filial, remoto…" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="ce-envolvidos">{label("Pessoas ou áreas envolvidas")}</label>
                      <input id="ce-envolvidos" data-testid="canal-envolvidos-input" className={inputCls} value={data.envolvidos} onChange={(e) => set("envolvidos", e.target.value)} placeholder="Opcional" />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        {label("O fato continua acontecendo? *")}
                        <RadioCards name="continua" options={["Sim", "Não", "Não sei"]} value={data.continua} onChange={(v) => set("continua", v)} cols="grid-cols-3" />
                        <FieldError msg={errors.continua} />
                      </div>
                      <div>
                        {label("Já foi comunicado anteriormente? *")}
                        <RadioCards name="comunicado" options={["Sim", "Não"]} value={data.comunicado} onChange={(v) => set("comunicado", v)} cols="grid-cols-2" />
                        <FieldError msg={errors.comunicado} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="ce-conhecimento">{label("Como tomou conhecimento da situação?")}</label>
                      <input id="ce-conhecimento" data-testid="canal-conhecimento-input" className={inputCls} value={data.conhecimento} onChange={(e) => set("conhecimento", e.target.value)} placeholder="Ex.: presenciei, ouvi de terceiros…" />
                    </div>
                  </fieldset>
                )}

                {step === 4 && (
                  <fieldset>
                    <legend className="font-display text-xl font-bold text-slate-50 md:text-2xl">
                      Evidências de apoio
                    </legend>
                    <p className="mt-3 text-sm text-slate-400">
                      Anexe documentos, imagens ou outras evidências que ajudem a compreender a
                      situação. Nesta demonstração, os arquivos são apenas listados — nenhum envio
                      ou armazenamento é realizado.
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      Exemplos de formatos aceitos: PDF, DOCX, JPG, PNG, XLSX.
                    </p>
                    <label
                      htmlFor="ce-arquivos"
                      data-testid="canal-arquivos-dropzone"
                      className="mt-6 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/20 bg-slate-900/40 px-6 py-12 text-center transition-[border-color,background-color] duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/5"
                    >
                      <Paperclip className="h-7 w-7 text-emerald-400" />
                      <span className="text-sm font-medium text-slate-200">
                        Clique para simular a seleção de arquivos
                      </span>
                      <span className="text-xs text-slate-500">Nenhum arquivo será enviado</span>
                    </label>
                    <input
                      id="ce-arquivos"
                      type="file"
                      multiple
                      className="sr-only"
                      data-testid="canal-arquivos-input"
                      onChange={(e) =>
                        set("arquivos", [...data.arquivos, ...Array.from(e.target.files).map((f) => f.name)])
                      }
                    />
                    {data.arquivos.length > 0 && (
                      <ul className="mt-4 space-y-2" data-testid="canal-arquivos-lista">
                        {data.arquivos.map((a, i) => (
                          <li key={`${a}-${i}`} className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-300">
                            <span className="flex items-center gap-2">
                              <Paperclip className="h-3.5 w-3.5 text-slate-500" />
                              {a}
                            </span>
                            <button
                              type="button"
                              aria-label={`Remover arquivo ${a}`}
                              onClick={() => set("arquivos", data.arquivos.filter((_, j) => j !== i))}
                              className="text-slate-500 transition-colors hover:text-red-400"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/5 px-5 py-4 text-xs leading-relaxed text-slate-300">
                      Aviso de privacidade: não inclua dados pessoais desnecessários nos arquivos.
                      Nesta versão de demonstração, nenhum conteúdo é transmitido ou armazenado.
                    </p>
                  </fieldset>
                )}

                {step === 5 && (
                  <fieldset>
                    <legend className="font-display text-xl font-bold text-slate-50 md:text-2xl">
                      Revise as informações antes de concluir
                    </legend>
                    <dl className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-slate-900/40 p-6 text-sm" data-testid="revisao-resumo">
                      {[
                        ["Forma do relato", data.modo],
                        ...(data.modo === "De forma identificada"
                          ? [["Nome", data.nome], ["E-mail", data.email], ["Telefone", data.telefone || "—"], ["Preferência de contato", data.prefContato]]
                          : []),
                        ["Relação com a AFRICON", data.relacao],
                        ["Tipo de relato", data.tipo],
                        ["Título", data.titulo],
                        ["Descrição", data.descricao],
                        ["Data aproximada", data.data || "—"],
                        ["Local ou área", data.local || "—"],
                        ["Pessoas ou áreas envolvidas", data.envolvidos || "—"],
                        ["O fato continua acontecendo?", data.continua],
                        ["Já foi comunicado?", data.comunicado],
                        ["Como tomou conhecimento", data.conhecimento || "—"],
                        ["Arquivos anexados", data.arquivos.length ? data.arquivos.join(", ") : "Nenhum"],
                      ].map(([k, v]) => (
                        <div key={k} className="grid gap-1 border-b border-white/5 pb-3 sm:grid-cols-3">
                          <dt className="font-semibold text-slate-400">{k}</dt>
                          <dd className="text-slate-200 sm:col-span-2">{v}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-6 space-y-3">
                      {[
                        { k: "c1", t: "Confirmo que as informações foram fornecidas de boa-fé." },
                        { k: "c2", t: "Estou ciente do aviso de privacidade." },
                        { k: "c3", t: "Compreendo que esta versão é apenas uma demonstração do frontend." },
                      ].map((c) => (
                        <div key={c.k}>
                          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-slate-900/40 px-5 py-4 text-sm text-slate-300 transition-[border-color] duration-200 hover:border-white/25">
                            <input
                              type="checkbox"
                              data-testid={`canal-check-${c.k}`}
                              checked={data[c.k]}
                              onChange={(e) => set(c.k, e.target.checked)}
                              className="mt-0.5 h-4 w-4 accent-emerald-400"
                            />
                            {c.t}
                          </label>
                          <FieldError msg={errors[c.k]} />
                        </div>
                      ))}
                    </div>
                  </fieldset>
                )}

                <div className="mt-10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    data-testid="canal-voltar-button"
                    className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-[border-color,opacity] duration-300 hover:border-white/40 disabled:opacity-30"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Voltar
                  </button>

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={next}
                      disabled={!isStepValid(step)}
                      data-testid="canal-avancar-button"
                      className="group flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3 text-sm font-bold text-slate-950 transition-[transform,box-shadow,opacity] duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(52,211,153,0.4)] disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-none"
                    >
                      Avançar
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={submit}
                      disabled={!isStepValid(5)}
                      data-testid="canal-enviar-button"
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-7 py-3 text-sm font-bold text-slate-950 transition-[transform,box-shadow,opacity] duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(52,211,153,0.4)] disabled:opacity-40 disabled:hover:scale-100"
                    >
                      <ShieldCheck className="h-4 w-4" />
                      Simular envio do relato
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </form>
        </div>
      </section>
    </main>
  );
}
