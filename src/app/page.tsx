"use client";
import CustomizerForm from '@/components/customizerForm/CustomizerForm';
import Preview from '@/components/preview/Preview';
import partMap from '@/lib/parts';
import { SelectedOptionsProvider, SelectedOptionsContextType } from '@/context/selectedOptionsContext';

export default function Home() {
  const selectedOptionsValue: SelectedOptionsContextType = {
    selectedOptions: {
      "accessory": "shades",
      "body": "chest",
      "circleColor": "blue",
      "clothing": "tankTop",
      "clothingColor": "black",
      "eyebrows": "concerned",
      "eyes": "leftTwitch",
      "faceMask": false,
      "faceMaskColor": "black",
      "facialHair": "mediumBeard",
      "graphic": "redwood",
      "hair": "bob",
      "hairColor": "blonde",
      "hat": "none",
      "hatColor": "green",
      "lashes": true,
      "lipColor": "green",
      "mask": true,
      "mouth": "open",
      "skinTone": "dark"
    },
    handleOptionChange: () => { }
  };

  return (
    <>
      <SelectedOptionsProvider value={selectedOptionsValue}>
        <Preview />
        <CustomizerForm partMap={partMap} />
      </SelectedOptionsProvider>
    </>
  );
}
