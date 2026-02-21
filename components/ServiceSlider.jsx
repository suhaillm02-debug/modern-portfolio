import {
  RxArrowTopRight,
  RxPerson,
  RxRocket,
  RxChatBubble,
  RxReader,
  RxDesktop,
  RxPencil2,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const expertiseData = [
  {
    Icon: RxPerson,
    title: "Customer Success",
    tag: "Professional",
    description:
      "Onboarding, relationship management, and lifecycle support that keeps creators and clients thriving.",
  },
  {
    Icon: RxRocket,
    title: "Sales Strategy",
    tag: "Professional",
    description:
      "Data-driven sales approaches built to meet and consistently exceed monthly and quarterly targets.",
  },
  {
    Icon: RxChatBubble,
    title: "CRM Management",
    tag: "Professional",
    description:
      "Meticulous handling of customer records, pipelines, and follow-ups via Salesforce, HubSpot & Zendesk.",
  },
  {
    Icon: RxReader,
    title: "Account Management",
    tag: "Professional",
    description:
      "Building lasting client relationships through personalised product demos, upselling, and proactive support.",
  },
  {
    Icon: RxDesktop,
    title: "Web Development",
    tag: "Enthusiast",
    description:
      "Passionate about building modern, responsive websites using React and Next.js — bringing ideas to life on the web.",
  },
  {
    Icon: RxPencil2,
    title: "UI / UX Design",
    tag: "Enthusiast",
    description:
      "Keen eye for clean, intuitive interfaces and delightful micro-interactions that make digital products feel premium.",
  },
];

const tagColors = {
  Professional: "text-accent border-accent/40 bg-accent/10",
  Enthusiast: "text-purple-300 border-purple-400/40 bg-purple-400/10",
};

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[320px] sm:h-[420px] pb-10"
    >
      {expertiseData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-3">
              <item.Icon aria-hidden />
            </div>

            {/* tag badge */}
            <div className="mb-3">
              <span
                className={`text-[10px] font-semibold uppercase tracking-widest border rounded px-2 py-0.5 ${tagColors[item.tag]}`}
              >
                {item.tag}
              </span>
            </div>

            {/* title & description */}
            <div className="mb-6">
              <div className="mb-1 text-base font-semibold">{item.title}</div>
              <p className="max-w-[350px] leading-normal text-sm text-white/60">
                {item.description}
              </p>
            </div>

            {/* arrow */}
            <div className="text-3xl mt-auto">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
