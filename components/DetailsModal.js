import { useContext } from 'react';
import styled from 'styled-components';

import { ModalsContext } from '../providers/ModalsProvider';

export default function DetailsModal() {
  const { detailsModalIsOpen, setDetailsModal } = useContext(ModalsContext);

  return (
    <BgModal isOpen={detailsModalIsOpen} onClick={() => setDetailsModal(false)}>
      <ModalContent>
        <ImgContainer>
          <img src='/images/product-img.png' alt='' />
        </ImgContainer>
        <Description>
          <Title>Product name</Title>
          <SubTitle>Brand Name</SubTitle>
          <Price>$250.00</Price>
          <AboutProduct>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.
          </AboutProduct>
          <Buttons>
            <Button className='cancel' onClick={() => setDetailsModal(false)}>
              Cancel
            </Button>
            <Button className='save'>Add+</Button>
          </Buttons>
          <Close onClick={() => setDetailsModal(false)} />
        </Description>
      </ModalContent>
    </BgModal>
  );
}

const Close = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 14px;
  height: 14px;
  cursor: pointer;
  background: url('/images/close-btn.png') center center no-repeat;
`;

const Button = styled.a`
  text-align: center;
  width: auto;
  background: #fc5185;
  color: #fff;
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  padding: 9px 36px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
  }

  &.cancel {
    background: #fff;
    color: #979eac;
    border: 1px solid #979eac;
    margin-right: 16px;

    &:hover {
      color: #fff;
      background: #979eac;
    }
  }

  &.save {
    &:hover {
      background: #db3165;
    }
  }
`;

const Description = styled.div`
  width: 60%;
  margin-left: 40px;
  position: relative;
`;

const Title = styled.h1`
  color: #1e2e4f;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Noto Sans TC', sans-serif;
  margin: 0 0 8px;
`;

const SubTitle = styled.h3`
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #44516f;
  margin: 0 0 12px;
`;

const Price = styled.h3`
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #fc5185;
  margin: 0 0 24px;
`;

const AboutProduct = styled.p`
  color: #1e2e4f;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 24px;
`;

const Buttons = styled.div``;

const ImgContainer = styled.div`
  width: 254px;
  height: 245px;
  overflow: hidden;
  border-radius: 8px;
`;

const ModalContent = styled.div`
  width: 670px;
  height: 350px;
  background: #fff;
  padding: 32px;
  display: flex;
  margin-top: 210px;
  /* margin-top: calc(100vh - 210px); */
`;

const BgModal = styled.div`
  width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
`;
