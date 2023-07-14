"use client";
import { useRef, useContext, useEffect, useState } from 'react';
import { BigHead } from '@bigheads/core';
import { OptionsContext } from '@/context/optionsContext';
import RandomAvatar from './RandomAvatar';
import DownloadAvatar from './DownloadAvatar';

import styles from './Preview.module.css';

const Preview = () => {
  const optionsContext = useContext(OptionsContext);

  if (!optionsContext) {
    throw new Error('OptionsContext is not provided.');
  }

  const { options } = optionsContext;

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
  } = options;

  const [isSticky, setIsSticky] = useState(false);
  const avatarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`${styles.previewContainer} ${isSticky ? styles.sticky : ''}`}>
      <BigHead
        ref={avatarRef}
        accessory={accessory?.value}
        body={body?.value}
        clothing={clothing?.value}
        clothingColor={clothingColor?.value}
        eyebrows={eyebrows?.value}
        eyes={eyes?.value}
        faceMask={faceMask?.value}
        faceMaskColor={faceMaskColor?.value}
        facialHair={facialHair?.value}
        graphic={graphic?.value}
        hair={hair?.value}
        hairColor={hairColor?.value}
        hat={hat?.value}
        hatColor={hatColor?.value}
        lashes={lashes?.value}
        lipColor={lipColor?.value}
        mask={mask?.value}
        mouth={mouth?.value}
        skinTone={skinTone?.value}
        aria-label="Avatar Preview"
      />
      <div className={styles.actions}>
        <RandomAvatar />
        <DownloadAvatar avatarRef={avatarRef} />
      </div>
    </section>
  );
};

export default Preview;
