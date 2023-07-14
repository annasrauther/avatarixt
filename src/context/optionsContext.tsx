"use client";
import { createContext, useReducer, useContext } from 'react';
import partMap from '@/lib/parts';

export type OptionValue = {
  display: boolean;
  value?: any;
};

type OptionAction =
  | { type: 'SET_OPTION'; partKey: string; newValue: any }
  | { type: 'TOGGLE_OPTIONS'; partKey: string };

export type OptionsContextType = {
  options: { [partKey: string]: OptionValue };
  updateOption: (_partKey: string, _newValue: any) => void;
};

export interface OptionsProviderProps {
  children: React.ReactNode;
}

export const OptionsContext = createContext<OptionsContextType | null>(null);

const optionsReducer = (state: { [partKey: string]: OptionValue }, action: OptionAction): { [partKey: string]: OptionValue } => {
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
        let updatedOptions: { [partKey: string]: OptionValue } = { ...state };

        for (let item in toggleMap) {
          const displayValue = (toggleMap[item] as any[]).indexOf(state[action.partKey]?.value) > -1;
          updatedOptions[item] = {
            value: state[item]?.value,
            display: !displayValue,
          };
        }

        return {
          ...state,
          ...updatedOptions,
        };
      }
      return state;
    default:
      return state;
  }
};

export const OptionsProvider: React.FC<OptionsProviderProps> = ({ children }) => {
  const optionsValue: { [partKey: string]: OptionValue } = {
    mask: {
      display: true,
      value: false,
    },
    body: {
      display: true,
      value: 'chest',
    },
    skinTone: {
      display: true,
      value: 'light',
    },
    clothing: {
      display: true,
      value: 'naked',
    },
    graphic: {
      display: false,
      value: 'none',
    },
    clothingColor: {
      display: false,
      value: 'white',
    },
    hair: {
      display: true,
      value: 'none',
    },
    hairColor: {
      display: false,
      value: 'blonde',
    },
    facialHair: {
      display: true,
      value: 'none',
    },
    lashes: {
      display: false,
      value: false,
    },
    eyes: {
      display: true,
      value: 'normal',
    },
    eyebrows: {
      display: true,
      value: 'raised',
    },
    mouth: {
      display: true,
      value: 'grin',
    },
    lipColor: {
      display: false,
      value: 'red',
    },
    faceMask: {
      display: true,
      value: false,
    },
    faceMaskColor: {
      display: false,
      value: 'white',
    },
    accessory: {
      display: true,
      value: 'none',
    },
    hat: {
      display: true,
      value: 'none',
    },
    hatColor: {
      display: false,
      value: 'white',
    },
  };
  const [options, dispatch] = useReducer<(_state: { [partKey: string]: OptionValue }, _action: OptionAction) => { [partKey: string]: OptionValue }>(optionsReducer, optionsValue);


  const updateOption = (partKey: string, newValue: any) => {
    dispatch({ type: 'SET_OPTION', partKey, newValue });
    dispatch({ type: 'TOGGLE_OPTIONS', partKey });
  };

  const value: OptionsContextType = {
    options,
    updateOption,
  };

  return (
    <OptionsContext.Provider value={value}>
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions = (): OptionsContextType => {
  const context = useContext(OptionsContext);
  if (!context) {
    throw new Error('useOptions must be used within an OptionsProvider');
  }
  return context;
};
