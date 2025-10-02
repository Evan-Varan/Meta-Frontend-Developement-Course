import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import SpecialsPage from './components/SpecialsPage/SpecialsPage';
import TestimonialsSection from './components/TestimonialsPage/TestimonialsSection/TestimonialsSection';
import AboutPage from './components/AboutPage/AboutPage'
import Experience from './components/ExperiencePage/Experience';
import InstagramGallery from "./components/InstagramGallery/InstagramGallery"
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App-header">
      <LandingPage/>
      <SpecialsPage/>
      <AboutPage/>
      <TestimonialsSection/>
      <Experience/>
      <InstagramGallery/>
      <Footer/>
    </div>
  );
}

export default App;
