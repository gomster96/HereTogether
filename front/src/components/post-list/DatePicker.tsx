import * as React from 'react';
import { css } from '@emotion/react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    noBorder: {
      outline: 'none',
      border: 'none',
    },
    // textColor: {
    //   color: 'white',
    // },
  })
);

export default function ResponsiveDatePickers() {
  const [value, setValue] = React.useState<Date | null>(new Date());
  const classes = useStyles();
  const color = 'ffffff';

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        //위에 파라미터 받아오는 부분만 수정하면 된다 !!
        InputProps={{
          classes: { notchedOutline: classes.noBorder },
        }}
        //위는 되고 아래는 안되는 이유는 뭐니?
        // css={test}
        css={{ test }}
      />
    </LocalizationProvider>
  );
}

const test = css`
  padding: 500px;
  border: 1px solid red;
`;

// 방법 2
// const theme = createTheme({
//   components: {
//     MuiIconButton: {
//       styleOverrides: {
//         sizeMedium: {
//           color
//         }
//       }
//     },
//     MuiOutlinedInput: {
//       styleOverrides: {
//         root: {
//           color
//         }
//       }
//     },
//     MuiInputLabel: {
//       styleOverrides: {
//         root: {
//           color
//         }
//       }
//     }
//   }
// });
