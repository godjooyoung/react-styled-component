import React, { useRef, useState } from 'react'
import { StCloseModalButton, StContainer, StContent, StModalButton, StModalContent, StModalOverlay, StRoundButton, StTitle } from './StyledComponents'
import Button from './Button';

function Modal() {
  


  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const outSection = useRef();

  const toggleModal = ()=>{
    setModal(!modal)
  }

  const toggleModal1 = ()=>{
    setModal1(!modal1)
  }
  
  const outSectionClick = (e)=>{
    if(outSection.current === e.target){
      setModal1(!modal1)
    }
  }

  return (
    <>
    <StTitle>Modal</StTitle>
    <StContainer>
    <Button type="primary" size="m" name='modal' value onClick={toggleModal}>open modal</Button>
    <Button type="negative" size="l" onClick={toggleModal1}>open modal</Button>
    </StContainer>
    {modal && 
    <StModalOverlay>
      <StModalContent>
        <StContent>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </StContent>
        <StModalButton>
          <Button 
          type= "negative" size="s" 
          onClick={toggleModal} >닫기
          </Button>
          <Button type= "primary" size="s">확인
          </Button>
        </StModalButton>
      </StModalContent>
    </StModalOverlay>}
    {modal1 && 
    <StModalOverlay ref={outSection} onClick={outSectionClick}>
      <StModalContent>
        <StContent >
        닫기 버튼 1개가 있고,<br/>
        외부 영역을 누르면 모달이 닫혀요.</StContent>
        <StRoundButton
        onClick={toggleModal1}>x</StRoundButton>
      </StModalContent>
    </StModalOverlay>}
    </>
  )
}

export default Modal