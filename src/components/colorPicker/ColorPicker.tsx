import { useContext } from 'react';
import { SelectedOptionsContext, SelectedOptionsContextType } from '@/context/selectedOptionsContext';

export interface IColorPickerProps {
  partKey: string;
  value: string;
  colors: {
    id: string;
    value: string;
  }[];
  onChange: (_value: string) => void; // Add the onChange prop
}

const ColorPicker: React.FC<IColorPickerProps> = ({ partKey, value, colors, onChange }) => {
  const { handleOptionChange } = useContext<SelectedOptionsContextType>(SelectedOptionsContext);

  const handleColorChange = (color: string) => {
    handleOptionChange(partKey, color);
    onChange(color); // Call the onChange prop
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {colors.map((color) => (
        <div
          key={color.id}
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: color.value,
            borderRadius: '100%',
            margin: '4px',
            cursor: 'pointer',
            border: value === color.value ? '2px solid black' : '1px solid black',
          }}
          onClick={() => handleColorChange(color.value)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
