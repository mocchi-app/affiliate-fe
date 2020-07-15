import styled from 'styled-components';
import EarningCard from 'components/EarningCard';

const Earnings = () => {
  return (
    <>
      <Title>My Earnings</Title>
      <Price>{"$6, 959"}</Price>
      <CardsContainer>
        {Array.from(Array(9)).map((gift, i) => {
          return (
            <EarningCard
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

const Title = styled.h1`
  color: #1e2e4f;
  text-align: center;
  font-size: 34px;
  line-height: 62px;
  font-family: 'Noto Sans TC', sans-serif;
  margin: 126px 0 23px;
  font-weight: bold;
`;

const Price = styled.h2`
  text-align: center;
  margin: 0;
`;

const CardsContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 96px auto 120px auto;
`;

export default Earnings;
