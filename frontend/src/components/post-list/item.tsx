import React from 'react';
import { css } from '@emotion/react';
import { ItemType } from '../../type';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const listBox = css`
  width: 92%;
  margin: 15px auto;
  border-radius: 30px;
  background-color: white;
  box-shadow: rgba(97, 83, 211, 0.5) 3px 3px 8px;
`;

const listBox__title = css`
  margin: 0 auto;
  width: 92%;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  color: rgb(140, 140, 140);
  padding: 15px 0;
`;

const listBox__content__underline = css`
  margin: 0 auto;
  width: 92%;
  border-bottom: 2px solid rgba(97, 83, 211, 0.3);
`;
// 'icon start start destination destination'
// 'icon stLocation stLocation desLocation desLocation'
const listBox__content__icon = css``;

const listBox__location = css`
  margin: 0 auto;
  width: 92%;
  display: flex;
  font-size: 30px;
  color: rgb(97, 83, 211);
  font-weight: 550;
  padding: 20px 0 0 0;
`;

const listBox__footer = css`
  grid-area: footer;
  font-size: 20px;
  margin: 0 auto;
  width: 92%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: rgb(140, 140, 140);
  padding: 15px 0;
`;

const ListButton = styled(Button)({
  background: 'linear-gradient(45deg, rgb(97,83,211)30%, rgb(174,128,245)90%)',
  border: 0,
  borderRadius: 30,
  boxShadow: '0 3px 5px 2px rgba(97,83,211, 0.3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  fontSize: 25,
});

export default function Item(props: { item: ItemType }) {
  return (
    <div css={listBox}>
      <div css={listBox__title}>
        <div>{props.item.title}</div>
        <div>{props.item.time}</div>
      </div>
      <div css={listBox__content__underline}></div>
      <div css={listBox__location}>
        <div>{props.item.start}</div>
        <span>→</span>
        <div>{props.item.destination}</div>
      </div>
      <div css={listBox__footer}>
        <div>{props.item.content}</div>
        <ListButton>
          {props.item.participant}/{props.item.totalPeople}
        </ListButton>
      </div>
    </div>
  );
}
