import { useContext, useState, useEffect } from 'react';
import Slider from '../slider/Slider';
import CardItem from './CardItem';
import styles from './Card.module.css';

import { OptionsContext, OptionsContextType } from '@/context/optionsContext';
const OptionsContextNonNull = OptionsContext as NonNullable<React.Context<OptionsContextType>>;

export interface CardOption {
  id: string;
  label: string;
  value: string;
  image: string;
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  return (
    <div className={styles.container} role="group" aria-label="Part Options">
      {isMobile ? (
        renderCardItems()
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
