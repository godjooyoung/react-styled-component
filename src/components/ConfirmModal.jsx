import React from 'react';
import Button from './Button'
import styled from 'styled-components';

function ConfirmModal(props) {

    return (
        <>
            <ModalLayout>
                <ModalContent>외부영역을 눌러도 안닫힘. 닫기만 눌러야함</ModalContent>
                <BtnAlign>
                <Button size="s" type="negative" onClick={props.lagacyFun}>닫기</Button><Button size="s" type="primary">확인</Button>
                </BtnAlign>
            </ModalLayout>
            <ModalOuter></ModalOuter>
        </>
    );
}

const ModalLayout = styled.div`
    width: 400px;
    height: 200px;
    border-radius: 3px;
    background-color: white;
    z-index: 2;
    margin : 0 auto;
    position: relative;
    top: -400px;
`
const ModalOuter = styled.div`
    display: flex;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background-color: rgb(0,0,0, 0.7);
`
const ModalContent = styled.div`
    margin: 5%;
`

const BtnAlign = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 20px;
    gap: 5px;
    align-items: end;
    height: 65%;
`


export default ConfirmModal;