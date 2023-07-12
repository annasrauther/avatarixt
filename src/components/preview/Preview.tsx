import { useContext, useEffect, useState } from 'react';
import { BigHead } from '@bigheads/core';
import { SelectedOptionsContext, SelectedOptionsContextType } from '@/context/selectedOptionsContext';

import styles from './Preview.module.css';

const Preview = () => {
  const { selectedOptions } = useContext<SelectedOptionsContextType>(SelectedOptionsContext);

  const {
    accessory,
    body,
    clothing,
    clothingColor,
    eyebrows,
    eyes,
    faceMask,
    faceMaskColor,
    facialHair,
    graphic,
    hair,
    hairColor,
    hat,
    hatColor,
    lashes,
    lipColor,
    mask,
    mouth,
    skinTone,
  } = selectedOptions;

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Observer for checking intersection with viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSticky(entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );

    const target = document.querySelector(`.${styles.previewContainer}`);
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  useEffect(() => {
    // Scroll event listener for updating sticky state
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.previewContainer} ${isSticky ? styles.sticky : ''}`}>
      <button style={{ left: 0 }} className={styles.button}>
        Random
      </button>
      <button style={{ right: 0 }} className={styles.button}>
        Download
      </button>
      <BigHead
        accessory={accessory.value}
        body={body.value}
        clothing={clothing.value}
        clothingColor={clothingColor.value}
        eyebrows={eyebrows.value}
        eyes={eyes.value}
        faceMask={faceMask.value}
        faceMaskColor={faceMaskColor.value}
        facialHair={facialHair.value}
        graphic={graphic.value}
        hair={hair.value}
        hairColor={hairColor.value}
        hat={hat.value}
        hatColor={hatColor.value}
        lashes={lashes.value}
        lipColor={lipColor.value}
        mask={mask.value}
        mouth={mouth.value}
        skinTone={skinTone.value}
      />
    </div>
  );
};

export default Preview;
