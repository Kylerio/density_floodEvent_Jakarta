import { motion } from "framer-motion";
import { Compass, AlertTriangle, BarChart3 } from "lucide-react";

const resultItems = [
  {
    title: "Spatial Clustering Analysis",
    icon: <Compass size={24} className="text-blue-500 relative bottom-[8px]"/>,
    content: `Using spatial autocorrelation methods (LISA, Getis-Ord Gi*, Bivariate Moran), we identified statistically significant clusters of flood-prone and high-density areas.

    Certain sub-districts emerged as “High-High” clusters, indicating regions with both high population density and frequent flooding.

    Meanwhile, neutral zones appeared in areas with weak spatial correlation, suggesting more localized or isolated flooding behavior.`,
  },
  {
    title: "Flood Risk Classification",
    icon: <AlertTriangle size={24} className="text-yellow-500 relative bottom-[8px]" />,
    content: `A multi-criteria risk assessment was conducted by combining flood depth, duration, affected households, and inundated area.

    The resulting risk scores were normalized and classified into four levels: Very High, High, Moderate, and Low.

    Visualization shows that “Very High” risk zones are distributed across both central and peripheral areas of Jakarta.`,
  },
  {
    title: "Summary Statistics",
    icon: <BarChart3 size={24} className="text-green-400 relative bottom-[8px]" />,
    content: `Over 30 sub-districts were classified as Very High Risk based on MCDA-Quantile Ranking.

    Some areas lacked complete flood data and were marked as Missing to ensure transparency in interpretation.

    Spatial layers were compared to reveal overlaps between risk zones and statistically significant spatial patterns.`,
  },
];

const ResultSection = () => {
  return (
    <section className="py-20 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold uppercase font-dmsans">
          Analysis Results
        </h2>
        <p className="mt-2 text-lg max-w-2xl mx-auto font-ubuntu">
          Summary of flood vulnerability patterns derived from spatial and
          risk-based analyses.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {resultItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#31363F] p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all whitespace-pre-line"
          >
            <div className="flex items-center mb-4 space-x-3">
              <div>{item.icon}</div>
              <h3 className="text-xl text-[#EEEEEE] font-semibold mb-4">{item.title}</h3>
            </div>
            <p className="text-white text-sm leading-relaxed">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResultSection;
