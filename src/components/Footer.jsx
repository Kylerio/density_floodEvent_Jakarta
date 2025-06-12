import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#31363F] text-center text-gray-500 text-md pb-16">
      <p className="p-4">© {new Date().getFullYear()} Kylerio. All rights reserved.</p>
    </div>
  );
};

export default Footer;
