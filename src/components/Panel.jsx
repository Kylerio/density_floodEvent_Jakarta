import { motion } from "framer-motion";
import { Home, Map } from "lucide-react";
import { useLocation } from "react-router-dom";

const Panel = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", icon: <Home size={20} />, path: "/" },
    { label: "Map", icon: <Map size={20} />, path: "/map" },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring",  delay: 0.8, stiffness: 100, damping: 20 }}
      className="fixed bottom-6 inset-x-0 flex justify-center z-50"
    >
      <div className="bg-white border shadow-md rounded-full px-6 py-2 flex gap-6 backdrop-blur-md">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <motion.a
            key={item.label}
            href={item.path}
            className={`flex items-center gap-2 ${
                isActive ? "text-blue-500 font-medium" : "text-gray-700"
              } hover:text-blue-500 transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
              {item.icon}
              <span className="text-s">{item.label}</span>
            </motion.a>
          )
        })}
      </div>
    </motion.nav>
  );
};

export default Panel;
