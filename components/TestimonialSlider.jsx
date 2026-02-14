import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    message:
      "Suhail quickly became one of the most reliable members on the customer success team. His ability to handle creator queries with patience and resolve issues efficiently has been outstanding. He truly understands what it takes to keep clients happy.",
  },
  {
    message:
      "Suhail consistently exceeded his monthly sales targets and was a natural at building rapport with customers. His CRM management skills and dedication to the showroom experience set him apart from the rest of the team.",
  },
  {
    message:
      "Working alongside Suhail has been a great experience. He brings energy, attention to detail, and genuine care for every creator account he manages. His onboarding process is smooth and creators always feel supported.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center justify-center h-full px-16">
            {/* quote & message */}
            <div className="flex flex-col justify-center items-center max-w-[700px]">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20"
                  aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
