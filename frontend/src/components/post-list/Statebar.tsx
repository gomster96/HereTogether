import React from 'react';
import { css } from '@emotion/react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const statebarStyle = css`
  width: 95%;
  color: white;
  font-size: 35px;
  font-family: 'night'; //아니 폰트 웨 안 ㅞ ?????
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-top: 40px;
`;

export default function Statebar() {
  return (
    <div css={statebarStyle}>
      <ArrowBackIosNewIcon sx={{ fontSize: 45 }} />
      <span>한남대학교</span>
      <span> o </span>
    </div>
  );
}
