import Image from 'next/image';
import styles from './Card.module.css';
import { CardOption } from './Card';

interface CardItemProps {
  option: CardOption;
  isActive: boolean;
  onClick: () => void;
}

const CardItem: React.FC<CardItemProps> = ({ option, isActive, onClick }) => {
  const fontWeight = isActive ? '800' : '300';

  return (
    <div className={`${styles.card} ${isActive ? styles.active : ''}`} onClick={onClick}>
      <Image
        src="/vercel.svg" // Update with the actual image source
        alt={option.label}
        width={100}
        height={100}
        placeholder="blur"
        className={isActive ? styles.active : ''}
        blurDataURL="data:image/svg+xml;base64,..."
      />
      <span style={{ fontWeight }}>{option.label.toUpperCase()}</span>
    </div>
  );
};

export default CardItem;