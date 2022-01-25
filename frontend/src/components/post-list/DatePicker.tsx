import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import { css } from '@emotion/react';

export default function ResponsiveDatePickers() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} css={test2}>
      <MobileDatePicker
        value={value}
        minDate={new Date('2017-01-01')}
        css={test}
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
