import React from 'react';
import Button from './Button';
import styled from 'styled-components';

function Buttons() {
    const btnAlertEventHandler = (e)=>{
        alert("버튼을 만들어보세요.")
    }
    const btnPromtEventHandler = (e)=>{
        
    }
    return (
        <StBtnBox>
            <h1>Button</h1>
            <StBtnBoxHAlign>
                <Button size="l" type="primary" hasIcon="arrow" onClick={btnAlertEventHandler}>Large Primary Button</Button>
                <Button size="m" type="primary">Medium</Button>
                <Button size="s" type="primary">small</Button>
            </StBtnBoxHAlign>
            <StBtnBoxHAlign>
                <Button size="l" type="negative" hasIcon="alarm">Large Negative Button</Button>
                <Button size="m" type="negative">Medium</Button>
                <Button size="s" type="negative">small</Button>
            </StBtnBoxHAlign>
        </StBtnBox>
    );
}

const StBtnBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StBtnBoxHAlign = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export default Buttons;