import React from 'react';
import {TextField,Typography} from '@material-ui/core'

const CustomTextField = ({ label, value, onChange }) => {
  return (
    <div>
      <Typography variant="body1" color="blue">
        {label}
      </Typography>
      <TextField
        variant="outlined"
        value={value}
        onChange={onChange}
        fullWidth
      />
    </div>
  );
};

export default CustomTextField;
