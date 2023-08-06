"use client";
// Import the necessary modules and types
import { createContext, useReducer, useContext } from 'react';
import partMap from '@/lib/parts';

/**
 * Represents the value of an option.
 * @interface OptionValue
 * @property {boolean} display - Determines whether the option should be displayed or not.
 * @property {*} [value] - The value of the option (optional).
 */
export type OptionValue = {
  display: boolean;
  value?: any;
};

/**
 * Represents the action that can be performed on an option.
 * @type {OptionAction}
 */
type OptionAction =
  | { type: 'SET_OPTION'; partKey: string; newValue: any }
  | { type: 'TOGGLE_OPTIONS'; partKey: string };

/**
 * Represents the context type for the options.
 * @interface OptionsContextType
 * @property {Object.<string, OptionValue>} options - The options stored in a key-value pair format, where the key is the option key and the value is an {@link OptionValue} object.
 * @property {function} updateOption - A function to update an option with a new value.
 */
export type OptionsContextType = {
  options: { [partKey: string]: OptionValue };
  updateOption: (_partKey: string, _newValue: any) => void;
};

/**
 * Represents the props for the OptionsProvider component.
 * @interface OptionsProviderProps
 * @property {React.ReactNode} children - The children elements to be rendered within the OptionsProvider component.
 */
export interface OptionsProviderProps {
  children: React.ReactNode;
}

/**
 * The context for the options.
 */
export const OptionsContext = createContext<OptionsContextType | null>(null);

/**
 * Reducer function for updating the options state based on actions.
 * @param {Object.<string, OptionValue>} state - The current state of options.
 * @param {OptionAction} action - The action to be performed on the options.
 * @returns {Object.<string, OptionValue>} The updated state of options.
 */
const optionsReducer = (
  state: { [partKey: string]: OptionValue },
  action: OptionAction
): { [partKey: string]: OptionValue } => {
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
          const displayValue =
            (toggleMap[item] as any[]).indexOf(state[action.partKey]?.value) > -1;
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

/**
 * The provider component for managing options state.
 * @function OptionsProvider
 * @param {OptionsProviderProps} props - The component props.
 * @returns {JSX.Element} The rendered OptionsProvider component.
 */
export const OptionsProvider: React.FC<OptionsProviderProps> = ({ children }) => {
  const optionsValue: { [partKey: string]: OptionValue } = {
    // ... (Initial values for options)
  };
  const [options, dispatch] = useReducer<
    (
      _state: { [partKey: string]: OptionValue },
      _action: OptionAction
    ) => { [partKey: string]: OptionValue }
  >(optionsReducer, optionsValue);

  /**
   * A function to update an option with a new value.
   * @function updateOption
   * @param {string} partKey - The key of the option to be updated.
   * @param {*} newValue - The new value for the option.
   */
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

/**
 * Custom hook to consume the options context.
 * @function useOptions
 * @returns {OptionsContextType} The options context with the options and updateOption function.
 * @throws {Error} Throws an error if used outside the OptionsProvider context.
 */
export const useOptions = (): OptionsContextType => {
  const context = useContext(OptionsContext);
  if (!context) {
    throw new Error('useOptions must be used within an OptionsProvider');
  }
  return context;
};
