import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-heroImg bg-no-repeat bg-cover bg-center min-h-screen relative">
      <div className="w-full h-screen bg-blackOverlay">
        <div className="max-w-4xl text-left space-y-6 flex flex-col justify-center h-full px-6 sm:px-12 lg:px-24 relative">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-dmsans leading-tight"
          >
            Jakarta Population vs Flood Events: A Spatial Map Dashboard
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg font-ubuntu md:text-xl max-w-2xl text-gray-300"
          >
            Understanding urban patterns through interactive maps. Explore how
            population density intersects with flood occurrences across
            sub-districts.
          </motion.p>

          {/* Scroll Down Indicator */}
          <motion.a
            href="#about-section"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-8 text-gray-400 hover:text-blue-500"
          >
            <ChevronDown size={36} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
