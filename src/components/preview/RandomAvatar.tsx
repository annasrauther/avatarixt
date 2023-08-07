import { useOptions } from '@/context/optionsContext';
import partMap from '@/lib/parts';
import { FaRandom } from 'react-icons/fa';

// Import styles
import styles from './Button.module.css';

/**
 * Represents the Random Avatar Button.
 *
 * The `RandomAvatar` component displays a button that, when clicked, randomizes the avatar by updating the selected options
 * with random values from the available options.
 *  
 * @component
 * @returns {React.FC} The Random Avatar Button component.
 */
const RandomAvatar: React.FC = () => {
  // Context and options destructuring
  const { options, updateOption } = useOptions();

  /**
   * Handles the randomization of the avatar.
   *
   * This function selects random values for each part of the avatar from the available options and updates the `options` state
   * with the new values using the `updateOption` function from the `OptionsContext`.
   *
   * @function
   * @returns {void}
   */
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

  // Renders the Random Avatar button
  return (
    <button
      type="button"
      title="Randomize Avatar"
      className={styles.button}
      onClick={handleRandomize}
      aria-label="Randomize Avatar"
    >
      <span>Random</span> <FaRandom />
    </button>
  );
};

export default RandomAvatar;
