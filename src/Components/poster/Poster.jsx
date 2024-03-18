import React from "react";
import "./poster.css";
import { motion } from "framer-motion";

export const Poster = () => {
  const openExternalUrl = (url) => {
    window.open(url, "_blank"); // "_blank" opens the link in a new tab
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="Poster_Container"
      onClick={() =>
        openExternalUrl("https://www.facebook.com/noor.page.officiall")
      }
    ></motion.div>
  );
};
