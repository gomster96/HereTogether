import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(256,256,256)',
    },
    secondary: {
      main: 'rgb(163, 163, 163)',
    },
  },
  typography: {
    fontFamily: 'Raleway, Arial',
    fontSize: 30,
  },
});

export default function TabStyle() {
  const [value, setValue] = useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '88%', margin: '0 auto' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            marginTop: '5%',
            borderBottom: '1px solid rgb(163,163,163)',
            color: 'rgb(163,163,163)',
          }}
          // aria-label="secondary tabs example"
        >
          <Tab value="taxi" label="택시" sx={{ width: '16.6%' }} />
          <Tab value="carpool" label="카풀" sx={{ width: '16.6%' }} />
          <Tab value="delivery" label="배달" sx={{ width: '16.6%' }} />
          <Tab value="group purchase" label="공구" sx={{ width: '16.6%' }} />
          <Tab value="exercise" label="운동" sx={{ width: '16.6%' }} />
          <Tab value="outsider" label="아싸" sx={{ width: '16.6%' }} />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
