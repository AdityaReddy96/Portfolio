// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="py-20 md:py-32">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-3xl mx-auto text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//             Hi, I'm <br />
//             <span className="text-indigo-600 dark:text-indigo-400">
//               Aditya Reddy
//             </span>
//           </h1>
//           <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
//             MERN Stack Developer | Passionate about building web applications
//           </h2>
//           <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
//             A fresh graduate specializing in modern web development with
//             expertise in React.js, Node.js, and MongoDB.
//           </p>
//           <div className="flex justify-center space-x-4">
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="#projects"
//               className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
//             >
//               View My Work
//             </motion.a>
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="#contact"
//               className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
//             >
//               Contact Me
//             </motion.a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="py-20 md:py-32">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-3xl mx-auto text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//             Hi, I'm <br />{" "}
//             <span className="text-indigo-600 dark:text-indigo-400">
//               Aditya Reddy
//             </span>
//           </h1>
//           <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
//             MERN Stack Developer | Transitioning into Java Full Stack
//           </h2>
//           <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
//             As a 2025 graduate with solid MERN stack expertise, I've built
//             full-stack projects using MongoDB, Express, React, and Node.js. I'm
//             now transitioning into Java full-stack development as part of my
//             new professional role. I'm excited to expand my skills into the Java
//             ecosystem, especially Spring Boot and related tools, while continuing
//             to build robust and scalable applications.
//           </p>
//           <div className="flex justify-center space-x-4">
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="#projects"
//               className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
//             >
//               View My Work
//             </motion.a>
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="#contact"
//               className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
//             >
//               Contact Me
//             </motion.a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <br />{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Aditya Reddy
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            MERN Stack Developer | Passionate about building web applications
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            A passionate developer skilled in React, Node.js, MongoDB, and
            Express. I love turning ideas into reality through functional and
            user-friendly applications.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              aria-label="View Projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              aria-label="Contact Me"
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
            >
              Let’s Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
