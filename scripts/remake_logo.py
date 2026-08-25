import cairosvg
from PIL import Image
import io

# Logo AFRICON com tagline - ajustado para texto completo
logo_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1060 200" width="1060" height="200">
  <defs>
    <linearGradient id="tagGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <text x="40" y="96" font-family="Arial Black, Helvetica, sans-serif" font-weight="900" font-size="92" letter-spacing="0">
    <tspan fill="#f8fafc">AFRI</tspan><tspan fill="#34d399">CON</tspan>
  </text>
  <text x="42" y="160" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="30" fill="url(#tagGrad)">Para uma Gestão Pública mais Eficiente, Transparente e Inclusiva.</text>
</svg>'''

logo_dark_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1060 200" width="1060" height="200">
  <defs>
    <linearGradient id="tagGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="1060" height="200" fill="#020617"/>
  <text x="40" y="96" font-family="Arial Black, Helvetica, sans-serif" font-weight="900" font-size="92" letter-spacing="0">
    <tspan fill="#f8fafc">AFRI</tspan><tspan fill="#34d399">CON</tspan>
  </text>
  <text x="42" y="160" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="30" fill="url(#tagGrad)">Para uma Gestão Pública mais Eficiente, Transparente e Inclusiva.</text>
</svg>'''

# 1. SVG transparente
with open("/app/africon_logo.svg", "w") as f:
    f.write(logo_svg)
print("OK: africon_logo.svg")

# 2. PNG fundo escuro (2x para alta resolução)
cairosvg.svg2png(bytestring=logo_dark_svg.encode(), write_to="/app/africon_logo_dark.png", output_width=2120, output_height=400)
print("OK: africon_logo_dark.png (2120x400)")

# 3. PNG transparente
cairosvg.svg2png(bytestring=logo_svg.encode(), write_to="/app/africon_logo.png", output_width=2120, output_height=400)
print("OK: africon_logo.png (2120x400, transparente)")

# 4. Trimmed
png_data = cairosvg.svg2png(bytestring=logo_dark_svg.encode(), output_width=2120, output_height=400)
img = Image.open(io.BytesIO(png_data))
bbox = img.getbbox()
if bbox:
    cropped = img.crop(bbox)
    cropped.save("/app/africon_logo_trimmed.png")
    print(f"OK: africon_logo_trimmed.png ({cropped.size[0]}x{cropped.size[1]})")

print("\nLogo refeito com sucesso!")
