import React, { useRef, useState } from 'react'
import Button from './Button';
import * as commonSt from './StyledComponents'


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
    <commonSt.Title>Modal</commonSt.Title>
    <commonSt.Container>
    <Button type="primary" size="m" name='modal' value onClick={toggleModal}>open modal</Button>
    <Button type="negative" size="l" onClick={toggleModal1}>open modal</Button>
    </commonSt.Container>

    {modal && 
    <commonSt.ModalOverlay>
      <commonSt.ModalContent>
        <commonSt.Content>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </commonSt.Content>
        <commonSt.ModalButton>
          <Button 
          type= "negative" size="s" 
          onClick={toggleModal} >닫기
          </Button>
          <Button type= "primary" size="s">확인
          </Button>
        </commonSt.ModalButton>
      </commonSt.ModalContent>
    </commonSt.ModalOverlay>}

    {modal1 && 
    <commonSt.ModalOverlay ref={outSection} onClick={outSectionClick}>
      <commonSt.ModalContent>
        <commonSt.Content >
        닫기 버튼 1개가 있고,<br/>
        외부 영역을 누르면 모달이 닫혀요.</commonSt.Content>
        <commonSt.RoundButton
        onClick={toggleModal1}>x</commonSt.RoundButton>
      </commonSt.ModalContent>
    </commonSt.ModalOverlay>}
    </>
  )
}

export default Modal