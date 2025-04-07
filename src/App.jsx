import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail'; // Make sure you have this component
import Work from './components/WorkPage';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="font-sans">
          <Navbar />
          
          <Routes>
            {/* Main page with all sections (one-page style) */}
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Services />
                <Blog />
                <Contact />
              </>
            } />
            
            {/* Individual section routes */}
            <Route path="/home" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path='/work' element= {<Work/>}/>
            <Route path="/contact" element={<Contact />} />
            
            {/* Service detail pages */}
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;