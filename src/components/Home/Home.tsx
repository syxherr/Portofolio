import styles from "./Home.module.css";
import TextType from "../../styles/Animation/TextType";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import TiltedCard from "../../ui/TiltedCard";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Home() {
useScrollReveal();

  return (
    <section className={styles.home} id="home">
      <div className={`${styles.homeContent}`}>
        <div className={`${styles.openBadge} sr-right`}>
          <span className={styles.pulseDot} />
          Open to opportunities
        </div>

        <h4 className="sr-top">Hi, My Name is</h4>
        <h1 className="sr-right">
          <span>Shas</span>kia Putri Devi
        </h1>

        <h3 className="sr-top">
          And I&apos;m a{" "}
          <TextType
            as="span"
            className={styles.textType}
            text={["Front-End Development", "UI/UX Designer"]}
            typingSpeed={125}
            pauseDuration={2500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={70}
            cursorBlinkDuration={0.5}
          />
        </h3>

        <p className="sr-bottom">
          Welcome to my Portofolio! Fresh graduate in{" "}
          <span>Computer Science</span> from Universitas Teknologi Bandung with
          a strong passion for <span>Technology</span> and <span>Design</span>.
          <br />
          <br />
          Skilled in UI/UX and Front-End Development. By leveraging my skills, I
          am ready to contribute and give my best results.
          <br />
          <br />
          Feel free to explore my portfolio to see more of <span>my work</span>.
        </p>

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

      <div className={`${styles.profileImg} sr-top`}>
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
        {/* <div className={styles.profileBadge}>
          <LocationIcon width={18} height={18} color="#a78bfa" />
          <span>Bandung, ID</span>
        </div> */}
      </div>
    </section>
  );
}
