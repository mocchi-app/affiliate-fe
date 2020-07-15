import styled from 'styled-components';

export default function EarningCard() {
  return (
    <Card>
      <Owner>
        <img src='/images/avatar-owner.png' alt='user' />
        <Name>Jane Cooper</Name>
      </Owner>
      <Product>
        <ImgContainer>
          <img src="" alt=""/>
        </ImgContainer>
        <NamesContainer>
          <ProductName>Best Gifts for Men</ProductName>
          <BrandName>Brand Name</BrandName>
        </NamesContainer>
        <ProductPrice>$14</ProductPrice>
      </Product>
    </Card>
  );
}

const Product = styled.div``;
const ImgContainer = styled.div``;
const NamesContainer = styled.div``;
const ProductName = styled.div``;
const BrandName = styled.div``;
const ProductPrice = styled.div``;

const Name = styled.span`
  color: #1e2e4f;
  font-size: 14px;
  line-height: 19px;
  font-family: 'Noto Sans TC', sans-serif;
`;

const Owner = styled.div`
  padding: 24px 24px 20px;
  border-bottom: 1px solid #e7e6e6;
  display: flex;
  align-items: center;
  margin-right: 13px;
`;

const Card = styled.div`
  width: 330px;
  border: 1px solid #e7e6e6;
  border-radius: 8px;
  margin-bottom: 23px;
`;
