import styled from 'styled-components';
import Card from 'components/card';

const gifts = new Array(7);

const Dashboard = () => {
  return (
    <>
      <Title>Add Recommendations</Title>
      <SearchContainer>
        <input type='text' placeholder='Search...' />
        <img src='/images/search-white.png' alt='search' />
      </SearchContainer>
      <CardsContainer>
        {gifts.map((gift, i) => {
          return <Card gift={gift} key={i} />;
        })}
      </CardsContainer>
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
    background: #3FC1C9;
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
  font-size: 36px;
  line-height: 49px;
  font-family: 'Noto Sans TC', sans-serif;
  margin: 0 0 23px;
  font-weight: bold;
`;

const CardsContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 0 auto 120px auto;
`;

export default Dashboard;
