import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const { theme } = useTheme();

  const contactDetails = [
    { platform: 'Phone', value: '+91 8890595701', icon: '📞', link: 'tel:+918890595701' },
    { platform: 'Instagram', value: '@Mohitkumawat74', icon: '📸', link: 'https://instagram.com/Mohitkumawat74' },
    { platform: 'Facebook', value: 'Mohit Kumawat', icon: '📘', link: 'https://www.facebook.com/mohitkumawat74/' },
    { platform: 'WhatsApp', value: '+91 8890595701', icon: '💬', link: 'https://wa.me/918890595701' },
    { platform: 'Email', value: 'mohitkumawat5353@gmail.com', icon: '✉️', link: 'mailto:mohitkumawat5353@gmail.com' },
    { platform: 'LinkedIn', value: 'Mohit Kumawat', icon: '🔗', link: 'https://linkedin.com/in/mohitkumawat74' },
  ];

  const textToType = ['Get in Touch', 'Contact Me', 'Reach Out'];

  useEffect(() => {
    const handleType = () => {
      const currentText = textToType[loopNum % textToType.length];
      setText(isDeleting ? currentText.substring(0, text.length - 1) : currentText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before typing next phrase
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <motion.section
      id="contact"
      className={`w-full min-h-screen py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block min-w-[200px] text-center">
              {text}
              <span className={`${text.length === textToType[loopNum % textToType.length].length ? 'animate-pulse' : 'opacity-0'}`}>|</span>
            </span>
          </motion.h1>
          <motion.p
            className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Let's connect and create something amazing together
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactDetails.map((detail, index) => (
            <motion.a
              key={index}
              to={detail.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl mb-4" aria-hidden="true">
                  {detail.icon}
                </span>
                <h3 className={`text-xl font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {detail.platform}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {detail.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3 className={`text-xl font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Have a project in mind?
          </h3>
          <Link
            to="https://wa.me/918890595701"
            className={`inline-block font-medium py-3 px-8 rounded-lg transition-colors duration-300 ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-[#a54f3c] hover:bg-[#8a3c2c] text-white'}`}
          >
            Let's Discuss
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;