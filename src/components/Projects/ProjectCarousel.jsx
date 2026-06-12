import { useState } from "react";
import styles from "./ProjectCarousel.module.css";

// ✅ Tambah project baru di sini
const projects = [

    // img: 'images/logo.png',
    // title: 'FinFix',
    // tech: 'Android',
    // desc: 'A mobile application that tracks user expenses by utilizing the camera to capture shopping receipts.',
    // href: 'https://github.com/syxherr/FinanceTrackingCapstone.git',

  {
    role: "Mobile Developer",
    company: "Bangkit Academy Capstone",
    badgeColor: "beta",        // "beta" (kuning) | "live" (hijau) | "wip" (abu)
    type: "Mobile App",
    img: "images/logo.png",                 // URL gambar project, misal: "/images/taskboard.png"
    title: "FinFix",
    subtitle: "A finance management app for tracking income and expenses.",
    desc: "Many people still struggle to record and track their expenses accurately, as they often rely solely on memory. This is what inspired us to create an application that leverages technological advancements to simplify the financial recording process. Through this application, we hope to offer a practical solution that enables individuals and businesses to gain better financial control and achieve financial stability.",
    tech: ["Kotlin", "Firebase"],
    
    github: "https://github.com/syxherr/FinanceTrackingCapstone.git",
    demo: null,
  },
  {
    badge: "Live",
    badgeColor: "live",
    type: "WEB / APP",
    img: null,
    title: "NoteFlow",
    subtitle: "Manajemen catatan dengan kolaborasi real-time berbasis AI",
    desc: "Editor markdown, sinkronisasi multi-perangkat, dan fitur kolaborasi bersama untuk tim dan individu.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind", "WebSocket"],
    
    github: "https://github.com/",
    demo: "https://yourapp.vercel.app",
  },
  {
    badge: "Live",
    badgeColor: "live",
    type: "MOBILE",
    img: null,
    title: "OXI Application",
    subtitle: "UI/UX design & prototype untuk aplikasi mobile",
    desc: "Designing the UI/UX and creating prototype for the OXI (Owner XMAX Indonesia) mobile application.",
    tech: ["Figma", "UI/UX", "Prototype"],
    
    github: null,
    demo: "https://www.figma.com/design/v5sR9h0OXFq10wHMGOUhrZ/oxi_application?node-id=0-1",
  },
];

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const p = projects[current];
  const total = projects.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  return (
    <div className={styles.card}>
      {/* Image area dengan panah di dalamnya */}
      <div className={styles.imgArea}>
        {p.img
          ? <img src={p.img} alt={p.title} className={styles.img} />
          : <div className={styles.imgPlaceholder}>No preview</div>
        }
        <span className={styles.badgeType}>{p.type}</span>
        <div className={styles.imgNav}>
          <button className={styles.navBtn} onClick={prev} aria-label="Previous">←</button>
          <button className={styles.navBtn} onClick={next} aria-label="Next">→</button>
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <div className={styles.cardTop}>
          <span className={`${styles.badgeBeta} ${styles[p.badgeColor]}`}>
            <span className={styles.dot} />
            {p.role}
          </span>
          <span className={`${styles.badgeBeta} ${styles[p.badgeColor]}`}>
            <span className={styles.dot} />
            {p.company}
          </span>
          <div className={styles.dots}>
            {projects.map((_, i) => (
              <button
                key={i}
                className={`${styles.dotBtn} ${i === current ? styles.dotActive : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Project ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <h2 className={styles.title}>{p.title}</h2>
        <p className={styles.subtitle}>{p.subtitle}</p>
        <p className={styles.desc}>{p.desc}</p>

        <div className={styles.techPills}>
          {p.tech.map((t) => <span key={t} className={styles.pill}>{t}</span>)}
        </div>

        <div className={styles.btnRow}>
          {p.github && (
            <a href={p.github} className={`${styles.btn} ${styles.btnDark}`} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {p.demo && (
            <a href={p.demo} className={`${styles.btn} ${styles.btnOutline}`} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}