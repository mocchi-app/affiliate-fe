import styled from 'styled-components';

export default function DetailsModal() {
  return (
    <BgModal>
      <ModalContent></ModalContent>
    </BgModal>
  )
}

const ModalContent = styled.div`
  /* width: ; */
`;


const BgModal = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .7;
  position: absolute;
  top: 0;
  left: 0;
`;