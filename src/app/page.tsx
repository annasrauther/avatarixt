"use client";
import CustomizerForm from '@/components/customizerForm/CustomizerForm';
import Preview from '@/components/preview/Preview';
import partMap from '@/lib/parts';
import { SelectedOptionsProvider, SelectedOptionsContextType } from '@/context/selectedOptionsContext';
import styles from './page.module.css';

export default function Home() {
  const selectedOptionsValue: SelectedOptionsContextType = {
    selectedOptions: {
      "mask": {
        display: true,
        value: false,
      },
      "body": {
        display: true,
        value: "chest",
      },
      "skinTone": {
        display: true,
        value: "light",
      },
      "clothing": {
        display: true,
        value: "naked",
      },
      "graphic": {
        display: false,
        value: "none",
      },
      "clothingColor": {
        display: false,
        value: "white",
      },
      "hair": {
        display: true,
        value: "none",
      },
      "hairColor": {
        display: false,
        value: "blonde",
      },
      "facialHair": {
        display: true,
        value: "none",
      },
      "lashes": {
        display: false,
        value: false,
      },
      "eyes": {
        display: true,
        value: "normal",
      },
      "eyebrows": {
        display: true,
        value: "raised",
      },
      "mouth": {
        display: true,
        value: "grin",
      },
      "lipColor": {
        display: false,
        value: "red",
      },
      "faceMask": {
        display: true,
        value: false,
      },
      "faceMaskColor": {
        display: false,
        value: "white",
      },
      "accessory": {
        display: true,
        value: "none",
      },
      "hat": {
        display: true,
        value: "none",
      },
      "hatColor": {
        display: false,
        value: "white",
      },
    },
    handleOptionChange: () => { },
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
