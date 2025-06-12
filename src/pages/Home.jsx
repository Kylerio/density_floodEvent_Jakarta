import AboutSection from "../pages/AboutSection";
import LayerSection from "./LayerSection";
import ResultSection from "./ResultSection";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="text-white space-y-6">
      {/* Hero Section */}
      <section id="hero-section">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about-section">
        <AboutSection />
      </section>

      {/* layers Section */}
      <section id="layer-section" >
        <LayerSection />
      </section>

      {/* result Section */}
      <section id="layer-section" className="py-20">
        <ResultSection />
      </section>
    </div>
  );
};

export default Home;
