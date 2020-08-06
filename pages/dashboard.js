import styled from 'styled-components';
import { useEffect, useContext, useState } from 'react';
import Card from 'components/card';
import fetch from "isomorphic-unfetch";

import Spinner from 'components/spinner';
import { UserContext } from 'providers/UserProvider';
import DetailsModal from 'components/DetailsModal';
import AddProductModal from 'components/AddProductModal';

const Dashboard = () => {
  const { userToken, updateUserImage } = useContext(UserContext);
  const [loading, setLoading] = useState(false)

  const getProfileImage = async () => {
    setLoading(true)
    const res = await fetch(`${process.env.API_AFFILIATE}/api/v1/influencer/image`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (res.ok) {
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob)
      updateUserImage(url)
    }
    setLoading(false)
  }

  useEffect(() => {
    getProfileImage();
  }, [])

  return (
    <>
      <Title>Add Recommendations</Title>
      <SearchContainer>
        <input type='text' placeholder='Search...' />
        <img src='/images/search-white.png' alt='search' />
      </SearchContainer>
      <CardsContainer>
        {Array.from(Array(9)).map((gift, i) => {
          return (
            <Card
              name='Unicorn Earrings'
              description='Birthday Gift for Daughter and Teen Girl'
              price='14$'
              img={'/images/earnings.jpg'}
              key={i}
            />
          );
        })}
      </CardsContainer>
      <DetailsModal />
      <AddProductModal />
      {loading && (
        <>
          <SpinContainer>
            <Spinner />
          </SpinContainer>
          <Overlay></Overlay>
        </>
      )}
    </>
  );
};

const SearchContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  position: relative;

  input {
    width: 100%;
    background: #f4f5f7;
    color: #979eac;
    padding: 20px 80px 20px 27px;
    border-radius: 60px;
    border: none;
    outline: none;
    font-size: 18px;
    line-height: 24px;
    font-family: 'Noto Sans TC', sans-serif;

    &::placeholder {
      opacity: 1;
      color: #979eac;
      font-size: 18px;
    }
  }

  img {
    background: #3fc1c9;
    padding: 10px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    cursor: pointer;
  }
`;

const Title = styled.h1`
  color: #1e2e4f;
  text-align: center;
  font-size: 34px;
  line-height: 62px;
  font-family: 'Noto Sans TC', sans-serif;
  margin: 126px 0 40px;
  font-weight: bold;
`;

const CardsContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 110px auto 120px auto;
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

export default Dashboard;
