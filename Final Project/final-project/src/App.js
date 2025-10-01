import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import SpecialsPage from './components/SpecialsPage/SpecialsPage';
import TestimonialsSection from './components/TestimonialsPage/TestimonialsSection/TestimonialsSection';
function App() {
  return (
    <div className="App-header">
      <LandingPage/>
      <SpecialsPage/>
      <TestimonialsSection/>
    </div>
  );
}

export default App;
