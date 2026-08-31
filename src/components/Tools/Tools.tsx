import styles from './Tools.module.css';

const TOOLS = [
  'adobepremiere', 'blender', 'arduino2', 'linux',
  'firebase', 'androidstudio', 'figma', 'notion',
];

export default function Tools() {
  return (
    <section className={styles.tools} id="tools">
      <h2 className={`heading sr-right`}>Tools</h2>
      <div className={`${styles.toolsContainer} sr-left`}>
        {TOOLS.map((tool) => (
          <div className={styles.toolsBox} key={tool}>
            <img src={`images/${tool}.png`} alt={tool} />
          </div>
        ))}
      </div>
    </section>
  );
}
