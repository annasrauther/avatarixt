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

  return (
    <>
      <div className={styles.container}>

        {options.map((option) => (
          <div
            key={option.id}
            className={styles.card}
            onClick={() => handleCardChange(option.value)}
          >
            <Image
              // src={`/img/${option}.svg`}
              src="/vercel.svg"
              alt={option.label}
              width={100}
              height={100}
              placeholder="blur"
              className={value === option.value ? styles.active : ''}
              blurDataURL="data:image/svg+xml;base64,..."
            />
            <span style={{
              fontWeight: value === option.value ? '800' : '300',

            }}>{option.label.toLocaleUpperCase()}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardComponent;
