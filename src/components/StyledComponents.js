import styled from "styled-components";


export const Title = styled.h2`
font-size: 2em;
margin-block-start: 0.67em;
margin-block-end: 0.67em;
margin-inline-start: 0px;
margin-inline-end: 0px;
font-weight: bold;
`

export const ModalOverlay = styled.div`
width:100vw;
height:100vh;
top:0;
left:0;
right:0;
bottom:0;
position:fixed;
background-color:rgba(49,49,49,0.8);
z-index:10;
`

export const ModalContent = styled.div`
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
z-index:9;
`
export const ModalButton = styled.div`
position:absolute;
bottom:20%;
left:45%;
display:flex;
gap:10px;
`

export const Container = styled.div`
display: flex;
gap: 7px;
`

export const Content = styled.p`
padding:20px;
`
export const RoundButton = styled.button`
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
export const BtnBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const BtnBoxHAlign = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

/** Button 컴포넌트 적용 style */
// 버튼 스타일
export const BtnL = styled.button`
  height : 50px;
  width : 200px;
  border-radius: 8px;
  border: 3px solid ${(props) => {
    return props.type === "primary" ? '#FFF2F2' : '#E5E0FF'
  }};
  background-color: rgb(255, 255, 255);
  color : ${(props) => { return props.type === 'negative' ? '#98B1F3' : '#5E72BF' }};
  font-weight: 900;
  cursor: pointer;
  &:active{
    border: 3px solid ${(props) => {
    return props.type === "primary" ? '#EBDEDE' : '#D1CCEB'
  }};
    background-color: rgb(0,0,0,0.1)
  }
`

export const BtnM = styled.button`
  height : 45px;
  width : 130px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => {
    return props.type === "primary" ? '#FFF2F2' : '#E5E0FF'
  }};
  color : ${(props) => { return props.type === 'negative' ? '#98B1F3' : '#5E72BF' }};
  cursor: pointer;
  &:active{
    background-color: ${(props) => {
    return props.type === 'primary' ? '#EBDEDE' : '#D1CCEB'
  }}
  }
`

export const BtnS = styled.button`
  height : 40px;
  width : 100px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => {
    return props.type === "primary" ? '#FFF2F2' : '#E5E0FF'

  }};
  color : ${(props) => { return props.type === 'negative' ? '#98B1F3' : '#5E72BF' }};
  cursor: pointer;
  &:active{
    background-color: ${(props) => {
    return props.type === 'primary' ? '#EBDEDE' : '#D1CCEB'
  }}
  }
`

// 버튼 내부 텍스트 및 아이콘 정렬
export const TtIcnContain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
`

//INPUT 
export const InputMain = styled.div`
display:flex;
gap:10px;
font-size:20px;
align-items:center;

`
export const Input = styled.input`
width:200px;
height:30px;
border-radius:10px;
border: 1px solid gray;
padding: 10px;
`

/** Select 스타일 */
export const OutLayOut = styled.div`
    display : ${(props) => { return props.isDropMenuOpen ? 'flex' : 'none' }};
    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    z-index:0;
`
export const SelectSection = styled.div`
    border: 3px solid rgb(221, 221, 221);
    height: 200px;
    overflow: hidden;
    position: relative;
    width : 100%;
    margin-top: 50px;
`

export const ContianSelecters = styled.div`
    position: relative;
    display: flex;
    gap : 10px;

`
export const BtnSelecter = styled.button`
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
export const BtnInnerElement = styled.div`
    margin : 10px;
`

/**옵션 */
export const OptSelecter = styled.div`
    border: 1px solid rgb(221, 221, 221);
    height: 200px;
    width: 300px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    display: flex;
    flex-direction : column;
    justify-content: space-around;
    position: absolute;
    top: 620px;
    display : ${(props) => { return props.isDropMenuOpen ? 'flex' : 'none' }};
`

export const OptElement = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    &:hover{
        background-color: #CCCCCC;
    };
    &:first-child{
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
    }
    &:last-child{
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
    }
`

export const OptTxt = styled.p`
    margin : 15px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: small;
`