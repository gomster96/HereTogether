import React from 'react';
import { css } from '@emotion/react';
import Header from '../../components/Header';
import Tab from './Tab';
import DateBar from './DateBar';
import WriteButton from './WriteButton';
import RefreshButton from './RefreshButton';
import backgroundImage from '../../asset/images/background.png';
import PostList from '../Main/PostList';

export default function Main() {
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
  width: 100%;
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
  margin-top: 28.5vh;
`;
