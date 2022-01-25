import React from 'react';
import { css } from '@emotion/react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Statebar() {
  return (
    <div css={statebarStyle}>
      <ArrowBackIosNewIcon sx={{ fontSize: '3vmax' }} />
      <span>HereTogether</span>
      <span> o </span>
    </div>
  );
}

const statebarStyle = css`
  width: 95%;
  height: 1rem;
  color: white;
  font-size: 10em;
  font-family: 'localFont'; //여기 해결해야할 문제 !!!
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-top: 1em;
`;
