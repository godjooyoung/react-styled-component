import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import * as commonSt from './StyledComponents'



function Selects(props) {
    const selectedBox = useRef();
    const [isOpen, setIsOpen] = useState(false)
    const [currentOpt, setCurrentOpt] = useState('리액트')

    const BtnDropMenuOpen = (e)=>{
        setIsOpen(!isOpen)
    }

    const BtnDropMenuClose = (e)=>{
        if(e.target !== selectedBox.current){
            setIsOpen(!isOpen)
         }
    }
    
    const OptClick = (e)=>{
        setCurrentOpt(e.currentTarget.innerText)
    }

    return (
        
        <div onClick={BtnDropMenuClose} style={{position:'relative',zIndex:0}}>
        <SelectSection>
            <commonSt.StTitle>Select</commonSt.StTitle>
            <ContianSelecters2>
                <BtnSelecter onClick={BtnDropMenuOpen}><BtnInnerElement>{currentOpt}</BtnInnerElement><BtnInnerElement>▾</BtnInnerElement></BtnSelecter>
            </ContianSelecters2>
        </SelectSection>
        <OptSelecter isDropMenuOpen={isOpen} ref={selectedBox}>
            <OptElement onClick={OptClick}>리액트</OptElement>
            <OptElement onClick={OptClick}>자바</OptElement>
            <OptElement onClick={OptClick}>스프링</OptElement>
            <OptElement onClick={OptClick}>노드</OptElement>
        </OptSelecter>
        </div>
        
    );

}


const SelectSection = styled.div`
    border: 3px solid rgb(221, 221, 221);
    height: 200px;
    overflow: hidden;
    position: relative;
    
    margin-top: 50px;
`

const ContianSelecters2 = styled.div`
    position: relative;
    display: block;
` 
const BtnSelecter = styled.button`
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 300px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    align-items: center;
    justify-content: space-between;
    gap: 7px;
    display: flex;
    
`
const BtnInnerElement = styled.div`
    margin : 10px;
`

/**옵션 */
const OptSelecter = styled.div`
    border: 1px solid rgb(221, 221, 221);
    height: 160px;
    width: 300px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    display: flex;
    flex-direction : column;
    justify-content: space-around;
    position: relative;
    top: -80px;
    display : ${(props) => { return props.isDropMenuOpen? 'flex' : 'none' }};
`

const OptElement  = styled.div`

    height: 100%;
    display: flex;
    align-items: center;
    &:hover{
        background-color: #CCCCCC;
        border-radius: 12px;
    };
`

const OptTxt  = styled.p`
    margin : 10px;
`
export default Selects;

