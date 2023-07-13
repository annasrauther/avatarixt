import { useState, useContext, useEffect, useRef } from 'react';
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
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);

  const handleColorChange = (color: string, hex: string) => {
    updateOption(partKey, color);
    setSelectedColor(hex);
  };

  const handleCardToggle = () => {
    setIsCardOpen((prev) => !prev);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setIsCardOpen(false);
    }
  };

  useEffect(() => {
    const initialColor = colors.find((color) => color.value === value);
    if (initialColor) {
      setSelectedColor(initialColor.hex);
    }
  }, [value, colors]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <button
        className={`${styles.button} ${isCardOpen ? styles.active : ''}`}
        onClick={() => handleCardToggle()}
        aria-expanded={isCardOpen}
        aria-haspopup="true"
        aria-label={`${label} Color Picker`}
      >
        <div
          className={styles.dot}
          style={{ backgroundColor: selectedColor, border: selectedColor === '#FFFFFF' ? '1px solid #aaa' : '' }}
        />
      </button>
      {isCardOpen && (
        <div ref={cardRef} className={styles.cardContainer} role="menu">
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
      )}
    </div>
  );
};

export default ColorPicker;
