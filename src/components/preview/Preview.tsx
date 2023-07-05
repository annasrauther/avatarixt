import { useContext } from 'react';
import { BigHead } from '@bigheads/core';
import { SelectedOptionsContext, SelectedOptionsContextType } from '@/context/selectedOptionsContext';

import styles from './Preview.module.css';

const Preview = () => {
  const { selectedOptions } = useContext<SelectedOptionsContextType>(SelectedOptionsContext);

  const {
    accessory,
    body,
    circleColor,
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

  return (
    <div className={styles.previewContainer}>
      <BigHead
        accessory={accessory}
        body={body}
        circleColor={circleColor}
        clothing={clothing}
        clothingColor={clothingColor}
        eyebrows={eyebrows}
        eyes={eyes}
        faceMask={faceMask}
        faceMaskColor={faceMaskColor}
        facialHair={facialHair}
        graphic={graphic}
        hair={hair}
        hairColor={hairColor}
        hat={hat}
        hatColor={hatColor}
        lashes={lashes}
        lipColor={lipColor}
        mask={mask}
        mouth={mouth}
        skinTone={skinTone}
      />
    </div>

  );
};

export default Preview;