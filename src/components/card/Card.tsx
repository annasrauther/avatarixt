import { useContext } from 'react';
import Image from 'next/image';
import { SelectedOptionsContext, SelectedOptionsContextType } from '@/context/selectedOptionsContext';
import styles from './Card.module.css';

export interface ICardProps {
  partKey: string;
  value: string;
  options: { id: string; label: string; value: string }[];
  onChange: (_newValue: string) => void;
}

const CardComponent: React.FC<ICardProps> = ({ partKey, options }) => {
  const { selectedOptions, handleOptionChange } = useContext<SelectedOptionsContextType>(SelectedOptionsContext);

  const value = selectedOptions[partKey];

  const handleCardChange = (option: string) => {
    handleOptionChange(partKey, option);
  };

  const optionValues = options.map((option) => option.value); // Extract the 'value' from each object

  return (
    <div className={styles.container}>
      {optionValues.map((option) => (
        <div
          key={option}
          className={styles.card}
          onClick={() => handleCardChange(option)}
        >
          <Image
            // src={`/img/${option}.svg`}
            src="/vercel.svg"
            alt={option}
            width={100}
            height={100}
            placeholder="blur"
            className={value === option ? styles.active : ''}
            blurDataURL="data:image/svg+xml;base64,..."
          />
          <span style={{
            fontWeight: value === option ? '600' : '400',
          }}>{option.toLocaleUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
