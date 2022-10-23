import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/About';
import Services from './components/Services';
import Feedback from './components/Feedback';
import Blog from './components/Blog';
import Footer from './components/Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutSection />
      <Services />
      <Feedback />
      <Blog />
      <Footer />
    </div>
  );
}




