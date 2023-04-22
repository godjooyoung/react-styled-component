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
        <commonSt.BtnBox>
            <commonSt.Title>Button</commonSt.Title>
            <commonSt.BtnBoxHAlign>
                <Button size="l" type="primary" hasIcon="arrow" onClick={btnAlertEventHandler}>Large Primary Button</Button>
                <Button size="m" type="primary">Medium</Button>
                <Button size="s" type="primary">small</Button>
            </commonSt.BtnBoxHAlign>
            <commonSt.BtnBoxHAlign>
                <Button size="l" type="negative" hasIcon="alarm" onClick={btnPromtEventHandler}>Large Negative Button</Button>
                <Button size="m" type="negative">Medium</Button>
                <Button size="s" type="negative">small</Button>
            </commonSt.BtnBoxHAlign>
        </commonSt.BtnBox>
    );
}

export default Buttons;