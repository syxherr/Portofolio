import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './Education.module.css';

const EDUCATION_DATA = [
  {
    tag: 'College',
    date: 'Sep 2021 - Nov 2025',
    institution: 'Universitas Teknologi Bandung',
    degree: <><span>Bachelor</span> of Computer Science (<span>S.Kom</span>)</>,
    items: [
      'Thesis Title: Pembangunan Aplikasi Finfix Untuk Pencatatan Keuangan Berbasis Android.',
      'Soft Skill Courses: Personal Development, Professional Development, and Project Management.',
      'Programming languages: Kotlin, HTML, CSS, Java, Python, C/C++.',
      'Courses: Database, Web Development, Android Development, Cyber Security, Computer Networks, & Internet of Things (IoT).',
    ],
  },
  {
    tag: 'Kampus Merdeka',
    date: 'Agu 2023 - Dec 2023',
    institution: 'Bangkit Academy — led by Google, Tokopedia, Gojek, & Traveloka',
    degree: <><span>Android</span> Development</>,
    items: [
      'Capstone Project: Developed a financial application for recording both income and expenses.',
      'Learned life path and soft skills development to support a professional career.',
      'Relevant Coursework: SOLID Programming Principles, Kotlin Programming, Intermediate Android Development, Building Android Apps with Jetpack Compose, Android Database Integration, and Associate Android Developer Preparation.',
    ],
    cert: { href: 'Bangkit Certificate.pdf', label: 'Certificate' },
  },
  {
    tag: 'Elective Courses',
    date: 'Mar 2024 - Jul 2024',
    institution: 'IT Learning (web penetration testing)',
    degree: <><span>Computer </span>and <span>Network Security</span></>,
    items: [
      'Learned intercepting and testing HTTP requests using Burp Suite.',
      'Studied web exploitation techniques such as SQL Injection, Cross-Site Scripting (XSS), CSRF, and Denial of Service (DoS) simulation.',
      'Performed vulnerability scanning and reconnaissance using Nmap.',
      'Created web vulnerability reports detailing findings, risk assessments, and remediation recommendations.',
    ],
  },
];

export default function Education() {
  useScrollReveal();
  return (
    <section className={styles.education} id="education">
      <h2 className="heading sr-top">Education</h2>
      <div className={`${styles.timelineItems} sr-top`}>
        {EDUCATION_DATA.map((edu, i) => (
          <div className={`${styles.timelineItem} sr-bottom`} key={i}>
            <div className={styles.timelineDot} />
            <div className={styles.timelineDate}>
              {i % 2 === 0 ? (
                <><span>{edu.tag}</span> | {edu.date}</>
              ) : (
                <>{edu.date} | <span>{edu.tag}</span></>
              )}
            </div>
            <div className={styles.timelineContent}>
              <h3>{edu.institution}</h3>
              <p>{edu.degree}</p>
              <ul>
                {edu.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
              {edu.cert && (
                <a href={edu.cert.href} target="_blank" rel="noreferrer" className={`${styles.certBtn} cursor-target`}>
                  {edu.cert.label}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
