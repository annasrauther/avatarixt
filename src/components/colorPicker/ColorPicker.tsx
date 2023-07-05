import { useState, useContext, useEffect, useRef } from 'react';
import { SelectedOptionsContext, SelectedOptionsContextType } from '@/context/selectedOptionsContext';
import styles from './ColorPicker.module.css';

export interface IColorPickerProps {
  partKey: string;
  label: string;
  value: string;
  colors: {
    id: string;
    value: string;
    hex: string;
  }[];
  onChange: (_value: string) => void;
}

const ColorPicker: React.FC<IColorPickerProps> = ({ partKey, label, value, colors, onChange }) => {
  const { handleOptionChange } = useContext<SelectedOptionsContextType>(SelectedOptionsContext);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);

  const handleColorChange = (color: string, hex: string) => {
    handleOptionChange(partKey, color);
    setSelectedColor(hex);
    onChange(color);
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
      <button className={`${styles.button} ${isCardOpen ? styles.active : ''}`} onClick={handleCardToggle}>
        <span>{label}</span>
        <div className={styles.dot} style={{ backgroundColor: selectedColor }} />
      </button>
      {isCardOpen && (
        <div ref={cardRef} className={styles.cardContainer}>
          {colors.map((color) => (
            <div
              key={color.id}
              className={`${styles.colorOption} ${value === color.value ? styles.selected : ''}`}
              style={{ backgroundColor: color.hex }}
              onClick={() => handleColorChange(color.value, color.hex)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
