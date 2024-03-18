import React, { useState, useEffect } from "react";
import "./hero.css";
import "./navbar.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";
// import { IoMdDownload } from "react-icons/io";
// import { FiMenu } from "react-icons/fi";
import { Nav } from "../Nav/Nav";
export const Hero = (props) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const handleResize = (event) => {
      setIsMobile(event.matches);
    };

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Initial check
    handleResize(mediaQuery);

    // Add listener
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div className="Hero_Container ">
      {!isMobile ? (
        <>
          <div className="Navbar_Container">
            <div className="Navbar_content">
              <div className="Logo">
                <img
                  src="https://i.ibb.co/mvby6Zd/20220911-124245.png"
                  alt=""
                />
              </div>
              <div className="Navigations">
                <a href="#">گشتی</a>
                <a href="#Futures">تایبەتمەندیەکان</a>
                <a href="#Socials">سۆشیاڵ میدیا</a>
                <a href="#About">دەربارە</a>
                <a href="#Contacts">پەیوەندەی</a>
              </div>
              <div className="Download">
                <a href="#Download" className="download_button_navbar">
                  دابەزاندن
                </a>
              </div>
            </div>
          </div>
          <div className="Hero_Content">
            <div className="Hero_right ">
              <div className="Hero_title">
                <span>
                  <TypeAnimation
                    sequence={[
                      "ئەپڵیکەیشنی",
                      3000,
                      "  ئەپڵیکەیشنی ",
                      3000,
                      " ئەپڵیکەیشنی  ",
                      3000,
                    ]}
                    cursor={false}
                    wrapper="span"
                    speed={25}
                    repeat={Infinity}
                  />
                </span>
                <span>{` `}</span>
                <span className="important">نـــوور</span>
              </div>
              <div className="Hero_Quran">
                اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ{" "}
              </div>
              <div className="Download_Hero">
                <a href="#Download" className="download_button_hero">
                  دابەزاندن
                </a>
              </div>
            </div>
            <motion.div
              className="Hero_left"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <img
                src="https://i.ibb.co/LndK6NH/1111111111111111111.png"
                alt=""
              />
            </motion.div>
          </div>
          <div className="explore">
            <FaAngleDoubleDown />
          </div>
        </>
      ) : (
        <>
        {/* <Nav activeNav={props.activeNav} setActiveNav={props.setActiveNav}/> */}
        {/* <div className="Navbar_Container">
          <div className="Navbar_content">
            <div className="Navigations">
              <FiMenu />
                <a href="/">گشتی</a>
              <a href="#Futures">تایبەتمەندیەکان</a>
              <a href="#Products">بەرهەمەکانمان</a>
              <a href="#Socials">سۆشیاڵ میدیا</a>
              </div>
            <div className="Logo">
              
              <img
                src="https://i.ibb.co/mvby6Zd/20220911-124245.png"
                alt=""
              />
            </div>

            <div className="Download">
              <a href="#Download" className="download_button_navbar">
                <IoMdDownload />
              </a>
            </div>
          </div>
        </div> */}
          <div className="Hero_Content">
            <div className="Hero_right ">
              <div className="Hero_title">
                <span>
                  <TypeAnimation
                    sequence={[
                      "ئەپڵیکەیشنی",
                      3000,
                      "  ئەپڵیکەیشنی ",
                      3000,
                      " ئەپڵیکەیشنی  ",
                      3000,
                    ]}
                    cursor={false}
                    wrapper="span"
                    speed={25}
                    repeat={Infinity}
                  />
                </span>
                <span>{` `}</span>
                <span className="important">نـــوور</span>
              </div>
              <div className="Hero_Quran">
                اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ{" "}
              </div>
              <div className="Download_Hero">
                <a href="#Download" className="download_button_hero">
                  دابەزاندن
                </a>
              </div>
            </div>
            <motion.div
              className="Hero_left"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <img
                src="https://i.ibb.co/LndK6NH/1111111111111111111.png"
                alt=""
              />
            </motion.div>
          </div>
          <div className="explore">
            <FaAngleDoubleDown />
          </div>
        </>
      )}
    </div>
  );
};
