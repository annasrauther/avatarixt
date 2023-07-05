import { useContext } from 'react';
import { SelectedOptionsContext, SelectedOptionsContextType } from '@/context/selectedOptionsContext';

export interface IColorPickerProps {
  partKey: string;
  value: string;
  colors: {
    id: string;
    value: string;
  }[];
  onChange: (_value: string) => void;
}

const ColorPicker: React.FC<IColorPickerProps> = ({ partKey, value, colors, onChange }) => {
  const { handleOptionChange } = useContext<SelectedOptionsContextType>(SelectedOptionsContext);

  const handleColorChange = (color: string) => {
    handleOptionChange(partKey, color);
    onChange(color);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {colors.map((color) => (
        <div
          key={color.id}
          style={{
            position: 'relative',
            width: '30px',
            height: '30px',
            color: color.value,
            backgroundColor: color.value,
            borderRadius: '100%',
            margin: '8px',
            cursor: 'pointer',
            border: '1px solid #ccc',
            transform: value === color.value ? 'scale(1.3)' : 'scale(1)',
            transition: 'all 0.2s ease-in-out',
          }}
          onClick={() => handleColorChange(color.value)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
