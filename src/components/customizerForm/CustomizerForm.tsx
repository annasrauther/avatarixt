import { useContext } from 'react';
import styles from './CustomizerForm.module.css';
import SwitchPill from '@/components/switch/SwitchPill';
import ColorPicker from '@/components/colorPicker/ColorPicker';
import Card from '@/components/card/Card';
import { SelectedOptionsContext, SelectedOptionsContextType } from '@/context/selectedOptionsContext';

export interface ICustomizerFormProps {
  partMap: any;
}

const CustomizerForm = ({ partMap }: ICustomizerFormProps) => {
  const { selectedOptions, handleOptionChange } = useContext<SelectedOptionsContextType>(SelectedOptionsContext);

  const updateOption = (partKey: string, newValue: any) => {
    handleOptionChange(partKey, newValue);
  };

  const renderComponent = (component: string, partKey: string, options: any[]) => {
    switch (component) {
      case 'switch':
        return (
          <div className={styles.switchContainer}>
            <SwitchPill
              value={selectedOptions[partKey]}
              onChange={(newValue: boolean) => updateOption(partKey, newValue)}
            />
          </div>
        );
      case 'color':
        return (
          <div className={styles.colorPickerContainer}>
            <ColorPicker
              partKey={partKey}
              value={selectedOptions[partKey]}
              colors={options}
              onChange={(newValue: string) => updateOption(partKey, newValue)}
            />
          </div>
        );
      case 'card':
        return (
          <div className={styles.cardContainer}>
            <Card
              partKey={partKey}
              value={selectedOptions[partKey]}
              options={options}
              onChange={(newValue: string) => updateOption(partKey, newValue)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {/* {Object.keys(selectedOptions).map((partKey) => {
        const selectedOption = selectedOptions[partKey];

        return (
          <div className={styles.formGroup} key={partKey}>
            <h3 className={styles.label}>{partKey.toLocaleUpperCase()}: {selectedOption}</h3>
          </div>
        );
      })} */}
      {Object.keys(partMap).map((partKey) => {
        const part = partMap[partKey];
        const { label, component, options } = part;

        return (
          <div className={styles.formGroup} key={partKey}>
            <h3 className={styles.label}>{label}</h3>
            {renderComponent(component, partKey, options)}
          </div>
        );
      })}
    </div>
  );
};

export default CustomizerForm;
