import React from 'react';
import { css } from '@emotion/react';
import Header from '../../components/Header';
import Tab from '../Main/Tab';
import DateBar from '../Main/DateBar';
import WriteButton from '../Main/WriteButton';
import RefreshButton from '../Main/RefreshButton';
import backgroundImage from '../../asset/images/background.png';

export default function PostList() {
  return (
    <div css={background}>
      <div css={empty}>
        <RefreshButton />
      </div>
      <PostList />
      <div css={background__header}>
        <Header />
        <Tab />
        <DateBar />
      </div>
      <WriteButton />
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
  weight: 100%;
  position: absolute;
  overflow: auto;
`;

const background__header = css`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${backgroundImage});
  position: fixed;
  background-size: 100vw 100vh;
  height: fit-content;
`;

const empty = css`
  margin-top: 27vh;
`;
