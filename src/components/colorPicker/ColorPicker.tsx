"use client";
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
