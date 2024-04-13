import React, { useState } from 'react';
import CustomTextField from './CustomTextfield';

const MyComponent = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <CustomTextField
        label="Custom TextField"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default MyComponent;
