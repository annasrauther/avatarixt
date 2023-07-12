import React, { createContext, useReducer, useContext } from 'react';
import partMap from '@/lib/parts';

export type SelectedOptionsType = {
  [partKey: string]: {
    display: boolean;
    value?: any;
  };
};

type SelectedOptionsAction =
  | { type: 'SET_OPTION'; partKey: string; newValue: any }
  | { type: 'TOGGLE_OPTIONS'; partKey: string };

export type SelectedOptionsContextType = {
  selectedOptions: SelectedOptionsType;
  handleOptionChange: (_partKey: string, _newValue: any) => void;
};

export interface ISelectedOptionsProviderProps {
  children: React.ReactNode;
  value: SelectedOptionsContextType;
}

export const SelectedOptionsContext = createContext<SelectedOptionsContextType>({
  selectedOptions: {},
  handleOptionChange: () => { },
});

const selectedOptionsReducer = (state: SelectedOptionsType, action: SelectedOptionsAction): SelectedOptionsType => {
  switch (action.type) {
    case 'SET_OPTION':
      return {
        ...state,
        [action.partKey]: {
          display: true,
          value: action.newValue,
        },
      };
    case 'TOGGLE_OPTIONS':
      if (partMap[action.partKey]?.disables) {
        const toggleMap = partMap[action.partKey].disables;
        let updatedSelectedOptions: SelectedOptionsType = { ...state };

        for (let item in toggleMap) {
          const displayValue = (toggleMap[item] as any[]).indexOf(state[action.partKey]?.value) > -1;
          updatedSelectedOptions[item] = {
            value: state[item]?.value,
            display: !displayValue,
          };
        }

        return {
          ...state,
          ...updatedSelectedOptions,
        };
      }
      return state;
    default:
      return state;
  }
};

export const SelectedOptionsProvider = ({ children, value }: ISelectedOptionsProviderProps) => {
  const [selectedOptions, dispatch] = useReducer(selectedOptionsReducer, value.selectedOptions);

  const handleOptionChange = (partKey: string, newValue: any) => {
    dispatch({ type: 'SET_OPTION', partKey, newValue });
    dispatch({ type: 'TOGGLE_OPTIONS', partKey });
  };

  return (
    <SelectedOptionsContext.Provider value={{ selectedOptions, handleOptionChange }}>
      {children}
    </SelectedOptionsContext.Provider>
  );
};

export const useSelectedOptions = () => useContext(SelectedOptionsContext);
