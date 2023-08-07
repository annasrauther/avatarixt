// Import dependencies
import { ChangeEvent } from 'react';

// Import styles
import styles from './SwitchPill.module.css';

/**
 * Represents the SwitchPill Props interface.
 * @interface SwitchPillProps
 * @property {boolean} value The switch pill value.
 * @property {(_newValue: boolean) => void} onChange The switch pill onChange function.
 * @property {string} ariaLabel The switch pill aria-label.
 */
export interface SwitchPillProps {
  value: boolean;
  onChange: (_newValue: boolean) => void;
  ariaLabel: string;
  display: boolean;
}

/**
 * Represents the SwitchPill component.
 * 
 * The `SwitchPill` component displays a switch pill.
 * 
 * @component
 * @param {SwitchPillProps} props - The component props.
 * @returns {React.FC} The SwitchPill component.
 * @example
 * <SwitchPill value={value} onChange={onChange} ariaLabel={ariaLabel} />
 */
const SwitchPill: React.FC<SwitchPillProps> = ({ value, onChange, ariaLabel, display }) => {
  // Define the handleChange function
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    onChange(newValue);
  };

  // Render the SwitchPill component.
  return (
    <label className={styles.switchPill}>
      <input
        className={styles.switchPillInput}
        type="checkbox"
        checked={value}
        onChange={handleChange}
        aria-checked={value}
        aria-label={ariaLabel}
        aria-disabled={!display}
        tabIndex={display ? 0 : -1}
        disabled={!display}
      />
      <span className={styles.slider} />
    </label>
  );
};

export default SwitchPill;
