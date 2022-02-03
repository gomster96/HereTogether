/* eslint-disable no-restricted-globals */
import React from 'react';
import { css } from '@emotion/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Header() {
  function handleClick(e: any) {
    window.location.href = '/';
  }
  return (
    <div css={statebarStyle}>
      <ArrowBackIcon
        onClick={() => {
          history.back();
        }}
        sx={{ fontSize: '3vmax' }}
      />
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
  color: rgba(255, 255, 255, 0.8);
`;
