import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.",
    technologies: [
      "React",
      "Shadcn",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Paypal Sandbox",
    ],
    githubLink: "https://github.com/AdityaReddy96/Ecommerce.git",
    liveDemo: "https://ecommerce-frontend-two-gamma.vercel.app",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1672&q=80",
  },
  {
    title: "SocialBook",
    description:
      "A dashboard for social media analytics with data visualization, user profiles, and content management.",
    technologies: ["React", "Express", "Node.js", "MongoDB", "JWT"],
    githubLink: "https://github.com/AdityaReddy96/SocialBook.git",
    liveDemo: "https://socialbook-abu.onrender.com/",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
  },
  {
    title: "WebChatApp",
    description:
      "A real-time chat application with private messaging, group chats, and message history using Socket.io.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
    ],
    githubLink: "https://github.com/AdityaReddy96/web-chat-app.git",
    liveDemo: "https://web-chat-app-frontend-on0i.onrender.com/",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "Airbnb Clone",
    description:
      "A vacation rental platform with property listings, search filters, booking system, and user reviews.",
    technologies: ["Ejs template", "Node.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/AdityaReddy96/Airbnb.git",
    liveDemo: "https://airbnb-48zt.onrender.com/",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "WorldAtlas",
    description:
      "A Country flag finder built using react.js to understand how actually an api is handled.",
    technologies: ["React.js", "Tailwind CSS"],
    githubLink: "https://github.com/AdityaReddy96/Airbnb.git",
    liveDemo: "https://myworldatlas.netlify.app/",
    image:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "DSA Practice Repository",
    description:
      "A comprehensive collection of Data Structures and Algorithms problems solved in Java, organized by topics and difficulty levels.",
    technologies: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
    githubLink: "https://github.com/AdityaReddy96/Java_DSA_Practice.git",
    liveDemo: "#",
    image:
      "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
  },
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              My Projects
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Here are some of my featured projects. Each one was built to
              understand how actually the web applications are built and to
              demonstrate different technical skills.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

                <div className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col">
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: isMobile ? 1 : 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    {!isMobile && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="flex space-x-3">
                          {project.liveDemo !== "#" && (
                            <motion.a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 bg-indigo-600 text-white rounded-full text-sm font-medium flex items-center"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                              Demo
                            </motion.a>
                          )}
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-indigo-600 text-white rounded-full text-sm font-medium flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Code
                          </motion.a>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="flex -space-x-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center text-xs font-medium text-gray-700 dark:text-gray-300"
                            title={tech}
                          >
                            {tech.charAt(0)}
                          </div>
                        ))}
                        {project.technologies.length > 3 && (
                          <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs flex items-center justify-center">
                            +{project.technologies.length - 3}
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <motion.span
                          key={tech}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 0 1px rgba(99, 102, 241, 0.5)",
                            transition: { duration: 0.2 },
                          }}
                        >
                          <svg
                            className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-500"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Always visible buttons on mobile */}
                  {isMobile && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex space-x-3 mt-2">
                        {project.liveDemo !== "#" && (
                          <motion.a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2 bg-indigo-100 dark:bg-indigo-600  text-indigo-700 dark:text-white rounded-lg text-sm font-medium flex items-center justify-center"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            Live Demo
                          </motion.a>
                        )}
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium flex items-center justify-center ${
                            project.liveDemo === "#" ? "flex-1" : "flex-1"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          View Code
                        </motion.a>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://github.com/AdityaReddy96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              View All Projects on GitHub
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
