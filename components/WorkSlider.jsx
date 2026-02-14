import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Graphy Inc. - Creator Success",
          path: "/work-graphy.png",
        },
        {
          title: "Royal Enfield - Sales & CRM",
          path: "/work-re.png",
        },
        {
          title: "SaaS Strategy",
          path: "/work-sales.png",
        },
        {
          title: "Customer Engagement",
          path: "/work-crm.png",
        },
      ],
    },
    {
      images: [
        {
          title: "Business Growth",
          path: "/work-targets.png",
        },
        {
          title: "Relationship Management",
          path: "/work-strategy.png",
        },
        {
          title: "Data Analytics",
          path: "/work-metrics.png",
        },
        {
          title: "Sales Reporting",
          path: "/work-reporting.png",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden group"
                key={imageI}
              >
                {/* image */}
                <Image
                  src={image.path}
                  alt={image.title}
                  fill
                  className="object-cover"
                />

                {/* overlay gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                  aria-hidden
                />

                {/* title on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  <div className="text-[13px] tracking-[0.2em] font-semibold text-white">
                    {image.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
