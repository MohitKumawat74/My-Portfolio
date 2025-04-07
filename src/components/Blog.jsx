  import React, { useEffect } from 'react';
  import { motion } from 'framer-motion';
  import { useNavigate } from 'react-router-dom';
  import '../componentscss/Blog.css'

  import webd from '../assets/web-design.jpg'
  import vdEdit from '../assets/vdedit.png';
  import studentPortal from '../assets/student-portal.jpg';
  import developerJourney from '../assets/developer-journey.jpg';
  import videoEditing from '../assets/video-editing.jpg';
  import fitnessTech from '../assets/fitness-tech.jpg';
import { useTheme } from '../context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

  const blogPosts = [
    {
      id: 1,
      title: "How to Create Stunning Web Designs",
      date: "April 2024",
      category: "Design",
      excerpt: "Discover the latest trends and techniques for crafting modern, user-friendly websites.",
      image: webd,
      fullContent: `
        <p>Creating stunning web designs is both an art and a science. It requires a deep understanding of user experience, visual aesthetics, and the latest design tools. 
        In this blog, I’ll share some of my favorite techniques for designing websites that not only look great but also provide a seamless user experience.</p>
        <p>One of the key principles I follow is simplicity. A clean, minimalist design often resonates better with users than a cluttered one. 
        I also focus on responsive design, ensuring that the website looks great on all devices, from desktops to smartphones.</p>
        <p>Another important aspect is typography. Choosing the right fonts can make a huge difference in how your website is perceived. 
        I’ll also discuss the importance of color theory and how to use colors effectively to evoke emotions and guide user behavior.</p>
      `,
    },

    {
      id: 2,
      title: "Top Video Editing Tips",
      date: "March 2024",
      category: "Video",
      excerpt: "Enhance your video editing skills with these expert tips and tricks.",
      image: vdEdit,
      fullContent: `
      <p>Video editing is a skill that requires both creativity and technical expertise. Whether you’re a beginner or an experienced editor, there’s always room for improvement. 
      In this blog, I’ll share my top 10 tips for creating professional-quality videos.</p>
      <p>First, always plan your edit before you start. Having a clear vision of the final product will save you a lot of time and effort. 
      Next, pay attention to pacing. A well-paced video keeps the audience engaged from start to finish.</p>
      <p>I’ll also cover advanced techniques like color grading, sound design, and the use of transitions. 
      These elements can elevate your video from good to great, making it more engaging and visually appealing.</p>
    `,
    },
    {
      id: 3,
      title: "Building a Student Portal from Scratch",
      date: "January 2025",
      category: "Development",
      excerpt: "Learn how to design and develop a student portal for academic management.",
      image: studentPortal,
      fullContent: `
        <p>Building a student portal is a challenging but rewarding project. It requires a combination of front-end and back-end development skills, as well as a deep understanding of user needs. 
        In this blog, I’ll walk you through the process of creating a student portal from scratch.</p>
        <p>We’ll start by defining the requirements and creating wireframes. Then, I’ll show you how to design the user interface, ensuring it’s intuitive and easy to navigate. 
        Next, we’ll move on to the back-end, where we’ll set up the database and implement the necessary APIs.</p>
        <p>Finally, I’ll discuss testing and deployment. A student portal is a critical tool for academic institutions, so it’s important to ensure it’s reliable and secure. 
        By the end of this blog, you’ll have a solid understanding of how to build a student portal that meets the needs of both students and administrators.</p>
      `,
    },
    {
      id: 4,
      title: "My Journey as a Developer",
      date: "July 2023",
      category: "Career",
      excerpt: "Sharing my experience, challenges, and growth as a developer.",
      image: developerJourney,
      fullContent: `
      <p>My journey as a developer began in college, where I was introduced to programming for the first time. 
      I started with basic languages like C and Java, but soon fell in love with web development. 
      Over the years, I’ve worked on various projects, from simple static websites to complex web applications. 
      Each project taught me something new and helped me grow as a developer.</p>
      <p>One of the biggest challenges I faced was keeping up with the rapidly changing tech landscape. 
      New frameworks, libraries, and tools are released almost every day, and it can be overwhelming to stay updated. 
      However, I’ve learned to embrace the chaos and focus on mastering the fundamentals. 
      This approach has helped me adapt to new technologies quickly and efficiently.</p>
      <p>Today, I’m proud of the progress I’ve made and excited about the future. 
      I’m constantly learning and exploring new areas of development, from AI to blockchain. 
      My journey is far from over, and I can’t wait to see where it takes me next!</p>
    `,
    },
    {
      id: 5,
      title: "The Art of Video Editing",
      date: "May 2024",
      category: "Creative",
      excerpt: "A deep dive into my passion for video editing and visual storytelling.",
      image: videoEditing,
      fullContent: `
        <p>Video editing is more than just cutting and splicing clips together. 
        It’s about telling a story, evoking emotions, and creating a seamless experience for the viewer. 
        My journey into video editing started as a hobby, but it quickly turned into a passion.</p>
        <p>I love experimenting with different editing styles, from fast-paced action sequences to slow, cinematic shots. 
        Each project is a new challenge, and I enjoy the creative process of bringing ideas to life. 
        Whether it’s a short film, a promotional video, or a personal vlog, I put my heart and soul into every edit.</p>
        <p>One of the most rewarding aspects of video editing is seeing the final product. 
        There’s nothing quite like watching a project come together and knowing that you played a part in creating it. 
        It’s a feeling of accomplishment that keeps me motivated to keep editing and improving my skills.</p>
      `,
    },
    {
      id: 6,
      title: "Balancing Tech and Fitness",
      date: "June 2024",
      category: "Lifestyle",
      excerpt: "How I maintain a balance between coding and staying fit.",
      image: fitnessTech,
      fullContent: `
      <p>As a developer, I spend most of my day sitting in front of a computer. 
      While I love what I do, I realized early on that I needed to prioritize my physical health. 
      That’s when I started incorporating fitness into my daily routine.</p>
      <p>I began with simple exercises like stretching and walking, but soon moved on to more intense workouts. 
      Today, I follow a structured fitness plan that includes strength training, cardio, and yoga. 
      These activities not only keep me physically fit but also help me stay mentally sharp and focused.</p>
      <p>Balancing tech and fitness hasn’t always been easy, but it’s worth it. 
      I’ve noticed a significant improvement in my productivity and overall well-being since I started prioritizing my health. 
      If you’re a developer or anyone with a sedentary job, I highly recommend finding a fitness routine that works for you. 
      Your body and mind will thank you!</p>
    `,

    },
  ];

  function Blog() {
    const navigate = useNavigate();
    const { theme } = useTheme();

    const handleReadMore = (post) => {
      navigate(`/blog/${post.id}`, { state: { post } });
    };

     useEffect(() => {
          AOS.init({
            duration: 800,
            easing: 'ease-in-out',
          });
        }, []);
      
    
    return (
      <motion.section
        id="blog"
        className={`w-full min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-amber-950'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <motion.div
            className="text-center mb-16"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-amber-700'}`}>
              My Blog
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Thoughts, tutorials, and insights on web development, design, and more
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <div  data-aos="zoom-in-right" data-aos-delay="200" className={`h-48 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2" data-aos="zoom-in-up" data-aos-delay="200">
                    <span data-aos="zoom-in-right" data-aos-delay="200" className={`text-sm font-medium px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                      {post.category}
                    </span>
                    <span data-aos="zoom-in-right" data-aos-delay="200" className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {post.date}
                    </span>
                  </div>
                  <h2 data-aos="zoom-in-right" data-aos-delay="200" className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {post.title}
                  </h2>
                  <p data-aos="zoom-in-right" data-aos-delay="200" className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {post.excerpt}
                  </p>
                  <button
                    onClick={() => handleReadMore(post)}
                    className={`font-medium transition-colors flex items-center ${theme === 'dark' ? 'text-blue-400 hover:text-blue-600' : 'text-blue-600 hover:text-blue-800'}`}
                    data-aos="zoom-in-right" data-aos-delay="200"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  }
  
  export default Blog;