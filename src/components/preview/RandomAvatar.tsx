import { useOptions } from '@/context/optionsContext';
import partMap from '@/lib/parts';
import styles from './Button.module.css';

const RandomAvatar = () => {
  const { options, updateOption } = useOptions();

  const handleRandomize = () => {
    const updatedOptions = { ...options };

    for (const partKey in updatedOptions) {
      const part = partMap[partKey];
      if (part) {
        const randomIndex = Math.floor(Math.random() * part.options.length);
        const randomValue = part.options[randomIndex].value;
        updatedOptions[partKey] = { ...updatedOptions[partKey], value: randomValue };
        updateOption(partKey, randomValue);
      }
    }
  };

  return (
    <button
      type="button"
      title="Randomize Avatar"
      className={styles.button}
      onClick={handleRandomize}
    >
      Random
    </button>
  );
};

export default RandomAvatar;
