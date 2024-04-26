"use client"

import React, { useState, useEffect } from 'react';
import styles from "../_components/slick.module.css"

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
    clearInterval(interval);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    clearInterval(interval);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    clearInterval(interval);
  };

  return (
    <div className={styles.slider}>
      <ul className={styles.items}>
        <li className={currentIndex === 0 ? `${styles.item} ${styles.current}` : styles.item}>
          <img src="/assets/Banner_1.png" alt="Slider Item 1" />
        </li>
        <li className={currentIndex === 1 ? `${styles.item} ${styles.current}` : styles.item}>
          <img src="/assets/Banner_2.jpg" alt="Slider Item 2" />
        </li>
        <li className={currentIndex === 2 ? `${styles.item} ${styles.current}` : styles.item}>
          <img src="/assets/Banner_3.jpg" alt="Slider Item 3" />
        </li>
        <li className={currentIndex === 3 ? `${styles.item} ${styles.current}` : styles.item}>
          <img src="/assets/Banner_4.png" alt="Slider Item 4" />
        </li>
      </ul>
      <div className={styles.buttons}>
        <button type="button" className={`${styles.button} ${styles.prev}`} onClick={handlePrev}></button>
        <button type="button" className={`${styles.button} ${styles.next}`} onClick={handleNext}></button>
      </div>
      <div className={styles.dots}>
        {[0, 1, 2, 3].map((index) => (
          <button key={index} type="button" className={currentIndex === index ? `${styles.dot} ${styles.current}` : styles.dot} onClick={() => handleDotClick(index)}></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
