import { ISwitchPillProps } from './SwitchPill';

export const base: ISwitchPillProps = {
  value: false,
  onChange: (value: boolean) => {
    console.log('Mock implementation: Value changed:', value);
  },
};

export const SwitchPillMock = {
  base,
};
