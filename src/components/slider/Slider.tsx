import { useRef, useEffect, useState } from 'react';
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
    if (sliderRef.current) {
      const { scrollLeft } = sliderRef.current;
      checkButtons(scrollLeft);
    }
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      const isOverflowing = sliderRef.current.scrollWidth > sliderRef.current.offsetWidth;
      setIsContentOverflowing(isOverflowing);
    }
  }, [children]);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      const { offsetWidth, scrollLeft } = sliderRef.current;
      const newScrollLeft = Math.max(scrollLeft - offsetWidth / 2, 0);
      sliderRef.current.scrollLeft = newScrollLeft;
      checkButtons(newScrollLeft);
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      const { offsetWidth, scrollWidth, scrollLeft } = sliderRef.current;
      const newScrollLeft = Math.min(scrollLeft + offsetWidth / 2, scrollWidth - offsetWidth);
      sliderRef.current.scrollLeft = newScrollLeft;
      checkButtons(newScrollLeft);
    }
  };


  const checkButtons = (scrollLeft: number) => {
    if (sliderRef.current) {
      const { offsetWidth, scrollWidth } = sliderRef.current;
      setPrevDisable(scrollLeft <= 0);
      setNextDisable(scrollLeft + offsetWidth >= scrollWidth);
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
