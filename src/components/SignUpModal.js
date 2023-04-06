import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { colors } from '../styles/ColorStyles';
import { mainShadow } from '../styles/GlobalStyles';
import { heading2, smallText } from '../styles/TextStyles';
import { opacityAnimation } from './Animations';
import Button from './Button';
import { RiCloseLine } from 'react-icons/ri';

const SignUpModal = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    fetch('/.netlify/functions/sendToSheets', {
      method: 'POST',
      body: JSON.stringify({
        Name: name,
        Email: email,
        Date: new Date(),
      }),
    });
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <Wrapper>
        <Image src='/images/graphics/modalPattern.svg' alt='pattern' />
        <Main>
          <Text>
            <Heading>Sign Up</Heading>
            <Description>
              Leave your email, we will notify you when the course and the
              toolchain are ready!
            </Description>
          </Text>
          <CTA>
            <Input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type='submit'
              bgColor={Boolean(name) && Boolean(email) ? 'pink80' : '#282828'}
              txtColor='textWhite'
              text='Sign Up'
              handleClick={
                Boolean(name) && Boolean(email) ? handleSubmit : null
              }
              allowed={email && name}
            />
          </CTA>
        </Main>
        <RiCloseLine
          style={{
            position: 'absolute',
            fontSize: '24px',
            color: '#282828',
            top: '20px',
            right: '20px',
          }}
          onClick={closeModal}
        />
      </Wrapper>
      <Overlay />
    </>
  );
};

export default SignUpModal;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 26.6vw 43.4vw;
  place-items: center;
  place-self: center;

  position: absolute;
  top: 15%;
  left: 15vw;
  max-width: 1008px;
  max-height: 544px;

  background: ${colors.yellow60};
  box-shadow: ${mainShadow};
  border-radius: 25px;
  z-index: 2;

  animation: ${opacityAnimation};
`;

const Image = styled.img``;

const Main = styled.div`
  position: relative;
  display: grid;
  max-width: 255px;
  max-height: 293px;
  /* background-color: red; */
  gap: 20px;
`;

const Text = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: 20px;
`;

const CTA = styled.form`
  display: grid;
  grid-template-rows: auto;
  gap: 10px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1;
  animation: ${opacityAnimation};
`;

const Heading = styled(heading2)`
  text-align: center;
`;

const Description = styled(smallText)`
  color: '#282828';
  opacity: 65%;
  line-height: 120%;
`;

const Input = styled.input`
  border-radius: 15px;
  border: none;
  height: 44px;
  width: 17.7vw; //255px;
  text-indent: 1vw;
  font-size: 20px;
  background-color: ${colors.textWhite};

  ::placeholder {
    color: '#282828';
    opacity: 65%;
  }
`;
