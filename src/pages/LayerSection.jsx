import { motion } from "framer-motion";
import CardSwap, { Card } from "../../reactBits/CardSwap/CardSwap";
import moranBivariate from "../../public/assets/Bivariate Moran.jpeg";
import lisaCluster from "../../public/assets/Lisa Cluster.jpeg";
import getisOrdGi from "../../public/assets/Getis Ord.jpeg";
import mcdaMinMax from "../../public/assets/MCDA + MinMax.jpeg";
import mcdaQuantileRank from "../../public/assets/MCDA + Quantile Rank.jpeg";
import populationDensity from "../../public/assets/Kepadatan Penduduk.jpeg";
import floodReports from "../../public/assets/Jumlah Banjir.jpeg";

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.7,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const LayerSection = () => {
  return (
    <section className="relative h-screen overflow-hidden space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
        <div className="mb-12 text-left px-6 sm:px-12 lg:px-24">
          <motion.h1
            initial={"hidden"}
            whileInView={"visible"}
            variants={fadeInLeft}
            viewport={{ once: true }}
            className="text-2xl font-bold font-dmsans uppercase mb-12"
          >
            Map Layers
          </motion.h1>

          <motion.h2
            initial={"hidden"}
            whileInView={"visible"}
            variants={fadeInLeft}
            viewport={{ once: true }}
            custom={2}
            className="text-lg font-ubuntu md:text-xl max-w-4xl"
          >
            Explore multiple data layers including population density, flood
            events, spatial clusters, bivariate risk zones, and flood risks.
            Scroll through the cards on the right to view details about each
            layer.
          </motion.h2>
        </div>

        {/* Right Side - Floating CardSwap */}
        <div className="relative h-[650px] w-full flex justify-end">
          <motion.div
            className="absolute right-0 h-[500px] w-[300px] z-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeInUp}
          >
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <img
                  src={populationDensity}
                  alt="Jakarta Population Density Visualization"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg"
                />
              </Card>
              <Card>
                <img
                  src={floodReports}
                  alt="Jakarta Population Density Visualization"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg"
                />
              </Card>
              <Card>
                <img
                  src={lisaCluster}
                  alt="Jakarta Population Density Visualization"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg"
                />
              </Card>
              <Card>
                <img
                  src={getisOrdGi}
                  alt="Jakarta Population Density Visualization"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg"
                />
              </Card>
              <Card>
                <img
                  src={moranBivariate}
                  alt="Jakarta Population Density Visualization"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg"
                />
              </Card>
              <Card>
                <img
                  src={mcdaMinMax}
                  alt="Jakarta Population Density Visualization"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg"
                />
              </Card>
              <Card>
                <img
                  src={mcdaQuantileRank}
                  alt="Jakarta Population Density Visualization"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg"
                />
              </Card>
            </CardSwap>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LayerSection;
