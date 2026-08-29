import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import SideRays from "../../styles/Animation/SideRays";
import BlurText from "../../styles/Animation/BlurText";
import styles from "./Landing.module.css";
import TextType from "../../styles/Animation/TextType";

export default function Landing({ onContinue }) {
  const [step, setStep] = useState(-1);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (step === -1) {
      const timer = setTimeout(() => setStep(0), 15500);
      return () => clearTimeout(timer);
    }
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 5000);
      return () => clearTimeout(timer);
    }
    if (step === 1) {
      const timer = setTimeout(() => setStep(2), 5000);
      return () => clearTimeout(timer);
    }
    if (step === 2) {
      const timer = setTimeout(() => setStep(3), 5000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // dulu ada "if (step !== 3) return;" di sini, sekarang dihapus
  // jadi klik kapan aja (step berapapun) langsung trigger ini
  const handleClick = () => {
    setExiting(true);
    setTimeout(() => {
      onContinue();
    }, 300); // dipercepat dari 3000ms, biar pas diklik langsung berasa responsif
  };

  return (
    <div
      onClick={handleClick} // <- dipindah ke sini, div PALING LUAR
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        background: "#000",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer", // biar user tau ini bisa diklik dari awal
      }}
    >
      {/* Step -1: sekarang ikut bisa diklik karena ada di dalam div yang onClick-nya di luar */}
      {step === -1 && (
        <TextType
          text={["> Initializing...", "> Loading Projects..."]}
          typingSpeed={135}
          pauseDuration={2500}
          deletingSpeed={75}
          showCursor
          cursorCharacter="▎"
          cursorBlinkDuration={0.5}
          loop={false}
          style={{ color: "#fff", fontFamily: "Inter", fontSize: "2rem" }}
        />
      )}

      {step >= 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: exiting ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SideRays
            speed={2.5}
            rayColor1="#EAB308"
            rayColor2="#96c8ff"
            intensity={2}
            spread={2}
            origin="top-right"
            tilt={0}
            saturation={1.5}
            blend={0.75}
            falloff={1.6}
            opacity={1}
          />

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="hai"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ position: "absolute" }}
              >
                <BlurText
                  text="Aaaand We're Live! 🚀"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className={styles.heroText}
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ position: "absolute" }}
              >
                <BlurText
                  text="Come & See 👀"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  className={styles.heroText}
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="final"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <BlurText
                  text="What I've Been Building"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  className={styles.heroText}
                />
                <motion.p
                  delay={2000}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ fontSize: "17px", marginTop: "1rem" }}
                >
                  Click to Continue
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}