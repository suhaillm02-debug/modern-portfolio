import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaTrophy,
  FaHandshake,
  FaMotorcycle,
  FaUsers,
  FaCertificate,
  FaChartLine,
} from "react-icons/fa";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const achievements = [
  {
    Icon: FaMotorcycle,
    value: 500,
    suffix: "+",
    label: "Motorcycles Sold",
    description: "Consistently exceeded monthly sales targets at Royal Enfield Teknik.",
  },
  {
    Icon: FaChartLine,
    value: 3,
    suffix: "+",
    label: "Years Experience",
    description: "In Sales, CRM, and Customer Success across industries.",
  },
  {
    Icon: FaTrophy,
    value: 100,
    suffix: "%",
    label: "Target Achievement",
    description: "Consistently met or exceeded quarterly revenue goals.",
  },
  {
    Icon: FaCertificate,
    value: 5,
    suffix: "",
    label: "Professional Certs",
    description: "Including Google AI, Power BI, and Salesforce fundamentals.",
  },
  {
    Icon: FaHandshake,
    value: 1000,
    suffix: "+",
    label: "Client Interactions",
    description: "Building trust through personalized engagement and support.",
  },
];

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-36 overflow-y-auto">
      <Circles />
      <div className="container mx-auto">
        {/* heading */}
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-12"
        >
          Key <span className="text-accent">Achievements.</span>
        </motion.h2>

        {/* achievement cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", 0.2 + i * 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.25)] rounded-xl p-6 flex flex-col items-center text-center group transition-all duration-300 border border-white/5 hover:border-accent/30"
            >
              {/* icon */}
              <div className="text-4xl text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.Icon />
              </div>

              {/* counter */}
              <div className="text-3xl xl:text-4xl font-extrabold text-white mb-1">
                <CountUp start={0} end={item.value} duration={4} />
                <span className="text-accent">{item.suffix}</span>
              </div>

              {/* label */}
              <div className="text-sm uppercase tracking-[2px] text-white/80 mb-3 font-semibold">
                {item.label}
              </div>

              {/* description */}
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
