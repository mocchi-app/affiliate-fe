import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

import DetailsModal from 'components/DetailsModal';

const Card = ({ name, description, price, img }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    // <Link href={{ pathname: `/gift/${gift.slug}` }}>
    <GiftCard>
      <ImgContainer imageUrl={img}>
        {/* <img src={imageUrl} alt={article.slug} /> */}
        <Overlay className='overlay'>
          <DetailsLink onClick={() => setDetailsOpen(true)}>
            <img src='/images/search.png' alt='details' />
            Products Details
          </DetailsLink>
          <AddToList>
            <img src='/images/heart.png' alt='add to list' />
            Add to List
          </AddToList>
        </Overlay>
      </ImgContainer>
      <CardMeta>
        <TopSection>
          <FlexContainer>
            <GiftName>{name || ''}</GiftName>
            {price && <Price>{price}</Price>}
          </FlexContainer>
          {description && (
            <Description>
              <>{description}</>
            </Description>
          )}
        </TopSection>
      </CardMeta>
    </GiftCard>
    
    // </Link>
  );
};

const DetailsLink = styled.a`
  color: #1e2e4f;
  font-size: 18px;
  font-family: 'Noto Sans TC', sans-serif;
  padding: 16px 25px;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 60px;
  font-weight: bold;
  width: 236px;
  margin-bottom: 16px;
  text-align: center;

  img {
    width: 16px;
    height: 16px;
    margin-right: 18px;
  }
`;

const AddToList = styled(DetailsLink)`
  background: none;
  border: 2px solid #fff;
  color: #fff;

  img {
    width: 20px;
    height: 18px;
    margin-right: 18px;
  }
`;

const Overlay = styled.div`
  background: linear-gradient(180deg, #949494 0%, rgba(0, 0, 0, 0) 100%);
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-family: 'Noto Sans TC', sans-serif;
  color: #44516f;
  margin-top: 5px;
  margin-bottom: 50px;
`;

const TopSection = styled.div`
  margin-bottom: 14px;
  cursor: pointer;
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

const GiftCard = styled.div`
  width: 300px;
  border: 1px solid #e7e6e6;
  border-radius: 0px 0px 8px 8px;
  margin-bottom: 30px;

  &:hover {
    .overlay {
      display: flex;
    }
  }
`;

const ImgContainer = styled.div`
  height: 300px;
  border-bottom: 1px solid #e7e6e6;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const CardMeta = styled.div`
  padding: 25px;
`;

const GiftName = styled.div`
  color: #1e2e4f;
  text-transform: capitalize;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
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
