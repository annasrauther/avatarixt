// Import dependencies
import { useContext, useState, useEffect } from 'react';

// Import components
import Slider from '../slider/Slider';
import CardItem from './CardItem';

// Import the OptionsContext
import { OptionsContext, OptionsContextType } from '@/context/optionsContext';
const OptionsContextNonNull = OptionsContext as NonNullable<React.Context<OptionsContextType>>;

// Import styles
import styles from './Card.module.css';

/**
 * Represents the Card Option interface.
 * @interface CardOption
 * @property {string} id The option id.
 * @property {string} label The option label.
 * @property {string} value The option value.
 * @property {string} image The option image.
 */
export interface CardOption {
  id: string;
  label: string;
  value: string;
  image: string;
}

/**
 * Represents the Card Props interface.
 * @interface CardProps
 * @property {string} partKey The part key.
 * @property {CardOption[]} options The options.
 */
interface CardProps {
  partKey: string;
  options: CardOption[];
}

/**
 * Represents the Card component.
 * 
 * The `Card` component displays the card option for a part.
 * 
 * @component
 * @param {CardProps} props - The component props.
 * @returns {React.FC} The Card component.
 * @example
 * <Card partKey="top" options={topOptions} />
 */
const CardComponent: React.FC<CardProps> = ({ partKey, options }) => {
  // Get the options and updateOption function from the OptionsContext
  const { options: contextOptions, updateOption } = useContext<OptionsContextType>(OptionsContextNonNull);
  const value = contextOptions[partKey].value;

  // Use the updateOption function to update the option
  const handleCardChange = (option: string) => {
    updateOption(partKey, option);
  };

  // Use the isMobile state to determine if the slider should be used
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const handleResize = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    // Add event listener for resize
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Renders the Card Items.
  const renderCardItems = () => {
    return options.map((option) => {
      const isActive = value === option.value;
      return (
        <CardItem
          key={option.id}
          option={option}
          isActive={isActive}
          onClick={() => handleCardChange(option.value)}
          ariaLabel={option.label}
        />
      );
    });
  };

  // Renders the Card component.
  return (
    <div className={styles.container} role="group" aria-label="Part Options">
      {isMobile ? (
        <div className={styles.flex} role="presentation">
          {renderCardItems()}
        </div>
      ) : (
        <Slider>
          <div className={styles.flex} role="presentation">
            {renderCardItems()}
          </div>
        </Slider>
      )}
    </div>
  );
};

export default CardComponent;
