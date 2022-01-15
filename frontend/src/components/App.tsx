import React from 'react';

import { css } from '@emotion/react';

const myStyle = css`
  color: red;
`;

function App() {
  return <div css={myStyle}>안녕하세요</div>;
}

export default App;
