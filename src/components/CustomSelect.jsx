import { CaretDownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
const CustomSelect = ({ value, onChange, options = [], ...rest }) => {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      {...rest}
      suffixIcon={
        <CaretDownOutlined
          style={{
            color: 'white',
            fontSize: '8px',
            background: '#383838',
            position: 'absolute',
            height: '100%',
            padding: '2.0010em',
            right: '0',
            transform: 'translateX(27.5%)',
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
            pointerEvents: 'none'
          }}
        />
      }
    />
  );
};

export default CustomSelect;
