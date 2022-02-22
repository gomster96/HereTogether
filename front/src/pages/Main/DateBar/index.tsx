import React from 'react';
import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DatePicker from './DatePicker';

export default function DateBar() {
  function handleClick(e: any) {
    window.location.href = '/write';
  }
  return (
    <div>
      <div css={dateStyle}>
        <Button style={beforeDateStyle} onClick={handleClick}>
          이전날
        </Button>
        <DatePicker />
        <Button style={afterDateStyle} onClick={handleClick}>
          다음날
        </Button>
      </div>
    </div>
  );
}

const dateStyle = css`
  width: 90%;
  color: white;
  font-size: 7em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 1rem;
`;

const beforeDateStyle = {
  height: '2.5rem',
  width: '5rem',
  padding: '5px 0',
  background: '#40325a4c',
  border: '1px solid  rgba(255,255,255,0.3)',
  borderRadius: 40,
  boxShadow: '0 3px 5px 2px rgba(97,83,211, 0.3)',
  color: 'white',
  fontSize: ' 0.8rem',
  fontFamily: 'localFont',
};

const afterDateStyle = {
  height: '2.5rem',
  width: '5rem',
  padding: '5px 0',
  border: '1px solid  rgba(255,255,255,0.7)',
  borderRadius: 40,
  boxShadow: '0 3px 5px 2px rgba(97,83,211, 0.3)',
  color: 'white',
  fontSize: ' 0.8rem',
  fontFamily: 'localFont',
};
