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
      <button style={{
        left: 0,
      }} className={styles.button}>Random</button>
      <button style={{
        right: 0,
      }} className={styles.button}>Download</button>
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
