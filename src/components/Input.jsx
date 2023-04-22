import React, { useState } from 'react'
import Button from './Button'
import * as commonSt from './StyledComponents'

function Input() {

  const [state, setState] = useState({
    myName:"",
    price:""
  })

  const onChangeHandle = (e)=>{
    if(e.target.name === 'price'){
      setState({
      ...state,
      [e.target.name]:e.target.value
      .replace(/^0+/, '') //첫번째 자리 숫자0이 안들어오게 
      .replace(/[^0-9]/g, '') // 숫자만 입력
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") // 천 단위 콤마 추가
    })
    }else if(e.target.name === 'myName'){
      setState({
      ...state,
      [e.target.name]:e.target.value
      })
    }
  }
  //저장하기 버튼 ! !
  const onClickSaveButton = ()=>{
    if(state.myName.length < 1&& state.price.length<1){
    alert("이름과 가격 모두 입력해주세요.")
    return;
    }
    alert(`name: ${state.myName}, price: ${state.price.replace(/,/g,'')}`)
  }

  return (
    <>
      <commonSt.Title>Input</commonSt.Title>
      <commonSt.InputMain>
        이름 <commonSt.Input
            name='myName'
            value={state.myName}
            onChange={onChangeHandle}/>  
        가격 <commonSt.Input
            placeholder='0'
            name='price'
            value={state.price}
            onChange={onChangeHandle}/>
        <Button size="s" type="primary" onClick={onClickSaveButton}>저장</Button>
      </commonSt.InputMain>
    </>
  )
}

export default Input