// withRouter는 라우터 컴포넌트가 아닌 곳에서 match, location, history를 props로 받아와서 사용하게 해줍니다.
import React from 'react';
import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { Route, Link, useHistory } from 'react-router-dom';

export default function WriteButton() {
  const history = useHistory();

  const moveWrite = () => {
    history.push('/write');
  };

  return (
    // <Link to="/write">
    <WriteStyledButton onClick={moveWrite}>
      <Icon />
    </WriteStyledButton>
    // </Link>
  );
}
const WriteStyledButton = styled(Button)({
  right: 0,
  bottom: 0,
  position: 'fixed',
  height: '4rem',
  width: '2rem',
  marginBottom: '0.5rem',
  marginRight: '0.5rem',
  borderRadius: '50%',
  boxShadow: '0 3px 5px 2px rgba(97,83,211, 0.3)',
  background: 'linear-gradient(45deg, rgba(97,83,211,0.8)30%, rgba(174,128,245,0.8)90%)',
  color: 'white',
  fontSize: '1rem',
});

const Icon = styled(EditIcon)({
  color: 'white',
  fontSize: '2.3rem',
});
