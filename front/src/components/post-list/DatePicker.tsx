import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { css } from '@emotion/react';

export default function ResponsiveDatePickers() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} css={test2}>
      <DesktopDatePicker
        label="For desktop"
        value={value}
        minDate={new Date('2017-01-01')}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

const test = css`
  /* display: none;
  background-color: red; */
  border: none;
`;
const test2 = css`
  border: none;
  background: red;
`;
