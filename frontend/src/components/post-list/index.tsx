import React from 'react';
import { css } from '@emotion/react';
import Item from './Item';
import Statebar from './Statebar';
import Tab from './Tab';
import Date from './Date';

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
const background = css`
  background-image: url('https://user-images.githubusercontent.com/84161508/150076714-aa5b917f-919c-4df3-9d73-affb2accb44f.png'); //이거 어캐하냐~!~!
  background-size: 100vw 100vh;
  // background-image가 컨테이너를 가득 채우지 못할 경우에도 반복하지 않는다.
`;
const listPage = css`
  display: grid;
  grid-template-rows: repeat(3, minmax(10px, 1fr)) 65vh minmax(30px, 1fr);
  grid-template-columns: repeat(1, minmax(30px, 1fr));
  height: auto;
  margin: -10px auto;
  max-width: 1000px;
`;

export default function PostList() {
  return (
    <div css={background}>
      <div css={listPage}>
        <div>
          <Statebar />
          <Tab />
          <Date />
          {data.map((item) => (
            <Item item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
