import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import useScrollReveal from '../../../hooks/useScrollReveal';
import styles from './Experience.module.css';

type TimelineItem = {
  tag: string;
  date: string;
  title: string;
  org: string;
  points: string[];
  cert?: { href: string; label: string };
};

// Urutan dari yang paling baru. Mau tambah item? Cukup tambah satu blok { ... } di sini.
const TIMELINE_DATA: TimelineItem[] = [
  {
    tag: 'Internship',
    date: 'Jul 2026 - Present',
    title: 'Fullstack Developer Intern',
    org: 'Makers Institute',
    points: [
      'Implemented UI components based on Figma designs.',
      'Integrated web features with backend REST APIs.',
      'Synchronized local application data with data stored on the server.',
      'Handled data mapping across different sources/systems to prevent inconsistencies during cross-system processing.',
      'Conducted competitive benchmarking of several POS applications in Indonesia to inform the development of a multi-industry POS application.',
    ],
  },
  {
    tag: 'Elective Courses',
    date: 'Mar 2024 - Jul 2024',
    title: 'Computer and Network Security',
    org: 'IT Learning (web penetration testing)',
    points: [
      'Learned intercepting and testing HTTP requests using Burp Suite.',
      'Studied web exploitation techniques such as SQL Injection, Cross-Site Scripting (XSS), CSRF, and Denial of Service (DoS) simulation.',
      'Performed vulnerability scanning and reconnaissance using Nmap.',
      'Created web vulnerability reports detailing findings, risk assessments, and remediation recommendations.',
    ],
  },
  {
    tag: 'Kampus Merdeka',
    date: 'Agu 2023 - Dec 2023',
    title: 'Android Development',
    org: 'Bangkit Academy — led by Google, Tokopedia, Gojek, & Traveloka',
    points: [
      'Capstone Project: Developed a financial application for recording both income and expenses.',
      'Learned life path and soft skills development to support a professional career.',
      'Relevant Coursework: SOLID Programming Principles, Kotlin Programming, Intermediate Android Development, Building Android Apps with Jetpack Compose, Android Database Integration, and Associate Android Developer Preparation.',
    ],
    cert: { href: 'Bangkit Certificate.pdf', label: 'Certificate' },
  },
];

export default function Experience() {
  useScrollReveal();

  // Penanda: sudah sampai ujung bawah timeline atau belum
  const timelineRef = useRef<HTMLOListElement>(null);
  const [atEnd, setAtEnd] = useState(false);

  const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ['start center', 'end end'],
});

useMotionValueEvent(scrollYProgress, 'change', (v) => setAtEnd(v > 0.60));
  return (
    <section className={styles.experience} id="experience">
      <div className={styles.layout}>
        <aside className={styles.left}>
          <div className={`${styles.titleWrap} sr-top`}>
            <AnimatePresence mode="wait">
              <motion.h2
  key={atEnd ? 'end' : 'start'}
  className={`${styles.title} ${atEnd ? styles.titleEnd : ''}`}
  initial={{ opacity: 0, y: -24 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 24 }}
  transition={{ duration: 0.4 }}
>
                {atEnd ? 'Learning by doing' : 'How I got here'}
              </motion.h2>
            </AnimatePresence>
          </div>

          <div className={`${styles.collegeCard} sr-bottom`}>
            <p className={styles.cardLabel}>College</p>
            <h3>Universitas Teknologi Bandung</h3>
            <p className={styles.degree}>
              <span>Bachelor</span> of Computer Science
            </p>
            <p className={styles.date}>Sep 2021 - Nov 2025</p>
            <p className={styles.thesis}>
  Thesis: <em>Pembangunan Aplikasi Finfix Untuk Pencatatan Keuangan Berbasis Android.</em>
</p>

<div className={styles.divider} />

<p className={styles.cardLabel}>Organization</p>
<p className={styles.orgName}>Himpunan Mahasiswa Teknologi Informatika</p>
<p className={styles.orgRole}>KOMINFO, Creative Media staff</p>

<a
  href="Surat Keputusan.pdf"
  target="_blank"
  rel="noreferrer"
  className={`${styles.certBtn} cursor-target`}
>
  Organization Doc
</a>
          </div>
        </aside>

        {/* KANAN: timeline */}
        <ol className={styles.timeline} ref={timelineRef}>
          {TIMELINE_DATA.map((item, i) => {
            const [start, end] = item.date.split(' - ');
            const [first, ...rest] = item.title.split(' ');

            return (
              <li className={styles.item} key={i}>
                <span className={styles.dot} />
                <div className={`${styles.card} sr-right`}>
                  <p className={styles.meta}>
                    <span>{item.tag}</span> | {start} -{' '}
                    {end === 'Present' ? (
                      <span className={styles.presentHighlight}>Present</span>
                    ) : (
                      end
                    )}
                  </p>

                  <h3 className={styles.role}>
                    <span>{first}</span> {rest.join(' ')}
                  </h3>
                  <p className={styles.company}>{item.org}</p>

                  <ul className={styles.points}>
                    {item.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>

                  {item.cert && (
                    <a
                      href={item.cert.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.certBtn} cursor-target`}
                    >
                      {item.cert.label}
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}