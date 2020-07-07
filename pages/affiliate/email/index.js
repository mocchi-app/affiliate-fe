import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';

export default function PaymentForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const { API_AFFILIATE } = process.env;
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';

  const getToken = async (code) => {
    const res = await fetch(proxyurl + `${API_AFFILIATE}/oauth/token`, {
    // const res = await fetch('/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        otp: code,
        realm: 'email',
        username: email,
      }),
    });

    if (res.ok) {
      setLoading(false);
      const data = await res.json();
      console.log('data from token request', data);
    } else {
      setLoading(false);
      console.log('error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(proxyurl + `${API_AFFILIATE}/passwordless/start`, {
    // const res = await fetch("/passwordless/start", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        connection: 'email',
        email: email,
        send: 'code',
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log('data', data);
      const { _id = '' } = data;

      await getToken(_id);
    } else {
      setLoading(false);
      console.log('error');
    }

    setLoading(false);
    // TODO: redirect from here
    // document.location.href = signUpUrl;
  };

  return (
    <Container>
      <LogoContainer>
        <img src='/images/logo_mocchi.png' alt='logo' />
      </LogoContainer>
      {loading && <div>Loading....</div>}
      <Form onSubmit={handleSubmit}>
        <FormTitle>Sign in with email</FormTitle>
        <Input
          placeholder='Email Address'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button>Continue</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 65px;
  align-items: center;
  color: #1e2e4f;
`;

const LogoContainer = styled.div`
  margin-bottom: 40px;
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
  background: #42cb83;
  color: #fff;
  width: 420px;
  text-align: center;
  margin-bottom: 76px;
  border: none;
  outline: none;

  &:hover {
    background: #3cbc79;
  }
`;
