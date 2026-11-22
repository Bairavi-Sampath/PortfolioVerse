import type { ProjectDiagramId } from '../data/portfolioData';

interface ProjectDiagramProps {
  diagramId: ProjectDiagramId;
  compact?: boolean;
  className?: string;
}

export function ProjectDiagram({ diagramId, compact = false, className = '' }: ProjectDiagramProps) {
  const defaultHeight = compact ? 'h-48 sm:h-52' : 'h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]';

  return (
    <div
      className={`relative w-full ${className || defaultHeight} overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#07070A] select-none flex items-center justify-center p-3 sm:p-5`}
      aria-hidden="true"
    >
      {/* Background Grid Pattern with Subtle Orange Radial Glow */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.3) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-transparent to-transparent opacity-60" />
      <div className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-amber-500/10 blur-3xl" />

      {/* 1. Tourist Safety Geofencing & AI */}
      {diagramId === 'tourist-safety' && (
        <svg viewBox="0 0 520 320" className="relative h-full w-full max-h-full" fill="none">
          {/* Radar Circles */}
          <circle cx="160" cy="160" r="120" stroke="#F59E0B" strokeOpacity="0.15" strokeDasharray="6 6" />
          <circle cx="160" cy="160" r="85" stroke="#F59E0B" strokeOpacity="0.25" />
          <circle cx="160" cy="160" r="50" stroke="#F59E0B" strokeOpacity="0.5" strokeWidth="1.5" />
          <circle cx="160" cy="160" r="12" fill="#F59E0B" fillOpacity="0.2" />
          <circle cx="160" cy="160" r="6" fill="#F59E0B" />

          {/* Radar sweep beam */}
          <path d="M160 160 L245 75 A120 120 0 0 0 160 40 Z" fill="url(#radarGradient)" opacity="0.4" />
          <defs>
            <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="accentOrange" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>

          {/* Tourist Pin & Geofenced Danger Zone */}
          <circle cx="210" cy="120" r="28" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 4" fill="#EF4444" fillOpacity="0.12" />
          <circle cx="210" cy="120" r="5" fill="#EF4444" />
          <text x="210" y="98" textAnchor="middle" fill="#EF4444" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            DANGER ZONE
          </text>

          {/* Coordinate Crosshairs */}
          <line x1="160" y1="30" x2="160" y2="290" stroke="#52525B" strokeOpacity="0.3" strokeDasharray="3 3" />
          <line x1="30" y1="160" x2="290" y2="160" stroke="#52525B" strokeOpacity="0.3" strokeDasharray="3 3" />

          {/* Connector to Right Architecture */}
          <path d="M225 160 H310" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="310" cy="160" r="3" fill="#F59E0B" />

          {/* System Telemetry Cards on Right */}
          {/* PostGIS Geofence */}
          <rect x="315" y="60" width="180" height="48" rx="8" fill="#121217" stroke="#27272A" />
          <rect x="325" y="74" width="22" height="20" rx="4" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeOpacity="0.4" />
          <text x="336" y="88" textAnchor="middle" fill="#F59E0B" fontSize="10" fontFamily="JetBrains Mono, monospace">📍</text>
          <text x="355" y="80" fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">PostGIS Geofence</text>
          <text x="355" y="96" fill="#A1A1AA" fontSize="9" fontFamily="JetBrains Mono, monospace">FastAPI Spatial Queries</text>

          {/* Gemini AI & OpenWeather */}
          <rect x="315" y="120" width="180" height="48" rx="8" fill="#15151C" stroke="#F59E0B" strokeOpacity="0.6" />
          <rect x="325" y="134" width="22" height="20" rx="4" fill="#F59E0B" fillOpacity="0.25" stroke="#F59E0B" />
          <text x="336" y="148" textAnchor="middle" fill="#FBBF24" fontSize="10" fontFamily="JetBrains Mono, monospace">⚡</text>
          <text x="355" y="140" fill="#FBBF24" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">Gemini + Weather AI</text>
          <text x="355" y="156" fill="#F59E0B" fontSize="9" fontFamily="JetBrains Mono, monospace">Real-Time Risk Guidance</text>

          {/* Twilio SOS & KYC */}
          <rect x="315" y="180" width="180" height="48" rx="8" fill="#121217" stroke="#27272A" />
          <rect x="325" y="194" width="22" height="20" rx="4" fill="#EF4444" fillOpacity="0.18" stroke="#EF4444" strokeOpacity="0.5" />
          <text x="336" y="208" textAnchor="middle" fill="#EF4444" fontSize="10" fontFamily="JetBrains Mono, monospace">🚨</text>
          <text x="355" y="200" fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">Twilio SOS Dispatch</text>
          <text x="355" y="216" fill="#A1A1AA" fontSize="9" fontFamily="JetBrains Mono, monospace">Aadhaar KYC Verified</text>

          {/* Bottom Floating Status Pill */}
          <rect x="110" y="258" width="300" height="34" rx="17" fill="#18181F" stroke="#F59E0B" strokeOpacity="0.4" />
          <circle cx="130" cy="275" r="4" fill="#10B981" />
          <text x="144" y="279" fill="#E4E4E7" fontSize="10" fontFamily="JetBrains Mono, monospace">
            LIVE MONITORING · 11.0168°N, 76.9558°E · SECURE
          </text>
        </svg>
      )}

      {/* 2. ICU Video Conference System */}
      {diagramId === 'icu-video' && (
        <svg viewBox="0 0 520 320" className="relative h-full w-full max-h-full" fill="none">
          {/* Main Video Window Frame */}
          <rect x="30" y="45" width="260" height="175" rx="12" fill="#101015" stroke="#F59E0B" strokeOpacity="0.4" strokeWidth="1.5" />
          <rect x="30" y="45" width="260" height="28" rx="12" fill="#181820" />
          <circle cx="48" cy="59" r="4" fill="#EF4444" />
          <circle cx="60" cy="59" r="4" fill="#F59E0B" />
          <circle cx="72" cy="59" r="4" fill="#10B981" />
          <text x="92" y="63" fill="#A1A1AA" fontSize="9" fontFamily="JetBrains Mono, monospace">
            ICU-Care Live Session #042
          </text>

          {/* Nurse & Patient Avatars in Split Call */}
          <rect x="42" y="85" width="112" height="95" rx="8" fill="#16161D" stroke="#27272A" />
          <circle cx="98" cy="120" r="18" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeOpacity="0.6" />
          <path d="M78 155 C78 138, 118 138, 118 155" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.8" fill="none" />
          <text x="98" y="172" textAnchor="middle" fill="#E4E4E7" fontSize="9" fontFamily="JetBrains Mono, monospace">
            Nurse Station
          </text>

          <rect x="164" y="85" width="114" height="95" rx="8" fill="#16161D" stroke="#27272A" />
          <circle cx="221" cy="120" r="18" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeOpacity="0.6" />
          <path d="M201 155 C201 138, 241 138, 241 155" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.8" fill="none" />
          <text x="221" y="172" textAnchor="middle" fill="#E4E4E7" fontSize="9" fontFamily="JetBrains Mono, monospace">
            Patient / Family
          </text>

          {/* Bottom Call Controls */}
          <rect x="100" y="190" width="120" height="22" rx="11" fill="#1E1E26" stroke="#3F3F46" />
          <circle cx="125" cy="201" r="5" fill="#10B981" />
          <circle cx="160" cy="201" r="5" fill="#F59E0B" />
          <circle cx="195" cy="201" r="5" fill="#EF4444" />

          {/* Telemetry Waveform underneath */}
          <rect x="30" y="232" width="260" height="52" rx="8" fill="#101015" stroke="#27272A" />
          <polyline
            points="38,258 70,258 82,246 92,272 102,240 114,264 126,258 160,258 172,246 182,272 192,240 204,264 216,258 280,258"
            stroke="#10B981"
            strokeWidth="1.8"
            fill="none"
          />
          <text x="238" y="250" fill="#10B981" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            74 BPM
          </text>
          <text x="238" y="268" fill="#A1A1AA" fontSize="8" fontFamily="JetBrains Mono, monospace">
            SpO2 99%
          </text>

          {/* Right Architecture Cards */}
          <rect x="315" y="55" width="180" height="65" rx="8" fill="#121217" stroke="#F59E0B" strokeOpacity="0.4" />
          <text x="330" y="78" fill="#FBBF24" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            Talky.io WebRTC
          </text>
          <text x="330" y="96" fill="#A1A1AA" fontSize="9" fontFamily="JetBrains Mono, monospace">
            Zero-install browser video
          </text>
          <text x="330" y="110" fill="#71717A" fontSize="8" fontFamily="JetBrains Mono, monospace">
            End-to-End Encrypted Room
          </text>

          <rect x="315" y="132" width="180" height="65" rx="8" fill="#121217" stroke="#27272A" />
          <text x="330" y="155" fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            Neon PostgreSQL
          </text>
          <text x="330" y="173" fill="#A1A1AA" fontSize="9" fontFamily="JetBrains Mono, monospace">
            Serverless cloud storage
          </text>
          <text x="330" y="187" fill="#71717A" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Visit logs & patient profiles
          </text>

          <rect x="315" y="209" width="180" height="75" rx="8" fill="#121217" stroke="#27272A" />
          <text x="330" y="232" fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            Clinical Documentation
          </text>
          <text x="330" y="250" fill="#A1A1AA" fontSize="9" fontFamily="JetBrains Mono, monospace">
            Real-time nurse logging
          </text>
          <text x="330" y="266" fill="#10B981" fontSize="9" fontFamily="JetBrains Mono, monospace">
            ● HIPAA compliant workflow
          </text>
        </svg>
      )}

      {/* 3. Formiva – Offline ML Document Formatter */}
      {diagramId === 'formiva' && (
        <svg viewBox="0 0 520 320" className="relative h-full w-full max-h-full" fill="none">
          {/* Left Document: Raw Input */}
          <rect x="35" y="55" width="125" height="190" rx="10" fill="#121218" stroke="#27272A" strokeWidth="1.5" />
          <rect x="47" y="70" width="70" height="10" rx="3" fill="#52525B" />
          <line x1="47" y1="95" x2="145" y2="95" stroke="#3F3F46" strokeWidth="2.5" />
          <line x1="47" y1="110" x2="135" y2="110" stroke="#3F3F46" strokeWidth="2.5" />
          <line x1="47" y1="125" x2="140" y2="125" stroke="#3F3F46" strokeWidth="2.5" />
          <line x1="47" y1="140" x2="115" y2="140" stroke="#3F3F46" strokeWidth="2.5" />
          <line x1="47" y1="165" x2="145" y2="165" stroke="#3F3F46" strokeWidth="2.5" />
          <line x1="47" y1="180" x2="130" y2="180" stroke="#3F3F46" strokeWidth="2.5" />
          <line x1="47" y1="195" x2="120" y2="195" stroke="#3F3F46" strokeWidth="2.5" />
          <rect x="47" y="215" width="76" height="18" rx="4" fill="#27272A" />
          <text x="85" y="227" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="JetBrains Mono, monospace">
            RAW TEXT
          </text>

          {/* Transformation Arrow */}
          <path d="M170 150 H195" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="200,150 193,146 193,154" fill="#F59E0B" />

          {/* Center Engine Box: TF-IDF Core */}
          <rect x="205" y="75" width="130" height="150" rx="12" fill="#161620" stroke="#F59E0B" strokeOpacity="0.7" strokeWidth="1.5" />
          <rect x="220" y="90" width="100" height="24" rx="6" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeOpacity="0.4" />
          <text x="270" y="106" textAnchor="middle" fill="#FBBF24" fontSize="10.5" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            TF-IDF ML
          </text>
          <text x="270" y="132" textAnchor="middle" fill="#E4E4E7" fontSize="9" fontFamily="JetBrains Mono, monospace">
            Linguistic Parsing
          </text>
          <text x="270" y="148" textAnchor="middle" fill="#A1A1AA" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Heading Detection
          </text>
          <text x="270" y="164" textAnchor="middle" fill="#A1A1AA" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Style Segmentation
          </text>
          <rect x="220" y="182" width="100" height="24" rx="4" fill="#0D0D12" stroke="#27272A" />
          <text x="270" y="198" textAnchor="middle" fill="#10B981" fontSize="8" fontFamily="JetBrains Mono, monospace">
            100% OFFLINE PRIVACY
          </text>

          {/* Transformation Arrow */}
          <path d="M345 150 H370" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="375,150 368,146 368,154" fill="#F59E0B" />

          {/* Right Document: Formatted DOCX Output */}
          <rect x="380" y="55" width="125" height="190" rx="10" fill="#121218" stroke="#F59E0B" strokeOpacity="0.5" strokeWidth="1.5" />
          <rect x="392" y="70" width="85" height="14" rx="3" fill="#F59E0B" fillOpacity="0.85" />
          <line x1="392" y1="95" x2="490" y2="95" stroke="#71717A" strokeWidth="2" />
          <line x1="392" y1="108" x2="480" y2="108" stroke="#71717A" strokeWidth="2" />
          <rect x="392" y="124" width="60" height="10" rx="2" fill="#FBBF24" fillOpacity="0.4" />
          <line x1="392" y1="144" x2="490" y2="144" stroke="#71717A" strokeWidth="2" />
          <line x1="392" y1="157" x2="485" y2="157" stroke="#71717A" strokeWidth="2" />
          <line x1="392" y1="170" x2="470" y2="170" stroke="#71717A" strokeWidth="2" />
          <rect x="392" y="195" width="100" height="38" rx="4" fill="#1A1A24" stroke="#F59E0B" strokeOpacity="0.4" />
          <text x="442" y="210" textAnchor="middle" fill="#FBBF24" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            python-docx
          </text>
          <text x="442" y="224" textAnchor="middle" fill="#E4E4E7" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Publication Ready
          </text>

          {/* Bottom Templates Tag */}
          <rect x="110" y="265" width="300" height="30" rx="15" fill="#14141B" stroke="#27272A" />
          <text x="260" y="284" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="JetBrains Mono, monospace">
            TEMPLATES: IEEE · SPRINGER LNNS · BOOK TYPOGRAPHY
          </text>
        </svg>
      )}

      {/* 4. Elevator Fault Detection & Root Cause Analysis */}
      {diagramId === 'elevator-afdir' && (
        <svg viewBox="0 0 520 320" className="relative h-full w-full max-h-full" fill="none">
          {/* Left: ESP32 Sensor Grid */}
          <rect x="30" y="50" width="130" height="210" rx="10" fill="#121218" stroke="#27272A" strokeWidth="1.5" />
          <rect x="42" y="65" width="106" height="24" rx="6" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeOpacity="0.4" />
          <text x="95" y="81" textAnchor="middle" fill="#FBBF24" fontSize="9.5" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            ESP32 IoT Hub
          </text>

          <rect x="42" y="100" width="106" height="30" rx="4" fill="#181822" stroke="#27272A" />
          <text x="50" y="118" fill="#E4E4E7" fontSize="8.5" fontFamily="JetBrains Mono, monospace">DS18B20 Temp</text>

          <rect x="42" y="136" width="106" height="30" rx="4" fill="#181822" stroke="#27272A" />
          <text x="50" y="154" fill="#E4E4E7" fontSize="8.5" fontFamily="JetBrains Mono, monospace">INA219 Current</text>

          <rect x="42" y="172" width="106" height="30" rx="4" fill="#181822" stroke="#27272A" />
          <text x="50" y="190" fill="#E4E4E7" fontSize="8.5" fontFamily="JetBrains Mono, monospace">SW-420 Vibration</text>

          <rect x="42" y="208" width="106" height="30" rx="4" fill="#181822" stroke="#27272A" />
          <text x="50" y="226" fill="#E4E4E7" fontSize="8.5" fontFamily="JetBrains Mono, monospace">TCRT5000 Pulses</text>

          {/* WebSocket Arrow */}
          <path d="M170 155 H205" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="188" y="146" textAnchor="middle" fill="#F59E0B" fontSize="8" fontFamily="JetBrains Mono, monospace">
            WS
          </text>

          {/* Center: Dual ML Models */}
          <rect x="210" y="50" width="140" height="95" rx="8" fill="#151520" stroke="#F59E0B" strokeOpacity="0.6" />
          <text x="225" y="74" fill="#FBBF24" fontSize="10.5" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            Isolation Forest
          </text>
          <text x="225" y="92" fill="#E4E4E7" fontSize="9" fontFamily="JetBrains Mono, monospace">
            Anomaly Detection
          </text>
          <rect x="225" y="104" width="110" height="24" rx="4" fill="#0D0D12" stroke="#27272A" />
          <text x="280" y="119" textAnchor="middle" fill="#10B981" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Score: 0.88 (ALERT)
          </text>

          <rect x="210" y="165" width="140" height="95" rx="8" fill="#151520" stroke="#3F3F46" />
          <text x="225" y="189" fill="#FFFFFF" fontSize="10.5" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            Random Forest
          </text>
          <text x="225" y="207" fill="#E4E4E7" fontSize="9" fontFamily="JetBrains Mono, monospace">
            Fault Classification
          </text>
          <rect x="225" y="219" width="110" height="24" rx="4" fill="#0D0D12" stroke="#27272A" />
          <text x="280" y="234" textAnchor="middle" fill="#F59E0B" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Bearing Wear 94%
          </text>

          {/* Right: Dashboard / RCA Visual */}
          <rect x="375" y="50" width="120" height="210" rx="10" fill="#121218" stroke="#F59E0B" strokeOpacity="0.4" />
          <rect x="385" y="65" width="100" height="20" rx="4" fill="#1A1A24" />
          <text x="435" y="79" textAnchor="middle" fill="#E4E4E7" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            RCA DASHBOARD
          </text>

          {/* Live Waveform Chart */}
          <rect x="385" y="95" width="100" height="55" rx="4" fill="#0E0E14" stroke="#27272A" />
          <polyline
            points="390,125 405,115 420,135 435,105 450,140 465,110 480,125"
            stroke="#F59E0B"
            strokeWidth="2"
            fill="none"
          />
          <text x="392" y="108" fill="#71717A" fontSize="7.5" fontFamily="JetBrains Mono, monospace">
            Vibration Peak
          </text>

          {/* Maintenance Recommendation */}
          <rect x="385" y="160" width="100" height="85" rx="6" fill="#161622" stroke="#EF4444" strokeOpacity="0.4" />
          <text x="435" y="180" textAnchor="middle" fill="#EF4444" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            ROOT CAUSE:
          </text>
          <text x="435" y="196" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Motor Bearing
          </text>
          <text x="435" y="210" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Misalignment
          </text>
          <text x="435" y="232" textAnchor="middle" fill="#10B981" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Advisory Sent
          </text>

          {/* Bottom Pipeline Line */}
          <rect x="110" y="275" width="300" height="28" rx="14" fill="#14141B" stroke="#27272A" />
          <text x="260" y="293" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="JetBrains Mono, monospace">
            ESP32 → WEBSOCKET → FASTAPI → SQLITE → REACT RCA
          </text>
        </svg>
      )}

      {/* 5. Mushroom Classification Model */}
      {diagramId === 'mushroom-rf' && (
        <svg viewBox="0 0 520 320" className="relative h-full w-full max-h-full" fill="none">
          {/* Confusion Matrix 2x2 Heatmap on Left */}
          <rect x="35" y="55" width="190" height="190" rx="12" fill="#121218" stroke="#27272A" strokeWidth="1.5" />
          <text x="130" y="80" textAnchor="middle" fill="#E4E4E7" fontSize="10.5" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            CONFUSION MATRIX
          </text>

          {/* Matrix Grid */}
          <rect x="55" y="98" width="70" height="60" rx="6" fill="#F59E0B" fillOpacity="0.25" stroke="#F59E0B" strokeOpacity="0.6" />
          <text x="90" y="125" textAnchor="middle" fill="#FBBF24" fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            TP: 99.1%
          </text>
          <text x="90" y="142" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Edible Match
          </text>

          <rect x="135" y="98" width="70" height="60" rx="6" fill="#1E1E28" stroke="#27272A" />
          <text x="170" y="125" textAnchor="middle" fill="#71717A" fontSize="12" fontFamily="JetBrains Mono, monospace">
            FP: 0.9%
          </text>
          <text x="170" y="142" textAnchor="middle" fill="#52525B" fontSize="8" fontFamily="JetBrains Mono, monospace">
            False Alarm
          </text>

          <rect x="55" y="168" width="70" height="60" rx="6" fill="#1E1E28" stroke="#27272A" />
          <text x="90" y="195" textAnchor="middle" fill="#10B981" fontSize="12" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            FN: 0.0%
          </text>
          <text x="90" y="212" textAnchor="middle" fill="#10B981" fontSize="7.5" fontFamily="JetBrains Mono, monospace">
            Zero Lethal FN
          </text>

          <rect x="135" y="168" width="70" height="60" rx="6" fill="#F59E0B" fillOpacity="0.25" stroke="#F59E0B" strokeOpacity="0.6" />
          <text x="170" y="195" textAnchor="middle" fill="#FBBF24" fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            TN: 98.8%
          </text>
          <text x="170" y="212" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Poison Filter
          </text>

          {/* Model Metrics on Right */}
          <rect x="250" y="55" width="235" height="85" rx="10" fill="#14141E" stroke="#F59E0B" strokeOpacity="0.5" />
          <text x="270" y="82" fill="#FBBF24" fontSize="12" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            Random Forest Ensemble
          </text>
          <text x="270" y="112" fill="#FFFFFF" fontSize="24" fontFamily="JetBrains Mono, monospace" fontWeight="800">
            ~95%
          </text>
          <text x="350" y="110" fill="#10B981" fontSize="10" fontFamily="JetBrains Mono, monospace">
            ● Overall Accuracy
          </text>
          <text x="270" y="128" fill="#A1A1AA" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Evaluated on Kaggle Secondary Features
          </text>

          {/* Feature Importance Radar / Bars */}
          <rect x="250" y="152" width="235" height="93" rx="10" fill="#121218" stroke="#27272A" />
          <text x="270" y="174" fill="#E4E4E7" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            KEY DECISION FEATURES
          </text>

          {/* Bar 1 */}
          <text x="270" y="194" fill="#A1A1AA" fontSize="8.5" fontFamily="JetBrains Mono, monospace">Odor (Spore Print)</text>
          <rect x="380" y="185" width="90" height="8" rx="3" fill="#27272A" />
          <rect x="380" y="185" width="82" height="8" rx="3" fill="#F59E0B" />

          {/* Bar 2 */}
          <text x="270" y="212" fill="#A1A1AA" fontSize="8.5" fontFamily="JetBrains Mono, monospace">Spore Color</text>
          <rect x="380" y="203" width="90" height="8" rx="3" fill="#27272A" />
          <rect x="380" y="203" width="68" height="8" rx="3" fill="#F59E0B" fillOpacity="0.8" />

          {/* Bar 3 */}
          <text x="270" y="230" fill="#A1A1AA" fontSize="8.5" fontFamily="JetBrains Mono, monospace">Gill Size & Spacing</text>
          <rect x="380" y="221" width="90" height="8" rx="3" fill="#27272A" />
          <rect x="380" y="221" width="54" height="8" rx="3" fill="#F59E0B" fillOpacity="0.6" />

          {/* Bottom Tooling */}
          <rect x="110" y="265" width="300" height="30" rx="15" fill="#14141B" stroke="#27272A" />
          <text x="260" y="284" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="JetBrains Mono, monospace">
            SCIKIT-LEARN · PANDAS · SEABORN · GOOGLE COLAB
          </text>
        </svg>
      )}
    </div>
  );
}
