import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import SpecialsPage from './components/SpecialsPage/SpecialsPage';
import TestimonialsSection from './components/TestimonialsPage/TestimonialsSection/TestimonialsSection';
import AboutPage from './components/AboutPage/AboutPage';
import Experience from './components/ExperiencePage/Experience';
import InstagramGallery from "./components/InstagramGallery/InstagramGallery";
import Footer from './components/Footer/Footer';
import BookingPage from './components/BookingPage/BookingPage';
import { useRef } from 'react';

function Home() {
  const landingPageRef = useRef(null);
  const specialsPageRef = useRef(null);
  const aboutPageRef = useRef(null);
  const testimonialsSectionRef = useRef(null);
  const experienceRef = useRef(null);
  const instagramGalleryRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="scroll-section-home" ref={landingPageRef}>
        <LandingPage
          landingPageRef={landingPageRef}
          specialsPageRef={specialsPageRef}
          aboutPageRef={aboutPageRef}
          testimonialsSectionRef={testimonialsSectionRef}
          experienceRef={experienceRef}
          instagramGalleryRef={instagramGalleryRef}
          scrollToSection={scrollToSection}
        />
      </div>
      <div className="scroll-section-specials" ref={specialsPageRef}>
        <SpecialsPage />
      </div>
      <div className="scroll-section-about" ref={aboutPageRef}>
        <AboutPage />
      </div>
      <div className="scroll-section-testimonials" ref={testimonialsSectionRef}>
        <TestimonialsSection />
      </div>
      <div className="scroll-section-experience" ref={experienceRef}>
        <Experience />
      </div>
      <div className="scroll-section-gallery" ref={instagramGalleryRef}>
        <InstagramGallery />
      </div>
      <Footer
        landingPageRef={landingPageRef}
        specialsPageRef={specialsPageRef}
        aboutPageRef={aboutPageRef}
        testimonialsSectionRef={testimonialsSectionRef}
        experienceRef={experienceRef}
        instagramGalleryRef={instagramGalleryRef}
        scrollToSection={scrollToSection}
      />
    </>
  );
}

function App() {
  return (
    <div className="App-header">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;
