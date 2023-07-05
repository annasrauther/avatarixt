"use client";
import CustomizerForm from '@/components/customizerForm/CustomizerForm';
import Preview from '@/components/preview/Preview';
import partMap from '@/lib/parts';
import { SelectedOptionsProvider, SelectedOptionsContextType } from '@/context/selectedOptionsContext';
import styles from './page.module.css';

export default function Home() {
  const selectedOptionsValue: SelectedOptionsContextType = {
    selectedOptions: {
      "mask": false,
      "body": "chest",
      "skinTone": "light",
      "clothing": "naked",
      "graphic": "none",
      "clothingColor": "white",
      "hair": "none",
      "hairColor": "blonde",
      "facialHair": "none",
      "lashes": false,
      "eyes": "normal",
      "eyebrows": "raised",
      "mouth": "grin",
      "lipColor": "red",
      "faceMask": false,
      "faceMaskColor": "white",
      "accessory": "none",
      "hat": "none",
      "hatColor": "white",
    },
    handleOptionChange: () => { }
  };

  return (
    <SelectedOptionsProvider value={selectedOptionsValue}>
      <h2 className={styles.logo}>AVATARIXT</h2>
      <div className={styles.grid}>
        <Preview />
        <CustomizerForm partMap={partMap} />
      </div>
    </SelectedOptionsProvider>
  );
}
