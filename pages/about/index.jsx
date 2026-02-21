import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaChartLine,
  FaHandshake,
  FaUserCheck,
  FaUserTie,
  FaTrophy,
  FaMedal,
  FaStar,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa6";
import {
  SiSalesforce,
  SiMicrosoftoffice,
  SiPowerbi,
  SiZendesk,
  SiHubspot,
  SiGooglecloud,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// ── Skills: icon + label chips ────────────────────────────────────────────────
const customerStrategySkills = [
  { Icon: FaChartLine, label: "Sales Analytics" },
  { Icon: FaHandshake, label: "Relationship Mgmt" },
  { Icon: FaUserTie, label: "Account Mgmt" },
  { Icon: FaUserCheck, label: "Customer Success" },
];

const enterpriseToolSkills = [
  { Icon: SiSalesforce, label: "Salesforce" },
  { Icon: SiHubspot, label: "HubSpot" },
  { Icon: SiZendesk, label: "Zendesk" },
  { Icon: SiPowerbi, label: "Power BI" },
  { Icon: SiMicrosoftoffice, label: "MS Office 365" },
];

// ── Tab data ──────────────────────────────────────────────────────────────────
export const aboutData = [
  {
    title: "skills",
    type: "skills",
    groups: [
      { heading: "Customer Strategy", skills: customerStrategySkills },
      { heading: "Enterprise Tools", skills: enterpriseToolSkills },
    ],
  },
  {
    title: "awards / impact",
    type: "list",
    info: [
      { Icon: FaTrophy, title: "Top Performer Q3", sub: "Royal Enfield Teknik", stage: "2024" },
      { Icon: FaMedal, title: "100% SLA Compliance", sub: "Graphy Inc.", stage: "2025" },
      { Icon: FaStar, title: "Strategic Upselling Champion", sub: "Royal Enfield Teknik", stage: "2024" },
    ],
  },
  {
    title: "experience",
    type: "list",
    info: [
      { Icon: FaBriefcase, title: "Customer Success Intern", sub: "Graphy Inc.", stage: "Oct 2025 – Present" },
      { Icon: FaBriefcase, title: "Sales & CRM Executive", sub: "Royal Enfield Teknik", stage: "Apr 2022 – May 2025" },
    ],
  },
  {
    title: "education",
    type: "list",
    info: [
      { Icon: FaGraduationCap, title: "Bachelor of Business Administration", sub: "Izee Group of Institutions", stage: "2022 – 2025" },
    ],
  },
  {
    title: "certifications",
    type: "certs",
    info: [
      { Icon: SiPowerbi, label: "AI and Power BI", issuer: "Office Master", year: "2025" },
      { Icon: SiGooglecloud, label: "Intro to Generative AI", issuer: "Google", year: "2025" },
      { Icon: FaCertificate, label: "CRM & Customer Success", issuer: "HubSpot Academy", year: "2025" },
    ],
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

// Labeled icon chip used in Skills tab
const SkillChip = ({ Icon, label }) => (
  <div className="flex items-center gap-x-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 hover:border-accent/50 hover:bg-white/10 transition-all duration-200">
    <Icon className="text-accent text-lg flex-shrink-0" />
    <span className="text-xs text-white/80 whitespace-nowrap">{label}</span>
  </div>
);

// Generic list row used in Awards / Experience / Education tabs
const ListRow = ({ Icon, title, sub, stage }) => (
  <div className="flex items-start gap-x-3 text-white/70">
    <div className="mt-[2px] text-accent text-lg flex-shrink-0">
      <Icon />
    </div>
    <div className="flex-1">
      <div className="text-white font-medium text-sm leading-snug">{title}</div>
      <div className="text-xs text-white/50">{sub}</div>
    </div>
    <div className="text-xs text-accent font-semibold whitespace-nowrap pt-[2px]">{stage}</div>
  </div>
);

// Certification badge card
const CertCard = ({ Icon, label, issuer, year }) => (
  <div className="flex items-center gap-x-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-accent/40 hover:bg-white/[0.08] transition-all duration-200">
    <div className="text-2xl text-accent flex-shrink-0">
      <Icon />
    </div>
    <div className="flex-1">
      <div className="text-white text-sm font-medium leading-snug">{label}</div>
      <div className="text-xs text-white/50">{issuer}</div>
    </div>
    <div className="text-[11px] font-bold text-accent bg-accent/10 border border-accent/20 rounded px-2 py-0.5">
      {year}
    </div>
  </div>
);

// ── Main component ─────────────────────────────────────────────────────────────
const About = () => {
  const [index, setIndex] = useState(0);
  const active = aboutData[index];

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* ── left: bio + skill bars ── */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building <span className="text-accent">Value</span> One Connection at a Time.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Based in Bengaluru, I specialize in Customer Success and Sales Strategy. Currently at Graphy Inc.,
            I help creators succeed by managing accounts and resolving support requests.
            My background at Royal Enfield taught me the art of high-stakes sales and CRM,
            consistently exceeding targets through customer-centric solutions.
          </motion.p>

          {/* skill bars */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:block md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 w-full"
          >
            {[
              { label: "Customer Relationship Management", pct: 95 },
              { label: "Sales Strategy & Target Achievement", pct: 90 },
              { label: "Client Onboarding & Retention", pct: 92 },
              { label: "CRM Tools & Data Analytics", pct: 85 },
            ].map((skill, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs uppercase tracking-widest text-white/70">{skill.label}</span>
                  <span className="text-xs font-bold text-accent">{skill.pct}%</span>
                </div>
                <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: skill.pct / 100 }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── right: tabbed info panel ── */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* tab bar */}
          <div className="flex flex-wrap gap-x-4 xl:gap-x-6 gap-y-2 mx-auto xl:mx-0 mb-6">
            {aboutData.map((item, itemI) => (
              <button
                key={itemI}
                className={`${index === itemI
                    ? "text-accent after:w-[100%] after:bg-accent"
                    : "text-white/60 hover:text-white"
                  } cursor-pointer capitalize text-sm xl:text-base relative after:w-0 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 transition-colors duration-200`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* tab body */}
          <div className="py-2 xl:py-4 flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start overflow-y-auto pr-1">

            {/* SKILLS tab */}
            {active.type === "skills" && active.groups.map((group, gi) => (
              <div key={gi} className="w-full mb-2">
                <div className="text-xs uppercase tracking-widest text-white/40 mb-2">{group.heading}</div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s, si) => (
                    <SkillChip key={si} Icon={s.Icon} label={s.label} />
                  ))}
                </div>
              </div>
            ))}

            {/* CERTIFICATIONS tab */}
            {active.type === "certs" && active.info.map((cert, ci) => (
              <CertCard key={ci} {...cert} />
            ))}

            {/* AWARDS / EXPERIENCE / EDUCATION tabs */}
            {active.type === "list" && active.info.map((item, itemI) => (
              <ListRow key={itemI} {...item} />
            ))}

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
