import React from 'react';
import { css } from '@emotion/react';
import Statebar from './Statebar';
import Tab from './Tab';
import Date from './Date';
import List from './List';
import img from '../../asset/images/background.png';

export default function PostList() {
  return (
    <div css={background}>
      <Statebar />
      <Tab />
      <Date />
      <List />
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
