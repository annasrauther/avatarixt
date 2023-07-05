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
    mask: "",
    body: "",
    skinTone: "",
    clothing: "",
    graphic: "",
    clothingColor: "",
    hair: "",
    hairColor: "",
    facialHair: "",
    lashes: "",
    eyes: "",
    eyebrows: "",
    mouth: "",
    lipColor: "",
    faceMask: "",
    faceMaskColor: "",
    accessory: "",
    hat: "",
    hatColor: "",
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
