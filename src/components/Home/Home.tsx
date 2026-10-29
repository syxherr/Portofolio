import styles from "./Home.module.css";
import TextType from "../../styles/Animation/TextType";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import TiltedCard from "../../ui/TiltedCard";
import useScrollReveal from "../../hooks/useScrollReveal";

// Empat kotak kecil di bawah kartu. Mau ganti isi? Edit di sini saja.
const FACTS = [
  { label: "Based in", value: "Bandung, ID" },
  { label: "Graduated", value: "S.Kom, Computer Science" },
  { label: "Working at", value: "Makers Institute" },
  { label: "Looking for", value: "Front-End or UI/UX role" },
];

export default function Home() {
  useScrollReveal();

  return (
    <section className={styles.home} id="home">
      {/* KIRI: kartu About */}
      <div className={styles.aboutWrap}>
        <div className={`${styles.aboutCard} sr-right`}>
          <div className={styles.openBadge}>
            <span className={styles.pulseDot} />
            Open to opportunities
          </div>

          <h1 className={styles.aboutTitle}>
            I&apos;m <span>Shas</span>kia. I turn designs into interfaces people
            enjoy using.
          </h1>

          <p className={styles.kicker}>
            And I&apos;m a{" "}
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

          <div className={styles.aboutCols}>
            <p>
              Welcome to my Portofolio! Fresh graduate in{" "}
              <span>Computer Science</span> from Universitas Teknologi Bandung
              with a strong passion for <span>Technology</span> and{" "}
              <span>Design</span>.
            </p>
            <p>
              Skilled in Web Development and UI/UX. By leveraging my skills, I
              am ready to contribute and give my best results.
            </p>
          </div>

          <dl className={styles.facts}>
            {FACTS.map((f) => (
              <div className={styles.fact} key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
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
                  padding: "12px 24px",
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