import { IColorPickerProps } from './ColorPicker';

const base: IColorPickerProps = {
  partKey: 'body',
  value: '#000000',
  colors: [
    {
      id: '1',
      value: '#000000',
    },
    {
      id: '2',
      value: '#ffffff',
    },
  ],
  onChange: (_value: string) => {},
};

export const ColorPickerMock = {
  base,
};
