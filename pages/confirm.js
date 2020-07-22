import { useRouter } from "next/router";
import { useState, useContext } from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

import { UserContext } from "../providers/UserProvider";

export default function ConfirmForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const { userEmail, updateUserToken } = useContext(UserContext);

  console.log("EMAIL:", userEmail);

  const checkMe = async (token) => {
    const res = await fetch("/api/v1/influencer/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log(data, "checkMe");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userEmail,
        otp: code,
        realm: "email",
      }),
    });

    if (res.ok) {
      const data = await res.json();
      const { id_token } = data;
      // TODO: check if need to save token for a future
      // if so - check the correct way to refresh it / implement Redux persist
      updateUserToken(id_token);
      await checkMe(id_token);
      setCode("");
      router.push("/onboarding");
    } else {
      setLoading(false);
      console.log("error while providing Auth0 code confirm");
    }
  };

  return (
    <Container>
      <LogoContainer>
        <img src="/images/matchjet_logo.png" alt="logo" />
      </LogoContainer>

      {loading && <div>Loading....</div>}

      <Form onSubmit={handleSubmit}>
        <FormTitle>Verify your email address</FormTitle>
        <SubTitle>
          To complete your profile and start using Matchjet, you’ll need to
          verify your email address
        </SubTitle>
        <Input
          placeholder="Paste your code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button>Verify</Button>
      </Form>
    </Container>
  );
}

const SubTitle = styled.p`
  font-size: 18px;
  font-family: "Noto Sans TC", sans-serif;
  text-align: center;
  color: #1e2e4f;
  width: 80%;
  margin: 0 0 45px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 21px;
  align-items: center;
  color: #1e2e4f;
`;

const LogoContainer = styled.div`
  width: 100%;
  margin-left: 90px;
  margin-bottom: 150px;
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
  margin-bottom: 100px;
`;

const FormTitle = styled.h2`
  color: #1e2e4f;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  margin: 6px 0 37px;
`;

const Input = styled.input`
  background: #f4f9ff;
  border-radius: 60px;
  border: none;
  outline: none;
  width: 415px;
  padding: 15px 20px;
  color: #44516f;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 24px;
`;

const Button = styled.button`
  padding: 14px 63px;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  box-sizing: border-box;
  border-radius: 60px;
  background: #fc5185;
  color: #fff;
  width: 420px;
  text-align: center;
  margin-bottom: 76px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #db3165;
  }
`;