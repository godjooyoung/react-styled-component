import React from 'react';
import styled from 'styled-components';

function AlertModal(props) {
    return (
        <>
            <ModalLayout>
                <CloseBtn onClick={props.lagacyFun}>X</CloseBtn>
                <ModalContent>얼럿모달 엑스 누르거나 외부 누르면 닫힘</ModalContent>
            </ModalLayout>
            <ModalOuter onClick={props.lagacyFun}></ModalOuter>

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
const CloseBtn = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: lightgray;
    border : 1px solid rgb(0,0,0);
    cursor: pointer;
    position: relative;
    left: 90%;
    top: 5%;
`

export default AlertModal;