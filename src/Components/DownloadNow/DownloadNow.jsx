import React from "react";
import "./dn.css";
import { FaGooglePlay } from "react-icons/fa";
// import { TfiApple } from "react-icons/tfi";
import { SiHuawei } from "react-icons/si";
import { motion } from "framer-motion";

export const DownloadNow = () => {
  const openExternalUrl = (url) => {
    window.open(url, "_blank"); // "_blank" opens the link in a new tab
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="Downloadnow_container "
      id="DN"
    >
      <div className="dn_content" id="Download">
        <div className="dn_content_right ">
          <span>ئێستا ئەپڵیکەیشنی</span>
          <span className="important">نـــوور</span>
          <span>دابەزێنە !</span>
        </div>
        <div className="dn_content_left ">
          <div
            className="download_button google_play"
            onClick={() => openExternalUrl("https://play.google.com/store/apps/details?id=com.dya.noor")}
          >
            <div className="db_right">
              <span>Available on</span>
              <span>Google Play</span>
            </div>
            <div className="db_left">
              <FaGooglePlay />
            </div>
          </div>
          {/* <div
            className=" download_button ios"
            onClick={() => openExternalUrl("https://www.apple.com/app-store/")}
          >
            <div className="db_right">
              <span>Download on the</span>
              <span>App Store</span>
            </div>
            <div className="db_left">
              <TfiApple />
            </div>
          </div> */}
          <div
            className="download_button app_gallery"
            onClick={() => openExternalUrl("https://appgallery.huawei.com/app/C109100645")}
          >
            <div className="db_right">
              <span>Explore it on </span>
              <span>App Gallery</span>
            </div>
            <div className="db_left">
              <SiHuawei />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
