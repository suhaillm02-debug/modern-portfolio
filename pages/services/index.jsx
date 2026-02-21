import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const serviceData = [];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 mb-2"
            >
              My expertise
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              I'm a working professional in Customer Success and Sales, with a growing passion for
              building modern web experiences. Here's a look at the areas I bring value in — both
              professionally and as a creative enthusiast.
            </motion.p>

            {/* currently working at */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-6 flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-x-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                <span className="text-xs text-white/80 font-medium tracking-wide">
                  Currently @ <span className="text-accent font-semibold">Graphy Inc.</span> · Customer Success
                </span>
              </div>
            </motion.div>

            {/* working principles */}
            <motion.div
              variants={fadeIn("up", 0.65)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col gap-y-3 max-w-[340px] mx-auto lg:mx-0"
            >
              {[
                {
                  title: "Client-First",
                  desc: "Every decision starts with what's best for the customer.",
                },
                {
                  title: "Growth Mindset",
                  desc: "Always learning — whether it's sales strategy or the latest in web tech.",
                },
                {
                  title: "Relationship-Led",
                  desc: "Long-term trust matters more than short-term wins.",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-x-3 group"
                >
                  <span className="mt-[5px] w-2 h-2 rounded-full bg-accent flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                  <div>
                    <div className="text-sm font-semibold text-white">{p.title}</div>
                    <div className="text-xs text-white/50 leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
