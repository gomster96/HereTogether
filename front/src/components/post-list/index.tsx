import React from 'react';
import { css } from '@emotion/react';
import Statebar from './Statebar';
import Tab from './Tab';
import Date from './Date';
import List from './List';
import WriteIcon from './WriteIcon';
import RefreshIcon from './RefreshIcon';
import img from '../../asset/images/background.png';

export default function PostList() {
  return (
    <div css={background}>
      <div css={empty}>
        <RefreshIcon />
      </div>
      <List />
      <div css={background__header}>
        <Statebar />
        <Tab />
        <Date />
      </div>
      <WriteIcon />
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

const background__header = css`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${img});
  position: fixed;
  background-size: 100vw 100vh;
  height: fit-content;
`;

const empty = css`
  margin-top: 27vh;
`;

const iconFix = css``;
