import React from 'react';
import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import img from '../../asset/images/background.png';

export default function InitialPage() {
  function handleClick(e: any) {
    window.location.href = '/main';
  }
  return (
    <div css={background}>
      <div css={outer__radialGradient}>
        <div css={radialGradient}></div>
      </div>
      <div css={outer__logo}>
        <img
          css={logo}
          src="https://user-images.githubusercontent.com/84161508/150795308-e51825af-89fb-4033-b797-e14dc6b56cfa.png"
          alt="logo"
        />
      </div>
      <div css={outer__button}>
        <LoginButton onClick={handleClick}>Login</LoginButton>
        <InformationButton>Inform</InformationButton>
      </div>
    </div>
  );
}

const background = css`
  background-size: 100vw 100vh;
  background-image: url(${img}); //저거 돈 기호 넣어야 하는구나
  flex: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const radialGradient = css`
  background: radial-gradient(
    circle,
    rgba(97, 83, 211, 0.9),
    rgba(97, 83, 211, 0.3),
    rgba(97, 83, 211, 0.01),
    rgba(97, 83, 211, 0)
  );
  width: 50vmax;
  height: 50vmax;
`;

const outer__radialGradient = css`
  position: absolute;
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  margin-top: 15vh;
`;

const outer__logo = css`
  display: flex;
  justify-content: center;
`;

const logo = css`
  position: absolute;
  margin-top: 30vh;
  width: 75vmin;
`;

const LoginButton = styled(Button)({
  background: 'linear-gradient(45deg, rgba(97,83,211,0.9)30%, rgba(174,128,245,0.8)90%)',
  borderRadius: '10px',
  boxShadow: '0 3px 5px 2px rgba(97,83,211, 0.3)',
  color: 'white',
  height: '5vh',
  width: '35vw',
  fontSize: '1rem',
});

const InformationButton = styled(Button)({
  background: 'transparent',
  borderRadius: '10px',
  boxShadow: '0 3px 5px 2px rgba(97,83,211, 0.4)',
  color: 'rgba(97,83,211, 0.9)',
  height: '5vh',
  width: '35vw',
  fontSize: '1rem',
  marginTop: '0.7em',
});

const outer__button = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 67vh;
`;
