import cairosvg

GRID = '<path d="M{x} 0 V{h}" stroke="#94a3b8" stroke-opacity="0.05" stroke-width="1"/>'
GRIDH = '<path d="M0 {y} H{w}" stroke="#94a3b8" stroke-opacity="0.05" stroke-width="1"/>'

def grid(w, h, cell=144):
    parts = [GRID.format(x=x, h=h) for x in range(cell, w, cell)]
    parts += [GRIDH.format(y=y, w=w) for y in range(cell, h, cell)]
    return "".join(parts)

# ---------- 1. LOGO QUADRADO (foto de perfil LinkedIn) 1200x1200 ----------
logo_sq = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200">
  <defs>
    <radialGradient id="glowE" cx="50%" cy="42%" r="55%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowC" cx="72%" cy="78%" r="45%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#22d3ee" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="brand" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="1200" fill="#020617"/>
  {grid(1200, 1200, 150)}
  <rect width="1200" height="1200" fill="url(#glowE)"/>
  <rect width="1200" height="1200" fill="url(#glowC)"/>
  <text x="290" y="612" font-family="Arial Black, Helvetica, sans-serif" font-weight="900" font-size="152"><tspan fill="#f8fafc">AFRI</tspan><tspan fill="#34d399">CON</tspan></text>
  <rect x="440" y="656" width="320" height="4" rx="2" fill="url(#brand)"/>
  <text x="462" y="722" font-family="Courier New, monospace" font-weight="700" font-size="34" letter-spacing="24" fill="#94a3b8">GOVTECH</text>
</svg>'''

# ---------- 2. CAPA PAGINA EMPRESA 1128x191 (gerada em 2x: 2256x382) ----------
W, H = 2256, 382
capa = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <defs>
    <radialGradient id="gE" cx="88%" cy="30%" r="45%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.13"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="gC" cx="35%" cy="110%" r="40%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#22d3ee" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="br" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="{W}" height="{H}" fill="#020617"/>
  {grid(W, H, 144)}
  <rect width="{W}" height="{H}" fill="url(#gE)"/>
  <rect width="{W}" height="{H}" fill="url(#gC)"/>
  <text x="560" y="172" font-family="Arial Black, Helvetica, sans-serif" font-weight="900" font-size="104"><tspan fill="#f8fafc">AFRI</tspan><tspan fill="#34d399">CON</tspan></text>
  <text x="565" y="222" font-family="Courier New, monospace" font-weight="700" font-size="24" letter-spacing="16" fill="#94a3b8">GOVTECH</text>
  <rect x="1220" y="96" width="4" height="190" rx="2" fill="url(#br)"/>
  <text x="1280" y="150" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="46" fill="#f8fafc">Inteligência de dados para o setor público</text>
  <text x="1280" y="212" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="30" fill="#94a3b8">Tecnologia, transparência e governança para gestões municipais</text>
  <text x="1280" y="278" font-family="Courier New, monospace" font-weight="700" font-size="24" letter-spacing="6"><tspan fill="#34d399">E-QUIDADE</tspan><tspan fill="#64748b"> · </tspan><tspan fill="#22d3ee">XGOVCONTROL IEG-M</tspan><tspan fill="#64748b"> · </tspan><tspan fill="#94a3b8">CANAL DE ÉTICA</tspan></text>
</svg>'''

# ---------- 3. CAPA PERFIL PESSOAL 1584x396 ----------
W2, H2 = 1584, 396
capa_p = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W2}" height="{H2}" viewBox="0 0 {W2} {H2}">
  <defs>
    <radialGradient id="gE2" cx="85%" cy="25%" r="50%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.13"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="gC2" cx="25%" cy="115%" r="45%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#22d3ee" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="br2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="{W2}" height="{H2}" fill="#020617"/>
  {grid(W2, H2, 132)}
  <rect width="{W2}" height="{H2}" fill="url(#gE2)"/>
  <rect width="{W2}" height="{H2}" fill="url(#gC2)"/>
  <text x="615" y="160" font-family="Arial Black, Helvetica, sans-serif" font-weight="900" font-size="88"><tspan fill="#f8fafc">AFRI</tspan><tspan fill="#34d399">CON</tspan></text>
  <text x="708" y="204" font-family="Courier New, monospace" font-weight="700" font-size="21" letter-spacing="14" fill="#94a3b8">GOVTECH</text>
  <rect x="672" y="232" width="240" height="3" rx="1.5" fill="url(#br2)"/>
  <text x="792" y="286" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="27" fill="#94a3b8">Inteligência de dados para o setor público</text>
</svg>'''

for name, svg in [("linkedin_logo_1200", logo_sq), ("linkedin_capa_empresa_2256x382", capa), ("linkedin_capa_perfil_1584x396", capa_p)]:
    cairosvg.svg2png(bytestring=svg.encode(), write_to=f"/app/africon_{name}.png")
    print("ok", name)
