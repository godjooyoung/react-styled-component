import React, { useState } from 'react';
import * as commonSt from './StyledComponents'
import Button from './Button'
import ConfirmModal from './ConfirmModal';
import AlertModal from './AlertModal';

function CustomModal() {
    /** 호출하는 모달의 종류를 나타나내는 state
     * confirm 
     * alert
     * 초기값 : 어떤 모달도 호출하지 않는다. 
     */
    const [callModal, setCallModal] = useState()

    // 버튼에 따라 가지고 오는 컴포넌트를 달리 한다.
    const callModalFunc = (e) => {
        if(e.target.innerText=='컨펌모달열기'){
            setCallModal('confirm')
        }else{
            setCallModal('alert')
        }
    }

    // 닫기 버튼이나 외부를 누를 경우 닫아주는 함수
    const closeModalFunc = () =>{
        setCallModal('')
    }

    return (
        <commonSt.BtnBox>
            <commonSt.Title>모달연습</commonSt.Title>
            <commonSt.BtnBoxHAlign>
                <Button id="confirm" size="s" type="primary" onClick={callModalFunc}>컨펌모달열기</Button>
                <Button size="l" type="negative" onClick={callModalFunc}>얼럿모달열기</Button>
            </commonSt.BtnBoxHAlign>
            {(callModal==='confirm'&&callModal!=='')?<ConfirmModal lagacyFun={closeModalFunc}/>:(callModal==='alert'&&callModal!==''?<AlertModal lagacyFun={closeModalFunc}/>:<></>)}
        </commonSt.BtnBox>
    );
}

export default CustomModal;