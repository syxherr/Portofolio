import { motion, useScroll } from "motion/react";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 6,
        originX: 0,
        backgroundColor: "#a268ff",
        zIndex: 9999,
      }}
    />
  );
}