import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const email = "adarshsinghiilm@gmail.com";
  const linkedin = "https://www.linkedin.com/in/adarsh-singh-b911a0218/";
  const github = "https://github.com/Adarsh007singh";

  const floatingStars = [
    { left: "8%", top: "18%", size: "h-2 w-2", delay: 0, duration: 5 },
    { left: "18%", top: "72%", size: "h-3 w-3", delay: 0.6, duration: 6 },
    { left: "28%", top: "32%", size: "h-2 w-2", delay: 1.2, duration: 7 },
    { left: "38%", top: "86%", size: "h-3 w-3", delay: 0.2, duration: 8 },
    { left: "48%", top: "12%", size: "h-2 w-2", delay: 1.6, duration: 5 },
    { left: "68%", top: "24%", size: "h-3 w-3", delay: 1.4, duration: 6 },
    { left: "88%", top: "42%", size: "h-2 w-2", delay: 1, duration: 6 },
    { left: "12%", top: "46%", size: "h-3 w-3", delay: 0.3, duration: 9 },
  ];

  const codeRain = ["API", "Node.js", "PHP", "SQL", "Redis", "Payment", "JWT", "OAuth", "AWS", "React", "Backend", "FinTech"];

  const terminalLines = [
    "$ npm run build-payment-apis",
    "✓ 50+ gateway integrations loaded",
    "✓ Redis cache connected",
    "✓ JWT/OAuth auth enabled",
    "✓ Low-latency backend deployed",
  ];

  const stats = [
    { label: "Payment Gateways", value: "50+" },
    { label: "Experience", value: "3+ yrs" },
    { label: "Core Stack", value: "Node/PHP" },
    { label: "Location", value: "Noida" },
  ];

  const skills = [
    "Node.js", "PHP", "Express.js", "REST APIs", "Webhooks", "JWT", "OAuth 2.0", "MySQL", "Redis", "AWS EC2", "Docker", "Jenkins", "Kubernetes", "Linux", "React.js", "Postman"
  ];

  const projects = [
    {
      title: "50+ Payment Gateway Integrations",
      category: "FinTech",
      icon: "🛡️",
      desc: "Integrated INR and Non-INR payment gateways with secure request signing, callbacks, status APIs, logs, and zero-downtime production flows.",
      tech: ["Node.js", "PHP", "MySQL", "Webhooks"],
      impact: "Owned payment integrations from sandbox to production for high-volume merchant transactions.",
    },
    {
      title: "Bulk Payout System",
      category: "Backend",
      icon: "💳",
      desc: "Built payout APIs with validation, wallet deduction, status tracking, callback processing, failure handling, and reconciliation support.",
      tech: ["Node.js", "Redis", "MySQL", "REST API"],
      impact: "Improved reliability of multi-transaction payout operations.",
    },
    {
      title: "Telegram Transaction Bot",
      category: "Automation",
      icon: "🤖",
      desc: "Created an internal Telegram bot for real-time transaction status lookup, reducing manual dashboard dependency.",
      tech: ["PHP", "API", "Telegram Bot", "MySQL"],
      impact: "Helped support and operations teams resolve transaction queries faster.",
    },
    {
      title: "Merchant/Admin Console Modules",
      category: "Frontend",
      icon: "📊",
      desc: "Built dashboard modules for merchant visibility, transaction filters, gateway success ratio, chargeback analytics, and admin workflows.",
      tech: ["React", "Axios", "ApexCharts", "MUI"],
      impact: "Improved transaction visibility and workflow efficiency for internal teams.",
    },
    {
      title: "Redis + MySQL Optimization",
      category: "Performance",
      icon: "⚡",
      desc: "Optimized queries, indexing, and caching for payment APIs handling heavy load and frequent status checks.",
      tech: ["MySQL", "Redis", "Indexing", "Caching"],
      impact: "Reduced database load and improved API response time.",
    },
    {
      title: "CI/CD Deployment Flow",
      category: "DevOps",
      icon: "🚀",
      desc: "Worked with Docker deployments, Jenkins pipelines, Linux servers, AWS EC2, and Kubernetes exposure for scalable infrastructure.",
      tech: ["Docker", "Jenkins", "AWS EC2", "Linux"],
      impact: "Supported smoother deployments and production release handling.",
    },
  ];

  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const filteredProjects = useMemo(() => activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory), [activeCategory]);

  return (
    <div onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })} className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,#2563eb66,transparent_35%),radial-gradient(circle_at_bottom_right,#9333ea66,transparent_35%)]" />
      <motion.div className="pointer-events-none fixed z-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" animate={{ x: mouse.x - 144, y: mouse.y - 144 }} transition={{ type: "spring", stiffness: 45, damping: 18 }} />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
        {floatingStars.map((star, index) => (
          <motion.span key={index} className={`absolute rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(103,232,249,1)] ${star.size}`} style={{ left: star.left, top: star.top }} animate={{ y: [0, -34, 0], opacity: [0.25, 1, 0.25], scale: [1, 1.8, 1] }} transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }} />
        ))}
        {codeRain.map((text, index) => (
          <motion.div key={text} className="absolute select-none rounded-xl border border-cyan-300/20 bg-slate-900/70 px-4 py-2 text-sm font-bold tracking-wider text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.25)] backdrop-blur-md" style={{ left: `${index * 8 + 2}%`, top: "-12%" }} animate={{ y: [0, 1250], opacity: [0, 1, 1, 0], rotate: [0, 2, -2, 0] }} transition={{ duration: 12 + (index % 4), delay: index * 0.7, repeat: Infinity, ease: "linear" }}>
            {text}
          </motion.div>
        ))}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full border border-blue-400/10" />
      </div>

      <div className="relative z-10">
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <motion.h1 whileHover={{ scale: 1.05 }} className="text-xl font-bold tracking-wide"><span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Adarsh</span> Singh</motion.h1>
            <div className="hidden gap-3 text-sm text-slate-300 md:flex">
              {["about", "skills", "projects", "contact"].map((item) => <a key={item} href={`#${item}`} className="rounded-full px-4 py-2 capitalize transition hover:bg-white/10 hover:text-white">{item}</a>)}
            </div>
          </div>
        </nav>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">Backend-focused Full-Stack Engineer • Payment Systems</p>
            <h2 className="text-5xl font-extrabold leading-tight md:text-7xl">Building secure and scalable payment APIs.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Backend-focused Full-Stack Engineer with 3+ years of experience building scalable APIs for payment systems. Strong in Node.js, PHP, MySQL, Redis, performance optimization, and reliable transaction processing.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold shadow-lg shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-500">View Projects</a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:bg-white/10">⬇️ Resume</a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, index) => <motion.div key={stat.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.08 }} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-xl"><div className="text-2xl font-black">{stat.value}</div><div className="mt-1 text-xs text-slate-300">{stat.label}</div></motion.div>)}
            </div>
            <div className="mt-8 flex gap-4 text-slate-300">
              <a href={github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-3 font-bold hover:bg-white/10">GH</a>
              <a href={linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-3 font-bold hover:bg-white/10">in</a>
              <a href={`mailto:${email}`} className="rounded-full border border-white/10 px-4 py-3 font-bold hover:bg-white/10">✉️</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <img src="/profile.png" alt="Adarsh Singh" className="mb-6 h-72 w-full rounded-[1.5rem] object-cover object-top" />
              <div className="rounded-[1.5rem] bg-slate-900 p-6">
                <div className="mb-5 flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-green-400" /></div>
                <div className="space-y-3 text-sm leading-7 text-slate-300">
                  {terminalLines.map((line, index) => <motion.div key={line} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + index * 0.35, repeat: Infinity, repeatDelay: 5 }} className={line.startsWith("$") ? "text-cyan-300" : "text-emerald-300"}>{line}</motion.div>)}
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} className="inline-block h-5 w-2 bg-cyan-300" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-16">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl md:p-12">
            <h3 className="text-3xl font-bold">About Me</h3>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">I specialize in backend systems where reliability, transaction safety, and performance matter. My work includes payment gateway integrations, REST APIs, webhooks, secure authentication, Redis caching, MySQL optimization, deployment pipelines, and internal automation tools.</p>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-5 py-16">
          <h3 className="text-3xl font-bold">Technical Skills</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {skills.map((skill, index) => <motion.div key={skill} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.025 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"><div className="mb-2 flex items-center justify-between text-sm"><span>{skill}</span><span className="text-slate-400">{74 + (index % 4) * 6}%</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-800"><motion.div initial={{ width: 0 }} whileInView={{ width: `${74 + (index % 4) * 6}%` }} transition={{ duration: 0.9, delay: index * 0.03 }} viewport={{ once: true }} className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" /></div></motion.div>)}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><h3 className="text-3xl font-bold">Featured Projects</h3><p className="mt-3 text-slate-300">Click any card to view project details.</p></div>
            <div className="flex flex-wrap gap-2">{categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-full px-4 py-2 text-sm transition ${activeCategory === category ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "border border-white/10 bg-white/10 text-slate-300 hover:bg-white/20"}`}>{category}</button>)}</div>
          </div>
          <motion.div layout className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project, index) => <motion.div key={project.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }} layout onClick={() => setSelectedProject(project)} className="group cursor-pointer rounded-[2rem] border border-white/10 bg-white/10 p-7 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.13] hover:shadow-2xl hover:shadow-blue-900/30"><div className="mb-5 flex items-center justify-between"><motion.div whileHover={{ rotate: 8, scale: 1.1 }} className="rounded-2xl bg-purple-500/20 p-3 text-2xl text-purple-200">{project.icon}</motion.div><motion.span whileHover={{ rotate: 45 }} className="text-slate-400 transition group-hover:text-white">↗</motion.span></div><h4 className="text-2xl font-bold">{project.title}</h4><p className="mt-4 leading-7 text-slate-300">{project.desc}</p><div className="mt-4 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 text-sm text-blue-100"><strong>Impact:</strong> {project.impact}</div><div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300">{tech}</span>)}</div></motion.div>)}
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16">
          <h3 className="text-3xl font-bold">Experience</h3>
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"><h4 className="text-2xl font-bold">Senior Software Engineer</h4><span className="text-cyan-200">June 2022 – Present</span></div>
            <p className="mt-2 text-slate-300">Akonto Payment Solutions Pvt Ltd, Noida</p>
            <ul className="mt-5 grid gap-3 text-slate-300 md:grid-cols-2">
              <li>• Integrated 50+ payment gateways</li><li>• Built scalable REST APIs in Node.js and PHP</li><li>• Optimized MySQL queries and Redis caching</li><li>• Built Telegram and Slack automation tools</li>
            </ul>
          </div>
        </section>

        <AnimatePresence>
          {selectedProject && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-md" onClick={() => setSelectedProject(null)}><motion.div initial={{ opacity: 0, scale: 0.85, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.85 }} className="max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950 p-7 shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="mb-5 flex items-start justify-between gap-5"><div><div className="mb-3 text-4xl">{selectedProject.icon}</div><h3 className="text-3xl font-bold">{selectedProject.title}</h3><p className="mt-2 text-sm text-cyan-200">{selectedProject.category} Project</p></div><button onClick={() => setSelectedProject(null)} className="rounded-full border border-white/10 px-4 py-2 text-slate-300 hover:bg-white/10">✕</button></div><p className="leading-8 text-slate-300">{selectedProject.desc}</p><div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 text-blue-100"><strong>Project Impact:</strong> {selectedProject.impact}</div><div className="mt-5 flex flex-wrap gap-2">{selectedProject.tech.map((tech) => <span key={tech} className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">{tech}</span>)}</div></motion.div></div>}
        </AnimatePresence>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/30 to-purple-600/30 p-8 text-center backdrop-blur-xl md:p-12">
            <h3 className="text-4xl font-bold">Let’s build something reliable.</h3>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">Open for Backend Developer, Node.js Developer, PHP Developer, and FinTech API roles.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-200">
              <motion.a whileHover={{ y: -4, scale: 1.04 }} href={github} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 px-5 py-3">GitHub</motion.a>
              <motion.a whileHover={{ y: -4, scale: 1.04 }} href={linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 px-5 py-3">LinkedIn</motion.a>
              <motion.a whileHover={{ y: -4, scale: 1.04 }} href={`mailto:${email}`} className="rounded-full bg-white/10 px-5 py-3">{email}</motion.a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">© {new Date().getFullYear()} Adarsh Singh. Built with React & Tailwind CSS.</footer>
      </div>
    </div>
  );
}
