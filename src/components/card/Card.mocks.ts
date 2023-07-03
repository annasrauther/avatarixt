import { ICardProps } from './Card';

const base: ICardProps = {
  partKey: 'body',
  value: 'chest',
  options: [
    { id: 'body-chest', label: 'Chest', value: 'chest' },
    { id: 'body-breasts', label: 'Breasts', value: 'breasts' },
  ],
  onChange: (_event: string) => {},
};

export const CardMock = {
  base,
};
