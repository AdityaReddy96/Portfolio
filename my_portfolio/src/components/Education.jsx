import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "HKBK College of Engineering",
    location: "Bengaluru, Karnataka",
    year: "2021 - 2025",
    description: "Specialized in Information Science and Engineering.",
  },
  {
    degree: "XII, Science (PCMB)",
    institution: "Sankalp Ind PU College of Science",
    location: "Bidar, Karnataka",
    year: "2021",
    description:
      "Completed 12th grade in the Science stream with a focus on Physics, Chemistry, Mathematics and Biology.",
  },
  {
    degree: "X, SSLC",
    institution: "Sri Basaveshwara English Medium H S",
    location: "Bidar, Karnataka",
    year: "2019",
    description:
      "Completed 10th grade with a strong foundation in core subjects including Mathematics, Science, and Languages.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-indigo-600 dark:text-indigo-400">
                    {edu.year}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <span className="text-indigo-600 dark:text-indigo-400">
                    {edu.location}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
