import { useContext } from 'react';
import { OptionsContext, OptionsContextType } from '@/context/optionsContext';
const OptionsContextNonNull = OptionsContext as NonNullable<React.Context<OptionsContextType>>;
import styles from './ColorPicker.module.css';

export interface ColorPickerProps {
  partKey: string;
  label: string;
  value: string;
  colors: {
    id: string;
    value: string;
    hex: string;
  }[];
  display: boolean;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ partKey, label, value, colors }) => {
  const { updateOption } = useContext<OptionsContextType>(OptionsContextNonNull);

  const handleColorChange = (color: string) => {
    updateOption(partKey, color);
  };

  return (
    <>
      <h4 className={styles.label}>{label}</h4>
      <div className={styles.container}>
        {colors.map((color) => (
          <button
            key={color.id}
            className={`${styles.colorOption} ${value === color.value ? styles.selected : ''}`}
            style={{ backgroundColor: color.hex, borderColor: color.value === 'white' ? '#aaaaaa' : '' }}
            onClick={() => handleColorChange(color.value)}
            aria-pressed={value === color.value}
            aria-label={`${color.value} Color`}
          />
        ))}
      </div>
    </>
  );
};

export default ColorPicker;
