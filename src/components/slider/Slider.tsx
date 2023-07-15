import { useRef, useEffect, useState } from 'react';
import styles from './Slider.module.css';

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

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
    if (!prevDisable && sliderRef.current) {
      const { offsetWidth, scrollLeft } = sliderRef.current;
      const newScrollLeft = Math.max(scrollLeft - offsetWidth / 2, 0);
      sliderRef.current.scrollLeft = newScrollLeft;
      checkButtons(newScrollLeft);
    }
  };

  const handleNextClick = () => {
    if (!nextDisable && sliderRef.current) {
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

  const prevButtonEventHandlers = isTouchDevice
    ? {
      onTouchStart: handlePrevClick,
      onTouchEnd: () => { },
    }
    : {
      onClick: handlePrevClick,
    };

  const nextButtonEventHandlers = isTouchDevice
    ? {
      onTouchStart: handleNextClick,
      onTouchEnd: () => { },
    }
    : {
      onClick: handleNextClick,
    };


  return (
    <div className={styles.sliderContainer} ref={sliderRef}>
      <div className={styles.sliderWrapper} role="list" aria-label='Slider'>{children}</div>
      {isContentOverflowing && (
        <div className={styles['navigation-wrapper']}>
          <button
            className={`${styles.navigation} ${prevDisable ? styles.disable : ''}`}
            aria-label='Previous'
            aria-disabled={prevDisable}
            {...prevButtonEventHandlers}
          >
            &larr;
          </button>
          <button
            className={`${styles.navigation} ${nextDisable ? styles.disable : ''}`}
            aria-label='Next'
            aria-disabled={prevDisable}
            {...nextButtonEventHandlers}
          >
            &rarr;
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
