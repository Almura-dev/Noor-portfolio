import React, { useState, useEffect } from "react";
import "./sc.css";
import { FaGithub } from "react-icons/fa";

export const SourceCode = () => {
  const [showFull, setShowFull] = useState(false);
  const openExternalUrl = (url) => {
    window.open(url, "_blank"); // "_blank" opens the link in a new tab
  };
  useEffect(() => {
    // Show only icon every 5 seconds
    const iconOnlyInterval = setInterval(() => {
      setShowFull(false);
      setTimeout(() => {
        setShowFull(true);
      }, 3000);
    }, 8000);

    return () => {
      clearInterval(iconOnlyInterval);
    };
  }, []);

  return (
    <div
      className={`SC_Container ${showFull ? "showFull" : ""}`}
      onMouseEnter={() => setShowFull(true)}
      onMouseLeave={() => setShowFull(false)}
      onClick={() =>
        openExternalUrl("https://github.com/w-coding/Noor-Quran-Qibla-PrayerTime")
      }
    >
      <div className={`github ${showFull ? "showFull" : ""}`}>
        <div className={`git_Logo ${showFull ? "showFull" : ""}`}>
          <FaGithub />
        </div>
        {showFull && (
          <div className="git_Button">
            <div className="git_Butt">سۆرس کۆد</div>
          </div>
        )}
      </div>
    </div>
  );
};
