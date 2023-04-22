import styled from "styled-components";


export const StTitle = styled.h2`
font-size:40px;
font-weight:700;
margin-bottom: 20px;
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
left:60%;
display:flex;

`
export const StCloseModalButton = styled.button`
border: none;
background-color:${(props) => props.backgroundColor};
color:${(props) => props.color};
margin:10px;
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
right:10%
`