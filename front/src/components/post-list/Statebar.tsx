import React from 'react';
import { css } from '@emotion/react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Statebar() {
  function handleClick(e: any) {
    window.location.href = '/';
  }
  return (
    <div css={statebarStyle}>
      <ArrowBackIosNewIcon onClick={handleClick} sx={{ fontSize: '3vmax' }} />
      <span>HereTogether</span>
      <span> o </span>
    </div>
  );
}

const statebarStyle = css`
  width: 95%;
  height: 1em;
  margin: 0 auto;
  padding-top: 1rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: 'localFont'; //여기 해결해야할 문제 !!!
`;
