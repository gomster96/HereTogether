import * as React from 'react';
import { css } from '@emotion/react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';

export default function ResponsiveDatePickers() {
  const [value, setValue] = React.useState<Date | null>(new Date());
  const color = 'ffffff';
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3} sx={{ border: '1px solid red' }}>
        <MobileDatePicker
          label="For mobile"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                backgroundColor: 'white',
              }}
            />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}

// const test = css`
//   display: none;
//   /* background-color: red; */
//   border: none;
// `;

//   return (
//     <LocalizationProvider
//       dateAdapter={AdapterDateFns}
//       sx={{
//         border: 0,
//       }}
//     >
//       <DesktopDatePicker
//         label="For desktop"
//         value={value}
//         minDate={new Date('2017-01-01')}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             sx={{
//               svg: { display: 'none' },
//               input: { color },
//               border: '2px',
//               padding: '30px',
//             }}
//           />
//         )}
//       />
//     </LocalizationProvider>
//   );
// }
