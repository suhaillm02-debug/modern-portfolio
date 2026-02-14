import Link from "next/link";

import {
  RiLinkedinLine,
  RiMailLine,
  RiWhatsappLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/suhail-m-35953b283/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Email",
    link: "mailto:suhaill.m02@gmail.com",
    Icon: RiMailLine,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/916364018901",
    Icon: RiWhatsappLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${social.name === "Github"
            ? "bg-accent rounded-full p-[5px] hover:text-white"
            : "hover:text-accent"
            } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
