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
  display: boolean;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ partKey, label, value, colors, display }) => {
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
      <h4 className={styles.label}>{label} {display ? <span className={styles.colorHex} style={{ background: selectedColor, color: selectedColor === '#FFFFFF' ? 'black' : 'white' }}>{selectedColor}</span> : null}</h4>
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
