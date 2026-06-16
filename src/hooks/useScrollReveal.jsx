// src/hooks/useScrollReveal.js
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function useScrollReveal() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
      reset: true,
      viewFactor: 0.1,
    });

    sr.reveal(".sr-top", { origin: "top" });
    sr.reveal(".sr-bottom", { origin: "bottom" });
    sr.reveal(".sr-right", { origin: "right" });
    sr.reveal(".sr-left", { origin: "left" });
  }, []);
}