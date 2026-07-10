import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import heroImage from "../assets/me/5.jpg";

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/moon366",
      label: "GitHub",
      color: "hover:text-white hover:border-white/40",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aayusa-neupane-445a1a351/",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:border-blue-400/40",
    },
    {
      icon: Twitter,
      href: "https://x.com/AayusaNeu",
      label: "Twitter",
      color: "hover:text-sky-400 hover:border-sky-400/40",
    },
    {
      icon: Mail,
      href: "mailto:aayusaneupane49@gmail.com",
      label: "Email",
      color: "hover:text-red-400 hover:border-red-400/40",
    },
  ];

  const seamlessMorph = [
    "30% 70% 70% 30% / 30% 30% 70% 70%",
    "50% 20% 60% 40% / 50% 20% 60% 40%",
    "40% 30% 30% 70% / 40% 30% 30% 70%",
    "60% 40% 50% 50% / 50% 60% 40% 50%",
    "35% 65% 75% 25% / 25% 35% 65% 75%",
    "45% 55% 55% 45% / 55% 45% 45% 55%",
    "30% 70% 70% 30% / 30% 30% 70% 70%",
  ];

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,211,238,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(15,23,42,0.9),transparent_60%)]" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,1) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating accent orbs */}
      <motion.div
        animate={{ y: [0, -18, 0], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute top-1/4 left-[8%] w-40 md:w-72 h-40 md:h-72 rounded-full bg-cyan-500 blur-[80px] md:blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 14, 0], opacity: [0.07, 0.14, 0.07] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="hidden md:block absolute bottom-1/4 right-[6%] w-40 md:w-64 h-40 md:h-64 rounded-full bg-slate-400 blur-[80px] md:blur-[100px] pointer-events-none"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center pt-24 sm:pt-32 md:pt-40 pb-20 sm:pb-28 md:min-h-screen md:py-0">
        {/* LEFT — Text column */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-between order-2 md:order-1 h-auto md:min-h-[500px]"
        >
          {/* Role badge */}
          <motion.div variants={fadeUp} className="mb-3 sm:mb-4 md:mb-6">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              FullStack Developer
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            variants={fadeUp}
            className="mb-3 sm:mb-4 md:mb-6 overflow-hidden"
          >
            <h1
              className="leading-[1.05] text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="flex items-center gap-2 sm:gap-3 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
                Aayusa
              </span>
              <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold italic bg-gradient-to-r from-cyan-300 via-cyan-200 to-white bg-clip-text text-transparent mt-1">
                Nyaupane
              </span>
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6"
          >
            <div className="h-px w-8 sm:w-10 bg-cyan-500/60" />
            <div className="h-px flex-1 bg-slate-700/60" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mb-4 sm:mb-6 md:mb-10 italic"
          >
            "Transforming ideas into interactive, responsive, and visually
            appealing web applications."
          </motion.p>

          {/* Spacer - pushes CTA and social to bottom */}
          <div className="flex-1" />

          {/* CTAs and Social Links Section */}
          <div>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 28px rgba(34,211,238,0.25)",
                }}
                whileTap={{ scale: 0.97 }}
                className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-cyan-500 text-slate-900 font-semibold text-xs sm:text-sm tracking-wide transition-colors duration-200 hover:bg-cyan-400"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full border border-slate-600 text-slate-300 font-medium text-xs sm:text-sm tracking-wide hover:border-cyan-500/50 hover:text-white transition-colors duration-200"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3"
            >
              <span className="text-slate-600 text-[10px] sm:text-xs tracking-widest uppercase">
                Find me on
              </span>
              <div className="h-px w-6 bg-slate-700 hidden sm:block" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-slate-700/70 bg-slate-800/60 flex items-center justify-center text-slate-500 transition-all duration-200 ${color}`}
                  >
                    <Icon size={15} strokeWidth={1.7} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Scroll Hint — mobile: in-flow below social links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
              className="flex md:hidden items-center gap-3 mt-8 pt-5 border-t border-slate-700/30"
            >
              <span className="text-slate-500 text-[10px] tracking-[0.3em] uppercase font-medium">
                Scroll
              </span>
              <div className="h-px flex-1 bg-slate-700/40" />
              <div className="w-5 h-8 rounded-full border border-cyan-500/50 flex justify-center items-start pt-1.5">
                <motion.div
                  animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-2 rounded-full bg-cyan-400"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center md:justify-end items-center order-1 md:order-2"
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 sm:-inset-4 rounded-full border border-dashed border-cyan-500/15"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-5 sm:-inset-8 rounded-full border border-dotted border-slate-600/20"
            />
            <motion.div
              animate={{
                borderRadius: seamlessMorph,
                opacity: [0.18, 0.28, 0.18],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-cyan-500 blur-[60px] sm:blur-[80px]"
            />
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-800 border border-cyan-500/30 text-cyan-400 text-[8px] sm:text-[10px] font-mono tracking-wider shadow-lg">
              &lt;dev /&gt;
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 z-20 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-800 border border-slate-600/50 text-slate-400 text-[8px] sm:text-[10px] font-mono tracking-wider shadow-lg">
              UI · UX
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1, borderRadius: seamlessMorph }}
              transition={{
                opacity: { duration: 1 },
                scale: { duration: 1 },
                borderRadius: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative w-full h-full overflow-hidden border border-cyan-400/20 shadow-[0_0_60px_-10px_rgba(34,211,238,0.25),0_0_120px_-30px_rgba(34,211,238,0.12)] bg-slate-800"
            >
              <motion.img
                src={heroImage}
                alt="Aayusa Nyaupane"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll Hint — absolute bottom right ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
        className="hidden md:flex absolute bottom-6 sm:bottom-12 md:bottom-20 right-4 sm:right-6 md:right-12 z-20 flex-col items-center gap-1.5 sm:gap-2 md:gap-4"
      >
        {/* Label */}
        <span className="text-slate-400 text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase font-medium">
          Scroll
        </span>

        {/* Mouse outline */}
        <div className="w-6 sm:w-8 h-10 sm:h-14 rounded-full border-2 border-cyan-500/50 flex justify-center items-start pt-1.5 sm:pt-2.5">
          <motion.div
            animate={{ y: [0, 14, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 sm:w-1.5 h-2 sm:h-3 rounded-full bg-cyan-400"
          />
        </div>

        {/* Staggered chevrons */}
        <div className="flex flex-col items-center gap-0.5 sm:gap-1 -mt-0.5 sm:-mt-1">
          {[0, 0.18, 0.36].map((delay, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, 6, 0], opacity: [0.25, 1, 0.25] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
              style={{ width: `${16 - i * 3}px`, height: `${16 - i * 3}px` }}
              className="border-r-2 border-b-2 border-cyan-400/80 rotate-45"
            />
          ))}
        </div>
      </motion.div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
