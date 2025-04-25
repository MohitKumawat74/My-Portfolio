import { motion } from 'framer-motion';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import heroBg from '../assets/mohithomesection.jpg';
import '../componentscss/Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const texts = [
    "I am creative 💀",
    "I am a Web Designer 😃",
    "I am a Vlogger 🤳",
    "I am a Video Editor 👀"
  ];
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const textRef = useRef('');

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentIndex];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, textRef.current.length - 1));
        textRef.current = currentText.substring(0, textRef.current.length - 1);
        setTypingSpeed(75);
      } else {
        setDisplayText(currentText.substring(0, textRef.current.length + 1));
        textRef.current = currentText.substring(0, textRef.current.length + 1);
        setTypingSpeed(150);
      }

      if (!isDeleting && textRef.current === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && textRef.current === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed]);

  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.to = '/path/to/Mohit.pdf'; // Update this path to your actual PDF file location
    link.download = 'Mohit_Kumawat_Resume.pdf'; // The filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home"
      className="hero-section"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBg})` }}
    >
      <motion.div 
        className="social-icons"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Link to="https://www.facebook.com/me/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
          <span className="icon-tooltip">Facebook</span>
        </Link>
        <Link to="http://www.youtube.com/@Mohit74k" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
          <span className="icon-tooltip">YouTube</span>
        </Link>
        <Link to="https://www.instagram.com/mohitkumawat74/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          <span className="icon-tooltip">Instagram</span>
        </Link>
        <Link to="https://www.linkedin.com/in/mohitkumawat74/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <span className="icon-tooltip">LinkedIn</span>
        </Link>
        <Link to="https://github.com/MohitKumawat74" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <span className="icon-tooltip">GitHub</span>
        </Link>
      </motion.div>

      <motion.div 
        className="hero-content"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 className="hero-title">Hello, I am Mohit</h1>
        <div className="typewriter-container">
          <p className="typewriter-text">
            {displayText}
            <span className="typewriter-cursor">|</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        className="hero-button-container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <motion.button 
          className="resume-button hover:bg-black text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadResume}
        >
          <span className="button-text">Get Resume</span>
          <span className="button-effect-left"></span>
          <span className="button-effect-right"></span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;