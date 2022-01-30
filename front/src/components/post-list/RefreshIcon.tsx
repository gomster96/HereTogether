import React from 'react';
import Refresh from '@mui/icons-material/Refresh';
import { css } from '@emotion/react';
export default function RefreshIcon() {
  function handleClick(e: any) {
    // window.location.replace('/main');
    window.location.href = '/mainPage';
  }
  return (
    <div css={refreshIcon__style} onClick={handleClick}>
      <Refresh />
    </div>
  );
}

const refreshIcon__style = css`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;
