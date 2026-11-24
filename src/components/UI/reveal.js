export const EASE = [0.22, 1, 0.36, 1];

// Fade-and-rise once an element scrolls into view. MotionConfig in App.js
// drops the movement for visitors who prefer reduced motion.
export function reveal(delay = 0, distance = 18) {
  return {
    initial: { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -60px 0px" },
    transition: { duration: 0.7, delay, ease: EASE },
  };
}
