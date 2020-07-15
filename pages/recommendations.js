import styled from 'styled-components';
import Card from 'components/card';

import DetailsModal from 'components/DetailsModal';
import AddProductModal from 'components/AddProductModal';

const MyRecommendations = () => {
  return (
    <>
      <Title>My Recommendations</Title>
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
    </>
  );
};

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

export default MyRecommendations;
