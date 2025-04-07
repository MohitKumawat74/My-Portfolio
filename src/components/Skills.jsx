import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

/* Import skill icons */
import reactIcon from "../assets/react-icon.png";
import nodeIcon from "../assets/nodejs-icon.png";
import jsIcon from "../assets/javascript-icon.png";
import htmlIcon from "../assets/html-icon.png";
import cssIcon from "../assets/css-icon.png";
import mongoIcon from "../assets/mongodb-icon.png";
import gitIcon from "../assets/git-icon.png";
import figmaIcon from "../assets/figma-icon.png";
import { useTheme } from "../context/ThemeContext";

const skills = [
  {
    icon: reactIcon,
    title: "React",
    level: "Advanced",
    description: "Building interactive UIs with React hooks and context API",
    projects: 12,
    color: "bg-blue-100 text-blue-800"
  },
  {
    icon: nodeIcon,
    title: "Node.js",
    level: "Intermediate",
    description: "Developing server-side applications and RESTful APIs",
    projects: 8,
    color: "bg-green-100 text-green-800"
  },
  {
    icon: jsIcon,
    title: "JavaScript",
    level: "Advanced",
    description: "Modern ES6+ JavaScript for web applications",
    projects: 20,
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    icon: htmlIcon,
    title: "HTML5",
    level: "Advanced",
    description: "Semantic markup and modern HTML features",
    projects: 25,
    color: "bg-orange-100 text-orange-800"
  },
  {
    icon: cssIcon,
    title: "CSS3",
    level: "Advanced",
    description: "Responsive designs with Flexbox, Grid and animations",
    projects: 25,
    color: "bg-indigo-100 text-indigo-800"
  },
  {
    icon: mongoIcon,
    title: "MongoDB",
    level: "Intermediate",
    description: "NoSQL database design and implementation",
    projects: 6,
    color: "bg-emerald-100 text-emerald-800"
  },
  {
    icon: gitIcon,
    title: "Git",
    level: "Intermediate",
    description: "Version control and collaborative development",
    projects: 15,
    color: "bg-red-100 text-red-800"
  },
  {
    icon: figmaIcon,
    title: "Figma",
    level: "Beginner",
    description: "UI/UX prototyping and design",
    projects: 3,
    color: "bg-purple-100 text-purple-800"
  },
];

function Skills() {
  const { theme } = useTheme();
 useEffect(() => {
          AOS.init({
            duration: 800,
            easing: 'ease-in-out',
          });
        }, []);
      
 
  return (
    <motion.div 
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-10 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2  data-aos="zoom-in-up" data-aos-delay="200" className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          My Skills & Expertise
        </h2>
        <motion.p 
          className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
        
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
            data-aos="fade-up" data-aos-delay="200"
        >
          Technologies I work with and my proficiency levels
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4" data-aos="zoom-in-right" data-aos-delay="200">
                <img 
                  src={skill.icon} 
                  alt={skill.title} 
                  className="w-12 h-12 object-contain mr-4"
                />
                <div>
                  <h3  data-aos="zoom-in-right" data-aos-delay="200" className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {skill.title}
                  </h3>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${skill.color}`}>
                    {skill.level}
                  </span>
                </div>
              </div>
              <p  data-aos="zoom-in-right" data-aos-delay="200" className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                {skill.description}
              </p>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {skill.projects}+ projects
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={`mt-16 text-center rounded-xl p-8 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h3 className={`text-xl md:text-2xl font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Want to see these skills in action?
        </h3>
        <Link 
          to="/work" 
          className={`inline-block font-medium py-3 px-6 rounded-lg transition-colors duration-300 ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-[#a54f3c] hover:bg-[#8a3c2c] text-white'}`}
        >
          View My Work Portfolio
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Skills;