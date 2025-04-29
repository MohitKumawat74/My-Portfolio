import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../componentscss/Work.css";

/* Import your project images */
import ecomImage from "../assets/E-commerce.png";
import weatherImage from "../assets/wheather.png";
import studentPortalImage from "../assets/student-portal.jpg"; // Replace with your student portal image

/* Project Data */
const projects = [
  {
    image: ecomImage,
    title: "E-commerce Website",
    description: "A sleek and powerful e-commerce platform to boost sales.",
    link: "/projects/ecommerce",
  },
  {
    image: weatherImage,
    title: "Weather App",
    description: "A real-time, responsive weather forecasting application.",
    link: "https://weather-app-nine-rose-60.vercel.app/",
  },
  {
    image: studentPortalImage,
    title: "Student Portal",
    description: "A comprehensive platform for students to manage their academic activities.",
    link: "/projects/student-portal",
  },
];

function Work() {
  return (
    <motion.div 
      className="work-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="work-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Creative Work
      </motion.h2>
      
      <motion.p 
        className="work-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Showcasing my latest projects and creative journey.
      </motion.p>

      <div className="work-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="work-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} className="work-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={project.link} className="work-btn">
              View Project →
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Work;