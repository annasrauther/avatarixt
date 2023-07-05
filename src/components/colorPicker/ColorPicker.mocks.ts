import { IColorPickerProps } from './ColorPicker';

const base: IColorPickerProps = {
  partKey: 'body',
  label: 'Body',
  value: '#000000',
  colors: [
    {
      id: '1',
      value: 'black',
      hex: '#000000',
    },
    {
      id: '2',
      value: 'white',
      hex: '#ffffff',
    },
  ],
  onChange: (_value: string) => {},
};

export const ColorPickerMock = {
  base,
};
