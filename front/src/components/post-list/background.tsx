import React from 'react';
import { css } from '@emotion/react';
import img from '../../asset/images/background.png';

export default function Background() {
  return <div css={background__style}></div>;
}

const background__style = css`
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
