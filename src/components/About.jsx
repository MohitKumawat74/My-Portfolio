import { motion } from 'framer-motion';
import { FaComments, FaMusic, FaPlane } from 'react-icons/fa';
import { GiCricketBat } from 'react-icons/gi';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  const hobbies = [
    { name: 'Playing Cricket', icon: <GiCricketBat className="text-2xl" /> },
    { name: 'Talking with Strangers', icon: <FaComments className="text-2xl" /> },
    { name: 'Listening to Music', icon: <FaMusic className="text-2xl" /> },
    { name: 'Traveling', icon: <FaPlane className="text-2xl" /> },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id="about" className={`py-12 md:py-16 lg:py-20 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl" data-aos="fade-up">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-[#48cae4]' : 'text-[#a54f3c]'}`}>
              About Me
            </h1>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg lg:text-xl" data-aos="fade-up" data-aos-delay="100">
                I'm a passionate MERN Stack Developer with expertise in web development, video editing, and content creation.
                I blend technical skills with creative vision to build engaging digital experiences.
              </p>

              <p className="text-base sm:text-lg lg:text-xl" data-aos="fade-up" data-aos-delay="150">
                With a strong foundation in computer science and continuous learning mindset, I create efficient,
                user-friendly applications that deliver exceptional value.
              </p>
            </div>

            <div className="mb-8 sm:mb-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className={`text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-[#48cae4]' : 'text-[#a54f3c]'}`}>
                My Hobbies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col items-center p-3 sm:p-4 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-200'}`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    data-aos="zoom-in"
                    data-aos-delay={250 + (index * 50)}
                  >
                    <div className={`mb-1 sm:mb-2 ${theme === 'dark' ? 'text-[#48cae4]' : 'text-[#a54f3c]'}`}>
                      {hobby.icon}
                    </div>
                    <span className="text-sm sm:text-base text-center">
                      {hobby.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a
              href={`https://wa.me/918890595701`}
              target="_blank"
              rel="noopener noreferrer" 
              className={`inline-block px-5 py-2 sm:px-6 sm:py-3 font-medium rounded-lg transition-colors text-sm sm:text-base ${theme === 'dark' ? 'bg-[#48cae4] text-gray-900 hover:bg-[#00b4d8]' : 'bg-[#a54f3c] text-white hover:bg-[#8a3c2c]'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Let's Connect →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;