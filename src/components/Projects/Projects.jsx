import styles from './Projects.module.css';

const PROJECTS = [
  {
    img: 'images/4lampu.png',
    title: 'Smart Lamp',
    tech: 'Arduino',
    desc: 'An Arduino project that controls on/off switches for lamps via a local network using the ESP8266 module.',
    href: 'https://github.com/syxherr/Smart-Lamp.git',
  },
  {
    img: 'images/logo.png',
    title: 'FinFix',
    tech: 'Android',
    desc: 'A mobile application that tracks user expenses by utilizing the camera to capture shopping receipts.',
    href: 'https://github.com/syxherr/FinanceTrackingCapstone.git',
  },
  {
    img: 'images/parkingg.png',
    title: 'Parking System',
    tech: 'Arduino',
    desc: 'Developing an Arduino parking barrier system that manages access rights based on the UID of cards registered in the system.',
    href: 'https://github.com/syxherr/Parking-System.git',
  },
  {
    img: 'images/oxi.png',
    title: 'OXI Application',
    tech: 'UI/UX',
    desc: 'Designing the UI/UX and creating prototype for the OXI (Owner XMAX Indonesia) mobile application.',
    href: 'https://www.figma.com/design/v5sR9h0OXFq10wHMGOUhrZ/oxi_application?node-id=0-1',
  },
  {
    img: 'images/luxora.png',
    title: 'Luxora Marketplace',
    tech: 'UI/UX',
    desc: 'Designing the UI/UX and creating prototype for a marketplace for both sellers side and buyers side.',
    href: 'https://www.figma.com/proto/g7bvFWrFAOMGjH5hRpdLSA/Luxora?page-id=0%3A1&node-id=71-1515',
  },
  {
    img: 'images/moon.png',
    title: 'Solar System',
    tech: '3D Artist',
    desc: 'Create a 3D model of the solar system using Blender.',
    href: null,
  },
];

export default function Projects() {
  return (
    <section className={styles.project} id="project">
      <h2 className="heading sr-top">
        My <span>Projects</span>
      </h2>
      <div className={`${styles.projectContainer} sr-bottom`}>
        {PROJECTS.map((proj, i) => (
          <div className={styles.projectBox} key={i}>
            <img src={proj.img} alt={proj.title} />
            <h3>{proj.title}</h3>
            <h1><span>{proj.tech}</span></h1>
            <p>{proj.desc}</p>
            {proj.href && (
              <a href={proj.href} target="_blank" rel="noreferrer" className="btn">
                See Projects
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
