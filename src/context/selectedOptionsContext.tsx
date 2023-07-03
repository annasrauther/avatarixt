import React, { createContext, useState, useContext } from 'react';

export type SelectedOptionsType = {
  [partKey: string]: any;
};

export type SelectedOptionsContextType = {
  selectedOptions: SelectedOptionsType;
  handleOptionChange: (_partKey: string, _newValue: any) => void;
};

export interface ISelectedOptionsProviderProps {
  children: React.ReactNode;
  value: SelectedOptionsContextType;
}

export const SelectedOptionsContext = createContext<SelectedOptionsContextType>({
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
  handleOptionChange: () => { },
});

export const SelectedOptionsProvider = ({ children, value }: ISelectedOptionsProviderProps) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>(value.selectedOptions);

  const handleOptionChange = (partKey: string, newValue: any) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [partKey]: newValue,
    }));
  };

  return (
    <SelectedOptionsContext.Provider value={{ selectedOptions, handleOptionChange }}>
      {children}
    </SelectedOptionsContext.Provider>
  );
};

export const useSelectedOptions = () => useContext(SelectedOptionsContext);
