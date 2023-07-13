import styles from './Card.module.css';
import Image from 'next/image';
import { CardOption } from './Card';

interface CardItemProps {
  option: CardOption;
  isActive: boolean;
  onClick: () => void;
  ariaLabel: string;
}

const CardItem: React.FC<CardItemProps> = ({ option, isActive, onClick, ariaLabel }) => {
  const fontWeight = isActive ? '800' : '300';

  return (
    <button
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={ariaLabel}
    >
      <div className={styles.imageContainer}>
        <Image
          src="/vercel.svg" // Update with the actual image source
          alt={option.label}
          width={100}
          height={100}
          placeholder="blur"
          className={isActive ? styles.active : ''}
          blurDataURL="data:image/svg+xml;base64,..."
        />
      </div>
      <span style={{ fontWeight }}>{option.label.toUpperCase()}</span>
    </button>
  );
};

export default CardItem;
