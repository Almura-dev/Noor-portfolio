import React from "react";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="Navbar_Container">
      <div className="Navbar_content">
        <div className="Logo">
          <img
            src="https://i.ibb.co/mvby6Zd/20220911-124245.png"
            alt=""
          />
          {/* <span>ئەپڵیکەیشنی نور</span> */}
        </div>
        <div className="Navigations">
          <a href="/">گشتی</a>
          <a href="#Futures">تایبەتمەندیەکان</a>
          <a href="#Products">بەرهەمەکانمان</a>

          <a href="#Socials">سۆشیاڵ میدیا</a>
          {/* <a href="#Contact">پەیوەندی</a> */}
        </div>
        <div className="Download">
          <a href="#Download" className="download_button_navbar">دابەزاندن</a>
        </div>
      </div>
    </div>
  );
};
