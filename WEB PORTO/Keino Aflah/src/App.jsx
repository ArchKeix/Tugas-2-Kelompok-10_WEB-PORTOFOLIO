import React, { useState, useEffect } from 'react';
import { 
  Award, 
  BookOpen, 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  Code2, 
  Database, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Sparkles, 
  User, 
  ExternalLink, 
  FileText, 
  BrainCircuit, 
  CheckCircle,
  FileCheck,
  Camera,
  ArrowUpRight
} from 'lucide-react';

// Custom SVG Brand Icons since Lucide v1.0 removed them
const GithubIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  const [activeSection, setActiveSection] = useState('about');

  // Monitor scroll to set active section in Floating Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-radial-gradient min-h-screen relative text-ctp-text font-sans pb-16 selection:bg-ctp-mauve/30 selection:text-ctp-text">
      
      {/* Decorative subtle ambient glows in the background */}
      <div className="absolute top-[20%] left-[-10%] w-[45vw] h-[45vw] rounded-full glow-blob-1 blur-[120px] pointer-events-none opacity-40"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full glow-blob-2 blur-[120px] pointer-events-none opacity-40"></div>

      {/* 1. FLOATING NAVBAR */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50 glass-navbar px-6 py-3 rounded-full flex justify-between items-center shadow-2xl transition-all duration-300">
        <div className="flex items-center gap-3">
          <a href="#about" className="font-pixel text-lg md:text-xl text-ctp-mauve text-glow-mauve tracking-wider">&lt;/&gt;</a>
          <span className="hidden md:inline-flex items-center gap-1.5 bg-ctp-green/10 text-ctp-green border border-ctp-green/20 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-ctp-green animate-pulse"></span>
            R&D Staff @ HSC UIN
          </span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden sm:flex items-center gap-5">
          {['About', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => {
            const lowerItem = item.toLowerCase();
            return (
              <a 
                key={item} 
                href={`#${lowerItem}`}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  activeSection === lowerItem ? 'text-ctp-mauve' : 'text-ctp-subtext0 hover:text-ctp-text'
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Quick Email CTA */}
        
      </nav>

      {/* MAIN CONTAINER */}
      <main className="w-full max-w-4xl mx-auto px-6 pt-32 flex flex-col gap-24 relative z-10">
        
        {/* 2. HERO / ABOUT SECTION */}
        <section id="about" className="scroll-mt-28 min-h-[60vh] flex flex-col justify-center">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            
            {/* Profile Picture Placeholder */}
            <div className="relative flex-shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-ctp-mauve to-ctp-blue p-[2px] shadow-xl relative overflow-hidden group">
                <div className="w-full h-full bg-[#181825] rounded-2xl flex flex-col items-center justify-center text-center p-4">
                  <div className="p-3 bg-ctp-mauve/10 border border-ctp-mauve/20 rounded-full text-ctp-mauve mb-2">
                    <User className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <span className="font-pixel text-xs text-ctp-subtext0 tracking-wider">Keino Aflah</span>
                  <span className="text-[10px] text-ctp-blue font-semibold mt-1">AI/ML Enthusiast</span>
                </div>
                {/* Visual hover border overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-ctp-mauve/20 to-ctp-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-xs font-bold tracking-widest text-ctp-mauve bg-ctp-mauve/10 border border-ctp-mauve/20 px-3 py-1 rounded-full uppercase mb-4 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-ctp-mauve animate-pulse" /> Welcome to my space
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-ctp-text tracking-tight mb-2">
                Keino Aflah Zahiry
              </h1>
              <p className="text-base md:text-lg font-semibold text-ctp-blue mb-4">
                R&D Staff @ HSC UIN Jakarta | AI/ML Enthusiast
              </p>
              
              <div className="flex items-center gap-2 text-sm text-ctp-subtext0 mb-4 font-medium">
                <GraduationCap className="w-4 h-4 text-ctp-mauve" />
                <span>UIN Syarif Hidayatullah Jakarta</span>
              </div>
              
              <p className="text-sm md:text-base text-ctp-subtext0 leading-relaxed mb-6 max-w-2xl">
                Informatics undergraduate student specializing in artificial intelligence, machine learning, and backend systems. Passionate about building intelligent analytical applications and researching modern agentic workflows.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-col items-center md:items-start w-full">
                <span className="text-[10px] uppercase text-ctp-subtext1 font-bold tracking-widest mb-3">Core Tech Stack</span>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {['Python', 'FastAPI', 'Gemini API', 'LangChain', 'PyTorch', 'Oracle SQL'].map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs bg-ctp-surface0/60 hover:bg-ctp-surface1/60 text-ctp-text border border-ctp-surface0/80 px-3 py-1 rounded-lg font-medium transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. FEATURED PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24 flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 bg-ctp-blue/10 border border-ctp-blue/20 text-ctp-blue rounded-xl">
              <Code2 className="w-5 h-5" />
            </span>
            <h2 className="text-2xl font-bold text-ctp-text">Featured Projects</h2>
          </div>

          <div className="flex flex-col gap-6">
            
            {/* Eatenly Project Card */}
            <div className="glass-card p-6 md:p-8 rounded-2xl transition-all duration-300 hover:border-ctp-mauve/40">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b border-ctp-surface0/30">
                <div>
                  <h3 className="text-xl font-bold text-ctp-text flex items-center gap-2">
                    Eatenly
                    <span className="text-[10px] uppercase font-bold tracking-widest text-ctp-green bg-ctp-green/10 border border-ctp-green/20 px-2 py-0.5 rounded">AI Platform</span>
                  </h3>
                  <p className="text-xs text-ctp-subtext1 font-semibold mt-1">AI-Powered Food Analysis Platform</p>
                </div>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-ctp-mauve hover:text-ctp-mauve/80 hover:underline font-semibold"
                >
                  <GithubIcon className="w-4 h-4 text-ctp-text" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-sm text-ctp-subtext0 mb-4 leading-relaxed">
                Intelligent platform engineered to solve low nutritional literacy by providing instant conversational feedback on food items.
              </p>
              <div className="mb-4">
                <span className="text-[10px] uppercase text-ctp-subtext1 font-bold tracking-wider mb-2 block">Key Highlights:</span>
                <ul className="text-xs text-ctp-subtext0 space-y-2 list-none pl-1">
                  <li className="flex items-start gap-2">
                    <span className="text-ctp-mauve mt-1">•</span>
                    <span>FastAPI backend delivering highly structured JSON outputs for reliable schema parsing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ctp-mauve mt-1">•</span>
                    <span>Dual-model prompt injection via Gemini Vision API for robust vision recognition tasks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ctp-mauve mt-1">•</span>
                    <span>LangChain orchestration managing conversational state in multi-turn dietary consulting chats.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ctp-mauve mt-1">•</span>
                    <span>Instant calorie, macro-distribution, and allergen recognition based on visual food logs.</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Python', 'FastAPI', 'Gemini API', 'LangChain'].map((t) => (
                  <span key={t} className="text-[11px] bg-ctp-surface0/50 text-ctp-subtext0 px-2.5 py-0.5 rounded border border-ctp-surface1/20 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Quest 2025 Project Card */}
            <div className="glass-card p-6 md:p-8 rounded-2xl transition-all duration-300 hover:border-ctp-blue/40">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b border-ctp-surface0/30">
                <div>
                  <h3 className="text-xl font-bold text-ctp-text flex items-center gap-2">
                    Data Quest 2025
                    <span className="text-[10px] uppercase font-bold tracking-widest text-ctp-blue bg-ctp-blue/10 border border-ctp-blue/20 px-2 py-0.5 rounded">Data Science</span>
                  </h3>
                  <p className="text-xs text-ctp-subtext1 font-semibold mt-1">Data Science Indonesia (DSI) Competition</p>
                </div>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-ctp-mauve hover:text-ctp-mauve/80 hover:underline font-semibold"
                >
                  <GithubIcon className="w-4 h-4 text-ctp-text" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-sm text-ctp-subtext0 mb-4 leading-relaxed">
                National data science competition focused on banking marketing optimization and term deposit subscription prediction.
              </p>
              <div className="mb-4">
                <span className="text-[10px] uppercase text-ctp-subtext1 font-bold tracking-wider mb-2 block">Key Highlights:</span>
                <ul className="text-xs text-ctp-subtext0 space-y-2 list-none pl-1">
                  <li className="flex items-start gap-2">
                    <span className="text-ctp-blue mt-1">•</span>
                    <span>Handled highly imbalanced tabular bank customer records containing complex user attributes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ctp-blue mt-1">•</span>
                    <span>Engineered tailored features incorporating call durations, dynamic interaction indicators, and macroeconomic indices.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ctp-blue mt-1">•</span>
                    <span>Fine-tuned LightGBM and XGBoost model parameters to optimize target metric F1-Score & ROC-AUC performance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ctp-blue mt-1">•</span>
                    <span>Utilized class-weighting and synthetic resampling adjustments to maximize campaign conversion recall values.</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Python', 'LightGBM', 'XGBoost', 'Scikit-Learn'].map((t) => (
                  <span key={t} className="text-[11px] bg-ctp-surface0/50 text-ctp-subtext0 px-2.5 py-0.5 rounded border border-ctp-surface1/20 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 4. EXPERIENCE & ORGANIZATIONS SECTION */}
        <section id="experience" className="scroll-mt-24 flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 bg-ctp-mauve/10 border border-ctp-mauve/20 text-ctp-mauve rounded-xl">
              <Briefcase className="w-5 h-5" />
            </span>
            <h2 className="text-2xl font-bold text-ctp-text">Experience & Volunteering</h2>
          </div>

          <div className="relative border-l border-ctp-surface0 pl-6 ml-3 space-y-12">
            
            {/* Timeline Item 1: R&D Staff */}
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-ctp-green border border-ctp-base"></div>
              
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-ctp-text">Staff of Research & Development</h3>
                    <p className="text-xs text-ctp-blue font-semibold mt-0.5">Hive Study Club (HSC) UIN Jakarta</p>
                  </div>
                  <span className="text-[10px] text-ctp-green bg-ctp-green/10 border border-ctp-green/20 px-2.5 py-1 rounded-full font-bold uppercase w-fit">
                    Aug 2026 - Present
                  </span>
                </div>
                
                {/* Details */}
                <div className="space-y-4">
                  <div className="text-xs">
                    <span className="font-bold text-ctp-text block mb-1">Curriculum & Standards Development:</span>
                    <p className="text-ctp-subtext0 leading-relaxed font-normal">
                      Designed learning standards and structured competency development roadmaps aligned with industry dynamics.
                    </p>
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-ctp-text block mb-1">Technology Research & Exploration:</span>
                    <p className="text-ctp-subtext0 leading-relaxed font-normal">
                      Conducted deep research on emerging tech trends to be integrated into community learning materials.
                    </p>
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-ctp-text block mb-1">Learning Process Optimization:</span>
                    <p className="text-ctp-subtext0 leading-relaxed font-normal">
                      Ensured material quality, simplified complex technical concepts into digestible formats, and evaluated learning methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 2: AI Outreach Volunteer */}
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-ctp-mauve border border-ctp-base"></div>
              
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-ctp-text">AI Outreach Volunteer & Ketua Pelaksana</h3>
                    <p className="text-xs text-ctp-mauve font-semibold mt-0.5">UIN Syarif Hidayatullah Jakarta</p>
                  </div>
                  <span className="text-[10px] text-ctp-mauve bg-ctp-mauve/10 border border-ctp-mauve/20 px-2.5 py-1 rounded-full font-bold uppercase w-fit">
                    Oct 2024
                  </span>
                </div>
                
                {/* Details */}
                <div className="space-y-3 mb-6">
                  <p className="text-xs text-ctp-subtext0 leading-relaxed">
                    Led and executed an AI introduction program for junior high school students as a university course final project.
                  </p>
                  <p className="text-xs text-ctp-subtext0 leading-relaxed">
                    Managed end-to-end event planning as Ketua Pelaksana and coordinated formal approvals between university leadership and school authorities.
                  </p>
                  <p className="text-xs text-ctp-subtext0 leading-relaxed">
                    Designed and delivered interactive, quiz-based AI learning sessions tailored for younger students.
                  </p>
                </div>

                {/* Slot Foto Kegiatan Documentation Placeholder */}
                <div>
                  <span className="text-[9px] uppercase text-ctp-subtext1 font-bold tracking-widest mb-2 block">Outreach Documentation</span>
                  <div className="w-full h-36 bg-gradient-to-r from-ctp-mantle to-ctp-crust rounded-xl border border-ctp-surface0/40 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none"></div>
                    <Camera className="w-7 h-7 text-ctp-mauve mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs font-semibold text-ctp-text">AI Intro Session Classroom Documentation</span>
                    <span className="text-[10px] text-ctp-subtext1 mt-1 font-medium">UIN Jakarta Outreach Event • October 2024</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Memberships Sub-grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            
            <div className="glass-card p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-ctp-blue/10 border border-ctp-blue/20 text-ctp-blue rounded-lg">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ctp-text">Data Science Indonesia</h4>
                  <p className="text-[10px] text-ctp-subtext1 font-medium mt-0.5">National Community Member</p>
                </div>
              </div>
              <span className="text-[9px] text-ctp-subtext1 font-bold tracking-wider uppercase">Since May '25</span>
            </div>

            <div className="glass-card p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-ctp-mauve/10 border border-ctp-mauve/20 text-ctp-mauve rounded-lg">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ctp-text">GDG on Campus</h4>
                  <p className="text-[10px] text-ctp-subtext1 font-medium mt-0.5">UIN Jakarta Chapter Member</p>
                </div>
              </div>
              <span className="text-[9px] text-ctp-subtext1 font-bold tracking-wider uppercase">Since Apr '25</span>
            </div>

          </div>
        </section>

        {/* 5. CERTIFICATIONS SECTION */}
        <section id="certifications" className="scroll-mt-24 flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 bg-ctp-mauve/10 border border-ctp-mauve/20 text-ctp-mauve rounded-xl">
              <Award className="w-5 h-5" />
            </span>
            <h2 className="text-2xl font-bold text-ctp-text">Certifications & Competencies</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Cert 1 */}
            <div className="glass-card p-5 rounded-xl flex flex-col justify-between hover:border-ctp-mauve/45 transition-colors duration-200">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-ctp-mauve/10 border border-ctp-mauve/20 text-ctp-mauve rounded-lg">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-ctp-subtext1 bg-ctp-surface0/60 border border-ctp-surface1/20 px-2 py-0.5 rounded">Verified</span>
                </div>
                <h4 className="text-sm font-bold text-ctp-text">TensorFlow Developer Certificate</h4>
                <p className="text-xs text-ctp-subtext1 font-semibold mt-0.5">Google / TensorFlow Network</p>
                <p className="text-xs text-ctp-subtext0 mt-2 font-normal">
                  Validating foundational knowledge of neural networks, computer vision, natural language processing, and forecasting.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-ctp-surface0/30 flex justify-between items-center text-[10px]">
                <span className="text-ctp-subtext1 font-medium">Credential ID: TF-DEV-878A</span>
                <span className="text-ctp-mauve font-semibold hover:underline cursor-pointer flex items-center gap-0.5">
                  Verify <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Cert 2 */}
            <div className="glass-card p-5 rounded-xl flex flex-col justify-between hover:border-ctp-blue/45 transition-colors duration-200">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-ctp-blue/10 border border-ctp-blue/20 text-ctp-blue rounded-lg">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-ctp-subtext1 bg-ctp-surface0/60 border border-ctp-surface1/20 px-2 py-0.5 rounded">Verified</span>
                </div>
                <h4 className="text-sm font-bold text-ctp-text">Machine Learning Specialization</h4>
                <p className="text-xs text-ctp-subtext1 font-semibold mt-0.5">DeepLearning.AI & Stanford University</p>
                <p className="text-xs text-ctp-subtext0 mt-2 font-normal">
                  Rigorous curriculum addressing regression, classification, clustering, anomaly detection, and reinforcement learning.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-ctp-surface0/30 flex justify-between items-center text-[10px]">
                <span className="text-ctp-subtext1 font-medium">Credential ID: DL-MLS-2025</span>
                <span className="text-ctp-blue font-semibold hover:underline cursor-pointer flex items-center gap-0.5">
                  Verify <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Cert 3 */}
            <div className="glass-card p-5 rounded-xl flex flex-col justify-between hover:border-ctp-blue/45 transition-colors duration-200">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-ctp-blue/10 border border-ctp-blue/20 text-ctp-blue rounded-lg">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-ctp-subtext1 bg-ctp-surface0/60 border border-ctp-surface1/20 px-2 py-0.5 rounded">Verified</span>
                </div>
                <h4 className="text-sm font-bold text-ctp-text">Structured Database Design SQL</h4>
                <p className="text-xs text-ctp-subtext1 font-semibold mt-0.5">Oracle Database Academy</p>
                <p className="text-xs text-ctp-subtext0 mt-2 font-normal">
                  Expertise in advanced database schema creation, multi-table joins, subqueries, indexing, and data access query optimization.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-ctp-surface0/30 flex justify-between items-center text-[10px]">
                <span className="text-ctp-subtext1 font-medium">Credential ID: ORCL-SQL-981D</span>
                <span className="text-ctp-blue font-semibold hover:underline cursor-pointer flex items-center gap-0.5">
                  Verify <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Cert 4 */}
            <div className="glass-card p-5 rounded-xl flex flex-col justify-between hover:border-ctp-mauve/45 transition-colors duration-200">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-ctp-mauve/10 border border-ctp-mauve/20 text-ctp-mauve rounded-lg">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-ctp-subtext1 bg-ctp-surface0/60 border border-ctp-surface1/20 px-2 py-0.5 rounded">Verified</span>
                </div>
                <h4 className="text-sm font-bold text-ctp-text">Backend Systems Developer (FastAPI)</h4>
                <p className="text-xs text-ctp-subtext1 font-semibold mt-0.5">Dicoding Tech Academy</p>
                <p className="text-xs text-ctp-subtext0 mt-2 font-normal">
                  Focusing on asynchronous route designs, CORS policies, secure OAuth2 validations, and automated testing implementations.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-ctp-surface0/30 flex justify-between items-center text-[10px]">
                <span className="text-ctp-subtext1 font-medium">Credential ID: DC-FAST-431X</span>
                <span className="text-ctp-mauve font-semibold hover:underline cursor-pointer flex items-center gap-0.5">
                  Verify <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24 flex flex-col gap-6 items-center text-center">
          <div className="flex flex-col items-center gap-3">
            <span className="p-3 bg-ctp-mauve/10 border border-ctp-mauve/20 text-ctp-mauve rounded-full">
              <Mail className="w-6 h-6" />
            </span>
            <h2 className="text-2xl font-bold text-ctp-text">Get In Touch</h2>
            <p className="text-sm text-ctp-subtext0 max-w-md leading-relaxed font-normal">
              Whether you want to discuss AI outreach programs, FastAPI integration patterns, or collaborate on deep learning models, feel free to connect!
            </p>
          </div>

          {/* Connect Links Grid */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full max-w-md justify-center">
            
            <a 
              href="mailto:keinoaflah@gmail.com" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-ctp-mauve/10 hover:bg-ctp-mauve/20 border border-ctp-mauve/35 rounded-xl text-sm font-bold text-ctp-mauve transition-all duration-300 w-full sm:w-auto"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>

            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-ctp-surface0/50 hover:bg-ctp-surface1/60 border border-ctp-surface0/60 rounded-xl text-sm font-bold text-ctp-text transition-colors duration-300 w-full sm:w-auto"
            >
              <GithubIcon className="w-4 h-4 text-ctp-text" />
              <span>GitHub</span>
            </a>

            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-ctp-surface0/50 hover:bg-ctp-surface1/60 border border-ctp-surface0/60 rounded-xl text-sm font-bold text-ctp-text transition-colors duration-300 w-full sm:w-auto"
            >
              <LinkedinIcon className="w-4 h-4 text-ctp-blue" />
              <span>LinkedIn</span>
            </a>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-4xl mx-auto px-6 mt-16 pt-8 border-t border-ctp-surface0/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ctp-subtext1">
        <p>© {new Date().getFullYear()} Keino Aflah Zahiry. All rights reserved.</p>
        <span className="font-pixel text-[10px] text-ctp-mauve text-glow-mauve">Modern Minimalist Web System</span>
      </footer>

    </div>
  );
}

export default App;
