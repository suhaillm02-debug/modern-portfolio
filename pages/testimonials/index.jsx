import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaTrophy,
  FaHandshake,
  FaMotorcycle,
  FaCertificate,
  FaChartLine,
  FaShieldHalved,
} from "react-icons/fa6";

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
    Icon: FaShieldHalved,
    value: 100,
    suffix: "%",
    label: "SLA Compliance",
    description: "Zero missed SLAs across all creator accounts at Graphy Inc.",
  },
  {
    Icon: FaCertificate,
    value: 5,
    suffix: "",
    label: "Certifications",
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
    <div className="h-full bg-primary/30 py-28 overflow-y-auto">
      <Circles />
      <div className="container mx-auto px-4">

        {/* heading */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center mb-10"
        >
          <h2 className="h2 mb-3">
            Key <span className="text-accent">Achievements</span>
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
            A snapshot of the milestones I've hit — built through consistency,
            client focus, and a drive to always go beyond the target.
          </p>

          {/* decorative divider */}
          <div className="flex items-center justify-center gap-x-3 mt-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-accent/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
        </motion.div>

        {/* cards grid — even 2×3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", 0.15 + i * 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="relative bg-[rgba(65,47,123,0.12)] rounded-2xl p-6 flex flex-col items-center text-center group transition-all duration-300 border border-white/5 hover:border-accent/40 hover:bg-[rgba(89,65,169,0.2)] overflow-hidden"
            >
              {/* top accent glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* icon */}
              <div className="text-4xl text-accent mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(241,48,36,0.6)] transition-all duration-300">
                <item.Icon />
              </div>

              {/* counter */}
              <div className="text-4xl xl:text-5xl font-extrabold text-white mb-1 leading-none">
                <CountUp start={0} end={item.value} duration={3.5} enableScrollSpy scrollSpyOnce />
                <span className="text-accent">{item.suffix}</span>
              </div>

              {/* label */}
              <div className="text-[11px] uppercase tracking-[2.5px] text-white/70 mb-3 font-semibold mt-2">
                {item.label}
              </div>

              {/* thin separator */}
              <div className="w-8 h-[1px] bg-accent/30 mb-3" />

              {/* description */}
              <p className="text-white/45 text-xs leading-relaxed">
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
