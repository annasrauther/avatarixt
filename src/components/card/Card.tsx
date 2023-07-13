import { useContext } from 'react';
import Slider from '../slider/Slider';
import CardItem from './CardItem';
import styles from './Card.module.css';

import { OptionsContext, OptionsContextType } from '@/context/optionsContext';
const OptionsContextNonNull = OptionsContext as NonNullable<React.Context<OptionsContextType>>;

export interface CardOption {
  id: string;
  label: string;
  value: string;
}

interface CardProps {
  partKey: string;
  options: CardOption[];
}

const CardComponent: React.FC<CardProps> = ({ partKey, options }) => {
  const { options: contextOptions, updateOption } = useContext<OptionsContextType>(OptionsContextNonNull);
  const value = contextOptions[partKey].value;

  const handleCardChange = (option: string) => {
    updateOption(partKey, option);
  };

  return (
    <div className={styles.container} role="group" aria-label="Part Options">
      <Slider>
        {options.map((option) => {
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
        })}
      </Slider>
    </div>
  );
};

export default CardComponent;
