export type ProjectCategory = 'AI/ML' | 'Full Stack' | 'Research';

export type ProjectDiagramId =
  | 'tourist-safety'
  | 'formiva'
  | 'elevator-afdir'
  | 'mushroom-rf'
  | 'icu-video';

export interface ProjectItem {
  id: string;
  diagramId: ProjectDiagramId;
  title: string;
  shortTitle: string;
  categories: ProjectCategory[];
  categoryDisplay?: string;
  featuredPriority: boolean;
  description: string;
  problemAddressed: string;
  objectives?: string[];
  keyFeatures?: string[];
  contributions: string[];
  technologies: string[];
  hardware?: string[];
  githubUrl: string;
  liveUrl?: string;
  featuredHighlights?: { icon: string; label: string }[];
  imageUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  degree: string;
  period: string;
  scoreLabel: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  periodOrDate: string;
  topics?: string;
  score?: string;
  imageUrl?: string;
  pdfUrl?: string;
  isFeatured: boolean;
}

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const;

export const ABOUT_HIGHLIGHTS = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Designing anomaly detection, supervised classification, and NLP pipelines alongside Generative AI integrations.',
  },
  {
    title: 'Full Stack Development',
    description:
      'Building end-to-end applications across React, Next.js, TypeScript, FastAPI, Node.js, and spatial or relational PostgreSQL.',
  },
  {
    title: 'Problem Solving',
    description:
      'Translating real-world constraints in safety, healthcare, industrial monitoring, and offline workflows into reliable software.',
  },
  {
    title: 'Research & Innovation',
    description:
      'Conducting applied engineering research culminating in a Scopus-indexed Springer LNNS conference publication.',
  },
] as const;

export const ABOUT_STATS = [
  {
    value: '5',
    label: 'Featured Projects',
    detail: 'AI/ML & Full-Stack Systems',
  },
  {
    value: '8.7',
    label: 'CGPA (out of 10)',
    detail: 'Till 4th Semester · B.E. CSE (AI & ML)',
  },
  {
    value: '1',
    label: 'Springer Publication',
    detail: "CICPS'26 · LNNS (Scopus-indexed)",
  },
] as const;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core systems & algorithmic foundations',
    items: ['Python', 'Java', 'SQL', 'C'],
  },
  {
    id: 'aiml',
    title: 'Artificial Intelligence & Machine Learning',
    subtitle: 'Modeling, feature extraction & LLM APIs',
    items: [
      'Machine Learning',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'TF-IDF',
      'Random Forest',
      'Isolation Forest',
      'Generative AI',
      'Gemini API',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Responsive interfaces & typed client state',
    items: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'High-throughput services & live telemetry',
    items: ['Node.js', 'FastAPI', 'REST APIs', 'WebSocket'],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational, spatial & embedded storage',
    items: ['PostgreSQL', 'PostGIS', 'SQLite'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Version control, containers & notebooks',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Google Colab'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'smart-tourist-safety',
    diagramId: 'tourist-safety',
    title: 'Smart Tourists Safety Monitoring and Incident Response System Using Geofencing and AI',
    shortTitle: 'Smart Tourists Safety & Geofencing AI',
    categories: ['AI/ML', 'Full Stack'],
    categoryDisplay: 'AI / FULL STACK / SMART SAFETY',
    featuredPriority: true,
    description:
      'A smart tourist safety monitoring and incident response system combining geofencing, real-time alerts, identity verification, and AI-powered assistance.',
    featuredHighlights: [
      { icon: 'Shield', label: 'Geofenced Safety Zones' },
      { icon: 'Bell', label: 'Instant SOS Alerts' },
      { icon: 'Sparkles', label: 'Gemini & Weather Risk AI' },
    ],
    objectives: [
      'Provide real-time danger zone identification and proactive tourist alerts using geospatial intelligence.',
      'Deliver immediate emergency escalation with verified KYC and automated SOS alert dispatches.',
      'Synthesize real-world meteorological hazards and AI assistance into an interactive safety dashboard.',
    ],
    keyFeatures: [
      'Geofenced spatial danger zone tracking powered by PostgreSQL and PostGIS.',
      'Live interactive tourist positioning map using React and Leaflet.',
      'Instant SMS/SOS emergency alerts triggered via Twilio integration.',
      'Real-time disaster risk notifications leveraging OpenWeather API.',
      'Conversational tourist safety guidance integrated with Gemini API.',
      'Secure tourist identity verification through Aadhaar-based KYC.',
    ],
    problemAddressed:
      'Tourists traveling in unfamiliar or disaster-prone areas often lack real-time spatial hazard alerts and rapid SOS escalation channels when entering high-risk zones.',
    contributions: [
      'Developed FastAPI REST services with PostgreSQL and PostGIS for geofenced danger zones.',
      'Implemented Aadhaar-based KYC.',
      'Integrated Twilio-powered SOS alerts.',
      'Developed a React and Leaflet live map.',
      'Integrated real-time disaster alerts using OpenWeather.',
      'Integrated Gemini API.',
    ],
    technologies: [
      'React',
      'Leaflet',
      'OpenStreetMap',
      'FastAPI',
      'PostgreSQL',
      'PostGIS',
      'Gemini API',
      'Twilio',
      'OpenWeather API',
    ],
    githubUrl: 'https://github.com/Shridhanya-Gomathinayagam/SIH-Tourist',
    imageUrl: '/assets/aistudio/projects_image_demo/Smart Tourist.png',
  },
  {
    id: 'icu-video-conference',
    diagramId: 'icu-video',
    title: 'ICU Video Conference System',
    shortTitle: 'Healthcare Tele-Visits & Patient Monitoring',
    categories: ['Full Stack'],
    categoryDisplay: 'HEALTHCARE / FULL STACK',
    featuredPriority: true,
    description:
      'A healthcare platform designed to support scheduled video communication between nurses, patients and families, along with patient monitoring and clinical documentation.',
    featuredHighlights: [
      { icon: 'Video', label: 'Scheduled Virtual Care' },
      { icon: 'Database', label: 'Neon PostgreSQL Sync' },
      { icon: 'FileText', label: 'Clinical Documentation' },
    ],
    objectives: [
      'Overcome critical-care physical isolation with reliable, scheduled virtual visits.',
      'Provide medical staff with structured logging for clinical observations alongside virtual calls.',
      'Ensure intuitive, accessible video access for patients and families across varied devices.',
    ],
    keyFeatures: [
      'Direct, browser-based scheduled video communication powered by Talky.io integration.',
      'Secure patient profiles and visit scheduling managed through Neon PostgreSQL.',
      'Real-time nurse logging dashboard for monitoring and clinical note-taking.',
      'Clean, accessible user interface optimized for healthcare workflows with React and Next.js.',
    ],
    problemAddressed:
      'Strict critical-care visitation protocols create communication barriers between ICU patients, families, and clinical staff while requiring accurate documentation.',
    contributions: [
      'Developed a Next.js and React healthcare platform.',
      'Implemented scheduled video communication.',
      'Included real-time patient monitoring and clinical documentation.',
      'Used Neon PostgreSQL for record storage.',
      'Integrated Talky.io video functionality.',
    ],
    technologies: ['React', 'Next.js', 'Talky.io', 'Neon PostgreSQL'],
    githubUrl: 'https://github.com/Bairavi-Sampath/ICU_Virtual_visit',
    imageUrl: '/assets/aistudio/projects_image_demo/ICU_Video_Conference.png',
  },
  {
    id: 'formiva',
    diagramId: 'formiva',
    title: 'Formiva – Intelligent ML-Based Offline Document Formatting System',
    shortTitle: 'Formiva Offline ML Formatter',
    categories: ['AI/ML', 'Full Stack'],
    categoryDisplay: 'AI / MACHINE LEARNING / FULL STACK',
    featuredPriority: true,
    description:
      'An offline document formatting system that analyzes document structure and generates formatted DOCX files across different academic and book styles.',
    featuredHighlights: [
      { icon: 'BrainCircuit', label: 'Offline TF-IDF Analysis' },
      { icon: 'Layers', label: 'Automated DOCX Synthesis' },
      { icon: 'BookOpen', label: 'Multi-Style Layouts' },
    ],
    objectives: [
      'Enable completely offline structural analysis and formatting of raw academic text without external cloud dependency.',
      'Automate adherence to academic guidelines and book typography standards with high consistency.',
      'Produce publication-ready DOCX files while preserving full offline data privacy.',
    ],
    keyFeatures: [
      'Offline document structure segmentation using TF-IDF linguistic feature analysis.',
      'Automated DOCX file synthesis using python-docx styling engines.',
      'Multi-style academic and book layout template matching.',
      'Fast, responsive local web interface built with Next.js, React, and FastAPI.',
    ],
    problemAddressed:
      'Preparing academic manuscripts and books requires strict structural formatting, yet cloud-based tools compromise offline privacy and consistency.',
    contributions: [
      'Developed an offline FastAPI and Next.js application.',
      'Applied TF-IDF to analyze document structure.',
      'Generated formatted DOCX documents using python-docx.',
      'Supported multiple academic and book formatting styles.',
    ],
    technologies: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'TF-IDF', 'python-docx'],
    githubUrl: 'https://github.com/orgs/Intelligent-Document-Formatting/repositories',
    imageUrl: '/assets/aistudio/projects_image_demo/Formiva.png',
  },
  {
    id: 'elevator-afdir',
    diagramId: 'elevator-afdir',
    title: 'AI-Based Elevator Fault Detection & Root Cause Analysis (A-FDIR) Assistant',
    shortTitle: 'Elevator Fault Detection (A-FDIR)',
    categories: ['AI/ML', 'Full Stack', 'Research'],
    categoryDisplay: 'IoT / AI & ML / EMBEDDED SYSTEMS',
    featuredPriority: true,
    description:
      'An intelligent elevator monitoring system that detects anomalies, classifies faults, and provides probable root causes and maintenance recommendations.',
    featuredHighlights: [
      { icon: 'Cpu', label: 'ESP32 Multi-Sensor IoT' },
      { icon: 'Activity', label: 'Isolation & Random Forest ML' },
      { icon: 'Wrench', label: 'Predictive Maintenance RCA' },
    ],
    objectives: [
      'Transition elevator upkeep from reactive breakdown fixing to proactive predictive maintenance.',
      'Achieve early detection of mechanical wear, electrical irregularity, and speed abnormalities.',
      'Provide explainable root cause analysis (RCA) and actionable maintenance recommendations for field engineers.',
    ],
    keyFeatures: [
      'Multi-modal IoT sensor acquisition (temperature, current, vibration, optical pulses) via ESP32 microcontrollers.',
      'Live bidirectional telemetry streaming over low-latency WebSockets to FastAPI.',
      'Unsupervised anomaly detection powered by Isolation Forest.',
      'Multi-class fault type classification using Random Forest models.',
      'Real-time interactive dashboard visualizing sensor waveforms and maintenance advisories.',
    ],
    problemAddressed:
      'Reactive elevator maintenance leads to unexpected downtime and safety risks because subtle mechanical and electrical anomalies go undetected until failure.',
    contributions: [
      'Collected temperature, current, vibration and optical sensor data using ESP32.',
      'Transmitted sensor readings through WebSocket to a FastAPI backend.',
      'Stored sensor data using SQLite.',
      'Applied Isolation Forest for anomaly detection.',
      'Used Random Forest for fault classification.',
      'Developed a React and TypeScript dashboard to display probable root causes and maintenance recommendations.',
    ],
    technologies: [
      'ESP32',
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Isolation Forest',
      'Random Forest',
      'SQLite',
      'WebSocket',
    ],
    hardware: ['DS18B20', 'INA219', 'SW-420', 'TCRT5000'],
    githubUrl: 'https://github.com/orgs/ElevatorAIAssist/repositories',
    imageUrl: '/assets/aistudio/projects_image_demo/Elevator_AFDIR.png',
  },
  {
    id: 'mushroom-classification',
    diagramId: 'mushroom-rf',
    title: 'Mushroom Classification Model',
    shortTitle: 'Mushroom Classification Model',
    categories: ['AI/ML'],
    categoryDisplay: 'AI / MACHINE LEARNING',
    featuredPriority: false,
    description:
      'A machine learning classification model utilizing Random Forest ensemble trees to predict whether mushroom species are edible or poisonous with high recall.',
    featuredHighlights: [
      { icon: 'Award', label: '~95% Ensemble Accuracy' },
      { icon: 'AlertCircle', label: 'Zero Lethal False-Negatives' },
      { icon: 'BarChart3', label: 'Confusion Matrix & ROC Eval' },
    ],
    objectives: [
      'Accurately classify mushroom specimens into edible or toxic categories based on visual and categorical traits.',
      'Achieve high recall on toxic classes to minimize lethal false-negative predictions.',
      'Provide comprehensive performance evaluation using confusion matrices and standard ML classification metrics.',
    ],
    keyFeatures: [
      'Robust ensemble decision-tree modeling utilizing Random Forest Classifier.',
      'Achieved approximately 95% overall classification accuracy.',
      'Comprehensive error analysis via confusion matrix, precision, recall, and F1-score evaluation.',
      'Modular data preprocessing and visual exploration scripts in Google Colab.',
    ],
    problemAddressed:
      'Distinguishing edible mushrooms from toxic species based on morphological features requires reliable multi-feature classification and rigorous error evaluation.',
    contributions: [
      'Developed a Random Forest classification model.',
      'Achieved approximately 95% accuracy.',
      'Evaluated performance using a confusion matrix and classification report.',
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Matplotlib', 'Google Colab'],
    githubUrl: 'https://github.com/Bairavi-Sampath/Mushroom-Classification_model',
    imageUrl: '/assets/aistudio/projects_image_demo/Mushroom_Classification.png',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'novitech-intern',
    role: 'Full Stack Developer Intern',
    company: 'Novitech R&D Pvt. Ltd.',
    period: '14 December 2025 – 14 January 2026',
    responsibilities: [
      'Built responsive web projects, including a weather application, portfolio website and Netflix-inspired webpage.',
      'Worked with HTML, CSS and React.',
      'Managed source code using Git and GitHub.',
    ],
    technologies: ['HTML', 'CSS', 'React', 'Git', 'GitHub'],
  },
];

export const RESEARCH_HIGHLIGHT = {
  badge: 'Springer-Published Research',
  title: "CICPS'26 Research Paper — Springer LNNS",
  venue: 'International Conference on Computational Intelligence & Cyber-Physical Systems (CICPS’26)',
  publication: 'Springer Lecture Notes in Networks and Systems (LNNS)',
  indexing: 'Scopus-indexed publication',
  date: 'January 2026',
  summary:
    "Research paper presented at CICPS'26 and accepted for publication in Springer Lecture Notes in Networks and Systems (LNNS), a Scopus-indexed series.",
};

export const CERTIFICATIONS: CertificationItem[] = [
  // 1. Featured Certifications
  {
    id: 'nptel-genai',
    title: 'Generative AI for Computer Vision',
    issuer: 'NPTEL, IIT Guwahati',
    periodOrDate: 'July – October 2026',
    score: '91% (Elite)',
    topics: 'Generative AI architectures, GANs, diffusion models, and computer vision applications',
    imageUrl: '/assets/aistudio/certificates/NPTEL_generativeAIforCV.jpeg',
    isFeatured: true,
  },
  {
    id: 'nptel-llm',
    title: 'Large Language Models (LLMs)',
    issuer: 'NPTEL, IIT Madras',
    periodOrDate: 'January – April 2026',
    score: '61% (Elite)',
    topics: 'Large language model architectures, transformer attention, prompting, and fine-tuning',
    imageUrl: '/assets/aistudio/certificates/NPTEL_LLM.jpg',
    isFeatured: true,
  },
  {
    id: 'nptel-safe-ai',
    title: 'Responsible and Safe AI',
    issuer: 'NPTEL, IIIT Hyderabad',
    periodOrDate: 'July – October 2025',
    score: '54%',
    topics: 'AI ethics, algorithmic fairness, safety benchmarks, and responsible deployment',
    imageUrl: '/assets/aistudio/certificates/NPTEL_Responsible & Safe AI.jpg',
    isFeatured: true,
  },
  {
    id: 'iit-bombay-advanced-cpp',
    title: 'Advanced C++',
    issuer: 'IIT Bombay Spoken Tutorial',
    periodOrDate: 'May 5, 2025',
    score: '65%',
    topics: 'Advanced C++ object-oriented principles, templates, and STL',
    imageUrl: '/assets/aistudio/certificates/advanced_C++.jpg',
    isFeatured: true,
  },
  {
    id: 'iit-bombay-python343',
    title: 'Python 3.4.3',
    issuer: 'IIT Bombay Spoken Tutorial',
    periodOrDate: 'May 5, 2025',
    score: '65%',
    topics: 'Python 3.4.3 programming fundamentals, scripting, and modular architecture',
    imageUrl: '/assets/aistudio/certificates/python_certificate.jpg',
    isFeatured: true,
  },
  {
    id: 'aws-nminds',
    title: 'AWS Fundamentals for Cloud Practitioners',
    issuer: 'Nminds Academy',
    periodOrDate: 'August 18 – 19, 2025',
    topics: 'Cloud computing fundamentals, AWS EC2, Route53, Elastic Load Balancer, and webserver deployment',
    imageUrl: '/assets/aistudio/certificates/AWS_OCC.jpg',
    isFeatured: true,
  },
  {
    id: 'hackerrank-python',
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    periodOrDate: 'May 9, 2026',
    topics: 'Data structures, syntax, algorithms, and problem solving in Python',
    imageUrl: '/assets/aistudio/certificates/python_basic certificate.jpg',
    isFeatured: true,
  },
  {
    id: 'hackerrank-sql',
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    periodOrDate: 'May 9, 2026',
    topics: 'Relational querying, aggregation, filtering, and joins',
    imageUrl: '/assets/aistudio/certificates/sql_basic certificate.jpg',
    isFeatured: true,
  },
  {
    id: 'codechef-java-problem-solving',
    title: 'Java Problem Solving',
    issuer: 'CodeChef',
    periodOrDate: 'August 13, 2026',
    topics: 'Data structures, algorithmic problem solving, and object-oriented programming in Java',
    imageUrl: '/assets/aistudio/certificates/Java Problem Solving Codechef.jpg',
    isFeatured: true,
  },
  {
    id: 'codechef-practice-java',
    title: 'Practice Java',
    issuer: 'CodeChef',
    periodOrDate: 'August 11, 2026',
    topics: 'Java practice problems covering algorithms, data structures, and OOP',
    imageUrl: '/assets/aistudio/certificates/Practice Java Codechef.jpg',
    isFeatured: true,
  },

  // 2. Additional Certifications (Available under "View All Certifications")
  {
    id: 'skillrack-sql-basics',
    title: 'SQL Basics',
    issuer: 'SkillRack',
    periodOrDate: 'September 10, 2025',
    topics: 'Relational database concepts, schema definitions, and SQL queries',
    imageUrl: '/assets/aistudio/certificates/SQL-basics certificate.png',
    isFeatured: false,
  },
  {
    id: 'codechef-learn-java',
    title: 'Learn Java!',
    issuer: 'CodeChef',
    periodOrDate: 'August 3, 2026',
    topics: 'Object-oriented programming, classes, exceptions, and core Java foundations via CodeChef',
    imageUrl: '/assets/aistudio/certificates/Learn_java_codechef.jpg',
    isFeatured: false,
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'kpriet',
    institution: 'KPR Institute of Engineering and Technology',
    location: 'Coimbatore',
    degree: 'B.E. Computer Science and Engineering – Artificial Intelligence and Machine Learning',
    period: '2024 – 2028',
    scoreLabel: 'CGPA: 8.7/10 (Till 4th Semester)',
    highlights: [
      'Specializing in Artificial Intelligence, Machine Learning, and Full-Stack Software Systems.',
      'Applied research resulting in Springer LNNS (Scopus-indexed) acceptance in January 2026.',
    ],
  },
  {
    id: 'hsc',
    institution: 'Erode District Government Model School',
    location: 'Perundurai',
    degree: 'Higher Secondary Certificate (HSC) – Mathematics with Computer Science',
    period: '2022 – 2024',
    scoreLabel: 'Percentage: 84.2%',
    highlights: [
      'Focused on Mathematics and Computer Science fundamentals prior to undergraduate engineering.',
    ],
  },
];
