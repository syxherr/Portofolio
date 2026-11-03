import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNpm, FaReact } from 'react-icons/fa6';
import {
  LuBoxes,
  LuFileText,
  LuFilm,
  LuMonitorSmartphone,
  LuPencilRuler,
  LuPresentation,
  LuRoute,
  LuSheet,
  LuWebhook,
} from 'react-icons/lu';
import {
  SiArduino,
  SiBlender,
  SiCssmodules,
  SiFramer,
  SiJira,
  SiMui,
  SiObsstudio,
  SiPostman,
  SiReactquery,
  SiSwagger,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import AnimatedList from '../../../ui/AnimatedList/AnimatedList';
import styles from './Skills.module.css';

type Skill = { name: string; icon?: IconType };
type Group = { title: string; items: Skill[] };

// Mau tambah/ubah skill? Cukup edit array di bawah ini. Nomor kolom otomatis.
const GROUPS: Group[] = [
  {
    title: 'Web foundations',
    items: [
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'Responsive design', icon: LuMonitorSmartphone },
    ],
  },
  {
    title: 'UI tools & frameworks',
    items: [
      { name: 'React', icon: FaReact },
      { name: 'Vite', icon: SiVite },
      { name: 'MUI', icon: SiMui },
      { name: 'Motion', icon: SiFramer },
      { name: 'CSS Modules', icon: SiCssmodules },
    ],
  },
  {
    title: 'Routing & data',
    items: [
      { name: 'TanStack Router', icon: LuRoute },
      { name: 'TanStack Query', icon: SiReactquery },
      { name: '@nxweb/react', icon: LuBoxes },
      { name: 'REST API integration', icon: LuWebhook },
    ],
  },
  {
    title: 'Development tools',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Swagger', icon: SiSwagger },
      { name: 'Jira', icon: SiJira },
      { name: 'npm', icon: FaNpm },
    ],
  },
  {
    title: 'Design & office',
    items: [
      { name: 'Figma', icon: FaFigma },
      { name: 'UI/UX design', icon: LuPencilRuler },
      { name: 'Microsoft Word', icon: LuFileText },
      { name: 'Excel', icon: LuSheet },
      { name: 'PowerPoint', icon: LuPresentation },
    ],
  },
];

// Isi kotak kiri (AnimatedList). Deskripsi di bawah ini cuma contoh, silakan ubah.
const TOOLS = [
  { icon: <FaReact />, title: 'React', description: 'UI library' },
  { icon: <SiTypescript />, title: 'TypeScript', description: 'Typed JavaScript' },
  { icon: <SiVite />, title: 'Vite', description: 'Build tool' },
  { icon: <FaFigma />, title: 'Figma', description: 'UI/UX design' },
  { icon: <SiPostman />, title: 'Postman', description: 'API testing' },
  { icon: <SiSwagger />, title: 'Swagger', description: 'API docs' },
  { icon: <SiJira />, title: 'Jira', description: 'Task tracking' },
  { icon: <FaGithub />, title: 'GitHub', description: 'Version control' },
  { icon: <SiBlender />, title: 'Blender', description: '3D modeling' },
  { icon: <LuFilm />, title: 'Premiere Pro', description: 'Video editing' },
  { icon: <SiArduino />, title: 'Arduino', description: 'Microcontroller' },
  { icon: <SiObsstudio />, title: 'OBS Studio', description: 'Screen recording' },
];

function TerminalCard({ path, className = '', children }: { path: string; className?: string; children: ReactNode }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.cardBar}>
        <i />
        <i />
        <i />
        <p>{path}</p>
      </div>
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
}

function Chip({ name, icon: Icon }: Skill) {
  return (
    <li className={styles.chip}>
      {Icon && <Icon aria-hidden />}
      {name}
    </li>
  );
}

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={`${styles.intro} sr-top`}>
        <p className={styles.eyebrow}>&gt; ls ./skills</p>
        <h2 className="heading">Skills</h2>
        <p className={styles.lead}>Teknologi dan tools yang aku pakai.</p>
      </div>

      <div className={`${styles.layout} sr-bottom`}>
        <TerminalCard path="~/skills/tools" className={styles.toolsCard}>
          <h3 className={styles.toolsTitle}>tools</h3>
          <AnimatedList
            items={TOOLS}
            theme="dark"
            frame={false}
            width="100%"
            maxHeight={300}
            accentColor="#a78bfa"
            animation="slide"
            animateOnce
          />
        </TerminalCard>

        <TerminalCard path="~/skills/">
          <div className={styles.groups}>
            {GROUPS.map((group, i) => (
              <div className={styles.group} key={group.title}>
                <div className={styles.groupHead}>
                  <h3>{group.title}</h3>
                  <em>{String(i + 1).padStart(2, '0')}</em>
                </div>
                <ul className={styles.chips}>
                  {group.items.map((s) => (
                    <Chip key={s.name} {...s} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </TerminalCard>
      </div>
    </section>
  );
}