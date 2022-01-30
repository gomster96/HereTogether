import React from 'react';
import { css } from '@emotion/react';
import img from '../../asset/images/background.png';
import Statebar from '../post-list/Statebar';

export default function WritePage() {
  return (
    <div css={background}>
      <Statebar />
    </div>
  );
}

const background = css`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${img});
  background-size: 100vw 100vh;
  height: 100%;
  weight: 100%;
  position: absolute;
  overflow: auto;
`;
