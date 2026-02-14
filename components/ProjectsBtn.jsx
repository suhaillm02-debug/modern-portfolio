import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group cursor-pointer z-10"
      >
        <svg
          viewBox="0 0 200 200"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] pointer-events-none select-none"
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text
            fill="white"
            fontSize="17.5"
            fontWeight="600"
            letterSpacing="5"
            fontFamily="'Sora', sans-serif"
          >
            <textPath href="#circlePath" startOffset="0%">
              MY EXPERIENCE • MY EXPERIENCE •
            </textPath>
          </text>
        </svg>
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 pointer-events-none"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
