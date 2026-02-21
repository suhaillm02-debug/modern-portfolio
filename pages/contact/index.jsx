import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { RiLinkedinLine, RiMailLine, RiWhatsappLine, RiMapPinLine } from "react-icons/ri";

import { fadeIn } from "../../variants";

const directLinks = [
  {
    Icon: RiLinkedinLine,
    label: "LinkedIn",
    value: "suhail-m-35953b283",
    href: "https://www.linkedin.com/in/suhail-m-35953b283/",
    color: "hover:border-blue-400/50 hover:bg-blue-400/5",
    iconColor: "text-blue-400",
  },
  {
    Icon: RiMailLine,
    label: "Email",
    value: "suhaill.m02@gmail.com",
    href: "mailto:suhaill.m02@gmail.com",
    color: "hover:border-accent/50 hover:bg-accent/5",
    iconColor: "text-accent",
  },
  {
    Icon: RiWhatsappLine,
    label: "WhatsApp",
    value: "+91 636 401 8901",
    href: "https://wa.me/916364018901",
    color: "hover:border-green-400/50 hover:bg-green-400/5",
    iconColor: "text-green-400",
  },
];

const Contact = () => {
  const handleMailto = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const email = formData.get("email");

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoUrl = `mailto:suhaill.m02@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-20 xl:py-0 h-full flex items-center">
        <div className="flex flex-col xl:flex-row gap-x-12 gap-y-10 w-full">

          {/* ── LEFT: info panel ── */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col justify-center gap-y-6 xl:text-left text-center"
          >
            {/* heading */}
            <div>
              <h2 className="h2 mb-2">
                Let's <span className="text-accent">connect</span>
              </h2>
              <p className="max-w-sm mx-auto xl:mx-0">
                Whether it's a collaboration, a question, or just a hello — my inbox is always open.
                I'm currently open to new opportunities and conversations.
              </p>
            </div>

            {/* live status */}
            <div className="flex justify-center xl:justify-start">
              <div className="inline-flex items-center gap-x-2 bg-green-500/10 border border-green-400/30 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-xs text-white/80 font-medium tracking-wide">
                  Open to opportunities &amp; conversations
                </span>
              </div>
            </div>

            {/* location */}
            <div className="flex items-center gap-x-2 justify-center xl:justify-start text-white/50 text-sm">
              <RiMapPinLine className="text-accent text-base flex-shrink-0" />
              <span>Bengaluru, Karnataka, India</span>
            </div>

            {/* direct contact cards */}
            <div className="flex flex-col gap-y-3">
              {directLinks.map(({ Icon, label, value, href, color, iconColor }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  variants={fadeIn("right", 0.3 + i * 0.1)}
                  initial="hidden"
                  animate="show"
                  className={`flex items-center gap-x-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 transition-all duration-300 ${color} group max-w-sm mx-auto xl:mx-0 w-full`}
                >
                  <div className={`text-xl flex-shrink-0 ${iconColor} group-hover:scale-110 transition-transform duration-200`}>
                    <Icon />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-widest text-white/40">{label}</div>
                    <div className="text-sm text-white/80 font-medium">{value}</div>
                  </div>
                  <BsArrowRight className="ml-auto text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-200" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: form ── */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col justify-center"
          >
            <form
              className="flex flex-col gap-y-4 w-full max-w-[520px] mx-auto xl:mx-0"
              onSubmit={handleMailto}
              autoComplete="off"
              name="contact"
            >
              <div className="flex gap-x-4 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input flex-1"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="input flex-1"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input"
                required
              />

              <textarea
                name="message"
                placeholder="Your message..."
                className="textarea"
                required
              />

              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[200px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent hover:text-accent group self-start mx-auto xl:mx-0"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 flex items-center gap-x-2">
                  Send message
                </span>
                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  aria-hidden
                />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
