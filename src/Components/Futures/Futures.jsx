import React, { useState, useEffect } from "react";
import "./futures.css";
import { motion } from "framer-motion";
const futureData = [
  {
    id: 1,
    title: "گەڕانکردن",
    description: "گەڕانکردن بۆ هەموو ئایەتەکانی قورئانی پیرۆز",
    imageUrl:
      "https://i.ibb.co/C2x0jx4/247086146-7feb2e8f-28ed-4858-877e-2c37c8c35d93.png",
  },
  {
    id: 2,
    title: "تەفسیرەکان",
    description: "هەبوونی حەوت تەفسیری کوردی",
    imageUrl: "https://i.ibb.co/r5Zswng/tafser.png",
  },
  {
    id: 3,
    title: "قیبلە نما",
    description: "دیاری کردنی ئاڕاستەی قیبلە",
    imageUrl: "https://i.ibb.co/NCBqp0W/qibla.png",
  },
  {
    id: 4,
    title: "زیکرەکان",
    description: "ناردنی زیکرەکانی بەیانی و ئێواران لەڕێگەی ئاگەنامەوە",
    imageUrl: "https://i.ibb.co/5FWt1W7/Hi-Shoot-20231115-233943.png",
  },
  {
    id: 5,
    title: "کاتەکانی بانگ",
    description:
      "ناردنی ئاگانامە لە کاتی بانگەکاندا، پیشاندانی کاتەکانی بانگ لە ڕێگەی ویجێت",
    imageUrl: "https://i.ibb.co/vZ94H3Q/bang.png",
  },
  {
    id: 6,
    title: "کۆد کراوە",
    description: "کۆدەکانی ئەپڵیکەیشنەکە لە گیتهەب بەردەستە",
    imageUrl: "https://i.ibb.co/DWLs35v/code.png",
  },
];
export const Futures = () => {
  const [selectedFuture, setSelectedFuture] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleFutureClick = (futureId) => {
    setSelectedFuture(futureId);
  };

  const handleFutureHover = (futureId) => {
    setIsHovered(true);
    setSelectedFuture(futureId);
  };

  const handleFutureLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    let futureIntervalId;
    if (!isHovered) {
      const changeFuture = () => {
        const nextIndex = (selectedFuture % futureData.length) + 1;
        setSelectedFuture(nextIndex);
      };

      futureIntervalId = setInterval(changeFuture, 3000); // Change every 3 seconds
    }

    // Clean up the interval on component unmount or when hovering
    return () => clearInterval(futureIntervalId);
  }, [selectedFuture, isHovered]);

  useEffect(() => {
    let imageIntervalId;
    if (!isHovered) {
      const startImageInterval = setTimeout(() => {
        imageIntervalId = setInterval(() => {
          const nextIndex = (selectedFuture % futureData.length) + 1;
          setSelectedFuture(nextIndex);
        }, 2000); // Change every 2 seconds
      }, 3000); // Start after 3 seconds

      // Clean up the interval on component unmount or when hovering
      return () => {
        clearTimeout(startImageInterval);
        clearInterval(imageIntervalId);
      };
    }
  }, [selectedFuture, isHovered]);

  return (
    <div className="Future_Container" id="Futures">
      <div className="Futures_Content">
        <div className="Futures_Title">تایبەتمەندیەکان</div>
        <div className="Futures_Mobile">
          <div className="Future_list">
            {futureData.slice(0, 3).map((future, index) => (
              <motion.div
                key={future.id}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 + index / 2, ease: "linear" }}
                className={`Future ${
                  selectedFuture === future.id ? "selected" : ""
                }`}
                onClick={() => handleFutureClick(future.id)}
                onMouseEnter={() => handleFutureHover(future.id)}
                onMouseLeave={handleFutureLeave}
              >
                <span></span>
                <span>{future.title}</span>
                <span>{future.description}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="Future_Phone"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "linear" }}
          >
            <img
              src={futureData.find((f) => f.id === selectedFuture)?.imageUrl}
              alt=""
              style={{
                opacity: selectedFuture === 0 ? 0.5 : 1,
                transition: "opacity 0.5s ease",
              }}
            />
          </motion.div>
          <div className="Future_list">
            {futureData.slice(3, 6).map((future, index) => (
              <motion.div
                key={future.id}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 + index / 2, ease: "linear" }}
                className={`Future ${
                  selectedFuture === future.id ? "selected" : ""
                }`}
                onClick={() => handleFutureClick(future.id)}
                onMouseEnter={() => handleFutureHover(future.id)}
                onMouseLeave={handleFutureLeave}
              >
                <span></span>
                <span>{future.title}</span>
                <span>{future.description}</span>
              </motion.div>
            ))}
            {/* {futureData.slice(5).map((future, index) => (
              <motion.div
                key={future.id}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 + index / 2, ease: "linear" }}
                className={`Future ${selectedFuture === future.id ? "selected" : ""}`}
                onClick={() => handleFutureClick(future.id)}
                onMouseEnter={() => handleFutureHover(future.id)}
                onMouseLeave={handleFutureLeave}
              >
                <span></span>
                <span>{future.title}</span>
                <span>{future.description}</span>
              </motion.div>
            ))} */}
           
          </div>
        </div>
      </div>
    </div>
  );
};
