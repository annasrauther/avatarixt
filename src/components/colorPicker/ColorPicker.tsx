import { useState, useContext, useEffect } from 'react';
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
}

const ColorPicker: React.FC<ColorPickerProps> = ({ partKey, label, value, colors }) => {
  const { updateOption } = useContext<OptionsContextType>(OptionsContextNonNull);
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (color: string, hex: string) => {
    updateOption(partKey, color);
    setSelectedColor(hex);
  };

  useEffect(() => {
    const initialColor = colors.find((color) => color.value === value);
    if (initialColor) {
      setSelectedColor(initialColor.hex);
    }
  }, [value, colors]);

  return (
    <>
      <h3 className={styles.label}>{label} <span className={styles.colorHex}>{selectedColor}</span></h3>
      <div className={styles.container}>
        {colors.map((color) => (
          <button
            key={color.id}
            className={`${styles.colorOption} ${value === color.value ? styles.selected : ''}`}
            style={{ backgroundColor: color.hex, borderColor: color.value === 'white' ? '#aaaaaa' : '' }}
            onClick={() => handleColorChange(color.value, color.hex)}
            aria-pressed={value === color.value}
            aria-label={`${color.value} Color`}
          />
        ))}
      </div>
    </>
  );
};

export default ColorPicker;
