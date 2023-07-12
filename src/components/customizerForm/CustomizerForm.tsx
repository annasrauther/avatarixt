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

  const updateSwitchOption = (partKey: string, newValue: any) => {
    // Only for Switch Component Events
    handleOptionChange(partKey, newValue);
  };

  const renderComponent = (component: string, partKey: string, label: string, options: any[]) => {
    switch (component) {
      case 'switch':
        return (
          <div className={styles.formGroup} key={partKey}>
            <h3 className={styles.label}>{label}</h3>
            <div className={styles.switchContainer}>
              <SwitchPill
                value={selectedOptions[partKey].value}
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
                value={selectedOptions[partKey].value}
                colors={options}
              />
            </div>
          </div>
        );
      case 'card':
        return (
          <div className={styles.formGroup} key={partKey}>
            <h3 className={styles.label}>{label}</h3>
            <div className={styles.cardContainer}>
              <Card
                partKey={partKey}
                value={selectedOptions[partKey].value}
                options={options}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {Object.keys(partMap).map((partKey) => {
        if (!selectedOptions[partKey].display) {
          return true;
        }
        const part = partMap[partKey];
        const { label, component, options } = part;
        return renderComponent(component, partKey, label, options)
      })}
    </div>
  );
};

export default CustomizerForm;
