import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTheme } from '../context/ThemeContext';
import '../componentscss/Service.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Services = () => {
  const { theme } = useTheme();
  const services = [
    {
      id: 'webDevelopment',
      title: "Web Development",
      description: "Creating responsive and dynamic websites with modern frameworks and technologies.",
      icon: "🌐"
    },
    {
      id: 'videoEditing',
      title: "Video Editing",
      description: "Editing and producing high-quality videos for content creators and businesses.",
      icon: "🎬"
    },
    {
      id: 'uiuxDesign',
      title: "UI/UX Design",
      description: "Designing intuitive and aesthetically pleasing user interfaces.",
      icon: "🎨"
    },
    {
      id: 'fitnessCoaching',
      title: "Fitness Coaching",
      description: "Personalized fitness plans to help achieve health goals.",
      icon: "💪"
    },
    {
      id: 'communicationSkills',
      title: "Communication Skills",
      description: "Enhancing interpersonal and professional communication skills.",
      icon: "🗣️"
    },
    {
      id: 'digitalMarketing',
      title: "Digital Marketing",
      description: "Driving brand growth through targeted marketing strategies.",
      icon: "📈"
    }
  ];

  
    useEffect(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
      });
    }, []);
  

  return (
    <section id="services" className={`w-full py-10 h-144 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <motion.h1 
          className={`text-5xl  font-bold mb-4 text-center  ${theme === 'dark' ? 'text-[#48cae4]' : 'text-[#a54f3c]'} `}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h1>

        <motion.div
          className="text-center mb-12"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl"  data-aos="fade-right" data-aos-delay="100">What I can do for you</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <motion.div 
                  className={`p-6 mb-14 rounded-xl h-full flex flex-col items-center text-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-4"  data-aos="fade-up" data-aos-delay="100">{service.icon}</div>
                  <h3 className={`text-2xl font-bold mb-3  $data-aos="fade-up" data-aos-delay="100" ${theme === 'dark' ? 'text-[#48cae4]' : 'text-[#a54f3c]'}`}>{service.title}</h3>
                  <p className="mb-4" data-aos="zoom-in-up" data-aos-delay="200">{service.description}</p>
                  <Link 
                    to={`/services/${service.id}`} 
                    className= { `mt-auto px-4 py-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-[#48cae4] text-gray-900 hover:bg-[#00b4d8]' : 'bg-[#a54f3c] text-white hover:bg-[#8a3c2c]'}`}
                  >
                    Learn More
                  </Link>

                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
