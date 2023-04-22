import React from 'react';
import ButtonIcon from './ButtonIcon';
import * as commonSt from './StyledComponents'

function Button(props) {
    return (
        <>
            {
                props.size === 'l'?<commonSt.StBtnL type={props.type} onClick={props.onClick}><commonSt.StTtIcnContain>{props.children}{props.hasIcon?<ButtonIcon type={props.hasIcon}/>:''}</commonSt.StTtIcnContain></commonSt.StBtnL> : (props.size === 'm' ? <commonSt.StBtnM type={props.type} onClick={props.onClick}>{props.children}</commonSt.StBtnM> : <commonSt.StBtnS type={props.type} onClick={props.onClick}>{props.children}</commonSt.StBtnS>)
            }
        </>
    );
}

// 공통스타일 분리후 적용
// 버튼 스타일
// const StBtnL = styled.button`
//   height : 50px;
//   width : 200px;
//   border-radius: 8px;
//   border: 3px solid ${(props) => {
//         return props.type == "primary" ? '#FFF2F2' : '#E5E0FF'
//     }};
//   background-color: rgb(255, 255, 255);
//   color : ${(props) => { return props.type == 'negative' ? '#98B1F3' : '#5E72BF' }};
//   font-weight: 900;
//   cursor: pointer;
//   &:active{
//     border: 3px solid ${(props) => {
//         return props.type == "primary" ? '#EBDEDE' : '#D1CCEB'
//     }};
//     background-color: rgb(0,0,0,0.1)
//   }
// `

// const StBtnM = styled.button`
//   height : 45px;
//   width : 130px;
//   border-radius: 8px;
//   border: none;
//   background-color: ${(props) => {
//         return props.type == "primary" ? '#FFF2F2' : '#E5E0FF'
//     }};
//   color : ${(props) => { return props.type == 'negative' ? '#98B1F3' : '#5E72BF' }};
//   cursor: pointer;
//   &:active{
//     background-color: ${(props)=>{
//         return props.type == 'primary' ? '#EBDEDE' : '#D1CCEB'
//     }}
//   }
// `

// const StBtnS = styled.button`
//   height : 40px;
//   width : 100px;
//   border-radius: 8px;
//   border: none;
//   background-color: ${(props) => {
//         return props.type == "primary" ? '#FFF2F2' : '#E5E0FF'

//     }};
//   color : ${(props) => { return props.type == 'negative' ? '#98B1F3' : '#5E72BF' }};
//   cursor: pointer;
//   &:active{
//     background-color: ${(props)=>{
//         return props.type == 'primary' ? '#EBDEDE' : '#D1CCEB'
//     }}
//   }
// `

// // 버튼 내부 텍스트 및 아이콘 정렬
// const StTtIcnContain = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 7px;
// `

export default Button;