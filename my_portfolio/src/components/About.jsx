import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-1/3 flex justify-center"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500 dark:border-indigo-400 shadow-lg">
                <img
                  src="https://res.cloudinary.com/dl8qjj3fi/image/upload/v1754403540/portfolio_fbiq5k.jpg"
                  alt="Aditya Reddy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <div className="w-full md:w-2/3">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 text-justify">
                I'm a passionate MERN stack developer with a strong foundation
                in JavaScript and modern web technologies. Although I'm new to
                the industry, I've built several projects that demonstrate my
                ability to create full-stack applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 text-justify">
                My journey in web development started during my college years,
                and I've been hooked ever since. I enjoy solving complex
                problems and turning ideas into functional, user-friendly
                applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
                My passion for technology extends beyond work projects - I love
                exploring new frameworks, experimenting with different tech
                stacks, and continuously expanding my development skills through
                hands-on learning.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
