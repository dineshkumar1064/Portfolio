export const profile = {
  name: 'Dinesh Kumar S',
  initials: 'D',
  email: 'dineshsdk1006@gmail.com',
  phone: '8056577044',
  location: 'Chennai, Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/dinesh-kumar04/',
  github: 'https://github.com/dineshkumars',
};

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export const heroStats = [
  { num: '1.5+', lbl: 'Years experience' },
  { num: '5+', lbl: 'Projects completed' },
  { num: 'AI', lbl: 'Powered solutions' },
  { num: '100%', lbl: 'Problem solver' },
];

export const heroTags = ['MongoDB','Express JS','React JS', 'Node JS','LangChain JS'];

export const glanceItems = [
  '1.5+ years in full stack & AI engineering',
  'LLM integration, RAG pipelines, prompt orchestration',
  'MERN stack — React, Node.js, Express, MongoDB',
  'Based in Chennai, Tamil Nadu, India',
];

export const aboutStats = [
  { icon: '💼', cls: 'ic-1', num: '1.5+', lbl: 'Years Experience' },
  { icon: '📈', cls: 'ic-2', num: '5+', lbl: 'Projects Completed' },
  { icon: '🧠', cls: 'ic-3', num: 'AI', lbl: 'Powered Solutions' },
  { icon: '💻', cls: 'ic-4', num: '100%', lbl: 'Problem Solver' },
];

export const techStack = [
  { icon: '⚛️', cls: 'ic-1', title: 'Frontend', desc: 'React, JavaScript, HTML5, CSS3, Bootstrap, Redux' },
  { icon: '🟩', cls: 'ic-2', title: 'Backend', desc: 'Node.js, Express.js, REST APIs, JWT Auth' },
  { icon: '🍃', cls: 'ic-3', title: 'Databases', desc: 'MongoDB, SQL, Pinecone, ChromaDB' },
  { icon: '🧠', cls: 'ic-4', title: 'AI / LLM', desc: 'LangChain.js, RAG Pipelines, Prompt Engineering' },
  { icon: '🛠️', cls: 'ic-1', title: 'Tools', desc: 'Git, GitHub, Postman, Figma, VS Code' },
  { icon: '💻', cls: 'ic-2', title: 'Languages', desc: 'Python, JavaScript, Java, TypeScript' },
];

export const experience = [
  {
    role: 'Programmer',
    org: 'Tata Consultancy Services (TCS)',
    date: 'Nov 2025 — June 2026',
    bullets: [
      'Integrated multiple LLMs and built end-to-end RAG pipelines using LangChain.js',
      'Improved manual query resolution time by ~40% using AI-powered solutions',
      'Designed prompt orchestration and multi-LLM workflows',
      'Managed token optimization, context handling and API rate limiting',
      'Handled asset tracking and SLA-driven issue resolution',
    ],
  },
  {
    role: 'Graduate Trainee',
    org: 'Tata Consultancy Services (TCS)',
    date: 'Nov 2024 — Oct 2025',
bullets: [
  'Completed a 6-month MERN Stack training program',
  'Built 5+ full-stack web applications using React, Node.js, Express.js, and MongoDB',
  'Developed secure REST APIs with JWT authentication and role-based authorization',
  'Managed application state using Redux Toolkit and React Context API',
  'Delivered responsive, production-ready applications with integrated frontend and backend functionality',
],
  },
];

// Each project can carry any mix of these link fields:
//   live  -> deployed, working demo (best case, always preferred if present)
//   video -> a demo video/walkthrough (used when there's no live deploy)
//   code  -> GitHub repo link (should basically always exist)
// The Projects section reads these to decide which button to show and
// whether a button should be disabled.
export const projects = [
  {
    thumb: 'thumb-3',
    eyebrow: 'Document Intelligence',
    title: 'RAG System — Q&A over Documents',
    desc: 'A context-aware Q&A system that lets you ask natural-language questions and get grounded answers pulled straight from your own documents.',
    bullets: [
      'Vector search over documents using Pinecone embeddings',
      'Retrieval-augmented pipeline built with LangChain.js',
      'Cut manual document lookup time by roughly 40%',
    ],
    credentials: { email: 'admin@test.com', password: 'password123' },
    tags: ['LangChain.js', 'Pinecone', 'MongoDB'],
    live: 'https://ragdocchat.vercel.app/',
    video: '',
    code: 'https://github.com/dineshkumars/rag-document-qa',
  },
  
  {
    thumb: 'thumb-3',
    eyebrow: 'Healthcare Platform',
    title: 'MediBook – Doctor Appointment System',
    desc: 'A full-stack healthcare appointment platform that enables patients to book doctor appointments, manage schedules, and securely access healthcare services.',
    bullets: [
      'Patient and doctor authentication with JWT',
      'Appointment booking, cancellation, and schedule management',
      'Doctor dashboard with patient records and appointment tracking',
      'Admin dashboard to review and approve doctors, manage appointments, and track commission from bookings',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: '',
    video: 'https://drive.google.com/file/d/1xnlEGjiM4Zrc6sNafxVozE1vAYnYMVbr/view',
    code: ' https://github.com/dineshkumar1064/Doctor-Appointment-System', 
  },
  {
    thumb: 'thumb-3',
    eyebrow: 'Enterprise Management',
    title: 'Employee Management Dashboard',
    desc: '...',
   bullets: [
    'Developed a full-stack employee management platform with analytics dashboards and data-driven insights',
    'Designed employee directory, hiring records, and status tracking modules with seamless CRUD functionality',
    'Built scalable React interfaces integrated with REST APIs for efficient employee lifecycle management',
  ],
    credentials: { email: 'admin@test.com', password: 'password123' },
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://emsdemodashboard.vercel.app/login',
    video: 'https://drive.google.com/open?id=1Ws2YhvtVykWVWxOfOB3GWT1orrQ6dmVl',
    code: 'https://github.com/dineshkumar1064/Employee-Management-System',
  },
    {
    thumb: 'thumb-3',
    eyebrow: 'Multi-LLM Platform',
    title: 'Poly Mind',
    desc: 'A workspace for comparing how different AI providers respond to the exact same prompt, side by side and in real time.',
    bullets: [
      'Streams live responses from 6 different LLM providers in parallel',
      'Side-by-side comparison UI built for fast prompt evaluation',
      'Handles token limits and provider-specific formatting automatically',
    ],
    tags: ['React', 'Node.js', 'LangChain.js'],
    live: '',
    video: 'https://www.linkedin.com/posts/dinesh-kumar04_ai-mernstack-apiintegration-activity-7434270546361532417-hOHu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcNJU8BO-T9PBGPAzZsc8vjlnV4NdPwxLI',
    code: 'https://github.com/dineshkumars/poly-mind',
  },

  {
    thumb: 'thumb-3',
    eyebrow: 'Full Stack Commerce',
    title: 'E-Commerce Web Application',
    desc: 'A complete online store — browsing, cart, checkout and an admin dashboard — built end-to-end on the MERN stack.',
    bullets: [
      'Built a complete MERN-based e-commerce platform with product browsing, cart, checkout, and admin dashboard features',
      'Developed product management, inventory handling, and order processing workflows',
      'Created RESTful APIs for user management, products, cart operations, and order transactions',
      'Designed responsive user interfaces with seamless frontend-backend integration for a smooth shopping experience',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    live: '',
    video: '',
    code: 'https://github.com/dineshkumars/mern-ecommerce',
  },
];

export const certifications = [
  {'id': '1', 'title': 'Generative AI for Node.js: LangChain & RAG — Udemy', 'link': 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-007fd832-14a8-49fc-af2b-2113e8607ebb.pdf'},
  {'id': '2', 'title': 'Complete Full Stack Web Development Bootcamp — Udemy', 'link': 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-da49375e-f23b-4b21-897f-ab0ff47b62fd.pdf'},
  {'id': '3', 'title': 'CRUD Operations in MongoDB — ICT Academy', 'link': 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/19ec2798-2bac-471e-b193-38706c647184-dinesh-kumar-847fdb52-b878-4013-bc19-fd0cd65721da-certificate.pdf'},
  {'id': '4', 'title': 'HTML, CSS & JavaScript — Johns Hopkins University (Coursera)', 'link': 'https://www.coursera.org/account/accomplishments/verify/LCEWMNH3X24S?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse'},
];



export const education = {
  degree: 'B.Sc. Computer Science',
  school: 'The American College, Madurai',
  meta: '2021 — 2024 · CGPA 7.8 / 10',
};

export const chatSuggestions = [
  { q: "What's your experience?", label: 'Experience?' },
  { q: 'Tell me about your projects', label: 'Projects?' },
  { q: "What's your tech stack?", label: 'Tech stack?' },
  { q: 'How do I contact you?', label: 'Contact?' },
];
