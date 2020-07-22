import { useState, useEffect, useContext } from "react";

import Link from "next/link";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import { UserContext } from "../../providers/UserProvider";

export default function Payment() {
  const { userToken, userEmail } = useContext(UserContext);

  console.log("userToken:", userToken);

  const getQQ = async () => {
    const res = await fetch("/api/v1/stripe/init", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      return [];
    }
  };

  useEffect(() => {
    getQQ();
  }, []);
  return (
    <>
      <LogoContainer>
        <img src="/images/matchjet_logo.png" alt="logo" />
      </LogoContainer>
      <FormTitle>Connect Account</FormTitle>
      <Container>
        <Form>
          <Input type="text" placeholder="Card Owner" />
          <Input type="text" placeholder="Date Of Birth (MM/DD/YYYY)" />
          <CardDetails>
            <p htmlFor="card">Where should we send your money?</p>
            <Inputs>
              <input type="radio" id="debitCard" name="card" />
              <Label htmlFor="debitCard">
                <span></span>Debit Card
              </Label>

              <input type="radio" id="bankAccount" name="card" />
              <Label htmlFor="bankAccount">
                <span></span>Bank Account
              </Label>
            </Inputs>
          </CardDetails>
          <Input type="text" className="cardNumber" placeholder="Card Number" />
          <Link href={"/dashboard"}>
            <Btn>Next</Btn>
          </Link>
        </Form>
      </Container>
    </>
  );
}

const Inputs = styled.div`
  display: flex;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1e2e4f;
`;

const LogoContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 25px 0 20px;
`;

const CardDetails = styled.div`
  margin-bottom: 24px;

  p {
    color: #1e2e4f;
    font-family: "Noto Sans TC", sans-serif;
    font-size: 14px;
    line-height: 19px;
    display: block;
    margin-top: 0;
    margin-bottom: 24px;
  }

  input {
    display: none;

    &:checked + label span {
      background: url("/images/radio.png") center center no-repeat;
    }
  }

  label {
    font-family: "Noto Sans TC", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #3fc1c9;
    margin-right: 35px;
    cursor: pointer;

    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid #3fc1c9;
      margin-right: 10px;
      cursor: pointer;
    }
  }
`;

const Form = styled.form`
  margin: 0;
  width: 400px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04),
    0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding: 38px 32px 42px;
`;

const FormTitle = styled.h2`
  color: #1e2e4f;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 62px;
  margin: 50px 0 25px;
  text-align: center;
`;

const Input = styled.input`
  background: #f4f9ff;
  border-radius: 8px;
  border: none;
  outline: none;
  width: 100%;
  padding: 15px 20px;
  color: #267dff;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 24px;
  color: #3fc1c9;
  font-weight: 500;

  &.cardNumber {
    background-image: url("/images/visa.png");
    background-repeat: no-repeat;
    background-position: center right;
    color: #44516f;
  }
`;

const Btn = styled.a`
  padding: 14px 63px;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  box-sizing: border-box;
  border-radius: 76px;
  background: #fc5185;
  color: #fff;
  width: 100%;
  text-align: center;
  display: block;

  &:hover {
    background: #db3165;
  }
`;
