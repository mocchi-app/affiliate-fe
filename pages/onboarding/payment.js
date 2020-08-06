import { useState, useEffect, useContext } from "react";

import Link from "next/link";
import { useRouter } from 'next/router';
import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import { UserContext } from "../../providers/UserProvider";
import { INTERNAL_LINKS } from 'enum';

export default function Payment() {
  const { userToken, userEmail } = useContext(UserContext);
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState(-1)

  const paymentInfo = [
    {
      popular: false,
      level: 'Basic',
      title: 'Free',
      desc: 'Standard listing submission, active for 30 days.',
    },
    {
      popular: true,
      level: 'Professional',
      title: '$4.95',
      desc: 'One Time Fee for one listing, highlighted in the search results.',
    },
    {
      popular: false,
      level: 'Business',
      title: '$6.95',
      desc: 'Subscription Based for unlimited listings and availability.',
    },
  ]

  const goToHomePage = (e) => {
    e.preventDefault();
    router.push(INTERNAL_LINKS.HOME)
  }

  const getQQ = async () => {
    // const res = await fetch(`${process.env.API_AFFILIATE}/api/v1/stripe/init`, {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${userToken}`,
    //   },
    // });

    // if (res.ok) {
    //   const data = await res.json();
    //   console.log(data);
    // } else {
    //   return [];
    // }
  };

  useEffect(() => {
    // getQQ();
  }, []);
  return (
    <>
      <LogoContainer>
        <img src="/images/guideshop-logo.png" alt="logo" onClick={goToHomePage} />
      </LogoContainer>
      <FormTitle>Choose a Package</FormTitle>
      <FormDesc>Explore some of the best tips from around the city from our partners and friends.</FormDesc>
      <Container>
        {paymentInfo.map((payment, index) => (
          <PaymentCard key={index} selected={index == paymentMethod} onClick={() => setPaymentMethod(index)}>
            {payment.popular && <Popular>Most Popular</Popular>}
            {!payment.popular && <div></div>}
            <PaymentCardLevel>{payment.level}</PaymentCardLevel>
            <PaymentCardTitle>{payment.title}</PaymentCardTitle>
            <PaymentCardDesc>{payment.desc}</PaymentCardDesc>
            <GetStart>Get Started</GetStart>
          </PaymentCard>
        ))}
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 5rem;
  grid-gap: 1rem;
  color: #1e2e4f;
`;

const LogoContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 25px 0 20px;
  height: 25px;

  img {
    height: 25px;
    object-fit: cover;
    cursor: pointer;
  }
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
  margin: 50px 0 0;
  text-align: center;
`;

const FormDesc = styled.h2`
  color: #1e2e4f;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-size: 12px;
  line-height: 62px;
  margin: 0 0 25px;
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
  background: #2fc3ff;
  color: #fff;
  width: 100%;
  text-align: center;
  display: block;

  &:hover {
    color: #fff;
  }
`;

const PaymentCard = styled.div`
  width: 250px;
  padding: 1rem;
  border: 2px solid #a1a1a1;
  border-radius: 1rem;
  display: grid;
  grid-template-rows: 50px auto auto 1fr auto;
  align-items: center;
  justify-self: center;
  margin-top: 2rem;
  min-height: 400px;
  cursor: pointer;
  background: white;


  &:first-child {
    justify-self: flex-end;
  }

  &:last-child {
    justify-self: flex-start;
  }

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
`

const Popular = styled.div`
  background: #2fc3ff;
  border: 2px solid #fff;
  font-size: 14px;
  border-radius: 100px;
  color: #fff;
  padding: 7px 20px;
  font-weight: bold;
  width: fit-content;
  justify-self: center;
`

const PaymentCardLevel = styled.h6`
  color: #1e2e4f;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`

const PaymentCardTitle = styled.h6`
  color: #1e2e4f;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 62px;
  text-align: center;
  margin: 0;
`

const PaymentCardDesc = styled.h6`
  color: #1e2e4f;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
`

const GetStart = styled.a`
  text-align: center;
  width: 220px;
  background: #2fc3ff;
  color: #fff;
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  padding: 8px 24px;
  width: fit-content;
  justify-self: center;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`


