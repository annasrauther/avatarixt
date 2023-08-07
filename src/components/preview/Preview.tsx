"use client";

// Import dependencies
import { useRef, useContext, useEffect, useState } from 'react';
import { BigHead } from '@bigheads/core';

// Import components
import RandomAvatar from './RandomAvatar';
import DownloadAvatar from './DownloadAvatar';

// Import the OptionsContext
import { OptionsContext } from '@/context/optionsContext';

// Import styles
import styles from './Preview.module.css';

/**
 * Represents the Avatar Preview section.
 *
 * The `Preview` component displays a preview of the avatar based on the selected options from the `OptionsContext`.
 * @component
 * @returns {React.FC} The Avatar Preview component.
 */
const Preview: React.FC = () => {
  // Context and options destructuring
  const optionsContext = useContext(OptionsContext);

  // Ensure the OptionsContext is provided
  if (!optionsContext) {
    throw new Error('OptionsContext is not provided.');
  }

  // Destructure the options from the context
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

  // State and ref initialization
  const [isSticky, setIsSticky] = useState(false);
  const avatarRef = useRef(null);

  // Effect to handle scroll event for sticky behavior
  useEffect(() => {
    // Handle scroll event to toggle sticky class
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
      {/* Avatar rendering */}
      <div className={styles.previewWrapper}>
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
      </div>
      {/* Actions */}
      <div className={styles.actions}>
        {/* Randomize avatar button */}
        <RandomAvatar />
        {/* Download avatar button */}
        <DownloadAvatar avatarRef={avatarRef} />
      </div>
    </section>
  );
};

export default Preview;
