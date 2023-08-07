"use client";
// Import dependencies
import { useContext } from 'react';

// Import components
import SwitchPill from '@/components/switch/SwitchPill';
import ColorPicker from '@/components/colorPicker/ColorPicker';
import Card, { CardOption } from '@/components/card/Card';

// Import the OptionsContext
import { OptionsContext, OptionsContextType } from '@/context/optionsContext';
const OptionsContextNonNull = OptionsContext as NonNullable<React.Context<OptionsContextType>>;

// Import styles
import styles from './CustomizerForm.module.css';

/**
 * The CustomizerForm Props.
 * @interface CustomizerFormProps
 * @property {any} partMap The part map.
 */
export interface CustomizerFormProps {
  partMap: any;
}

/**
 * Represents the CustomizerForm component.
 * 
 * The `CustomizerForm` component displays the form that contains the options for customizing the avatar.
 * 
 * @component
 * @param {CustomizerFormProps} props - The component props.
 * @returns {React.FC} The CustomizerForm component.
 * @example
 * <CustomizerForm partMap={partMap} />
 * 
 */
const CustomizerForm: React.FC<CustomizerFormProps> = ({ partMap }) => {
  // Get the options and updateOption function from the OptionsContext
  const { options, updateOption } = useContext<OptionsContextType>(OptionsContextNonNull);

  // Define the updateSwitchOption function
  const updateSwitchOption = (partKey: string, newValue: boolean) => {
    updateOption(partKey, newValue);
  };

  // Define the updateColorOption function
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  // Return the CustomizerForm component.
  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
      {Object.keys(partMap).map((partKey) => {
        const part = partMap[partKey];
        const { label, component, options: partOptions } = part;
        const componentOptions = options[partKey]?.value;
        const display = options[partKey]?.display;
        const formGroupClass = `${styles.formGroup} ${styles[component]} ${!display ? styles.disabled : ''}`;

        // Return the component based on the component type.
        switch (component) {
          case 'switch':
            return (
              <div className={formGroupClass} key={partKey}>
                <h3 className={styles.label}>{label}</h3>
                <div>
                  <SwitchPill
                    value={componentOptions}
                    onChange={(newValue: boolean) => updateSwitchOption(partKey, newValue)}
                    ariaLabel={label}
                    display={display}
                  />
                </div>
              </div>
            );
          case 'color':
            return (
              <div className={formGroupClass} key={partKey}>
                <div className={styles.colorPickerContainer}>
                  <ColorPicker
                    partKey={partKey}
                    label={label}
                    value={componentOptions}
                    colors={partOptions}
                    aria-label={label}
                    display={display}
                  />
                </div>
              </div>
            );
          case 'card':
            return (
              <div className={formGroupClass} key={partKey}>
                <h3 className={styles.label}>{label}</h3>
                <div className={styles.cardContainer}>
                  <Card
                    partKey={partKey}
                    options={partOptions as CardOption[]}
                    aria-label={label}
                    display={display}
                  />
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </form>
  );
};

export default CustomizerForm;
