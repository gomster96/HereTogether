import React from 'react';
import { css } from '@emotion/react';
import { ItemType } from '../../type';

const listBoxStyle = css`
  border-radius: 10px;
  background-color: red;
  margin-top: 10px;
`;

const firstLineStyle = css`
  display: flex;
`;

export default function Item(props: { item: ItemType }) {
  return (
    <div css={listBoxStyle}>
      <div css={firstLineStyle}>
        <div>1.{props.item.title}</div>
        <div>2.{props.item.time}</div>
      </div>
      <hr />
      <div css={firstLineStyle}>
        <div>3.{props.item.destination}</div>
        {/* <div>-></div> */}
        <div>4.{props.item.content}</div>
      </div>

      <div>5.{props.item.participant}</div>
      <div>5.{props.item.totalPeople}</div>
    </div>
  );
}
