import { useState, useContext } from 'react';
import { SelectedOptionsContext, SelectedOptionsContextType } from '@/context/selectedOptionsContext';
import styles from './ColorPicker.module.css';

export interface IColorPickerProps {
  partKey: string;
  value: string;
  colors: {
    id: string;
    value: string;
  }[];
  onChange: (_value: string) => void;
}

const ColorPicker: React.FC<IColorPickerProps> = ({ partKey, value, colors, onChange }) => {
  const { handleOptionChange } = useContext<SelectedOptionsContextType>(SelectedOptionsContext);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleColorChange = (color: string) => {
    handleOptionChange(partKey, color);
    onChange(color);
  };

  const handleCardToggle = () => {
    setIsCardOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleCardToggle}>
        <span>{partKey}</span>
        <div className={styles.dot} style={{ backgroundColor: value }} />
      </button>
      {isCardOpen && (
        <div className={styles.cardContainer}>
          {colors.map((color) => (
            <div
              key={color.id}
              className={`${styles.colorOption} ${value === color.value ? styles.selected : ''}`}
              style={{ backgroundColor: color.value, color: color.value }}
              onClick={() => handleColorChange(color.value)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
