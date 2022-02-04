import React from 'react';
import Refresh from '@mui/icons-material/Refresh';
import { styled } from '@material-ui/core/styles';
import { css } from '@emotion/react';
import Button from '@mui/material/Button';

export default function RefreshButton() {
  function handleClick(e: any) {
    // window.location.replace('/main');
    window.location.href = '/main';
  }
  return (
    <RefreshStyledButton onClick={handleClick}>
      <RefreshIcon />
    </RefreshStyledButton>
  );
}

const refreshIcon__style = css`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;

const RefreshStyledButton = styled(Button)({
  left: 8,
  bottom: 0,
  position: 'fixed',
  height: '4rem',
  width: '2rem',
  marginBottom: '0.5rem',
  marginRight: '0.5rem',
  borderRadius: '50%',
  boxShadow: '0 3px 5px 2px rgba(97,83,211, 0.3)',
  background: '#40325a4c',
  color: 'white',
  fontSize: '1rem',
});

const RefreshIcon = styled(Refresh)({
  color: 'white',
  fontSize: '2.3rem',
});
