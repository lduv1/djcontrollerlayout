import React, {useState} from 'react';
import styled from '@emotion/styled/macro';

export const BUTTON_TYPES = {
    TOGGLE: "TOGGLE",
    MANAGED: "MANAGED",
    PRESS: "PRESS"
};

const Main = styled.button`
    background-color: ${props => props.enabled ?  props.color : "AntiqueWhite"};
    border: ${props => `3px solid ${props.color}`};
    border-radius: 3px;

`;

function Button(props) {

    const [enabled, setEnabled] = useState(false);

    const mouseDown = (e) => {
        switch(props.type){
            case BUTTON_TYPES.TOGGLE:
                setEnabled(!enabled);
                break;
            case BUTTON_TYPES.PRESS:
                setEnabled(true);
                break;
            case BUTTON_TYPES.MANAGED:
                break;
            default:
                break;
        }
    } 
    const mouseUp = (e) => {
        switch(props.type){
            case BUTTON_TYPES.TOGGLE:
                break;
            case BUTTON_TYPES.PRESS:
                setEnabled(false);
                break;
            case BUTTON_TYPES.MANAGED:
                break;
            default:
                break;
        }
    }

    if(props.type === BUTTON_TYPES.MANAGED) return (
        <Main 
            enabled={props.enabled} 
            color={props.color}
            onClick={() => props.update(props.id)} >
            {props.children}
        </Main>
    )
    else return (
        <Main 
            onMouseDown={mouseDown} onMouseUp={mouseUp} 
            enabled={enabled} 
            color={props.color} >
                
            {props.children}
        </Main>
    );
}

export default Button;