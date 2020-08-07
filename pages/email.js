import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import { notification } from 'antd';

import Spinner from 'components/spinner';
import { INTERNAL_LINKS } from 'enum';
import { UserContext } from '../providers/UserProvider';

export default function PaymentForm() {
  const router = useRouter();
  const { updateEmail } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userEmail.trim()) {
      notification.open({
        message: 'Warning',
        description: 'Please type your email address',
      })
      return
    }
    setLoading(true);

    const res = await fetch(`${process.env.API_AFFILIATE}/passwordless/start`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        connection: 'email',
        email: userEmail,
        send: 'code',
      }),
    });

    if (res.ok) {
      console.log('HERE')
      updateEmail(userEmail);
      router.push('/confirm');
      } else {
      console.log('Error while sending email', res.statusText);
      notification.open({
        message: 'Failed',
        description: 'Error while sending email', 
      })
    }
    setLoading(false);
  };

  const goToHomePage = (e) => {
    e.preventDefault();
    router.push(INTERNAL_LINKS.HOME)
  }

  return (
    <Container>
      <LogoContainer>
        <img src='/images/guideshop-logo.svg' alt='logo' onClick={goToHomePage} />
      </LogoContainer>
      {loading && (
        <>
          <SpinContainer>
            <Spinner />
          </SpinContainer>
          <Overlay></Overlay>
        </>
      )}
      <Form onSubmit={handleSubmit}>
        <FormTitle>Sign in with email</FormTitle>
        <Input
          placeholder='Email Address'
          type='email'
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <Button>Continue</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 37px;
  align-items: center;
  color: #1e2e4f;
  position: relative;
`;

const LogoContainer = styled.div`
  margin-bottom: 40px;
  width: 100%;
  margin-left: 90px;
  margin-bottom: 150px;
  height: 25px;

  img {
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const Form = styled.form`
  margin: 0;
  width: 670px;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.09);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-bottom: 68px;
`;

const FormTitle = styled.h2`
  color: #1e2e4f;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  margin: 6px 0 41px;
`;

const Input = styled.input`
  background: #f4f9ff;
  border-radius: 60px;
  border: none;
  outline: none;
  width: 415px;
  padding: 15px 20px;
  color: #44516f;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 24px;
`;

const Button = styled.button`
  padding: 14px 63px;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  box-sizing: border-box;
  border-radius: 60px;
  background: #2fc3ff;
  color: #fff;
  width: 420px;
  text-align: center;
  margin-bottom: 76px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #2fc3ff;
  }
`;

const SpinContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.6;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`;