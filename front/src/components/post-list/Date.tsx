import React from 'react';
import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ResponsiveDatePicker from './DatePicker';

export default function Date() {
  function handleClick(e: any) {
    window.location.href = '/writePage';
  }
  return (
    <div>
      <div css={dateStyle}>
        <DateButton__before onClick={handleClick}>이전날</DateButton__before>
        <ResponsiveDatePicker />
        <DateButton__after onClick={handleClick}>다음날</DateButton__after>
      </div>
      {/* <div css={dateStyle__detatil}>
          <ExpandMoreIcon sx={{ fontSize: '3vmax' }} />
        </div> */}
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

// const dateStyle__detatil = css`
//   color: white;
//   text-align: center;
//   margin-bottom: 3em;
//   margin-top: -10px;
// `;

const DateButton__before = styled(Button)({
  background: '#0a09094c',
  border: '1px solid  rgba(255,255,255,0.3)',
  borderRadius: 40,
  boxShadow: '0 3px 5px 2px rgba(97,83,211, 0.3)',
  color: 'white',
  height: '3rem',
  width: '5rem',
  padding: '5px 0',
  fontSize: ' 1rem',
  fontFamily: 'localFont',
});

const DateButton__after = styled(Button)({
  border: '1px solid  rgba(255,255,255,0.7)',
  borderRadius: 40,
  boxShadow: '0 3px 5px 2px rgba(97,83,211, 0.3)',
  color: 'white',
  height: '3rem',
  width: '5rem',
  padding: '5px 0',
  fontSize: ' 1rem',
  fontFamily: 'localFont',
});
