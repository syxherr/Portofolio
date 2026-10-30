import styles from "./Home.module.css";
import TextType from "../../styles/Animation/TextType";
import MagicBento from "../MagicBento/MagicBento";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import TiltedCard from "../../ui/TiltedCard";
import useScrollReveal from "../../hooks/useScrollReveal";

const BENTO_ITEMS = [
  {
    colSpan: 2,
    content: (
      <div>
        <div className={styles.openBadge}>
          <span className={styles.pulseDot} />
          Open to opportunities
        </div>

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

        <h1 className={styles.aboutTitle}>
          I turn designs into interfaces people enjoy using.
        </h1>

        <div className={styles.aboutCols}>
          <p>
            Welcome to my Portfolio! Fresh graduate in{" "}
            <span>Informatics Engineering</span> from Universitas Teknologi
            Bandung with a strong passion for <span>Technology</span> and{" "}
            <span>Design</span>.
          </p>
          <p>
            Skilled in Web Development and UI/UX. By leveraging my skills, I am
            ready to contribute and give my best results.
          </p>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className={styles.infoCard}>
        <span className={styles.infoLabel}>Working at</span>
        <div>
          <p className={styles.infoTitle}>Makers Institute</p>
          <p className={styles.infoRole}>Fullstack Developer Intern</p>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className={styles.infoCard}>
        <span className={styles.infoLabel}>Interested in</span>
        <div>
          <p className={styles.infoTitle}>Front-End or UI/UX</p>
          <p className={styles.infoRole}>Vite · CSS Modules · Motion</p>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  useScrollReveal();

  return (
    <section className={styles.home} id="home">
      {/* KIRI: MagicBento */}
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
            gridTemplateRows: "auto minmax(150px, 1fr)", // baris 1 mengikuti isi, baris 2 (2 kartu kecil) mengambil sisa tinggi
          }}
        />
      </div>

      {/* KANAN: foto, lalu Find Me On dan Download CV di bawahnya */}
      <div className={`${styles.photoCol} sr-top`}>
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

        <div className={`${styles.sosmed} sr-bottom`}>
          <p>Find Me On</p>

          <a
            href="https://instagram.com/username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://linkedin.com/in/shaskiapv"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>

          <a href="https://github.com/syxherr" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>

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