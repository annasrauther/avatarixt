// Import dependencies
import { useRef, useEffect, useState } from 'react';

// Import styles
import styles from './Slider.module.css';

/**
 * Represents the Slider Props interface.
 * @interface SliderProps
 * @property {React.ReactNode} children The slider children.
 */
interface SliderProps {
  children: React.ReactNode;
}

/**
 * Represents the Slider component.
 * 
 * The `Slider` component displays the slider.
 * 
 * @component
 * @param {SliderProps} props - The component props.
 * @returns {React.FC} The Slider component.
 * @example
 * <Slider>
 */
const Slider: React.FC<SliderProps> = ({ children }) => {
  // Create a ref for the slider
  const sliderRef = useRef<HTMLDivElement>(null);

  // State initialization
  const [prevDisable, setPrevDisable] = useState(true);
  const [nextDisable, setNextDisable] = useState(false);
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);

  // Check if the buttons should be disabled
  useEffect(() => {
    if (sliderRef.current) {
      const { scrollLeft } = sliderRef.current;
      checkButtons(scrollLeft);
    }
  }, []);

  // Check if the content is overflowing
  useEffect(() => {
    if (sliderRef.current) {
      const isOverflowing = sliderRef.current.scrollWidth > sliderRef.current.offsetWidth;
      setIsContentOverflowing(isOverflowing);
    }
  }, [children]);

  // Function to handle the previous button click
  const handlePrevClick = () => {
    if (!prevDisable && sliderRef.current) {
      const { offsetWidth, scrollLeft } = sliderRef.current;
      const newScrollLeft = Math.max(scrollLeft - offsetWidth / 2, 0);
      sliderRef.current.scrollLeft = newScrollLeft;
      checkButtons(newScrollLeft);
    }
  };

  // Function to handle the next button click
  const handleNextClick = () => {
    if (!nextDisable && sliderRef.current) {
      const { offsetWidth, scrollWidth, scrollLeft } = sliderRef.current;
      const newScrollLeft = Math.min(scrollLeft + offsetWidth / 2, scrollWidth - offsetWidth);
      sliderRef.current.scrollLeft = newScrollLeft;
      checkButtons(newScrollLeft);
    }
  };

  // Function to check if the buttons should be disabled
  const checkButtons = (scrollLeft: number) => {
    if (sliderRef.current) {
      const { offsetWidth, scrollWidth } = sliderRef.current;
      setPrevDisable(scrollLeft <= 0);
      setNextDisable(scrollLeft + offsetWidth >= scrollWidth);
    }
  };

  // Render the Slider component
  return (
    <div className={styles.sliderContainer} ref={sliderRef}>
      <div className={styles.sliderWrapper} aria-label="Slider">
        {children}
      </div>
      {isContentOverflowing && (
        <div className={styles['navigation-wrapper']}>
          <button
            className={`${styles.navigation} ${prevDisable ? styles.disable : ''}`}
            aria-label="Previous"
            aria-disabled={prevDisable}
            onClick={handlePrevClick}
          >
            &larr;
          </button>
          <button
            className={`${styles.navigation} ${nextDisable ? styles.disable : ''}`}
            aria-label="Next"
            aria-disabled={prevDisable}
            onClick={handleNextClick}
          >
            &rarr;
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
