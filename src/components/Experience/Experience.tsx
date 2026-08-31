import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './Experience.module.css';

type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  points: string[];
};

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Fullstack Developer Intern',
    company: 'Makers Institute',
    date: 'Jul 2026 - Present',
    points: [
      'Implemented UI components based on Figma designs.',
      'Integrated web features with backend REST APIs.',
      'Synchronized local application data with data stored on the server.',
      'Handled data mapping across different sources/systems to prevent inconsistencies during cross-system processing.'
    ],
  
  },
];

export default function Experience() {
  useScrollReveal();
  return (
    <section className={styles.experience} id="experience">
      <h2 className="heading sr-top">Experience</h2>
      {EXPERIENCE_DATA.map((exp, i) => {
        const dateParts = exp.date.split('-').map((part) => part.trim());
        const isPresent = dateParts[dateParts.length - 1] === 'Present';

        return (
          <div className={styles.item} key={i}>
            <h4 className="sr-top">
              <span className={styles.roleHighlight}>{exp.role.split(' ')[0]}</span>{' '}
              {exp.role.split(' ').slice(1).join(' ')}
            </h4>
            <h3 className="sr-right">{exp.company}</h3>
            <p className="sr-bottom">
              {dateParts[0]}
              {dateParts.length > 1 && (
                <>
                  {' - '}
                  {isPresent ? (
                    <span className={styles.presentHighlight}>Present</span>
                  ) : (
                    dateParts[1]
                  )}
                </>
              )}
            </p>
            <ul className="sr-right">
              {exp.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}