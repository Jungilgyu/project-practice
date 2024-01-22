// 동그란 체크표시 버튼
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RadioButton() {
  const [value, setValue] = useState(''); // 선택된 값 상태

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Select One</FormLabel> */}
      <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
			<tr>
        <FormControlLabel value="option1" control={<Radio />} label="교환" />
        <FormControlLabel value="option2" control={<Radio />} label="구매" />
			</tr>	  
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButton;
