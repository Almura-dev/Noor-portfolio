import React from "react";
import "./footer.css";

export const Footer = () => {
  const openExternalUrl = (url) => {
    window.open(url, "_blank"); // "_blank" opens the link in a new tab
  };
  return (
    <div className="Footer_Container">
      <div className="Footer_Content ">
        <div className="Footer_Logo ">
          <img src="https://i.ibb.co/mvby6Zd/20220911-124245.png" alt="" />
        </div>
        <div className="Footer_Details ">
          <div className="Details ">
            <span>نــــــــــــــــــوور ڕوناکیەکی بێ سنوور</span>
            <span>یەکەمین ئەپڵیکەیشنی ئیسلامی کوردی کۆدکراوە </span>
          </div>
        </div>
        <div className="empty_div"></div>
      </div>
      <div
        className="Developer"
        onClick={() => openExternalUrl("https://www.facebook.com/almura.dev")}
      >
        <span>{`گەشەپێدەری وێبسایت `}</span>
        <span>{` </> Alan Muhammad  </>`}</span>
      </div>
    </div>
  );
};
