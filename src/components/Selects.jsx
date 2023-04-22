import React, { useState, useRef } from 'react';
import * as commonSt from './StyledComponents'

function Selects() {
    const selectedBox = useRef(); // 외부 선택시 처리
    const [isOpen, setIsOpen] = useState(false)
    const [currentOpt, setCurrentOpt] = useState('리액트')
    let optArr = ['리액트', '자바', '스프링', '노드']

    const BtnDropMenuOpen = (e) => {
        setIsOpen(!isOpen)
    }
    const BtnDropMenuClose = (e) => {
        if (e.target !== selectedBox.current && isOpen) {
            setIsOpen(!isOpen)
        }
    }
    const OptClick = (e) => {
        setCurrentOpt(e)
        if(isOpen){
            setIsOpen(!isOpen)
        }
    }


    return (
        <>
            <commonSt.SelectSection>
                <commonSt.Title>Select</commonSt.Title>
                <commonSt.ContianSelecters>
                    <commonSt.BtnSelecter onClick={BtnDropMenuOpen}><commonSt.BtnInnerElement>{currentOpt}</commonSt.BtnInnerElement><commonSt.BtnInnerElement>▾</commonSt.BtnInnerElement></commonSt.BtnSelecter>
                </commonSt.ContianSelecters>
            </commonSt.SelectSection>
            <>
            <commonSt.OutLayOut onClick={BtnDropMenuClose} isDropMenuOpen={isOpen}></commonSt.OutLayOut>
            <commonSt.OptSelecter isDropMenuOpen={isOpen} ref={selectedBox}>
                {optArr.map((e) => {
                    return <commonSt.OptElement onClick={() => OptClick(e)}><commonSt.OptTxt>{e}</commonSt.OptTxt></commonSt.OptElement>
                })}
            </commonSt.OptSelecter>
            </>
            
        </>
    );

}

export default Selects;

