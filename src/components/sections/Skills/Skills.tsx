import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNpm,
  FaFigma,
  FaCodeBranch,
  FaGithub,
  FaMicrosoft,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMui,
  SiFramer,
  SiCssmodules,
  SiReactquery,
  SiPostman,
  SiSwagger,
  SiTrello,
  SiObsstudio,
  SiNotion,
} from 'react-icons/si';
import {
  LuRoute,
  LuWebhook,
  LuBoxes,
  LuPencilRuler,
  LuFileText,
  LuComponent,
  LuMonitorSmartphone,
  LuSparkles,
  LuBrush,
  LuDatabase,
  LuFlaskConical,
  LuBookOpen,
  LuPackage,
  LuLayoutDashboard,
  LuCodeXml,
  LuFilm,
} from 'react-icons/lu';
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
    ],
  },
  {
    title: 'UI development',
    items: [
      { name: 'Component-based UI', icon: LuComponent },
      { name: 'Responsive layout', icon: LuMonitorSmartphone },
      { name: 'UI animation', icon: LuSparkles },
      { name: 'Scoped styling', icon: LuBrush },
    ],
  },
  {
    title: 'Routing & data',
    items: [
      { name: 'Client-side routing', icon: LuRoute },
      { name: 'Server state management', icon: LuDatabase },
      { name: 'REST API integration', icon: LuWebhook },
    ],
  },
  {
    title: 'Development workflow',
    items: [
      { name: 'Version Control', icon: FaCodeBranch },
      { name: 'API testing', icon: LuFlaskConical },
      { name: 'API documentation', icon: LuBookOpen },
      { name: 'Package management', icon: LuPackage },
    ],
  },
  {
    title: 'Design & documentation',
    items: [
      { name: 'UI/UX design', icon: LuPencilRuler },
      { name: 'Wireframing & prototyping', icon: LuLayoutDashboard },
      { name: 'Technical documentation', icon: LuFileText },
    ],
  },
];

// Isi kotak kiri (AnimatedList). Deskripsi di bawah ini cuma contoh, silakan ubah.
const TOOLS = [
  { icon: <LuCodeXml size={23} />, title: 'Antigravity', description: 'AI code editor' },
  { icon: <FaGithub size={23} />, title: 'GitHub / GitLab', description: 'Version control' },
  { icon: <FaReact size={23} />, title: 'React', description: 'UI library' },
  { icon: <SiMui size={23} />, title: 'MUI', description: 'Component library' },
  { icon: <SiFramer size={23} />, title: 'Motion', description: 'Animation library' },
  { icon: <SiCssmodules size={23} />, title: 'CSS Modules', description: 'Scoped styling' },
  { icon: <LuRoute size={23} />, title: 'TanStack Router', description: 'Routing' },
  { icon: <SiReactquery size={23} />, title: 'TanStack Query', description: 'Server state' },
  { icon: <LuBoxes size={23} />, title: '@nxweb/react', description: 'Framework' },
  { icon: <FaNpm size={23} />, title: 'npm', description: 'Package manager' },
  { icon: <SiPostman size={23} />, title: 'Postman', description: 'API testing' },
  { icon: <SiSwagger size={23} />, title: 'Swagger', description: 'API docs' },
  { icon: <FaFigma size={23} />, title: 'Figma', description: 'UI/UX design' },
  { icon: <SiNotion size={23} />, title: 'Notion', description: 'Notes & docs' },
  { icon: <SiTrello size={23} />, title: 'Trello', description: 'Task tracking' },
  { icon: <FaMicrosoft size={23} />, title: 'Microsoft Office', description: 'Documents' },
  { icon: <SiObsstudio size={23} />, title: 'OBS Studio', description: 'Screen recording' },
  { icon: <LuFilm size={23} />, title: 'Premiere Pro', description: 'Video editing' },
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
        <p className={styles.lead}>The technologies and tools I work with</p>
      </div>

      <div className={`${styles.layout} sr-bottom`}>
        <TerminalCard path="~/shas/tools" className={styles.toolsCard}>
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

        <TerminalCard path="~/shas/skills">
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




// import type { ReactNode } from 'react';
// import type { IconType } from 'react-icons';
// import {
//   FaJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaReact,
//   FaFigma,
//   FaCodeBranch,
//   FaGithub,
//   FaMicrosoft,
// } from 'react-icons/fa';
// import {
//   SiTypescript,
//   SiMui,
//   SiFramer,
//   SiCssmodules,
//   SiPostman,
//   SiSwagger,
//   SiTrello,
//   SiObsstudio,
//   SiNotion,
// } from 'react-icons/si';
// import {
//   LuRoute,
//   LuWebhook,
//   LuBoxes,
//   LuPencilRuler,
//   LuFileText,
//   LuDatabase,
//   LuFlaskConical,
//   LuBookOpen,
//   LuPackage,
//   LuLayoutDashboard,
//   LuCodeXml,
//   LuFilm,
// } from 'react-icons/lu';
// import AnimatedList from '../../../ui/AnimatedList/AnimatedList';
// import styles from './Skills.module.css';

// type Skill = { name: string; icon?: IconType };
// type Group = { title: string; items: Skill[] };

// // Mau tambah/ubah skill? Cukup edit array di bawah ini. Nomor kolom otomatis.
// const GROUPS: Group[] = [
//   {
//     title: 'Web foundations',
//     items: [
//       { name: 'JavaScript', icon: FaJs },
//       { name: 'TypeScript', icon: SiTypescript },
//       { name: 'HTML', icon: FaHtml5 },
//       { name: 'CSS', icon: FaCss3Alt },
//     ],
//   },
//   {
//     title: 'UI tools & frameworks',
//     items: [
//       { name: 'React', icon: FaReact },
//       { name: 'MUI', icon: SiMui },
//       { name: 'Motion', icon: SiFramer },
//       { name: 'CSS Modules', icon: SiCssmodules },
//     ],
//   },
//   {
//     title: 'Routing & data',
//     items: [
//       { name: 'TanStack Router/Query', icon: LuRoute },
//       { name: 'Client-side routing', icon: LuRoute },
//       { name: 'Server state management', icon: LuDatabase },
//       { name: 'REST API integration', icon: LuWebhook },
//             { name: '@nxweb/react', icon: LuBoxes },

//     ],
//   },
//   {
//     title: 'Development tools',
//     items: [
//       { name: 'Version Control', icon: FaCodeBranch },
//       { name: 'API testing', icon: LuFlaskConical },
//       { name: 'API documentation', icon: LuBookOpen },
//       { name: 'Package management', icon: LuPackage },
//     ],
//   },
//   {
//     title: 'Design & office',
//     items: [
//       { name: 'UI/UX design', icon: LuPencilRuler },
//       { name: 'Wireframing & prototyping', icon: LuLayoutDashboard },
//       { name: 'Technical documentation', icon: LuFileText },
//     ],
//   },
// ];

// // Isi kotak kiri (AnimatedList). Deskripsi di bawah ini cuma contoh, silakan ubah.
// const TOOLS = [
//   { icon: <LuCodeXml size={23} />, title: 'Antigravity', description: 'AI code editor' },
//   { icon: <FaGithub size={23} />, title: 'GitHub / GitLab', description: 'Version control' },
//   { icon: <SiPostman size={23} />, title: 'Postman', description: 'API testing' },
//   { icon: <SiSwagger size={23} />, title: 'Swagger', description: 'API docs' },
//   { icon: <FaFigma size={23} />, title: 'Figma', description: 'UI/UX design' },
//   { icon: <SiNotion size={23} />, title: 'Notion', description: 'Notes & docs' },
//   { icon: <SiTrello size={23} />, title: 'Trello', description: 'Task tracking' },
//   { icon: <FaMicrosoft size={23} />, title: 'Microsoft Office', description: 'Documents' },
//   { icon: <SiObsstudio size={23} />, title: 'OBS Studio', description: 'Screen recording' },
//   { icon: <LuFilm size={23} />, title: 'Premiere Pro', description: 'Video editing' },
// ];

// function TerminalCard({ path, className = '', children }: { path: string; className?: string; children: ReactNode }) {
//   return (
//     <div className={`${styles.card} ${className}`}>
//       <div className={styles.cardBar}>
//         <i />
//         <i />
//         <i />
//         <p>{path}</p>
//       </div>
//       <div className={styles.cardBody}>{children}</div>
//     </div>
//   );
// }

// function Chip({ name, icon: Icon }: Skill) {
//   return (
//     <li className={styles.chip}>
//       {Icon && <Icon aria-hidden />}
//       {name}
//     </li>
//   );
// }

// export default function Skills() {
//   return (
//     <section className={styles.skills} id="skills">
//       <div className={`${styles.intro} sr-top`}>
//         <p className={styles.eyebrow}>&gt; ls ./skills</p>
//         <h2 className="heading">Skills</h2>
//         <p className={styles.lead}>The technologies and tools I work with</p>
//       </div>

//       <div className={`${styles.layout} sr-bottom`}>
//         <TerminalCard path="~/shas/tools" className={styles.toolsCard}>
//           <AnimatedList
//             items={TOOLS}
//             theme="dark"
//             frame={false}
//             width="100%"
//             maxHeight={300}
//             accentColor="#a78bfa"
//             animation="slide"
//             animateOnce
//           />
//         </TerminalCard>

//         <TerminalCard path="~/shas/skills">
//           <div className={styles.groups}>
//             {GROUPS.map((group, i) => (
//               <div className={styles.group} key={group.title}>
//                 <div className={styles.groupHead}>
//                   <h3>{group.title}</h3>
//                   <em>{String(i + 1).padStart(2, '0')}</em>
//                 </div>
//                 <ul className={styles.chips}>
//                   {group.items.map((s) => (
//                     <Chip key={s.name} {...s} />
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </TerminalCard>
//       </div>
//     </section>
//   );
// }