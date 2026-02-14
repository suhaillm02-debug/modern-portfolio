import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isFirstRender = useRef(true);

  // Skip animation on first page load to prevent blue flash
  const shouldAnimate = !isFirstRender.current;
  if (isFirstRender.current) {
    isFirstRender.current = false;
  }

  return (
    <Layout>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={router.route}
          className="h-full"
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {shouldAnimate && <Transition />}
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;

