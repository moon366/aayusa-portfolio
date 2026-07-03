import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "ReactJS", icon: "devicon:react" },
      { name: "NextJS", icon: "devicon:nextjs" },
      { name: "Javascript", icon: "devicon:javascript" },
      { name: "TailwindCSS", icon: "devicon:tailwindcss" },
      { name: "Redux", icon: "devicon:redux" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "NodeJS", icon: "devicon:nodejs" },
      { name: "Express", icon: "devicon:express" },
      { name: "PHP", icon: "devicon:php" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: "devicon:mongodb" },
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "SQL", icon: "mdi:database" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Github", icon: "devicon:github" },
      { name: "Git", icon: "devicon:git" },
      { name: "Postman", icon: "devicon:postman" },
      { name: "VSCode", icon: "devicon:vscode" },
    ],
  },
];

const allSkills = categories.flatMap((cat) =>
  cat.skills.map((skill) => ({ ...skill, category: cat.title })),
);

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [highlightStyle, setHighlightStyle] = useState({
    width: 0, height: 0, left: 0, top: 0, opacity: 0,
  });

  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  const updateHighlightPosition = useCallback((index) => {
    if (index === null || !cardRefs.current[index] || !containerRef.current) {
      setHighlightStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const card = cardRefs.current[index];
    const container = containerRef.current;
    const cardRect = card.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const OFFSET = 16;

    setHighlightStyle({
      width: cardRect.width + OFFSET * 2,
      height: cardRect.height + OFFSET * 2,
      left: (cardRect.left - containerRect.left) - OFFSET,
      top: (cardRect.top - containerRect.top) - OFFSET,
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    updateHighlightPosition(activeIndex);
  }, [activeIndex, updateHighlightPosition]);

  useEffect(() => {
    const handleResize = () => updateHighlightPosition(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, updateHighlightPosition]);

  let flatIndex = -1;

  return (
    <section id="skills" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black tracking-tighter text-gray-900">
            Skills
          </h2>
        </div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          <motion.div
            className="absolute pointer-events-none z-10"
            animate={{
              width: highlightStyle.width,
              height: highlightStyle.height,
              x: highlightStyle.left,
              y: highlightStyle.top,
              opacity: highlightStyle.opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
              mass: 0.8,
            }}
            style={{
              backgroundColor: "rgba(0, 218, 245, 0.9)",
              border: "1px solid rgba(34, 211, 238, 0.3)",
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
              backdropFilter: "blur(4px)",
              borderRadius: "1.5rem",
            }}
          />

          <div className="space-y-24">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-12"
              >
                <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight md:text-right md:pt-1">
                  {cat.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5">
                  {cat.skills.map((skill) => {
                    flatIndex++;
                    const idx = flatIndex;
                    return (
                      <motion.div
                        key={skill.name}
                        ref={(el) => (cardRefs.current[idx] = el)}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onMouseLeave={() => setActiveIndex(null)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.03 }}
                        className="relative z-20 flex items-center gap-3 min-h-[44px] cursor-pointer"
                      >
                        <Icon
                          icon={skill.icon}
                          width={24}
                          height={24}
                          className="shrink-0"
                        />
                        <span className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
