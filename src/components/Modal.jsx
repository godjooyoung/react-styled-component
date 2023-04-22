import React, { useRef, useState } from 'react'
import { StCloseModalButton, StContent, StModalButton, StModalContent, StModalOverlay, StRoundButton, StTitle } from './StyledComponents'

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
    <button name='modal' value onClick={toggleModal}>open modal</button>
    <button onClick={toggleModal1}>open modal</button>

    {modal && 
    <StModalOverlay>
      <StModalContent>
        <StContent>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </StContent>
        <StModalButton>
          <StCloseModalButton 
        backgroundColor='#E5E0FF' 
        color='#7286D3'
        onClick={toggleModal} >닫기
          </StCloseModalButton>
          <StCloseModalButton 
        backgroundColor='#FFF2F2' 
        color='#8EA7E9'>확인
          </StCloseModalButton>
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