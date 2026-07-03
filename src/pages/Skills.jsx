import React from "react";
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
      { name: "Flutter", icon: "devicon:flutter" },
      { name: "ReactNative", icon: "devicon:react" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "NodeJS", icon: "devicon:nodejs" },
      { name: "Spring", icon: "devicon:spring" },
      { name: "Java", icon: "devicon:java" },
      { name: "Express", icon: "devicon:express" },
      { name: "PHP", icon: "devicon:php" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: "devicon:mongodb" },
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "PostgreSQL", icon: "devicon:postgresql" },
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
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white border border-gray-200 rounded-2xl px-5 py-4 flex items-center gap-3"
                  >
                    <Icon icon={skill.icon} width={24} height={24} />
                    <p className="font-bold text-gray-800 tracking-tight">
                      {skill.name}
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
