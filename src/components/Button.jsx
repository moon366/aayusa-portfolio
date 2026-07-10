import { motion } from "framer-motion";

const SunflowerIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="8" fill="#78350f" />
    <circle cx="32" cy="32" r="5" fill="#92400e" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <ellipse
        key={angle}
        cx="32"
        cy="14"
        rx="5.5"
        ry="10"
        fill="#facc15"
        transform={`rotate(${angle} 32 32)`}
      />
    ))}
    <line x1="32" y1="40" x2="32" y2="58" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
    <ellipse cx="27" cy="50" rx="5" ry="3" fill="#22c55e" transform="rotate(-30 27 50)" />
    <ellipse cx="37" cy="47" rx="4" ry="2.5" fill="#22c55e" transform="rotate(25 37 47)" />
  </svg>
);

const RabbitIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="14" rx="5" ry="14" fill="#e2e8f0" transform="rotate(-10 24 14)" />
    <ellipse cx="24" cy="14" rx="3" ry="11" fill="#fda4af" transform="rotate(-10 24 14)" />
    <ellipse cx="40" cy="14" rx="5" ry="14" fill="#e2e8f0" transform="rotate(10 40 14)" />
    <ellipse cx="40" cy="14" rx="3" ry="11" fill="#fda4af" transform="rotate(10 40 14)" />
    <circle cx="32" cy="36" r="16" fill="#e2e8f0" />
    <circle cx="26" cy="33" r="2.5" fill="#1e293b" />
    <circle cx="38" cy="33" r="2.5" fill="#1e293b" />
    <ellipse cx="32" cy="38" rx="2" ry="1.5" fill="#fda4af" />
    <path d="M30 40 Q32 43 34 40" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <circle cx="22" cy="37" r="4" fill="#fda4af" opacity="0.4" />
    <circle cx="42" cy="37" r="4" fill="#fda4af" opacity="0.4" />
  </svg>
);

const Button = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,211,238,0.08),transparent)]" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center relative z-10 px-6"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <SunflowerIcon className="w-14 h-14 md:w-20 md:h-20" />
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            Ankita Miss
          </h1>
          <RabbitIcon className="w-14 h-14 md:w-20 md:h-20" />
        </div>
        <p className="text-lg text-cyan-400 mb-12 max-w-md mx-auto">
          Something beautiful is waiting for you...
        </p>

        <motion.a
          href="https://aayusasunflower.vercel.app/#/gallery"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 bg-cyan-500 text-slate-900 font-semibold text-lg rounded-full shadow-lg hover:bg-cyan-400 transition-all duration-300 cursor-pointer"
        >
          Explore the Garden with Flowers
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Button;
