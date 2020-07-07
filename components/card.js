import styled from 'styled-components';
import Link from 'next/link';

const Card = ({ article }) => {
  const imageUrl = article.image ? article.image.url : null;
  const { price, brandName, description, btn, title, id, owner } = article;

  return (
    <Link href={{ pathname: `/articles/${article.slug}` }}>
      <ArticleCard>
        <ImgContainer imageUrl={imageUrl}>
          {/* <img src={imageUrl} alt={article.slug} /> */}
        </ImgContainer>
        <CardMeta>
          <TopSection>
            <FlexContainer>
              <GiftName>{title || ' '}</GiftName>
              {price && <Price>{price}</Price>}
            </FlexContainer>
            {brandName && <Brand>{brandName}</Brand>}
            {description && (
              <Description>
                <>
                  {description} <strong>Read More</strong>
                </>
              </Description>
            )}
          </TopSection>
          <Container>
            <OwnerInfo>
              <img src='/images/giftOwnerIcon.png' alt='gift' />
              <OwnerName>Jane Cooper</OwnerName>
            </OwnerInfo>

            <ViewListBtn>View List</ViewListBtn>
          </Container>
        </CardMeta>
      </ArticleCard>
    </Link>
  );
};

const Description = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-family: 'Noto Sans TC', sans-serif;
  color: #44516f;
  margin-top: 12px;
`;

const TopSection = styled.div`
  margin-bottom: 14px;
`;

const Brand = styled.div`
  color: #44516f;
  text-transform: capitalize;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  margin-top: 2px;
`;

const Price = styled.span`
  color: #1e2e4f;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ArticleCard = styled.div`
  width: 300px;
  border: 1px solid #e7e6e6;
  border-radius: 0px 0px 8px 8px;
  margin-bottom: 30px;
`;

const ImgContainer = styled.div`
  /* width: 300px; */
  height: 300px;
  border-bottom: 1px solid #e7e6e6;
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const CardMeta = styled.div`
  padding: 25px;
  /* width: 300px; */
`;

const GiftName = styled.div`
  color: #1e2e4f;
  text-transform: capitalize;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OwnerInfo = styled.div`
  display: flex;
  align-items: center;
`;

const OwnerName = styled.div`
  margin-left: 13px;
  font-size: 14px;
  line-height: 19px;
  font-family: 'Noto Sans TC', sans-serif;
`;

const ViewListBtn = styled.a`
  background: #42cb83;
  border-radius: 60px;
  color: #fff;
  padding: 6px 13px;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  text-transform: capitalize;
`;

export default Card;
