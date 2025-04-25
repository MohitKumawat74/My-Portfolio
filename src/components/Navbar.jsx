import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/mohitlogo.png';
import '../componentscss/Navbar.css';
import { Link } from 'react-router-dom';

const NavLink = React.memo(({ to, children, onClick, isActive }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 font-sans ${
      isActive 
        ? 'bg-[#a54f3c] text-white border-[#a54f3c]' 
        : 'border-gray-300 hover:bg-[#a54f3c] hover:text-white hover:border-[#a54f3c]'
    }`}
    aria-current={isActive ? "page" : undefined}
  >
    {children}
  </Link>
));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback((e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'skills', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-toggle')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, closeMenu]);

  return (
    <nav className={`fixed w-full shadow-lg z-50 transition-all duration-300 ${
      scrolled ? 'py-2' : 'py-4'
    } ${theme === 'dark' ? 'dark bg-gray-800 text-white' : 'bg-white text-gray-700'}`}>
      
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Nav Items */}
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none menu-toggle"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </motion.button>
          
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" isActive={activeSection === 'home'}>Home</NavLink>
            <NavLink to="/about" isActive={activeSection === 'about'}>About</NavLink>
            <NavLink to="/skills" isActive={activeSection === 'skills'}>Skills</NavLink>
          </div>
        </div>

        {/* Logo/Name - Center */}
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          layout
        >
          {scrolled ? (
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-center"
            >
              <h2 className="text-xl md:text-2xl font-light">Mohit Kumawat</h2>
              <p className="text-xs md:text-sm">Web Developer</p>
            </motion.div>
          ) : (
            <motion.img 
              src={logo} 
              alt="Logo" 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border p-2 shadow-md"
              whileHover={{ scale: 1.1 }}
            />
          )}
        </motion.div>

        {/* Right Nav Items */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-4">
            <NavLink to="/services" isActive={activeSection === 'services'}>Services</NavLink>
            <NavLink to="/blog" isActive={activeSection === 'blog'}>Blog</NavLink>
            <NavLink to="/contact" isActive={activeSection === 'contact'}>Contact</NavLink>
          </div>
          
          <button
            onClick={toggleTheme}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors hover:cursor-pointer focus:outline-none ${
              theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
            }`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span
              className={`inline-block w-4 h-4 transform transition-transform rounded-full ${
                theme === 'dark' ? 'translate-x-6 bg-yellow-300' : 'translate-x-1 bg-gray-700'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm">
          <motion.div 
            className="mobile-menu absolute left-0 top-0 h-full w-64 shadow-xl"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            style={{
              backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff'
            }}
          >
            <div className="pt-20 px-4 h-full">
              <div className="flex flex-col space-y-4">
                <NavLink to="/" onClick={closeMenu} isActive={activeSection === 'home'}>Home</NavLink>
                <NavLink to="/about" onClick={closeMenu} isActive={activeSection === 'about'}>About</NavLink>
                <NavLink to="/skills" onClick={closeMenu} isActive={activeSection === 'skills'}>Skills</NavLink>
                <NavLink to="/services" onClick={closeMenu} isActive={activeSection === 'services'}>Services</NavLink>
                <NavLink to="/blog" onClick={closeMenu} isActive={activeSection === 'blog'}>Blog</NavLink>
                <NavLink to="/contact" onClick={closeMenu} isActive={activeSection === 'contact'}>Contact</NavLink>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;