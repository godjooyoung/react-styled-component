import React from 'react';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';


function Button(props) {
    return (
        <>
            {
                props.size == 'l'?<StBtnL type={props.type} onClick={props.onClick}><StContainer>{props.children}{props.hasIcon?<ButtonIcon type={props.hasIcon}/>:''}</StContainer></StBtnL> : (props.size == 'm' ? <StBtnM type={props.type} onClick={props.onClick}>{props.children}</StBtnM> : <StBtnS type={props.type} onClick={props.onClick}>{props.children}</StBtnS>)
            }
        </>
    );
}

// 버튼 스타일
const StBtnL = styled.button`
  height : 50px;
  width : 200px;
  border-radius: 8px;
  border: 3px solid ${(props) => {
        return props.type == "primary" ? '#FFF2F2' : '#E5E0FF'
    }};
  background-color: rgb(255, 255, 255);
  color : ${(props) => { return props.type == 'negative' ? '#98B1F3' : '#5E72BF' }};
  font-weight: 900;
  cursor: pointer;
  &:active{
    border: 3px solid ${(props) => {
        return props.type == "primary" ? '#EBDEDE' : '#D1CCEB'
    }};
    background-color: rgb(0,0,0,0.1)
  }
`

const StBtnM = styled.button`
  height : 45px;
  width : 130px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => {
        return props.type == "primary" ? '#FFF2F2' : '#E5E0FF'
    }};
  color : ${(props) => { return props.type == 'negative' ? '#98B1F3' : '#5E72BF' }};
  cursor: pointer;
  &:active{
    background-color: ${(props)=>{
        return props.type == 'primary' ? '#EBDEDE' : '#D1CCEB'
    }}
  }
`

const StBtnS = styled.button`
  height : 40px;
  width : 100px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => {
        return props.type == "primary" ? '#FFF2F2' : '#E5E0FF'

    }};
  color : ${(props) => { return props.type == 'negative' ? '#98B1F3' : '#5E72BF' }};
  cursor: pointer;
  &:active{
    background-color: ${(props)=>{
        return props.type == 'primary' ? '#EBDEDE' : '#D1CCEB'
    }}
  }
`

// 버튼 내부 텍스트 및 아이콘 정렬
const StContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
`

export default Button;