import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal, Overline } from "@/components/Reveal";

const initial = { nome: "", email: "", orgao: "", interesse: "", mensagem: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      toast.success("Demonstração solicitada!", {
        description: "Nossa equipe entrará em contato em breve. (demonstração visual)",
      });
      setForm(initial);
      setTimeout(() => setSent(false), 4000);
    }, 900);
  };

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-slate-900/60 px-5 py-4 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-[border-color,box-shadow] duration-300 focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)]";

  return (
    <section id="contato" data-testid="contact-section" className="relative py-28 lg:py-36">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Overline accent="cyan">Contato</Overline>
            <h2 className="font-display mt-6 text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
              Pronto para modernizar a sua gestão?
            </h2>
            <p className="mt-6 leading-relaxed text-slate-400 md:text-lg">
              Solicite uma demonstração e veja como o E-Quidade e o XGovControl-IEG-M podem
              transformar os dados do seu município em melhores decisões públicas.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Demonstração guiada por especialistas GovTech",
                "Diagnóstico inicial dos indicadores do município",
                "Sem compromisso — conheça antes de decidir",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm md:text-base">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <motion.form
              onSubmit={submit}
              data-testid="demo-form"
              className="glass rounded-3xl p-8 md:p-10"
              whileHover={{ borderColor: "rgba(52,211,153,0.25)" }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="demo-nome" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Nome completo
                  </label>
                  <input
                    id="demo-nome"
                    data-testid="demo-form-name-input"
                    required
                    value={form.nome}
                    onChange={set("nome")}
                    placeholder="Maria Silva"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="demo-email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    E-mail institucional
                  </label>
                  <input
                    id="demo-email"
                    data-testid="demo-form-email-input"
                    type="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    placeholder="maria@prefeitura.gov.br"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="demo-orgao" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Órgão / Município
                  </label>
                  <input
                    id="demo-orgao"
                    data-testid="demo-form-org-input"
                    required
                    value={form.orgao}
                    onChange={set("orgao")}
                    placeholder="Prefeitura de…"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="demo-interesse" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Solução de interesse
                  </label>
                  <select
                    id="demo-interesse"
                    data-testid="demo-form-interest-select"
                    required
                    value={form.interesse}
                    onChange={set("interesse")}
                    className={`${inputCls} appearance-none ${form.interesse ? "" : "text-slate-500"}`}
                  >
                    <option value="" disabled>
                      Selecione…
                    </option>
                    <option value="e-quidade">E-Quidade (Educação)</option>
                    <option value="xgovcontrol">XGovControl-IEG-M (Gestão)</option>
                    <option value="ambos">Ambas as soluções</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="demo-mensagem" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Mensagem
                  </label>
                  <textarea
                    id="demo-mensagem"
                    data-testid="demo-form-message-input"
                    rows={4}
                    value={form.mensagem}
                    onChange={set("mensagem")}
                    placeholder="Conte um pouco sobre o cenário do seu município…"
                    className={`${inputCls} resize-none`}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                data-testid="demo-form-submit-button"
                disabled={sending}
                whileTap={{ scale: 0.97 }}
                className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-4 text-base font-bold text-slate-950 transition-[box-shadow,transform,opacity] duration-300 hover:scale-[1.01] hover:shadow-[0_0_44px_rgba(52,211,153,0.45)] disabled:opacity-60"
              >
                {sending ? (
                  "Enviando…"
                ) : sent ? (
                  <>
                    Solicitação enviada <CheckCircle2 className="h-5 w-5" />
                  </>
                ) : (
                  <>
                    Solicite uma demonstração
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
