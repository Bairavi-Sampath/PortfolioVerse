"""
Generate dark + amber project thumbnail images for the portfolio.
Outputs 800x500 PNG files matching the black/amber theme.
"""
import math
import os
from PIL import Image, ImageDraw, ImageFont

OUT_DIR = r"f:\bairavi_portfolio\public\assets\aistudio\projects_image_demo"
W, H = 800, 500

# ─── Colour palette ───────────────────────────────────────────────────────────
BG       = (7,   7,   9)      # #070709
CARD     = (11,  11,  14)     # #0B0B0E
SURFACE  = (18,  18,  22)     # #121216
BORDER   = (40,  32,  12)     # subtle amber border
AMBER    = (245, 158,  11)    # #F59E0B
AMBER_DIM= (100,  65,   5)    # dimmed amber for grid/bg elements
WHITE    = (255, 255, 255)
GRAY     = (140, 140, 150)
DARK_GRAY= (55,  55,  65)
RED_DIM  = (90,  25,  25)
GREEN_DIM= (20,  70,  30)

def new_canvas():
    img = Image.new("RGB", (W, H), BG)
    d   = ImageDraw.Draw(img, "RGBA")
    return img, d

def dot_grid(d, step=24, color=(245, 158, 11, 18)):
    for x in range(0, W, step):
        for y in range(0, H, step):
            d.ellipse([x-1, y-1, x+1, y+1], fill=color)

def amber_glow(img, cx, cy, radius=180, intensity=35):
    """Soft amber radial glow via repeated translucent circles."""
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd   = ImageDraw.Draw(glow)
    for r in range(radius, 0, -4):
        alpha = int(intensity * (r / radius) ** 2)
        gd.ellipse([cx-r, cy-r, cx+r, cy+r],
                   fill=(245, 158, 11, alpha))
    img.paste(Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB"))

def rounded_rect(d, x0, y0, x1, y1, r=8, fill=None, outline=None, width=1):
    d.rounded_rectangle([x0, y0, x1, y1], radius=r, fill=fill, outline=outline, width=width)

def try_font(size, bold=False):
    try:
        name = "arialbd.ttf" if bold else "arial.ttf"
        return ImageFont.truetype(name, size)
    except Exception:
        return ImageFont.load_default()

# ═══════════════════════════════════════════════════════════════════════════════
# IMAGE 1 — ICU Video Conference System
# ═══════════════════════════════════════════════════════════════════════════════
def make_icu():
    img, d = new_canvas()
    dot_grid(d)
    amber_glow(img, W//2, H//2, radius=260, intensity=22)

    # ── Top label bar ──
    rounded_rect(d, 20, 16, 240, 46, r=22,
                 fill=(35, 28, 8, 220), outline=AMBER, width=1)
    d.text((36, 23), "HEALTHCARE / FULL STACK", fill=AMBER,
           font=try_font(11, bold=True))

    # ── Left panel: video call mockup ──────────────────────────────────────────
    # Main video window (family side)
    rounded_rect(d, 32, 68, 370, 310, r=12,
                 fill=SURFACE, outline=(60, 48, 15), width=1)
    # Header strip
    rounded_rect(d, 32, 68, 370, 96, r=12, fill=(22, 18, 6))
    d.text((48, 76), "●  Live Visit — ICU Room 4", fill=AMBER, font=try_font(12, bold=True))
    # Family participant (left)
    rounded_rect(d, 44, 108, 190, 220, r=8, fill=(16, 16, 20))
    # Silhouette — head
    d.ellipse([97, 118, 137, 158], fill=DARK_GRAY)
    # Silhouette — shoulders
    d.ellipse([72, 170, 162, 230], fill=DARK_GRAY)
    d.text((70, 226), "Family", fill=GRAY, font=try_font(11))
    # Patient participant (right)
    rounded_rect(d, 200, 108, 356, 220, r=8, fill=(16, 16, 20))
    d.ellipse([253, 118, 293, 158], fill=DARK_GRAY)
    d.ellipse([228, 170, 318, 230], fill=DARK_GRAY)
    d.text((248, 226), "Patient", fill=GRAY, font=try_font(11))
    # Controls bar
    rounded_rect(d, 44, 238, 356, 262, r=6, fill=(14, 14, 18))
    for cx, label in [(80, "🎤"), (140, "📷"), (200, "📞"), (260, "💬"), (320, "⚙")]:
        d.ellipse([cx-14, 243, cx+14, 263], fill=DARK_GRAY)
        d.text((cx-6, 246), label, fill=GRAY, font=try_font(12))
    # Nurse note mini panel
    rounded_rect(d, 44, 276, 356, 302, r=6, fill=(14, 14, 18))
    d.text((52, 282), "Nurse Note: Stable vitals. Next visit: 14:30", fill=GRAY, font=try_font(11))

    # ── Right panel: patient monitoring dashboard ──────────────────────────────
    rounded_rect(d, 390, 68, 775, 310, r=12,
                 fill=SURFACE, outline=(60, 48, 15), width=1)
    rounded_rect(d, 390, 68, 775, 96, r=12, fill=(22, 18, 6))
    d.text((406, 76), "Patient Monitor — Clinical Dashboard", fill=AMBER, font=try_font(12, bold=True))

    # Vitals row
    vitals = [
        ("HR", "82", "bpm", (40, 200, 90)),
        ("SpO₂", "97", "%", (60, 150, 220)),
        ("BP", "118/76", "mmHg", (200, 140, 40)),
        ("Temp", "36.8", "°C", (180, 80, 40)),
    ]
    for i, (name, val, unit, col) in enumerate(vitals):
        bx = 402 + i * 94
        rounded_rect(d, bx, 104, bx+86, 150, r=6, fill=(16, 16, 20))
        d.text((bx+6, 110), name, fill=GRAY, font=try_font(10))
        d.text((bx+6, 124), val, fill=col, font=try_font(16, bold=True))
        d.text((bx+6, 143), unit, fill=DARK_GRAY, font=try_font(9))

    # ECG waveform strip
    rounded_rect(d, 402, 160, 762, 220, r=6, fill=(12, 12, 16))
    d.text((410, 165), "ECG — Heart Rate Waveform", fill=GRAY, font=try_font(10))
    # Draw stylised ECG line
    pts = []
    xs = list(range(410, 758, 3))
    for i, x in enumerate(xs):
        t = i / len(xs)
        cycle = t * 6
        frac  = cycle - int(cycle)
        if   0.30 < frac < 0.35:  y = 205 - 38  # P-wave
        elif 0.42 < frac < 0.44:  y = 205 - 60  # QRS up
        elif 0.44 < frac < 0.46:  y = 205 + 10  # QRS down
        elif 0.46 < frac < 0.49:  y = 205 - 45  # QRS peak
        elif 0.49 < frac < 0.52:  y = 205        # back to baseline
        elif 0.60 < frac < 0.70:  y = 205 - 20  # T-wave
        else:                      y = 205
        pts.append((x, y))
    d.line(pts, fill=(40, 220, 100), width=2)

    # Notes log
    rounded_rect(d, 402, 230, 762, 302, r=6, fill=(12, 12, 16))
    d.text((410, 236), "Clinical Notes Log", fill=AMBER, font=try_font(11, bold=True))
    for i, note in enumerate([
        "10:15  Nurse A — Vitals stable; patient responsive",
        "11:00  Family visit scheduled via portal",
        "12:30  Medication administered — no adverse reaction",
    ]):
        d.text((410, 254 + i*16), f"•  {note}", fill=GRAY, font=try_font(10))

    # ── Bottom status bar ──────────────────────────────────────────────────────
    rounded_rect(d, 32, 326, 775, 356, r=8, fill=CARD, outline=(40, 32, 12), width=1)
    statuses = [
        ("●  VIDEO ACTIVE", AMBER),
        ("⬛  3 PARTICIPANTS", GRAY),
        ("⬛  SESSION: 00:14:32", GRAY),
        ("⬛  NEON DB SYNCED", (60, 180, 90)),
    ]
    sx = 50
    for label, col in statuses:
        d.text((sx, 335), label, fill=col, font=try_font(11))
        sx += 185

    # ── Stack labels bottom ────────────────────────────────────────────────────
    tags = ["React", "Next.js", "Talky.io", "Neon PostgreSQL"]
    tx = 32
    for tag in tags:
        tw = len(tag) * 7 + 16
        rounded_rect(d, tx, 370, tx+tw, 392, r=10,
                     fill=(20, 16, 4), outline=AMBER, width=1)
        d.text((tx+8, 376), tag, fill=AMBER, font=try_font(10))
        tx += tw + 10

    img.save(os.path.join(OUT_DIR, "ICU_Video_Conference.png"))
    print("✓ ICU_Video_Conference.png saved")


# ═══════════════════════════════════════════════════════════════════════════════
# IMAGE 2 — Elevator A-FDIR Fault Detection
# ═══════════════════════════════════════════════════════════════════════════════
def make_elevator():
    img, d = new_canvas()
    dot_grid(d)
    amber_glow(img, 160, 250, radius=200, intensity=25)
    amber_glow(img, 640, 250, radius=160, intensity=18)

    # Title badge
    rounded_rect(d, 20, 16, 310, 46, r=22,
                 fill=(35, 28, 8, 220), outline=AMBER, width=1)
    d.text((36, 23), "IoT / AI & ML / EMBEDDED SYSTEMS", fill=AMBER,
           font=try_font(11, bold=True))

    # ── Left: Elevator shaft diagram ──────────────────────────────────────────
    # Shaft outline
    rounded_rect(d, 32, 68, 240, 400, r=10, fill=SURFACE, outline=(60, 48, 15), width=1)
    d.text((60, 78), "ELEVATOR SHAFT", fill=AMBER, font=try_font(10, bold=True))
    # Rail lines
    d.line([(80, 100), (80, 380)], fill=DARK_GRAY, width=3)
    d.line([(192, 100), (192, 380)], fill=DARK_GRAY, width=3)
    # Guide notches
    for y in range(110, 380, 30):
        d.line([(77, y), (83, y)], fill=DARK_GRAY, width=1)
        d.line([(189, y), (195, y)], fill=DARK_GRAY, width=1)
    # Elevator car (highlighted amber)
    rounded_rect(d, 86, 180, 186, 280, r=6, fill=(30, 24, 6), outline=AMBER, width=2)
    # Door lines
    d.line([(136, 185), (136, 275)], fill=AMBER_DIM, width=1)
    d.text((98, 222), "CAB", fill=AMBER, font=try_font(14, bold=True))
    # Cable above car
    d.line([(136, 100), (136, 180)], fill=GRAY, width=2)
    # Sensor chips on shaft
    sensor_positions = [(58, 128), (196, 190), (58, 300)]
    sensor_names = ["DS18B20", "INA219", "SW-420"]
    for (sx, sy), sn in zip(sensor_positions, sensor_names):
        rounded_rect(d, sx-6, sy-6, sx+6, sy+6, r=2, fill=DARK_GRAY, outline=AMBER_DIM)
        d.text((sx-3, sy-4), "IC", fill=AMBER, font=try_font(7))
    # Fault indicator
    rounded_rect(d, 50, 322, 222, 350, r=6, fill=(50, 15, 15), outline=(200, 60, 60), width=1)
    d.text((62, 330), "⚠  VIBRATION ANOMALY", fill=(240, 80, 80), font=try_font(11, bold=True))

    # ── Middle: Sensor waveform charts ────────────────────────────────────────
    chart_specs = [
        # (label,  y_top, wave_col, wave_type)
        ("Temperature (°C) — DS18B20",  80,  (245, 158, 11), "temp"),
        ("Vibration (g) — SW-420",      182, (220, 100, 60), "vib"),
        ("Current (A) — INA219",        284, (80, 180, 220), "curr"),
    ]
    for label, yt, col, wtype in chart_specs:
        rounded_rect(d, 258, yt, 575, yt+88, r=8, fill=(12, 12, 16), outline=DARK_GRAY, width=1)
        d.text((268, yt+8), label, fill=GRAY, font=try_font(10))
        # Draw waveform
        pts = []
        for i, x in enumerate(range(268, 568, 2)):
            t = i / 150
            if wtype == "temp":
                y = yt + 50 + math.sin(t*4)*8 + math.sin(t*1.2)*4
            elif wtype == "vib":
                # spike in the middle
                spike = 25 * math.exp(-((t-0.5)**2)/0.005) if 0.3 < t < 0.7 else 0
                y = yt + 55 - spike + math.sin(t*20)*3
            else:  # current
                y = yt + 52 + math.sin(t*6)*7 + math.sin(t*2.5)*3
            pts.append((x, y))
        d.line(pts, fill=col, width=2)
        # Axis lines
        d.line([(268, yt+70), (568, yt+70)], fill=DARK_GRAY, width=1)

    # ML model label
    rounded_rect(d, 258, 384, 575, 440, r=8, fill=(16, 14, 4), outline=AMBER_DIM, width=1)
    d.text((270, 392), "ML Models Active", fill=AMBER, font=try_font(11, bold=True))
    d.text((270, 410), "Isolation Forest  →  Anomaly Score: 0.87 (ANOMALY)", fill=(220, 80, 80), font=try_font(10))
    d.text((270, 426), "Random Forest     →  Fault Class: VIBRATION FAULT", fill=AMBER, font=try_font(10))

    # ── Right: RCA + maintenance recommendations ──────────────────────────────
    rounded_rect(d, 592, 68, 775, 440, r=10, fill=SURFACE, outline=(60, 48, 15), width=1)
    d.text((604, 80), "RCA REPORT", fill=AMBER, font=try_font(11, bold=True))
    # Fault severity gauge (arc)
    d.arc([618, 100, 758, 185], start=180, end=180+int(0.87*180),
          fill=(220, 80, 80), width=10)
    d.arc([618, 100, 758, 185], start=180+int(0.87*180), end=360,
          fill=DARK_GRAY, width=10)
    d.text((660, 155), "87%", fill=(220, 80, 80), font=try_font(14, bold=True))
    d.text((645, 174), "Anomaly Score", fill=GRAY, font=try_font(9))

    recommendations = [
        "Root Cause:", "Excessive cable vibration",
        "near upper guide rail.",
        "", "Actions:", "→ Inspect guide roller bearings",
        "→ Check cable tension",
        "→ Lubricate rail surfaces",
        "→ Schedule maintenance",
    ]
    ry = 200
    for line in recommendations:
        col = AMBER if line.endswith(":") else (GRAY if line.startswith("→") else WHITE)
        d.text((604, ry), line, fill=col, font=try_font(10, bold=line.endswith(":")))
        ry += 15

    # ESP32 badge
    rounded_rect(d, 604, 390, 764, 414, r=6, fill=(14, 12, 4), outline=AMBER_DIM, width=1)
    d.text((615, 397), "ESP32 WebSocket → FastAPI", fill=AMBER, font=try_font(10))

    # Status bar
    rounded_rect(d, 32, 452, 775, 480, r=8, fill=CARD, outline=(40, 32, 12), width=1)
    d.text((50,  461), "●  LIVE STREAMING", fill=AMBER, font=try_font(11))
    d.text((230, 461), "⬛  4 SENSORS ACTIVE", fill=GRAY,  font=try_font(11))
    d.text((440, 461), "⬛  FAULT: VIBRATION CLASS 2", fill=(220, 80, 80), font=try_font(11))

    img.save(os.path.join(OUT_DIR, "Elevator_AFDIR.png"))
    print("✓ Elevator_AFDIR.png saved")


# ═══════════════════════════════════════════════════════════════════════════════
# IMAGE 3 — Mushroom Classification Model
# ═══════════════════════════════════════════════════════════════════════════════
def make_mushroom():
    img, d = new_canvas()
    dot_grid(d)
    amber_glow(img, W//2, H//2, radius=250, intensity=18)

    # Title badge
    rounded_rect(d, 20, 16, 240, 46, r=22,
                 fill=(35, 28, 8, 220), outline=AMBER, width=1)
    d.text((36, 23), "AI / MACHINE LEARNING", fill=AMBER,
           font=try_font(11, bold=True))

    # ── Left: Random Forest tree visualisation ─────────────────────────────────
    rounded_rect(d, 32, 68, 320, 420, r=10, fill=SURFACE, outline=(60, 48, 15), width=1)
    d.text((60, 80), "RANDOM FOREST MODEL", fill=AMBER, font=try_font(11, bold=True))

    def tree_node(d, x, y, label="", leaf=False, edible=None):
        if leaf:
            col = GREEN_DIM if edible else RED_DIM
            border = (40, 170, 60) if edible else (200, 50, 50)
            lbl_col = (60, 220, 80) if edible else (220, 70, 70)
        else:
            col = (20, 18, 8)
            border = AMBER_DIM
            lbl_col = AMBER
        rounded_rect(d, x-28, y-14, x+28, y+14, r=6, fill=col, outline=border, width=1)
        if label:
            d.text((x-24, y-7), label, fill=lbl_col, font=try_font(9))

    def edge(d, x1, y1, x2, y2):
        d.line([(x1, y1+14), (x2, y2-14)], fill=DARK_GRAY, width=1)

    # Tree 1 (left)
    nodes = [
        # (x, y, label, leaf, edible)
        (100, 118, "odor?", False, None),
        (60,  168, "size?", False, None),
        (140, 168, "color?", False, None),
        (40,  218, "EDIBLE", True,  True),
        (80,  218, "TOXIC", True,  False),
        (120, 218, "EDIBLE", True,  True),
        (160, 218, "TOXIC", True,  False),
    ]
    edges = [(0,1),(0,2),(1,3),(1,4),(2,5),(2,6)]
    for (p, c) in edges:
        edge(d, nodes[p][0], nodes[p][1], nodes[c][0], nodes[c][1])
    for x, y, lbl, leaf, edible in nodes:
        tree_node(d, x, y, lbl, leaf, edible)

    # Tree 2 (right)
    nodes2 = [
        (230, 118, "gill?", False, None),
        (195, 168, "ring?", False, None),
        (265, 168, "spore?", False, None),
        (175, 218, "TOXIC", True, False),
        (215, 218, "EDIBLE", True, True),
        (250, 218, "EDIBLE", True, True),
        (285, 218, "TOXIC", True, False),
    ]
    for (p, c) in edges:
        edge(d, nodes2[p][0], nodes2[p][1], nodes2[c][0], nodes2[c][1])
    for x, y, lbl, leaf, edible in nodes2:
        tree_node(d, x, y, lbl, leaf, edible)

    # Voting arrow + result
    d.text((75, 248), "Ensemble Vote:", fill=GRAY, font=try_font(10))
    rounded_rect(d, 100, 265, 240, 292, r=6, fill=(10, 50, 15), outline=(40, 170, 60), width=2)
    d.text((110, 272), "✓  EDIBLE  (95% conf.)", fill=(60, 220, 80), font=try_font(11, bold=True))

    # Accuracy metric
    rounded_rect(d, 44, 308, 300, 358, r=6, fill=(14, 14, 18), outline=AMBER_DIM, width=1)
    d.text((54, 316), "Model Accuracy", fill=GRAY, font=try_font(10))
    d.text((54, 332), "~95%", fill=AMBER, font=try_font(18, bold=True))
    d.text((130, 340), "Zero lethal false-negatives", fill=GRAY, font=try_font(10))

    # Faint mushroom silhouettes bottom-left
    for mx, my, r in [(55, 395, 20), (100, 390, 16), (145, 397, 18)]:
        # Cap
        d.ellipse([mx-r, my-r, mx+r, my], fill=(25, 20, 8))
        # Stem
        d.rectangle([mx-r//3, my, mx+r//3, my+r], fill=(22, 18, 6))

    # ── Middle: Confusion Matrix ───────────────────────────────────────────────
    rounded_rect(d, 338, 68, 560, 300, r=10, fill=SURFACE, outline=(60, 48, 15), width=1)
    d.text((356, 80), "Confusion Matrix", fill=AMBER, font=try_font(11, bold=True))

    cm_values = [[("TP", 4208, GREEN_DIM), ("FP", 48, RED_DIM)],
                 [("FN",    0, (20,20,20)), ("TN", 3916, GREEN_DIM)]]
    cm_labels_top = ["Pred Edible", "Pred Toxic"]
    cm_labels_left = ["Act Edible", "Act Toxic"]

    d.text((405, 100), cm_labels_top[0], fill=GRAY, font=try_font(9))
    d.text((490, 100), cm_labels_top[1], fill=GRAY, font=try_font(9))
    for ri, row in enumerate(cm_values):
        d.text((340, 134 + ri*76), cm_labels_left[ri], fill=GRAY, font=try_font(9))
        for ci, (abbr, val, bg_col) in enumerate(row):
            x0 = 400 + ci*76
            y0 = 118 + ri*76
            rounded_rect(d, x0, y0, x0+68, y0+68, r=6, fill=bg_col, outline=DARK_GRAY, width=1)
            d.text((x0+6, y0+8), abbr, fill=AMBER, font=try_font(10, bold=True))
            d.text((x0+6, y0+28), str(val), fill=WHITE, font=try_font(14, bold=True))

    # Metrics strip below matrix
    rounded_rect(d, 338, 310, 560, 420, r=8, fill=(14, 14, 18), outline=DARK_GRAY, width=1)
    for i, (metric, val) in enumerate([
        ("Precision", "0.9887"),
        ("Recall",    "1.0000"),
        ("F1-Score",  "0.9943"),
        ("Accuracy",  "0.9530"),
    ]):
        mx2 = 350 + (i % 2) * 108
        my2 = 320 + (i // 2) * 48
        d.text((mx2, my2), metric, fill=GRAY, font=try_font(9))
        d.text((mx2, my2+14), val, fill=AMBER, font=try_font(14, bold=True))

    # ── Right: ROC curve + feature importance ─────────────────────────────────
    rounded_rect(d, 578, 68, 775, 300, r=10, fill=SURFACE, outline=(60, 48, 15), width=1)
    d.text((590, 80), "ROC Curve", fill=AMBER, font=try_font(11, bold=True))
    # Axes
    d.line([(594, 100), (594, 240)], fill=DARK_GRAY, width=1)
    d.line([(594, 240), (762, 240)], fill=DARK_GRAY, width=1)
    d.text((596, 243), "FPR →", fill=DARK_GRAY, font=try_font(8))
    # Diagonal (random classifier)
    d.line([(594, 240), (762, 100)], fill=DARK_GRAY, width=1)
    # ROC curve (near-perfect)
    roc_pts = [(594, 240)]
    for i in range(1, 50):
        t   = i / 50
        fpr = t ** 4
        tpr = 1 - (1-t) ** 0.1
        roc_pts.append((int(594 + fpr*168), int(240 - tpr*140)))
    roc_pts.append((762, 100))
    d.line(roc_pts, fill=AMBER, width=2)
    d.text((604, 110), "AUC ≈ 0.999", fill=AMBER, font=try_font(10, bold=True))

    # Feature importance bar chart
    rounded_rect(d, 578, 310, 775, 420, r=8, fill=(14, 14, 18), outline=DARK_GRAY, width=1)
    d.text((590, 318), "Feature Importance", fill=AMBER, font=try_font(10, bold=True))
    features = [("odor", 0.35), ("spore", 0.22), ("gill", 0.18), ("ring", 0.14)]
    for i, (fname, fval) in enumerate(features):
        fy = 334 + i*20
        bar_w = int(fval * 160)
        rounded_rect(d, 590, fy, 590+bar_w, fy+14, r=4, fill=AMBER_DIM)
        d.text((596, fy+2), fname, fill=AMBER, font=try_font(9))
        d.text((590+bar_w+4, fy+2), f"{int(fval*100)}%", fill=GRAY, font=try_font(9))

    # Status bar
    rounded_rect(d, 32, 432, 775, 460, r=8, fill=CARD, outline=(40, 32, 12), width=1)
    d.text((50,  441), "●  PYTHON  •  SCIKIT-LEARN", fill=AMBER, font=try_font(11))
    d.text((320, 441), "⬛  PANDAS  •  SEABORN", fill=GRAY,  font=try_font(11))
    d.text((540, 441), "⬛  GOOGLE COLAB", fill=GRAY,  font=try_font(11))

    img.save(os.path.join(OUT_DIR, "Mushroom_Classification.png"))
    print("✓ Mushroom_Classification.png saved")


if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    make_icu()
    make_elevator()
    make_mushroom()
    print("\nAll 3 thumbnails generated successfully.")
