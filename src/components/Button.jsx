import React from 'react';
import ButtonIcon from './ButtonIcon';
import * as commonSt from './StyledComponents'

function Button(props) {
    return (
        <>
            {
                props.size === 'l'?<commonSt.BtnL type={props.type} onClick={props.onClick}><commonSt.TtIcnContain>{props.children}{props.hasIcon?<ButtonIcon type={props.hasIcon}/>:''}</commonSt.TtIcnContain></commonSt.BtnL> : (props.size === 'm' ? <commonSt.BtnM type={props.type} onClick={props.onClick}>{props.children}</commonSt.BtnM> : <commonSt.BtnS type={props.type} onClick={props.onClick}>{props.children}</commonSt.BtnS>)
            }
        </>
    );
}

export default Button;