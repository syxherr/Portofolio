import styles from './Organization.module.css';

export default function Organization() {
  return (
    <section className={styles.organization} id="organization">
      <h2 className="heading sr-top">Organization</h2>
      <h4 className="sr-top">
        <span>Himpunan</span> Mahasiswa Teknologi Informatika
      </h4>
      <h3>
        KOMINFO,<span> Creative Media</span> Staff
      </h3>
      <p>Mar 2024 - Jan 2025</p>
      <ul className="sr-left">
        <li>Managed TikTok and Instagram accounts of Himpunan Mahasiswa Teknologi Informatika (HIMATIF).</li>
        <li>Create promotional and information content through TikTok and Instagram.</li>
        <li>Planned, coordinated, and executed various organizational events, from initial planning to final evaluation.</li>
        <li>Led a division in a specific event by coordinating team members and managing divisional activities.</li>
      </ul>
      <a href="Surat Keputusan.pdf" target="_blank" rel="noreferrer" className={`${styles.docBtn} sr-bottom`}>
        Documentation
      </a>
    </section>
  );
}
