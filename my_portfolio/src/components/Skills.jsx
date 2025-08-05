import { motion } from "framer-motion";
import { useState } from "react";

// Import your logo images (you'll need to add these to your project)
import HtmlLogo from "../assets/logos/html.svg";
import CssLogo from "../assets/logos/css.svg";
import JsLogo from "../assets/logos/javascript.svg";
import ReactLogo from "../assets/logos/react.svg";
import NodeLogo from "../assets/logos/nodejs.svg";
import ExpressLogo from "../assets/logos/express.svg";
import MongoLogo from "../assets/logos/mongodb.svg";
import TailwindLogo from "../assets/logos/tailwindcss.svg";
import GitLogo from "../assets/logos/git.svg";
import ReduxLogo from "../assets/logos/redux.svg";
import JavaLogo from "../assets/logos/java.svg";
import CLogo from "../assets/logos/c.svg";
import MySQLLogo from "../assets/logos/mysql.svg";

const skills = [
  { name: "C", level: 65, logo: CLogo, category: "language" },
  { name: "java", level: 80, logo: JavaLogo, category: "language" },
  { name: "HTML", level: 90, logo: HtmlLogo, category: "frontend" },
  { name: "CSS", level: 85, logo: CssLogo, category: "frontend" },
  { name: "JavaScript", level: 80, logo: JsLogo, category: "language" },
  { name: "React.js", level: 75, logo: ReactLogo, category: "frontend" },
  { name: "Node.js", level: 70, logo: NodeLogo, category: "backend" },
  { name: "Express.js", level: 70, logo: ExpressLogo, category: "backend" },
  { name: "MongoDB", level: 65, logo: MongoLogo, category: "database" },
  { name: "MySQL", level: 65, logo: MySQLLogo, category: "database" },
  { name: "Tailwind CSS", level: 80, logo: TailwindLogo, category: "frontend" },
  { name: "Git", level: 75, logo: GitLogo, category: "tool" },
  { name: "Redux", level: 60, logo: ReduxLogo, category: "frontend" },
];

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Database" },
  { id: "language", name: "Language" },
  { id: "tool", name: "Tools" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            My Skills
          </h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technologies I've worked with and my proficiency level in each
          </motion.p>

          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.03 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className={`bg-white dark:bg-gray-700 p-5 rounded-xl shadow-lg transition-all duration-300 ${
                  hoveredSkill === skill.name
                    ? "ring-2 ring-indigo-500 dark:ring-indigo-400"
                    : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  {/* Logo Image */}
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="h-12 w-12 object-contain"
                    />
                  </div>

                  <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-center">
                    {skill.name}
                  </h3>

                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {hoveredSkill === skill.name ? "Proficiency" : ""}
                    </span>
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Proficiency Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center">
              <div className="w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></div>
              <span>Basic (50-69%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></div>
              <span>Proficient (70-84%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></div>
              <span>Expert (85-100%)</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
