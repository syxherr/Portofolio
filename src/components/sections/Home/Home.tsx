import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import TextType from "../../../styles/Animation/TextType/TextType";
import MagicBento from "../../../ui/MagicBento/MagicBento";
import TiltedCard from "../../../ui/TiltedCard/TiltedCard";
import useScrollReveal from "../../../hooks/useScrollReveal";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

function useIsMobile(breakpoint = 768) {
  const query = `(max-width: ${breakpoint}px)`;
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return isMobile;
}

// (TITLE dihapus)

const WORKING = {
  label: "Working at",
  title: "Makers Institute",
  role: "Fullstack Developer Intern",
};

const INTERESTED = {
  label: "Interested in",
  title: "Front-End or UI/UX",
  role: "React · TypeScript · Figma",
};

function InfoCard({
  label,
  title,
  role,
}: {
  label: string;
  title: string;
  role: string;
}) {
  return (
    <div className={styles.infoCard}>
      <span className={styles.infoLabel}>{label}</span>
      <div>
        <p className={styles.infoTitle}>{title}</p>
        <p className={styles.infoRole}>{role}</p>
      </div>
    </div>
  );
}

function Kicker() {
  return (
    <p className={styles.kicker}>
      I&apos;m <span>Shas</span>kia, a{" "}
      <TextType
        as="span"
        className={styles.textType}
        text={["Front-End Developer", "UI/UX Designer"]}
        typingSpeed={125}
        pauseDuration={2500}
        showCursor
        cursorCharacter="_"
        deletingSpeed={70}
        cursorBlinkDuration={0.5}
      />
    </p>
  );
}

function IntroParagraphs() {
  return (
    <div className={styles.aboutCols}>
      <p>
        Welcome to my portfolio! <span>Informatics Engineering</span> graduate
        from <span>Universitas Teknologi Bandung</span> with experience building
        web applications with <span>React</span>.
      </p>
      <p>
        I&apos;m passionate about <span>technology</span> and{" "}
        <span>design</span>, and I&apos;m seeking a{" "}
        <span>full-stack developer</span> role where I can work on real
        problems and keep learning on the job.
      </p>
      <p>Feel free to scroll down and check out my work!</p>
    </div>
  );
}

function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p>Find Me On</p>

      <a
        href="https://instagram.com/username"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://linkedin.com/in/shaskiapv"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <AiOutlineLinkedin />
      </a>

      <a
        href="https://github.com/syxherr"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </div>
  );
}

function OpenBadge() {
  return (
    <div className={styles.openBadge}>
      <span className={styles.pulseDot} />
      Open to opportunities
    </div>
  );
}

const BENTO_ITEMS = [
  {
    colSpan: 2,
    content: (
      <div>
        <OpenBadge />
        <Kicker />
        <IntroParagraphs />
      </div>
    ),
  },
  { content: <InfoCard {...WORKING} /> },
  { content: <InfoCard {...INTERESTED} /> },
];

function BandungTag({ small = false }: { small?: boolean }) {
  return (
    <p
      style={{
        background: "#302d2d86",
        color: "#eeecec",
        fontWeight: "bold",
        fontSize: "1.3rem",
        fontFamily: "Inter, sans-serif",
        padding: small ? "6px 12px" : "12px 20px",
        borderRadius: "10px",
        position: "absolute",
        top: small ? "10px" : "23px",
        left: small ? "10px" : "35px",
        width: "auto",
        margin: 0,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      Bandung, ID
    </p>
  );
}

export default function Home() {
  useScrollReveal();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section className={styles.home} id="home">
        <div className={styles.mHome}>
          <div className={styles.mTop}>
            <div className={styles.mPhoto}>
              <TiltedCard
                imageSrc="/images/profile2.png"
                altText="Shaskia"
                captionText=""
                containerWidth="176px"
                containerHeight="220px"
                imageWidth="176px"
                imageHeight="220px"
                rotateAmplitude={12}
                scaleOnHover={1.03}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent
                overlayContent={<BandungTag small />}
              />
            </div>

            <div className={styles.mInfo}>
              <div className={styles.mCard}>
                <InfoCard {...INTERESTED} />
              </div>
              <div className={styles.mCard}>
                <InfoCard {...WORKING} />
              </div>
            </div>
          </div>

          <div className={styles.mAbout}>
            <OpenBadge />
            <Kicker />
            <IntroParagraphs />

            <div className={styles.mActions}>
              <a
                href="Shaskia Putri Devi_resume.pdf"
                target="_blank"
                download
                className={styles.mCv}
              >
                Download CV
              </a>
              <SocialLinks className={styles.sosmed} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.home} id="home">
      <div className={styles.aboutWrap}>
        <MagicBento
          items={BENTO_ITEMS}
          columns={2}
          rowHeight={130}
          gap={12}
          radius={20}
          theme="dark"
          glowColor="#a78bfa"
          enableBorderGlow
          enableSpotlight
          spotlightRadius={300}
          clickEffect={false}
          textAutoHide={false}
          style={{
            gridAutoRows: "auto",
            gridTemplateRows: "auto minmax(150px, 1fr)",
          }}
        />
      </div>

      <div className={`${styles.photoCol} sr-top`}>
        <div className={styles.photoGroup}>
          <div className={styles.profileImg}>
            <TiltedCard
              imageSrc="/images/profile2.png"
              altText=" "
              captionText="scroll to check my work"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={15}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent={true}
              overlayContent={
                <p
                  style={{
                    background: "#302d2d86",
                    color: "#eeecec",
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                    fontFamily: "Inter, sans-serif",
                    padding: "12px 20px",
                    borderRadius: "10px",
                    position: "absolute",
                    top: "23px",
                    left: "35px",
                    width: "auto",
                    margin: 0,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Bandung, ID
                </p>
              }
            />
          </div>
        </div>

        <SocialLinks className={`${styles.sosmed} sr-bottom`} />

        <a
          href="Shaskia Putri Devi_resume.pdf"
          target="_blank"
          download
          className={`button type1 sr-left`}
        >
          Download CV
        </a>
      </div>
    </section>
  );
}