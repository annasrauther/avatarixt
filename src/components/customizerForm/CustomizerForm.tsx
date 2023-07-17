"use client";
import { useContext } from 'react';
import styles from './CustomizerForm.module.css';
import SwitchPill from '@/components/switch/SwitchPill';
import ColorPicker from '@/components/colorPicker/ColorPicker';
import Card, { CardOption } from '@/components/card/Card';

import { OptionsContext, OptionsContextType } from '@/context/optionsContext';
const OptionsContextNonNull = OptionsContext as NonNullable<React.Context<OptionsContextType>>;

export interface CustomizerFormProps {
  partMap: any;
}

const CustomizerForm: React.FC<CustomizerFormProps> = ({ partMap }) => {
  const { options, updateOption } = useContext<OptionsContextType>(OptionsContextNonNull);

  const updateSwitchOption = (partKey: string, newValue: boolean) => {
    updateOption(partKey, newValue);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
      {Object.keys(partMap).map((partKey) => {
        const part = partMap[partKey];
        const { label, component, options: partOptions } = part;
        const componentOptions = options[partKey]?.value;
        const display = options[partKey]?.display;
        const formGroupClass = `${styles.formGroup} ${styles[component]} ${!display ? styles.disabled : ''}`;

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
