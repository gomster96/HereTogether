import React from 'react';
import { css } from '@emotion/react';
import backgroundImage from '../../asset/images/background.png';
import Header from '../../components/Header';

export default function WritePage() {
  return (
    <div css={background}>
      <Header />
    </div>
  );
}

const background = css`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${backgroundImage});
  background-size: 100vw 100vh;
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: auto;
`;
