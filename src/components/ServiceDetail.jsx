import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const serviceDetails = {
  webDevelopment: {
    title: "Web Development",
    description: "Building modern, responsive, and dynamic websites.",
    details: "I specialize in crafting high-performance web applications with a focus on user experience, speed, and scalability. Technologies I use include React, Next.js, Node.js, and more.",
    benefits: [
      "Custom-built websites tailored to your needs",
      "SEO-friendly and optimized for performance",
      "Responsive design for all devices",
      "Secure and scalable architecture"
    ],
    icon: "🌐"
  },
  videoEditing: {
    title: "Video Editing",
    description: "Professional video editing for content creators.",
    details: "I provide high-quality video editing with smooth transitions, effects, and color grading to enhance your content.",
    benefits: [
      "High-quality editing with professional tools",
      "Engaging effects and transitions",
      "Color correction and grading",
      "Optimized for different platforms"
    ],
    icon: "🎬"
  },
  uiuxDesign: {
    title: "UI/UX Design",
    description: "Creating visually appealing and user-friendly interfaces.",
    details: "I design wireframes, prototypes, and high-fidelity user interfaces using Figma, Adobe XD, and more.",
    benefits: [
      "User-centered design approach",
      "Intuitive and engaging UI/UX",
      "Interactive prototypes",
      "Consistent branding across platforms"
    ],
    icon: "🎨"
  },
  fitnessCoaching: {
    title: "Fitness Coaching",
    description: "Helping individuals achieve their fitness goals.",
    details: "I provide customized workout routines and nutritional guidance to help you stay fit and healthy.",
    benefits: [
      "Personalized fitness plans",
      "Nutritional guidance",
      "Progress tracking and motivation",
      "Flexible online and in-person coaching"
    ],
    icon: "💪"
  },
  communicationSkills: {
    title: "Communication Skills",
    description: "Enhancing your ability to communicate effectively.",
    details: "I offer training to improve verbal, non-verbal, and written communication skills, helping you build confidence and clarity in your interactions.",
    benefits: [
      "Improved public speaking skills",
      "Effective interpersonal communication",
      "Professional writing skills",
      "Active listening and conflict resolution"
    ],
    icon: "🗣️"
  },
  digitalMarketing: {
    title: "Digital Marketing",
    description: "Driving business growth through strategic marketing.",
    details: "I provide comprehensive digital marketing services, including SEO, social media marketing, content creation, and analytics.",
    benefits: [
      "Increased online visibility",
      "Targeted social media campaigns",
      "Data-driven marketing strategies",
      "Improved ROI through analytics"
    ],
    icon: "📈"
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <section className="w-full py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl">Service Not Found</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="service-detail" className="w-full py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto bg-gray-700 rounded-xl p-8"
        >
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{service.icon}</div>
            <motion.h2 
              className="text-3xl font-bold text-[#48cae4] mb-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {service.title}
            </motion.h2>
            <motion.p 
              className="text-xl mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {service.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#48cae4]">Service Details</h3>
            <p className="mb-6">{service.details}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#48cae4]">Key Benefits</h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9 + (index * 0.1) }}
                >
                  <span className="mr-2">✓</span> {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Link 
              to="https://wa.me/918890595701" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#48cae4] text-gray-900 font-medium rounded-lg hover:bg-[#00b4d8] transition-colors"
            >
              Contact Me About This Service
            </a>
            <button className=' ms-1.5 inline-block px-6 py-3 bg-[#030404] text-white font-medium rounded-lg hover:bg-[#f5fcfd] hover:text-black transition-colors cursor-pointer'><Link to="/services"> Back to Service </a></button>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetail;