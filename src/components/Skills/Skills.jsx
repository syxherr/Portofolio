import styles from './Skills.module.css';

const SKILLS = ['sql', 'python', 'java', 'C++', 'kotlin', 'html', 'css', 'js'];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <h2 className="heading sr-left">Skills</h2>
      <div className={`${styles.skillsContainer} sr-right`}>
        {SKILLS.map((skill) => (
          <div className={styles.skillsBox} key={skill}>
            <img src={`images/${skill}.png`} alt={skill} />
          </div>
        ))}
      </div>
    </section>
  );
}
