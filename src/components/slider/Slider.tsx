import React, { useRef, useEffect, useState } from 'react';
import styles from './Slider.module.css';

interface SliderProps {
  children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [prevDisable, setPrevDisable] = useState(true);
  const [nextDisable, setNextDisable] = useState(false);
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);

  useEffect(() => {
    checkButtons();
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      const isOverflowing = sliderRef.current.scrollWidth > sliderRef.current.offsetWidth;
      setIsContentOverflowing(isOverflowing);
    }
  }, [children]);

  const checkButtons = () => {
    if (sliderRef.current) {
      const { offsetWidth, scrollWidth, scrollLeft } = sliderRef.current;
      setPrevDisable(scrollLeft <= 0);
      setNextDisable(scrollLeft + offsetWidth >= scrollWidth);
    }
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      const { offsetWidth, scrollLeft } = sliderRef.current;
      sliderRef.current.scrollLeft -= offsetWidth / 2;
      checkButtons();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      const { offsetWidth, scrollLeft } = sliderRef.current;
      sliderRef.current.scrollLeft += offsetWidth / 2;
      checkButtons();
    }
  };

  return (
    <div className={styles.sliderContainer} ref={sliderRef}>
      <div className={styles.sliderWrapper}>{children}</div>
      {isContentOverflowing && (
        <div className={styles['btn-wrapper']}>
          <div
            className={`${styles.btn} ${prevDisable ? styles.disable : ''}`}
            onClick={handlePrevClick}
          >
            &larr;
          </div>
          <div
            className={`${styles.btn} ${nextDisable ? styles.disable : ''}`}
            onClick={handleNextClick}
          >
            &rarr;
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
