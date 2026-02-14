import { motion } from "framer-motion";

// Simple accent line indicator — no screen-covering panels
const Transition = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none origin-left"
      style={{
        background:
          "linear-gradient(90deg, #f13024, #e838cc, #4a22bd)",
      }}
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      aria-hidden
    />
  );
};

export default Transition;
