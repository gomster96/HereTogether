import React, { useState } from 'react';
import { css } from '@emotion/react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material/styles';
import PostList from '../PostList';

export default function TabStyle() {
  const [value, setValue] = useState('one');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(newValue);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  // 각 탭을 클릭하면 해당 태그의 인덱스 값이 useState에 저장되도록 해보자
  const tabClickHandler = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
    console.log(activeIndex);
    //확인 확인 !!!!
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '88%', margin: '1em auto' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            sx={{
              width: '100%',
              marginTop: '1rem',
              borderBottom: '1.3px solid rgb(163,163,163)',
              color: 'rgb(163,163,163)',
            }}
            // aria-label="secondary tabs example"
          >
            <Tab
              value="taxi"
              label="택시"
              onClick={() => tabClickHandler(0)}
              sx={{ width: '16.6%', fontSize: '2vmax' }}
            />
            <Tab
              value="carpool"
              label="카풀"
              onClick={() => tabClickHandler(1)}
              sx={{ width: '16.6%', fontSize: '2vmax' }}
            />
            <Tab
              value="delivery"
              label="배달"
              onClick={() => tabClickHandler(2)}
              sx={{ width: '16.6%', fontSize: '2vmax' }}
            />
            <Tab
              value="group purchase"
              label="공구"
              onClick={() => tabClickHandler(3)}
              sx={{ width: '16.6%', fontSize: '2vmax' }}
            />
            <Tab
              value="exercise"
              label="운동"
              onClick={() => tabClickHandler(4)}
              sx={{ width: '16.6%', fontSize: '2vmax' }}
            />
            <Tab
              value="outsider"
              label="아싸"
              onClick={() => tabClickHandler(5)}
              sx={{ width: '16.6%', fontSize: '2vmax' }}
            />
          </Tabs>
        </Box>
      </ThemeProvider>
    </div>
  );
}

// const tabStyle = { 이게 되는게 아니라, 그냥 안먹는 거였음!
//   width: '16.6%',
//   fontSize: '2vmax',
// };

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
    fontFamily: 'localFont',
  },
});
