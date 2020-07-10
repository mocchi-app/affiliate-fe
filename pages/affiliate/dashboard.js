import styled from 'styled-components';
import Card from 'components/card';

const Dashboard = () => {
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

export default Dashboard;
