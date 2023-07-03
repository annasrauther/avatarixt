import { ICustomizerFormProps } from './CustomizerForm';

const base: ICustomizerFormProps = {
  partMap: {
    faceMask: {
      label: 'Face Mask',
      component: 'switch',
      options: [
        { id: 'faceMask-true', label: 'True', value: true },
        { id: 'faceMask-false', label: 'False', value: false },
      ],
    },
    faceMaskColor: {
      label: 'Face Mask Color',
      component: 'color',
      options: [
        { id: 'faceMaskColor-0', label: 'white', value: 'white' },
        { id: 'faceMaskColor-1', label: 'blue', value: 'blue' },
        { id: 'faceMaskColor-2', label: 'green', value: 'green' },
        { id: 'faceMaskColor-3', label: 'red', value: 'red' },
        { id: 'faceMaskColor-4', label: 'black', value: 'black' },
      ],
    },
    body: {
      label: 'Body',
      component: 'card',
      options: [
        { id: 'body-chest', label: 'Chest', value: 'chest' },
        { id: 'body-breasts', label: 'Breasts', value: 'breasts' },
      ],
    },
  },
};

export const CustomizerFormMock: { base: ICustomizerFormProps } = {
  base,
};
