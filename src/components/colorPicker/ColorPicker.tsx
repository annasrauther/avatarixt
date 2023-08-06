// Import dependencies
import { useContext } from 'react';

// Import context and types
import { OptionsContext, OptionsContextType } from '@/context/optionsContext';
const OptionsContextNonNull = OptionsContext as NonNullable<React.Context<OptionsContextType>>;

// Import styles
import styles from './ColorPicker.module.css';

/**
 * The ColorPicker Props.
 * @interface ColorPickerProps
 * @property {string} partKey The part key.
 * @property {string} label The label.
 * @property {string} value The value.
 * @property {any[]} colors The colors.
 * @property {boolean} display The display.
 */
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

/**
 * Represents the ColorPicker component.
 * 
 * The `ColorPicker` component displays the color picker for a part.
 * 
 * @component
 * @param {ColorPickerProps} props - The component props.
 * @returns {React.FC} The ColorPicker component.
 */
const ColorPicker: React.FC<ColorPickerProps> = ({ partKey, label, value, colors }) => {
  // Get the updateOption function from the OptionsContext
  const { updateOption } = useContext<OptionsContextType>(OptionsContextNonNull);

  // Use the updateOption function to update the option
  const handleColorChange = (color: string) => {
    updateOption(partKey, color);
  };

  // Renders the ColorPicker component.
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
