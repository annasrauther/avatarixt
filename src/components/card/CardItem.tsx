// Import dependencies
import Image from 'next/image';

// Import components
import { CardOption } from './Card';

// Import styles
import styles from './Card.module.css';

/**
 * Represents the Card Item Props interface.
 * @interface CardItemProps
 * @property {CardOption} option The option.
 * @property {boolean} isActive The active state.
 * @property {() => void} onClick The click handler.
 * @property {string} ariaLabel The aria label.
 */
interface CardItemProps {
  option: CardOption;
  isActive: boolean;
  onClick: () => void;
  ariaLabel: string;
}

/**
 * Represents the Card Item component.
 * 
 * The `CardItem` component displays the card item.
 * 
 * @component
 * @param {CardItemProps} props - The component props.
 * @returns {React.FC} The CardItem component.
 * @example
 * <CardItem option={option} isActive={isActive} onClick={handleCardChange} ariaLabel={ariaLabel} />
 */
const CardItem: React.FC<CardItemProps> = ({ option, isActive, onClick, ariaLabel }) => {
  // Get the font weight
  const fontWeight = isActive ? '800' : '300';

  // Return the CardItem component.
  return (
    <button
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={ariaLabel}
    >
      <div className={styles.imageContainer}>
        <Image
          src={option.image}
          alt={option.label}
          width={100}
          height={100}
          placeholder="blur" // This is the blur-up effect
          className={isActive ? styles.active : ''}
          blurDataURL="data:image/svg+xml;base64,..."
        />
      </div>
      <span style={{ fontWeight }}>{option.label.toUpperCase()}</span>
    </button>
  );
};

export default CardItem;
