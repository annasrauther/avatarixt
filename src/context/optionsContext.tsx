"use client";

// Import dependencies
import { createContext, useReducer, useContext } from 'react';

// Import parts
import partMap from '@/lib/parts';

/**
 * Represents the Option Value interface.
 * @interface OptionValue
 * @property {boolean} display The option display.
 * @property {any} value The option value.
 */
export interface OptionValue {
  display: boolean;
  value?: any;
}

/**
 * Represents the Option Action interface.
 * @interface OptionAction
 * @property {string} type The option action type.
 * @property {string} partKey The option part key.
 * @property {any} newValue The option new value.
 */
type OptionAction =
  | { type: 'SET_OPTION'; partKey: string; newValue: any }
  | { type: 'TOGGLE_OPTIONS'; partKey: string };

/**
 * Represents the Options Context Type interface.
 * @interface OptionsContextType
 * @property {Object} options The options.
 * @property {Function} updateOption The update option function.
 */
export type OptionsContextType = {
  options: { [partKey: string]: OptionValue };
  updateOption: (_partKey: string, _newValue: any) => void;
};

/**
 * Represents the Options Provider Props interface.
 * @interface OptionsProviderProps
 * @property {React.ReactNode} children The children.
 */
export interface OptionsProviderProps {
  children: React.ReactNode;
}

// Create the OptionsContext
export const OptionsContext = createContext<OptionsContextType | null>(null);

/**
 * Represents the Options Reducer.
 * 
 * The `optionsReducer` function is used to update the options.
 * 
 * @param {Object} state - The options state.
 * @param {OptionAction} action - The option action.
 * @returns {Object} The updated options.
 * @example
 * const [options, updateOption] = useReducer(optionsReducer, optionsValue);
 */
const optionsReducer = (state: { [partKey: string]: OptionValue }, action: OptionAction): { [partKey: string]: OptionValue } => {
  switch (action.type) {
    // Set the option
    case 'SET_OPTION':
      return {
        ...state,
        [action.partKey]: {
          display: true,
          value: action.newValue,
        },
      };

    // Toggle the options
    case 'TOGGLE_OPTIONS':
      // Check if the part has a toggle
      if (partMap[action.partKey]?.disables) {
        // Get the toggle map
        const toggleMap = partMap[action.partKey].disables;
        let updatedOptions: { [partKey: string]: OptionValue } = { ...state };

        // Loop through the toggle map
        for (let item in toggleMap) {
          const displayValue = (toggleMap[item] as any[]).indexOf(state[action.partKey]?.value) > -1;
          updatedOptions[item] = {
            value: state[item]?.value,
            display: !displayValue,
          };
        }

        // Return the updated options
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

/**
 * Represents the Options Provider.
 * 
 * The `OptionsProvider` component is used to provide the options.
 * 
 * @param {OptionsProviderProps} props - The props.
 * @returns {React.FC} The options provider.
 * @example
 * <OptionsProvider>
 *  <App />
 * </OptionsProvider>
 */
export const OptionsProvider: React.FC<OptionsProviderProps> = ({ children }) => {
  // Set the options value
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

  // Create the options reducer
  const [options, dispatch] = useReducer<(_state: { [partKey: string]: OptionValue }, _action: OptionAction) => { [partKey: string]: OptionValue }>(optionsReducer, optionsValue);


  // Create the update option function and value object to pass to the context
  const updateOption = (partKey: string, newValue: any) => {
    dispatch({ type: 'SET_OPTION', partKey, newValue });
    dispatch({ type: 'TOGGLE_OPTIONS', partKey });
  };

  // Create the value object to pass to the context provider component
  const value: OptionsContextType = {
    options,
    updateOption,
  };

  // Return the context provider component with the value object as the value prop
  return (
    <OptionsContext.Provider value={value}>
      {children}
    </OptionsContext.Provider>
  );
};

/**
 * Represents the useOptions hook.
 * 
 * The `useOptions` hook is used to get the options.
 *  
 * @returns {OptionsContextType} The options context.
 * 
 * @example
 * const { options, updateOption } = useOptions();
 */
export const useOptions = (): OptionsContextType => {
  const context = useContext(OptionsContext);
  if (!context) {
    throw new Error('useOptions must be used within an OptionsProvider');
  }
  return context;
};
