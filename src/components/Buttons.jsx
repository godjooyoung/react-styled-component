import React from 'react';
import Button from './Button';
import * as commonSt from './StyledComponents'

function Buttons() {
    const btnAlertEventHandler = (e)=>{
        alert("버튼을 만들어보세요.")
    }
    const btnPromtEventHandler = (e)=>{
        let promptStr = prompt('어렵나요?')
        console.log("prompt input",promptStr)

    }
    return (
        <commonSt.StBtnBox>
            <commonSt.Title>Button</commonSt.Title>
            <commonSt.StBtnBoxHAlign>
                <Button size="l" type="primary" hasIcon="arrow" onClick={btnAlertEventHandler}>Large Primary Button</Button>
                <Button size="m" type="primary">Medium</Button>
                <Button size="s" type="primary">small</Button>
            </commonSt.StBtnBoxHAlign>
            <commonSt.StBtnBoxHAlign>
                <Button size="l" type="negative" hasIcon="alarm" onClick={btnPromtEventHandler}>Large Negative Button</Button>
                <Button size="m" type="negative">Medium</Button>
                <Button size="s" type="negative">small</Button>
            </commonSt.StBtnBoxHAlign>
        </commonSt.StBtnBox>
    );
}

// 공통스타일로 분리하여서 가져옴. 

// const StBtnBox = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
// `

// const StBtnBoxHAlign = styled.div`
//     display: flex;
//     flex-direction: row;
//     gap: 10px;
// `

export default Buttons;