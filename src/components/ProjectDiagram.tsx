import type { ProjectDiagramId } from '../data/portfolioData';

interface ProjectDiagramProps {
  diagramId: ProjectDiagramId;
  compact?: boolean;
}

export function ProjectDiagram({ diagramId, compact = false }: ProjectDiagramProps) {
  const heightClass = compact ? 'h-44' : 'h-48 sm:h-52';

  return (
    <div
      className={`relative w-full ${heightClass} overflow-hidden rounded-xl border border-zinc-800/80 bg-[#070709] select-none`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(250, 204, 21, 0.25) 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      />

      {diagramId === 'tourist-safety' && (
        <svg viewBox="0 0 400 200" className="relative h-full w-full" fill="none">
          <circle cx="130" cy="100" r="64" stroke="#F59E0B" strokeOpacity="0.22" strokeDasharray="4 4" />
          <circle cx="130" cy="100" r="40" stroke="#F59E0B" strokeOpacity="0.45" />
          <circle cx="130" cy="100" r="8" fill="#F59E0B" />
          <circle cx="130" cy="100" r="18" stroke="#FB923C" strokeOpacity="0.6" />
          <path d="M138 100 H225" stroke="#52525B" strokeWidth="1.5" strokeDasharray="3 3" />
          <rect x="225" y="42" width="136" height="32" rx="6" fill="#16161B" stroke="#27272A" />
          <text x="240" y="62" fill="#E4E4E7" fontSize="10" fontFamily="JetBrains Mono, monospace">
            PostGIS Geofence
          </text>
          <rect x="225" y="84" width="136" height="32" rx="6" fill="#16161B" stroke="#F59E0B" strokeOpacity="0.5" />
          <text x="240" y="104" fill="#FBBF24" fontSize="10" fontFamily="JetBrains Mono, monospace">
            Gemini + OpenWeather
          </text>
          <rect x="225" y="126" width="136" height="32" rx="6" fill="#16161B" stroke="#27272A" />
          <text x="240" y="146" fill="#A1A1AA" fontSize="10" fontFamily="JetBrains Mono, monospace">
            Twilio SOS + KYC
          </text>
          <path d="M210 100 L225 58 M210 100 L225 100 M210 100 L225 142" stroke="#F59E0B" strokeOpacity="0.45" />
        </svg>
      )}

      {diagramId === 'formiva' && (
        <svg viewBox="0 0 400 200" className="relative h-full w-full" fill="none">
          <rect x="34" y="46" width="84" height="108" rx="8" fill="#16161B" stroke="#27272A" />
          <line x1="48" y1="68" x2="104" y2="68" stroke="#52525B" strokeWidth="2" />
          <line x1="48" y1="84" x2="96" y2="84" stroke="#3F3F46" strokeWidth="2" />
          <line x1="48" y1="98" x2="100" y2="98" stroke="#3F3F46" strokeWidth="2" />
          <line x1="48" y1="112" x2="88" y2="112" stroke="#3F3F46" strokeWidth="2" />
          <text x="48" y="138" fill="#A1A1AA" fontSize="9" fontFamily="JetBrains Mono, monospace">
            RAW INPUT
          </text>

          <path d="M118 100 H156" stroke="#F59E0B" strokeOpacity="0.7" strokeWidth="1.5" />
          <rect x="156" y="60" width="92" height="80" rx="8" fill="#18181D" stroke="#F59E0B" strokeOpacity="0.55" />
          <text x="174" y="92" fill="#FBBF24" fontSize="11" fontFamily="JetBrains Mono, monospace">
            TF-IDF
          </text>
          <text x="170" y="110" fill="#A1A1AA" fontSize="9" fontFamily="JetBrains Mono, monospace">
            Structure ML
          </text>
          <text x="172" y="124" fill="#71717A" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Offline Core
          </text>

          <path d="M248 100 H284" stroke="#F59E0B" strokeOpacity="0.7" strokeWidth="1.5" />
          <rect x="284" y="46" width="82" height="108" rx="8" fill="#16161B" stroke="#3F3F46" />
          <rect x="296" y="62" x2="354" width="58" height="8" rx="2" fill="#F59E0B" fillOpacity="0.8" />
          <line x1="296" y1="84" x2="350" y2="84" stroke="#71717A" strokeWidth="2" />
          <line x1="296" y1="96" x2="344" y2="96" stroke="#52525B" strokeWidth="2" />
          <line x1="296" y1="108" x2="352" y2="108" stroke="#52525B" strokeWidth="2" />
          <text x="296" y="138" fill="#E4E4E7" fontSize="9" fontFamily="JetBrains Mono, monospace">
            DOCX OUT
          </text>
        </svg>
      )}

      {diagramId === 'elevator-afdir' && (
        <svg viewBox="0 0 400 200" className="relative h-full w-full" fill="none">
          <rect x="28" y="38" width="96" height="124" rx="8" fill="#16161B" stroke="#27272A" />
          <text x="42" y="58" fill="#FBBF24" fontSize="9" fontFamily="JetBrains Mono, monospace">
            ESP32 NODES
          </text>
          <text x="42" y="80" fill="#A1A1AA" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            DS18B20 Temp
          </text>
          <text x="42" y="98" fill="#A1A1AA" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            INA219 Current
          </text>
          <text x="42" y="116" fill="#A1A1AA" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            SW-420 Vib
          </text>
          <text x="42" y="134" fill="#A1A1AA" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            TCRT5000 Opt
          </text>

          <path d="M124 100 H164" stroke="#F59E0B" strokeOpacity="0.7" strokeWidth="1.5" />
          <text x="130" y="92" fill="#71717A" fontSize="8" fontFamily="JetBrains Mono, monospace">
            WS
          </text>

          <rect x="164" y="48" width="110" height="44" rx="6" fill="#18181D" stroke="#F59E0B" strokeOpacity="0.55" />
          <text x="176" y="68" fill="#FBBF24" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Isolation Forest
          </text>
          <text x="176" y="82" fill="#71717A" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Anomaly Detect
          </text>

          <rect x="164" y="108" width="110" height="44" rx="6" fill="#18181D" stroke="#3F3F46" />
          <text x="176" y="128" fill="#E4E4E7" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Random Forest
          </text>
          <text x="176" y="142" fill="#71717A" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Fault Classifier
          </text>

          <path d="M274 70 L300 100 M274 130 L300 100" stroke="#F59E0B" strokeOpacity="0.45" />
          <rect x="300" y="66" width="76" height="68" rx="8" fill="#16161B" stroke="#27272A" />
          <polyline
            points="312,110 324,96 334,104 346,82 362,92"
            stroke="#F59E0B"
            strokeWidth="2"
            fill="none"
          />
          <text x="312" y="125" fill="#A1A1AA" fontSize="8" fontFamily="JetBrains Mono, monospace">
            RCA UI
          </text>
        </svg>
      )}

      {diagramId === 'mushroom-rf' && (
        <svg viewBox="0 0 400 200" className="relative h-full w-full" fill="none">
          <rect x="44" y="42" width="136" height="116" rx="8" fill="#16161B" stroke="#27272A" />
          <line x1="112" y1="42" x2="112" y2="158" stroke="#27272A" />
          <line x1="44" y1="100" x2="180" y2="100" stroke="#27272A" />
          <rect x="52" y="50" width="52" height="42" rx="4" fill="#F59E0B" fillOpacity="0.22" />
          <rect x="120" y="108" width="52" height="42" rx="4" fill="#F59E0B" fillOpacity="0.22" />
          <text x="68" y="75" fill="#FBBF24" fontSize="11" fontFamily="JetBrains Mono, monospace">
            TP
          </text>
          <text x="136" y="133" fill="#FBBF24" fontSize="11" fontFamily="JetBrains Mono, monospace">
            TN
          </text>
          <text x="136" y="75" fill="#52525B" fontSize="10" fontFamily="JetBrains Mono, monospace">
            FP
          </text>
          <text x="68" y="133" fill="#52525B" fontSize="10" fontFamily="JetBrains Mono, monospace">
            FN
          </text>

          <path d="M180 100 H220" stroke="#F59E0B" strokeOpacity="0.6" strokeWidth="1.5" />
          <rect x="220" y="56" width="136" height="88" rx="8" fill="#18181D" stroke="#3F3F46" />
          <text x="238" y="84" fill="#E4E4E7" fontSize="10" fontFamily="JetBrains Mono, monospace">
            Random Forest
          </text>
          <text x="238" y="108" fill="#FBBF24" fontSize="18" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            ~95% ACC
          </text>
          <text x="238" y="128" fill="#71717A" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Edible vs Poisonous
          </text>
        </svg>
      )}

      {diagramId === 'icu-video' && (
        <svg viewBox="0 0 400 200" className="relative h-full w-full" fill="none">
          <rect x="42" y="44" width="128" height="112" rx="8" fill="#16161B" stroke="#27272A" />
          <circle cx="106" cy="84" r="18" stroke="#F59E0B" strokeOpacity="0.65" strokeWidth="1.5" />
          <path d="M78 128 C78 114, 134 114, 134 128" stroke="#71717A" strokeWidth="1.5" />
          <text x="64" y="146" fill="#A1A1AA" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Talky.io Video
          </text>

          <path d="M170 100 H218" stroke="#F59E0B" strokeOpacity="0.6" strokeWidth="1.5" />
          <rect x="218" y="44" width="140" height="48" rx="6" fill="#18181D" stroke="#3F3F46" />
          <text x="232" y="66" fill="#E4E4E7" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Scheduled Care
          </text>
          <text x="232" y="81" fill="#71717A" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Nurse · Patient · Family
          </text>

          <rect x="218" y="108" width="140" height="48" rx="6" fill="#16161B" stroke="#27272A" />
          <text x="232" y="130" fill="#FBBF24" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Neon PostgreSQL
          </text>
          <text x="232" y="145" fill="#71717A" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Clinical Documentation
          </text>
        </svg>
      )}
    </div>
  );
}
