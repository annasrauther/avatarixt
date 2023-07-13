import { ChangeEvent } from 'react';
import styles from './SwitchPill.module.css';

export interface SwitchPillProps {
  value: boolean;
  onChange: (_newValue: boolean) => void;
  ariaLabel: string;
}

const SwitchPill: React.FC<SwitchPillProps> = ({ value, onChange, ariaLabel }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    onChange(newValue);
  };

  return (
    <label className={styles.switchPill}>
      <input
        className={styles.switchPillInput}
        type="checkbox"
        checked={value}
        onChange={handleChange}
        aria-checked={value}
        aria-label={ariaLabel}
      />
      <span className={styles.slider} />
    </label>
  );
};

export default SwitchPill;
