import styled from "styled-components";


export const StTitle = styled.h2`
font-size: 2em;
margin-block-start: 0.67em;
margin-block-end: 0.67em;
margin-inline-start: 0px;
margin-inline-end: 0px;
font-weight: bold;
`

export const StModalOverlay = styled.div`
width:100vw;
height:100vh;
top:0;
left:0;
right:0;
bottom:0;
position:fixed;
background-color:rgba(49,49,49,0.8);
`

export const StModalContent = styled.div`
position:relative;
top:40%;
left:50%;
transform:translate(-50%,-50%);
background-color: #f1f1f1;
padding: 14px;
border-radius:3px;
max-width:600px;
min-width:300px;
height:200px;
width:400px;
`
export const StModalButton = styled.div`
position:absolute;
bottom:20%;
left:45%;
display:flex;
gap:10px;
`

export const StContainer = styled.div`
display: flex;
gap: 7px;
`

export const StContent = styled.p`
padding:20px;
`
export const StRoundButton = styled.button`
border:1px solid black;
background-color:rgb(220, 220, 220);
border-radius:50%;
width:40px;
height: 40px;
position:absolute;
top: 10%;
right:10%;
`

/** Buttons 컴포넌트 적용 style */
export const StBtnBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const StBtnBoxHAlign = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

/** Button 컴포넌트 적용 style */
// 버튼 스타일
export const StBtnL = styled.button`
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

export const StBtnM = styled.button`
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

export const StBtnS = styled.button`
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
export const StTtIcnContain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
`