import React from 'react';
import { css } from '@emotion/react';
import Item from './item';
const data = [
  {
    title: '복터 같이 갈 사람?',
    time: '14:00',
    start: '대전역',
    destination: '복합터미널',
    content: '갤러리아까지 같이 택시 타실 분 구합니다.',
    participant: 1,
    totalPeople: 3,
  },
  {
    title: '빠바 to 대전역',
    time: '14:00',
    start: '빠바',
    destination: '대전역',
    content: '대전역 갈 사람',
    participant: 1,
    totalPeople: 4,
  },
  {
    title: '택시 같이 타요!!',
    time: '14:00',
    start: '한남대',
    destination: '둔산동 갤러리아',
    content: '갤러리아 갈 사람 구함',
    participant: 1,
    totalPeople: 4,
  },
  {
    title: '복터에서 모여~',
    time: '14:00',
    start: '복터',
    destination: '한남대',
    content: '학교갈 사람 구함',
    participant: 1,
    totalPeople: 4,
  },
];

const mainContainer = css`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  width: 100vw;
  height: 100vh;
`;

export default function PostList() {
  return (
    <div css={mainContainer}>
      {data.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}
