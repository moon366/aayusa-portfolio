import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    skills: ["ReactJS", "NextJS", "Javascript", "TailwindCSS", "Flutter", "ReactNative"],
  },
  {
    title: "Backend",
    skills: ["NodeJS", "Spring", "Java", "Express", "PHP"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQL"],
  },
  {
    title: "Tools",
    skills: ["Github", "Git", "Postman", "VSCode"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter text-gray-900 uppercase">
            [ Skills ]
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center justify-center"
                  >
                    <p className="font-bold text-gray-800 tracking-tight">
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;