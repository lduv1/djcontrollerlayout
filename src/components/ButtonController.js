import React, {useState} from 'react';
import styled from '@emotion/styled/macro';
import Button, {BUTTON_TYPES} from './Button';


const Main = styled.div`
    height: 100%;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 3fr 3fr;
    gap: 1rem;
`;

const optionButtons = [
    {
        key: 0,
        color: 'red',
        buttons: [
            {key: 1, color: "red", type: BUTTON_TYPES.TOGGLE},
            {key: 2, color: "red", type: BUTTON_TYPES.TOGGLE},
            {key: 3, color: "red", type: BUTTON_TYPES.TOGGLE},
            {key: 4, color: "red", type: BUTTON_TYPES.TOGGLE},

            {key: 5, color: "red", type: BUTTON_TYPES.PRESS},
            {key: 6, color: "red", type: BUTTON_TYPES.PRESS},
            {key: 7, color: "red", type: BUTTON_TYPES.PRESS},
            {key: 8, color: "red", type: BUTTON_TYPES.PRESS}
        ]
    }, 
    {
        key: 1,
        color: 'darkgreen',
        buttons: [
            {key: 1, color: "green", type: BUTTON_TYPES.TOGGLE},
            {key: 2, color: "red", type: BUTTON_TYPES.TOGGLE},
            {key: 3, color: "green", type: BUTTON_TYPES.TOGGLE},
            {key: 4, color: "red", type: BUTTON_TYPES.TOGGLE},

            {key: 5, color: "red", type: BUTTON_TYPES.PRESS},
            {key: 6, color: "green", type: BUTTON_TYPES.PRESS},
            {key: 7, color: "red", type: BUTTON_TYPES.PRESS},
            {key: 8, color: "green", type: BUTTON_TYPES.PRESS}
        ]
    }, 
    {
        key: 2,
        color: 'blue',
        buttons: [
            {key: 1, color: "blue", type: BUTTON_TYPES.TOGGLE},
            {key: 2, color: "blue", type: BUTTON_TYPES.TOGGLE},
            {key: 3, color: "blue", type: BUTTON_TYPES.TOGGLE},
            {key: 4, color: "blue", type: BUTTON_TYPES.TOGGLE},

            {key: 5, color: "tan", type: BUTTON_TYPES.PRESS},
            {key: 6, color: "tan", type: BUTTON_TYPES.PRESS},
            {key: 7, color: "tan", type: BUTTON_TYPES.PRESS},
            {key: 8, color: "tan", type: BUTTON_TYPES.PRESS}
        ]
    }, 
    {
        key: 3,
        color: 'darkorange',
        buttons: [
            {key: 1, color: "red", type: BUTTON_TYPES.PRESS},
            {key: 2, color: "navy", type: BUTTON_TYPES.PRESS},
            {key: 3, color: "darkorchid", type: BUTTON_TYPES.PRESS},
            {key: 4, color: "DarkTurquoise", type: BUTTON_TYPES.PRESS},

            {key: 5, color: "deepskyblue", type: BUTTON_TYPES.PRESS},
            {key: 6, color: "forestgreen", type: BUTTON_TYPES.PRESS},
            {key: 7, color: "magenta", type: BUTTON_TYPES.PRESS},
            {key: 8, color: "slateblue", type: BUTTON_TYPES.PRESS}
        ]
    }
];


function ButtonController(props) {

    const [enabled, setEnabled] = useState(0);

    const update = (val) => {
        setEnabled(val);
    };

    return (
        <Main>
            {optionButtons.map( button => (
                <Button color={button.color}                
                    key={button.key}     
                    id={button.key}     
                    enabled={enabled===button.key}
                    type={BUTTON_TYPES.MANAGED} 
                    update={update} 
                    />

            ))}

        {optionButtons[enabled].buttons.map( button => (
            <Button key={`${enabled}-${button.key}`} color={button.color} type={button.type}></Button>
        ))}
            
        </Main>
    );
}

export default ButtonController;