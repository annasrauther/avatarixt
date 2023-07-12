import { ChangeEvent } from 'react';
import styles from './SwitchPill.module.css';

export interface SwitchPillProps {
  value: boolean;
  onChange: (_newValue: boolean) => void;
}

const SwitchPill: React.FC<SwitchPillProps> = ({ value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    onChange(newValue);
  };

  return (
    <label className={styles.switchPill}>
      <input className={styles.switchPillInput} type="checkbox" checked={value} onChange={handleChange} />
      <span className={styles.slider} />
    </label>
  );
};

export default SwitchPill;
