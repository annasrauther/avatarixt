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

  return (
    <div className={styles.container}>
      {Object.keys(partMap).map((partKey) => {
        if (!options[partKey]?.display) {
          return null;
        }
        const part = partMap[partKey];
        const { label, component, options: partOptions } = part;
        const componentOptions = options[partKey]?.value;
        switch (component) {
          case 'switch':
            return (
              <div className={styles.formGroup} key={partKey}>
                <h3 className={styles.label}>{label}</h3>
                <div className={styles.switchContainer}>
                  <SwitchPill
                    value={componentOptions}
                    onChange={(newValue: boolean) => updateSwitchOption(partKey, newValue)}
                  />
                </div>
              </div>
            );
          case 'color':
            return (
              <div className={styles.formGroup} key={partKey}>
                <div className={styles.colorPickerContainer}>
                  <ColorPicker
                    partKey={partKey}
                    label={label}
                    value={componentOptions}
                    colors={partOptions}
                  />
                </div>
              </div>
            );
          case 'card':
            return (
              <div className={styles.formGroup} key={partKey}>
                <h3 className={styles.label}>{label}</h3>
                <div className={styles.cardContainer}>
                  <Card partKey={partKey} options={partOptions as CardOption[]} />
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default CustomizerForm;
