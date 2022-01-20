import React from 'react';
import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const dateStyle = css`
  width: 90%;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 55px;
`;

const dateStyle__detatil = css`
  color: white;
  text-align: center;
  margin-bottom: 40px;
  margin-top: -10px;
`;

const DateButton__before = styled(Button)({
  background: 'rgba(255,255,255,0.3)',
  border: '1px solid  rgba(255,255,255,0.3)',
  borderRadius: 30,
  boxShadow: '0 3px 5px 2px rgba(97,83,211, 0.3)',
  color: 'white',
  height: 48,
  padding: '30px 25px',
  fontSize: 25,
});

const DateButton__after = styled(Button)({
  border: '1px solid  rgba(255,255,255,0.7)',
  borderRadius: 30,
  boxShadow: '0 3px 5px 2px rgba(97,83,211, 0.3)',
  color: 'white',
  height: 48,
  padding: '30px 25px',
  fontSize: 25,
});

export default function Date() {
  return (
    <div>
      <div css={dateStyle}>
        <DateButton__before>이전날</DateButton__before>
        <span>2022년 1월 13일 (목)</span>
        <DateButton__after>다음날</DateButton__after>
      </div>
      <div css={dateStyle__detatil}>
        <ExpandMoreIcon sx={{ fontSize: '50px' }} />
      </div>
    </div>
  );
}
