import React from "react";
import "./socials.css";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

export const Socials = () => {
  const openExternalUrl = (url) => {
    window.open(url, "_blank"); // "_blank" opens the link in a new tab
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="Socials_Container"
      id="Socials"
    >
      <div className="Socials_Content " id="Socials">
        <div className="Futures_Title">نـــوور لە هەموو سۆشیال میدیایەکە </div>
        <div className="Socials">
          <div
            className="social"
            onClick={() =>
              openExternalUrl("https://www.facebook.com/noor.page.officiall")
            }
          >
            <FaFacebook />
          </div>
          <div
            className="social"
            onClick={() =>
              openExternalUrl("https://www.instagram.com/noor.page.official")
            }
          >
            <AiFillInstagram />
          </div>
          <div
            className="social"
            onClick={() => openExternalUrl("https://t.me/noor_page")}
          >
            <FaTelegram />
          </div>

          <div className="social" onClick={() => openExternalUrl("https://www.youtube.com/@Noorpageofficial")}>
            <FaYoutube />
          </div>
          <div className="social" onClick={() => openExternalUrl("https://www.tiktok.com/@noor.page.official")}>
            <FaTiktok />
          </div>
          <div className="social" onClick={() => openExternalUrl("mailto:noor.page21@gmail.com")}>
            <SiGmail />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
