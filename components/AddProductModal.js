import { useContext } from 'react';
import styled from 'styled-components';

import { ModalsContext } from '../providers/ModalsProvider';

export default function AddProductModal() {
  const { addProductModalIsOpen, setAddProductModal } = useContext(
    ModalsContext
  );

  return (
    <BgModal
      isOpen={addProductModalIsOpen}
      // onClick={() => setAddProductModal(false)}
    >
      <ModalContent>
        <Header>
          <Box>
            <ImgContainer>
              <img src='/images/spice-set.png' alt='product' />
            </ImgContainer>
            <SubTitle>Spice Set</SubTitle>
          </Box>
          <Title>Add Recommendation</Title>
        </Header>
        <div>
          <Question>Why do you love it?</Question>
          <TextArea placeholder='Minimum of 120 characters' rows='4' />
        </div>
        <div>
          <Label htmlFor='video' />
          <InputFile type='file' id='video' accept='video/*' className='file' />
        </div>
        <div>
          <Select>
            <option defaultValue>+ Add Contacts</option>
            <option value=''>Name 1</option>
            <option value=''>Name 2</option>
            <option value=''>Name 3</option>
            <option value=''>Name 4</option>
          </Select>
        </div>
        <Buttons>
          <Button className='cancel' onClick={() => setAddProductModal(false)}>
            Cancel
          </Button>
          <Button className='save'>Add+</Button>
        </Buttons>
        <Close onClick={() => setAddProductModal(false)} />
      </ModalContent>
    </BgModal>
  );
}

const Select = styled.select`
  width: 100%;
  margin-top: 14px;
  border: none;
  outline: none;
  border-radius: 60px;
  padding: 15px 24px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 500;
  font-size: 14px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  color: #44516f;
  background: url('/images/polygon.png') center right no-repeat #f4f9ff;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  height: 118px;
  border: 4px dashed #e4eaf5;
  position: relative;
  border-radius: 16px;
  cursor: pointer;

  &:after {
    content: url('/images/camera.png');
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
`;

const InputFile = styled.input`
  display: none;
`;

const Question = styled.h4`
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #44516f;
  margin: 0 0 8px;
`;

const TextArea = styled.textarea`
  background: #f4f9ff;
  border: none;
  outline: none;
  padding: 15px 20px;
  color: #44516f;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 15px;
  width: 100%;
  resize: none;
  border-radius: 16px;

  &.size-100 {
    width: 100%;
  }
`;

const Box = styled.div`
  display: inline-block;
`;

const ImgContainer = styled.div`
  width: 76px;
  height: 76px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Header = styled.div`
  display: flex;
`;

const SubTitle = styled.h3`
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #1e2e4f;
  margin: 0 0 36px;
`;

const Close = styled.div`
  position: absolute;
  right: 34px;
  top: 40px;
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

const Title = styled.h1`
  color: #1e2e4f;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Noto Sans TC', sans-serif;
  margin: 0 0 8px 40px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;

const ModalContent = styled.div`
  width: 670px;
  height: 600px;
  background: #fff;
  padding: 30px 43px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BgModal = styled.div`
  width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
`;
