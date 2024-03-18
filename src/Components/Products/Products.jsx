import React from "react";
import "./products.css";
export const Products = () => {
  const openExternalUrl = (url) => {
    window.open(url, "_blank"); // "_blank" opens the link in a new tab
  };
  return (
    <div className="Products_Container" id="Products">
      <div className="Products_Content">
        <div className="Futures_Title"> بەرهەمەکانی نـوور </div>
        <div className="Products">
          <div
            className="Product "
            onClick={() =>
              openExternalUrl(
                "https://play.google.com/store/apps/details?id=com.moon_project.moon_project"
              )
            }
          >
            <img
              src="https://play-lh.googleusercontent.com/L3I30-1XsltQjl6FLKJdh_YYXx5QF10UgXc7jmvdlVbipT1TfoFFM7Uuh7x6LDAzoQ=w240-h480-rw"
              alt=""
              style={{ background: "#0B0B0B" }}
            />
          </div>
          <div
            className="Product "
            onClick={() =>
              openExternalUrl(
                "https://play.google.com/store/apps/details?id=com.dya.hanban"
              )
            }
          >
            <img
              src="https://play-lh.googleusercontent.com/fBZItPpBTE22em_T7V9aM0noC35t4GRyWQowCblkjkYDhuEbslZawwSWPYBqqa-SwQ=w240-h480-rw"
              alt=""
              style={{ background: "#EAF4FE" }}
            />
          </div>
          <div
            className="Product "
            onClick={() =>
              openExternalUrl(
                "https://play.google.com/store/apps/details?id=com.dya.asmaulhusna"
              )
            }
          >
            <img
              src="https://play-lh.googleusercontent.com/9HM7ljBcVjCFtXWnxkJPHpa-_sopmdzdbiALan7AJRqVyg86QNlO2OJ3RS9OkpFlxYmr=s256-rw"
              alt=""
              style={{ background: "#70A0A6" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
