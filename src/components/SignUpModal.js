import React, { useState, lazy } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
// import Confetti from 'react-confetti';
import { colors } from '../styles/ColorStyles';
import { mainShadow, mediaQueries } from '../styles/GlobalStyles';
import { heading2, smallText } from '../styles/TextStyles';
import { opacityAnimation } from './Animations';
import Button from './Button';
import { RiCloseLine } from 'react-icons/ri';
import { StaticImage } from 'gatsby-plugin-image';
import Confetti from 'react-confetti';

const SignUpModal = ({ closeModal }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let name = watch('name');
  let email = watch('email');

  const onSubmit = () => {
    fetch('/.netlify/functions/sendToSheets', {
      method: 'POST',
      body: JSON.stringify({
        Name: name,
        Email: email,
        Date: Date(),
      }),
    });
    setIsSubmitted(true);
  };

  return (
    <>
      {isSubmitted && (
        <Confetti
          className='confetti'
          width={window.innerWidth}
          height={document.body.scrollHeight}
          numberOfPieces={200}
          colors={['#69BD7A', '#F97AA2', '#f1e363']}
        />
      )}
      <Wrapper>
        <div id='image'>
          <StaticImage src='../../static/images/graphics/modalPattern.svg' />
        </div>
        {isSubmitted === false ? (
          <Main>
            <Text>
              <Heading>Sign Up</Heading>
              <Description>
                Leave your email, we will notify you when the course and the
                toolchain are ready!
              </Description>
            </Text>
            <CTA onSubmit={handleSubmit(onSubmit)}>
              <Input
                type='text'
                placeholder='Name'
                {...register('name', {
                  required: true,
                  maxLength: 20,
                  pattern: /^[a-zA-Z]+/g,
                })}
              />
              {errors.name && <p>Enter a valid name</p>}
              <Input
                type='email'
                placeholder='Email'
                {...register('email', {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email && <p>Enter a valid email</p>}
              <Button
                type='submit'
                bgColor={Boolean(name) && Boolean(email) ? 'pink80' : '#282828'}
                txtColor='textWhite'
                text='Sign Up'
                allowed={email && name}
              />
            </CTA>
          </Main>
        ) : (
          <Main>
            <Text>
              <Heading>Thank you!</Heading>
              <Description>
                We will notify you when <span>Konspekt</span> course or
                toolchain are released. Stay tuned!{' '}
              </Description>
            </Text>
          </Main>
        )}
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

  position: fixed;
  top: 15%;
  left: 15vw;
  max-width: 1008px;
  max-height: 544px;
  overflow-y: hidden;

  background: ${colors.yellow60};
  box-shadow: ${mainShadow};
  border-radius: 25px;
  z-index: 2;

  animation: ${opacityAnimation};

  @media screen and (max-width: ${mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 43.4vw);
    top: 25vh;
    left: 3vh;
    right: 3vh;
    #image {
      /* width: 50%; */
    }
  }

  @media screen and (max-width: ${mediaQueries.phone}) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    top: 20vh;
    left: 3vh;
    right: 3vh;

    #image {
      display: none;
      /* height: 10px;
      opacity: 0.5; */
    }
  }
`;

const Main = styled.div`
  position: relative;
  display: grid;
  max-width: 255px;
  max-height: 293px;
  /* background-color: red; */
  gap: 20px;

  @media (max-width: ${mediaQueries.tablet}) {
    max-width: 100%;
    max-height: 100%;
    padding: 7vw;
  }
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

  p {
    margin-left: 1vw;
    color: '#282828';
  }
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

  span {
    font-weight: 700;
  }

  @media screen and (max-width: ${mediaQueries.phone}) {
    font-size: 16px;
  }
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

  @media screen and (max-width: ${mediaQueries.tablet}) {
    width: 100%;
    font-size: 16px;
  }
`;
