import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAIL = "mhosseini@torontomu.ca";
const LINKEDIN_URL = "https://www.linkedin.com/in/mahsa-hosseini-094106246/";

// 🔐 EmailJS config – must match your dashboard
const EMAILJS_SERVICE_ID = "service_l5kmtum";
const EMAILJS_TEMPLATE_ID = "template_7akg8g9";
const EMAILJS_PUBLIC_KEY = "_rBEVQhsj99Vo7nrW";

const projects = [
  {
    title: "Job Tracker Web App",
    timeline: "2025",
    tech: "React, Vite, Tailwind CSS, LocalStorage",
    live: "https://job-tracker-chi-seven.vercel.app",
    github: "https://github.com/mahsa-ho/job-tracker",
    bullets: [
      "Built a responsive job application tracking board with dark mode, search, and status filters.",
      "Keeps data in LocalStorage so applications stay after refresh.",
      "Designed a clean UI using reusable components and modern layout patterns.",
    ],
  },
  {
    title: "Weather Dashboard — React + API Integration",
    timeline: "2025",
    tech: "React, REST API, Async JS",
    live: "",
    github: "",
    bullets: [
      "Shows real-time weather for multiple cities using external APIs.",
      "Handled loading and error states using conditional rendering and state.",
      "Practised working with JSON data, async requests, and responsive card layouts.",
    ],
  },
  {
    title: "Robot Guidance System — Assembly",
    timeline: "2025",
    tech: "Assembly",
    live: "",
    github: "",
    bullets: [
      "Developed autonomous robot navigation using sensor interrupts to handle real-time environmental inputs.",
      "Implemented deterministic branching and control logic for real-time movement decisions under constraints.",
      "Debugged sensor-driven control logic by tracing execution paths in real-time scenarios.",
      "Analyzed execution timing and control flow to identify latency sources and optimize real-time system responsiveness.",
    ],
  },
  {
    title: "University Enrollment System — Oracle SQL & Flask",
    timeline: "2025",
    tech: "Python, Flask, Oracle SQL",
    live: "",
    github: "",
    bullets: [
      "Designed and built a mini enrollment system with CRUD for students and courses.",
      "Implemented a normalized Oracle SQL schema with foreign keys and constraints.",
      "Created simple web pages for searching, adding, and updating enrollment records.",
    ],
  },
  {
    title: "Bookstore Interface — JavaFX → React UI",
    timeline: "2024",
    tech: "React, JavaFX (legacy), UI Refactor",
    live: "",
    github: "",
    bullets: [
      "Refactored a JavaFX desktop bookstore app into a modern React-based single-page UI.",
      "Implemented search, filtering, and cart state management using React hooks.",
      "Improved UX by simplifying navigation and making the layout fully responsive.",
    ],
  },
];


export default function App() {
  const [dark, setDark] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Send using EmailJS (no mail app)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setFormStatus("Please fill in all fields ✨");
      return;
    }

    setIsSending(true);
    setFormStatus("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setForm({ name: "", email: "", message: "" });
      setFormStatus("Thank you! Your message has been sent 💌");
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormStatus(
        "Oops! Something went wrong 😢 Please check the keys in EmailJS (service, template, public key) and try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={`page ${dark ? "page-dark" : ""}`}>
      {/* floating petals */}
      <Petals />

      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <span className="logo">🌸</span>
          <span className="brand">Mahsa Hosseini</span>
        </div>

        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          {/* Download resume button */}
          <a
            href="/Mahsa_Hosseini_Resume.pdf"
            className="nav-resume sparkle"
            download
          >
            ⬇ Resume
          </a>

          <button
            className="toggle sparkle"
            onClick={() => setDark((prev) => !prev)}
          >
            {dark ? "☀ Light" : "🌙 Dark"}
          </button>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="shell">
        {/* HERO */}
        <section className="hero fade-up">
          <div className="hero-text">
            <p className="hero-pill">Computer Engineering Student</p>
            <h1>
              Hi, I&apos;m Mahsa.&nbsp;
              <span className="hero-line">
                I build{" "}
                <span className="gradient-text">modern web apps</span>
                <span className="hero-react"> with React.</span>
              </span>
            </h1>
            <p className="hero-subtitle">
              I love front-end development, clean UI, and tools that make life
              easier — like job tracking dashboards, enrollment systems, and
              data-driven apps.
            </p>

            <div className="hero-buttons">
              <a
                href="https://github.com/mahsa-ho"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline sparkle"
              >
                🐙 GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-solid sparkle"
              >
                🔗 LinkedIn
              </a>
            </div>

            {/* cute tech tags */}
            <div className="hero-tags">
              <span className="hero-tag">React</span>
              <span className="hero-tag">Front-end</span>
              <span className="hero-tag">UI Design</span>
              <span className="hero-tag">Web Apps</span>
            </div>
          </div>

          <div className="hero-card fade-up delay-1">
            <p className="card-title">Quick snapshot</p>
            <ul>
              <li>📍 Toronto, ON, Canada</li>
              <li>🎓 B.Eng. Computer Engineering (in progress)</li>
              <li>💻 React, JavaScript, Python, SQL</li>
              <li>🌱 Looking for 2026 internships</li>
            </ul>
          </div>
        </section>

        <div className="divider">
          <span />
          <span className="divider-icon">🌸</span>
          <span />
        </div>

        {/* PROJECTS */}
        <section id="projects" className="section fade-up">
          <div className="section-header">
            <span className="section-emoji">📂</span>
            <h2>Featured Projects</h2>
          </div>
          <p className="section-subtitle">
            A few projects that helped me practise React, APIs, and building
            real tools.
          </p>

          <div className="project-grid">
            {projects.map((p) => (
              <article
                key={p.title}
                className="project-card hover-lift"
                onClick={() => setSelectedProject(p)}
              >
                <div className="project-main">
                  <div className="project-title-row">
                    <h3>{p.title}</h3>
                    <span className="badge">{p.timeline}</span>
                  </div>
                  <p className="project-tech">{p.tech}</p>
                  <ul className="project-list">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-solid small sparkle"
                      onClick={(e) => e.stopPropagation()}
                    >
                      🌐 Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline small sparkle"
                      onClick={(e) => e.stopPropagation()}
                    >
                      🧾 Source Code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="divider">
          <span />
          <span className="divider-icon">✨</span>
          <span />
        </div>

        {/* ABOUT + RESUME SECTION */}
        <section id="about" className="section resume-section fade-up">
          <div className="section-header">
            <span className="section-emoji">🙋‍♀️</span>
            <h2>About & Resume</h2>
          </div>

          <p className="section-subtitle">
            Computer Engineering student with hands-on experience in software
            development, automation, and data-driven systems. Skilled in React,
            Python, Java, and relational databases. Passionate about building
            user-friendly web applications and clean UI.
          </p>

          {/* quick skill chips */}
          <div className="resume-skillchips">
            <span className="skill-chip">C/C++</span>
            <span className="skill-chip">Python</span>
            <span className="skill-chip">Java</span>
            <span className="skill-chip">React</span>
            <span className="skill-chip">SQL</span>
            <span className="skill-chip">APIs</span>
            <span className="skill-chip">Git & GitHub</span>
          </div>

          {/* Skill cards */}
          <div className="resume-skillgrid">
            <div className="resume-card">
              <p className="resume-card-title">Programming</p>
              <p>C/C++, Python, Java, Object-Oriented Programming, SQL</p>
            </div>
            <div className="resume-card">
              <p className="resume-card-title">Systems & Performance</p>
              <p>
                Debugging, Performance Analysis, Simulation-based Analysis,
                Hardware–Software Interaction
              </p>
            </div>
            <div className="resume-card">
              <p className="resume-card-title">AI & LLM Systems</p>
              <p>
                Large Language Models (LLMs), prompt engineering concepts, model
                execution workflows
              </p>
            </div>
            <div className="resume-card">
              <p className="resume-card-title">Tools & Development</p>
              <p>Git, GitHub, Linux/Unix, VS Code, REST APIs, JSON</p>
            </div>
            <div className="resume-card">
              <p className="resume-card-title">Backend Fundamentals</p>
              <p>API integration, Relational Databases, Node.js basics</p>
            </div>
            <div className="resume-card">
              <p className="resume-card-title">Frontend & Architecture</p>
              <p>React, Tailwind CSS, Responsive UI, State Management</p>
            </div>
          </div>

          {/* Project overview (resume-style) */}
          <div className="resume-block fade-up delay-1">
            <h3 className="resume-section-title">Projects Overview</h3>
            <ul className="resume-list">
              <li>
                <strong>Personal Portfolio Website 🌸</strong> – React +
                Tailwind-inspired styling with pink aesthetic theme, animations,
                dark mode, and deployed on Vercel.
              </li>
              <li>
                <strong>Job Tracker Dashboard</strong> – job applications board
                with search, filters, and LocalStorage persistence.
              </li>
              <li>
                <strong>Weather Dashboard</strong> – real-time API integration
                with responsive cards and error handling.
              </li>
              <li>
                <strong>University Enrollment System</strong> – Oracle SQL +
                Flask backend with normalized schema and CRUD workflows.
              </li>
              <li>
                <strong>Bookstore UI</strong> – migrated a JavaFX-based app to a
                modern React front-end.
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="resume-block fade-up delay-2">
            <h3 className="resume-section-title">Experience</h3>
            <div className="resume-card resume-card-wide">
              <p className="resume-card-title">
                IT Apprentice / Network Technician — Gharb Shimi Co., Iran
              </p>
              <p className="resume-meta">2020 – 2021</p>
              <ul className="resume-list">
                <li>
                  Installed and maintained operating systems and network
                  hardware to ensure stable system performance.
                </li>
                <li>
                  Diagnosed and resolved hardware, software, and network issues
                  using structured troubleshooting.
                </li>
                <li>
                  Provided technical support and system maintenance under time
                  pressure in operational environments.
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="resume-block fade-up delay-3">
            <h3 className="resume-section-title">Education</h3>
            <div className="resume-card resume-card-wide">
              <p className="resume-card-title">
                B.Eng. in Computer Engineering (Software)
              </p>
              <p className="resume-meta">
                Toronto Metropolitan University — Expected 2027
              </p>
            </div>
          </div>
        </section>

        <div className="divider">
          <span />
          <span className="divider-icon">💌</span>
          <span />
        </div>

        {/* CONTACT – EmailJS form */}
        <section id="contact" className="section fade-up">
          <div className="section-header">
            <span className="section-emoji">📬</span>
            <h2>Contact</h2>
          </div>
          <p className="section-subtitle">
            Best way to reach me is by email or LinkedIn. You can also send me a
            message directly using this little pink form ✨
          </p>

          <div className="contact-layout">
            {/* left: info */}
            <div className="resume-card resume-card-wide">
              <p className="resume-card-title">Let&apos;s connect 💖</p>
              <p style={{ fontSize: 13, marginBottom: 10 }}>
                I&apos;m open to internship opportunities, software projects,
                and collaborations. Feel free to reach out any time.
              </p>

              <div className="contact-row" style={{ marginTop: 8 }}>
                <a
                  href={`mailto:${EMAIL}`}
                  className="btn btn-outline sparkle"
                >
                  ✉️ {EMAIL}
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline sparkle"
                >
                  🔗 LinkedIn profile
                </a>
              </div>

              <div
                style={{
                  marginTop: 14,
                  display: "flex",
                  gap: 8,
                  fontSize: 18,
                }}
              >
                <span className="floaty">💖</span>
                <span className="floaty">🌸</span>
                <span className="floaty">✨</span>
              </div>
            </div>

            {/* right: form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here…"
                />
              </div>

              <button
                type="submit"
                className="btn btn-solid sparkle"
                disabled={isSending}
              >
                {isSending ? "Sending…" : "💌 Send message"}
              </button>

              {formStatus && <p className="form-status">{formStatus}</p>}
            </form>
          </div>
        </section>
      </main>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-card fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <p className="modal-tag">Project details</p>
            <h3 className="modal-title">{selectedProject.title}</h3>
            <p className="modal-meta">
              {selectedProject.timeline} • {selectedProject.tech}
            </p>
            <ul className="resume-list modal-list">
              {selectedProject.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="modal-links">
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-solid small sparkle"
                >
                  🌐 Live Demo
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline small sparkle"
                >
                  🧾 Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* 🌸 falling petals component */
function Petals() {
  const petals = Array.from({ length: 14 });

  return (
    <div className="petals">
      {petals.map((_, i) => (
        <span key={i} className={`petal petal-${(i % 7) + 1}`}>
          🌸
        </span>
      ))}
    </div>
  );
}
