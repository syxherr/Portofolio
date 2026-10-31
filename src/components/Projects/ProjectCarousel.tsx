import { useState, useMemo, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GitHubCard from "./GitHubCard";
import GitLabCalendar from "./GitLabCalendar";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";
import {
  ChevronsRight,
  ChevronsLeft,
  ChevronsLeftRight,
  SquareArrowOutUpRight,
} from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./ProjectCarousel.module.css";
import useScrollReveal from "../../hooks/useScrollReveal";

type Project = {
  project: string;
  category: string;
  role: string;
  roleColor: string;
  company: string | null;
  companyColor: string | null;
  status: string | null;
  statusColor: string | null;
  tagline: string;
  desc: string;
  tech: string[];
  img: string;
  github: string | null;
  link: string | null;
};

const projects: Project[] = [
  {
    project: "Task Management",
    category: "Front-End",
    role: "Front-End Developer",
    roleColor: "react",
    company: null,
    companyColor: null,
    status: null,
    statusColor: "onprogress",
    tagline: "Task management with drag or drop like Kanban board.",
    desc: "A personal task manager that helps you stay on top of your work. Organize tasks by priority, track progress across columns, star what matters most, and undo any mistake in one click.",
    tech: ["React", "Redux", "Zustand", "TypeScript"],
    img: "images/taskmanagement.png",
    github: "https://github.com/syxherr/TaskManagement.git",
    link: "https://task-management-ten-kohl.vercel.app/",
  },
  {
    project: "Pokemon Arena",
    category: "Front-End",
    role: "Front-End Developer",
    roleColor: "react",
    company: null,
    companyColor: null,
    status: null,
    statusColor: null,
    tagline:
      "A game where players compete using each Pokémon's abilities against each other.",
    desc: "Who's stronger? PokéArena lets you settle that debate with real stats. Pick two Pokémon, watch them go head-to-head, and may the best stat win.",
    tech: ["React", "Redux", "SWR", "TypeScript", "PokeApi"],
    img: "images/Pokemon Arena.png",
    github: "https://github.com/syxherr/pokeArena.git",
    link: "https://syxherr.github.io/pokeArena/",
  },
  {
    project: "OXI Application",
    category: "UI/UX",
    role: "UI/UX",
    roleColor: "pink",
    company: "OXI",
    companyColor: "orange",
    status: null,
    statusColor: null,
    tagline: "Mobile UI/UX design for a motorcycle community app.",
    desc: "Designed and prototyped the OXI mobile application for the OXI (Owner XMAX Indonesia) motorcycle community.",
    tech: ["Figma"],
    img: "images/oxi.png",
    github: null,
    link: "https://www.figma.com/proto/v5sR9h0OXFq10wHMGOUhrZ/oxi_application?node-id=0-1&t=RRwWoEa2Mbak3qy0-1",
  },
  {
    project: "Luxora Marketplace",
    category: "UI/UX",
    role: "UI/UX",
    roleColor: "pink",
    company: "Freelance",
    companyColor: "orange",
    status: null,
    statusColor: null,
    tagline: "Marketplace Web Application UI/UX Design",
    desc: "Designed the UI/UX, interactive prototypes, and user flows for a marketplace web application for both buyers and sellers.",
    tech: ["Figma"],
    img: "images/luxora.png",
    github: null,
    link: "https://www.figma.com/proto/g7bvFWrFAOMGjH5hRpdLSA/Luxora?page-id=0%3A1&node-id=71-1515",
  },
  {
    project: "Foodly",
    category: "UI/UX",
    role: "UI/UX",
    roleColor: "pink",
    company: "Freelance",
    companyColor: "orange",
    status: null,
    statusColor: "onprogress",
    tagline: "Mobile UI/UX design for a food delivery app.",
    desc: "Craving something? Foodly's got you. Browse restaurants, order your faves, and track your delivery — all in one. Designed with a focus on making the whole experience feel effortless and fun.",
    tech: ["Figma"],
    img: "images/foodly.png",
    github: null,
    link: "https://www.figma.com/proto/MgPcOu5YzNY39NJ2AFowFR/Foodly?t=KGc187UGgSQ3ROe5-1",
  },
  {
    project: "FinFix",
    category: "Other",
    role: "Mobile Developer",
    roleColor: "kotlin",
    company: "Bangkit Academy Capstone",
    companyColor: "red",
    status: null,
    statusColor: null,
    tagline: "Mobile application for tracking income and expenses.",
    desc: "Many people still struggle to record and track their expenses accurately, as they often rely solely on memory. Through this application, we hope to offer a practical solution that enables individuals and businesses to gain better financial control and achieve financial stability.",
    tech: ["Kotlin", "Firebase"],
    img: "images/logo.png",
    github: "https://github.com/syxherr/FinanceTrackingCapstone.git",
    link: null,
  },
];

type CardContentProps = {
  p: Project;
  progressRef: (el: HTMLDivElement | null) => void;
};

function CardContent({ p, progressRef }: CardContentProps) {
  return (
    <>
      <div className={styles.imgArea}>
        {p.img ? (
          <img src={p.img} alt={p.project} className={styles.img} />
        ) : (
          <div className={styles.imgPlaceholder}>Still in the Oven 🍳</div>
        )}
        <div className={styles.imgOverlay}>
          {p.status && (
            <span className={`${styles.badgeBeta} ${styles[p.statusColor ?? ""]}`}>
              <span className={`${styles.dot} ${styles[p.statusColor ?? ""]}`} />
              {p.status}
            </span>
          )}
          <h2 className={styles.overlayTitle}>{p.project}</h2>
          <p className={styles.overlaySubtitle}>{p.tagline}</p>
        </div>
      </div>

      <div className={styles.cardBody}>
        {(p.role || p.company) && (
          <div className={styles.metaRow}>
            {p.role && (
              <span
                className={`${styles.metaBadge} ${styles[p.roleColor] ?? ""}`}
              >
                {p.role}
              </span>
            )}
            {p.company && (
              <span
                className={`${styles.metaBadge} ${styles[p.companyColor ?? ""] ?? ""}`}
              >
                {p.company}
              </span>
            )}
          </div>
        )}
        <p className={styles.desc}>{p.desc}</p>
        <div className={styles.techPills}>
          {p.tech.map((t) => (
            <span key={t} className={styles.pill}>
              {t}
            </span>
          ))}
        </div>
        {(p.github || (p.link && p.link.trim())) && (
          <div className={styles.btnRow}>
            {p.status === "On Progress" ? (
              <span
                className={`${styles.btn} ${styles.btnDark} ${styles.btnDisabled}`}
              >
                Under Construction 🚧
              </span>
            ) : (
              p.github && (
                <a
                  href={p.github}
                  className={`${styles.btn} ${styles.btnDark}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ChevronsLeftRight
                    size={17}
                    strokeWidth={2.25}
                    style={{ marginLeft: "3px" }}
                  />
                </a>
              )
            )}
            {p.status === "In Development" ? (
              <span
                className={`${styles.btn} ${styles.btnOutline} ${styles.btnDisabled}`}
              >
                Under Construction 🚧
              </span>
            ) : (
              p.status !== "On Progress" &&
              p.link &&
              p.link.trim() && (
                <a
                  href={p.link}
                  className={`${styles.btn} ${styles.btnOutline}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.category === "UI/UX" ? "View Prototype" : "Visit Website"}
                  <SquareArrowOutUpRight
                    size={16}
                    strokeWidth={2.35}
                    style={{ marginLeft: "3px", color: "#fff" }}
                  />
                </a>
              )
            )}
          </div>
        )}
      </div>

      <div className={styles.progressBar}>
        <div ref={progressRef} className={styles.progressFill} />
      </div>
    </>
  );
}
export default function ProjectCarousel() {
  useScrollReveal();
  const [filter, setFilter] = useState("All");
  const [current, setCurrent] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categories = useMemo(
    () => ["My Activity", "All", ...new Set(projects.map((p) => p.category))],
    [],
  );

  const list = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  const handleFilter = useCallback((cat: string) => {
    setFilter(cat);
    setCurrent(0);
  }, []);


  return (
    <section className={styles.home} id="project">
      <h2 className="heading sr-top">
        My <span>Projects</span>
      </h2>
      <div className={styles.project}>
        <div className={`${styles.filterRow} sr-top`}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.filterActive : ""}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filter === "My Activity" ? (
          <div className={`${styles.activityWrapper} sr-bottom`}>
  <GitHubCard />
  <GitLabCalendar />
</div>
        ) : (
          <>
            <div className={`${styles.cardWrapper} sr-bottom`}>
              <button
                ref={prevRef}
                className={`${styles.navLeft} sr-left`}
                aria-label="Previous"
              >
                <ChevronsLeft size={40} />
              </button>

              <Swiper
                key={filter}
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                loop={false}
                speed={1500}
                spaceBetween={25}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSwiper={(swiper: SwiperCore) => {
                  swiperRef.current = swiper;
                  setTimeout(() => {
                    if (swiper.navigation) {
                      (swiper.params.navigation as any).prevEl = prevRef.current;
                      (swiper.params.navigation as any).nextEl = nextRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }
                  }, 0);
                }}
                onSlideChange={(swiper: SwiperCore) => {
                  setCurrent(swiper.activeIndex);
                  progressRefs.current.forEach((el) => {
                    if (el) el.style.width = "0%";
                  });
                }}
                onAutoplayTimeLeft={(_, __, percentage) => {
                  const idx = swiperRef.current?.activeIndex ?? 0;
                  const el = progressRefs.current[idx];
                  if (el) el.style.width = `${(1 - percentage) * 100}%`;
                }}
                className={styles.slideTrack}
              >
                {list.map((p, i) => (
                  <SwiperSlide key={`${filter}-${i}`}>
                    <div className={styles.card}>
                      <CardContent
                        p={p}
                        progressRef={(el) => (progressRefs.current[i] = el)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                ref={nextRef}
                className={`${styles.navRight} sr-right`}
                aria-label="Next"
              >
                <ChevronsRight size={40} />
              </button>
            </div>

            <div className={`${styles.dots} sr-top`}>
              {list.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dotBtn} ${i === current ? styles.dotActive : ""}`}
                  onClick={() => {
                    swiperRef.current?.slideTo(i);
                    setCurrent(i);
                  }}
                  aria-label={`Project ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
