import { motion } from "framer-motion";
import { Users, Waves, Library, Sigma } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-md font-bold font-dmsans uppercase mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          About This Map
        </motion.h1>

        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-ubuntu mx-auto max-w-3xl text-center mb-20">
            This map highlights flood risks and population density across
            Jakarta, using spatial analysis to reveal distribution patterns and
            risk classification to pinpoint high-exposure areas.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeInUp}
          >
            <div className="flex gap-3">
              <div className="flex w-12 h-10 p-2 justify-center items-center rounded-full bg-neutral-800/60">
                <Users className="text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Population Density
                </h3>
                <p className="text-md text-neutral-300 font-nunito">
                  Jakarta packs over 16,146 people into every square kilometer,
                  making it Indonesia's most crowded province (BPS, 2023). This
                  map shows where density peaks across neighborhoods.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeInUp}
          >
            <div className="flex gap-3">
              <div className="flex w-12 h-10 p-2 justify-center items-center rounded-full bg-neutral-800/60">
                <Waves className="text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Flood Events</h3>
                <p className="text-md text-neutral-300 font-nunito">
                  Jakarta's low-lying geography (40% below sea level) makes
                  annual floods inevitable. Monsoon surges from the Java Sea
                  caused record flooding in 2020 - this map identifies the most
                  vulnerable neighborhoods.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeInUp}
          >
            <div className="flex gap-3">
              <div className="flex w-12 h-10 p-2 justify-center items-center rounded-full bg-neutral-800/60">
                <Sigma className="text-purple-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Methodology</h3>
                <p className="text-md text-neutral-300 font-nunito">
                  Jakarta’s flood vulnerability is analyzed using spatial
                  statistics and risk modeling. LISA identifies population
                  clusters, Getis-Ord Gi detects flood intensity hotspots, and
                  Bivariate Moran’s I maps areas where they intersect.
                  Multi-Criteria Decision Analysis (MCDA) ranks flood risk based
                  on depth, duration, and impact.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            variants={fadeInUp}
          >
            <div className="flex gap-3">
              <div className="flex w-12 h-10 p-2 justify-center items-center rounded-full bg-neutral-800/60">
                <Library className="text-yellow-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Data Sources</h3>
                <p className="text-md text-neutral-300 font-nunito">
                  BPS Indonesia, Dukcapil DKI Jakarta, and CARTO basemaps are
                  used to build a reliable view of Jakarta’s population and
                  flood data landscape.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
