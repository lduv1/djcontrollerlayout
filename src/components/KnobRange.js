import React, { useState, useEffect} from 'react';
import styled from '@emotion/styled/macro';
import Rotating from './Rotating';

export const types = {
    KNOB_RANGE: "KNOB_RANGE",
    KNOB_CYCLE: "KNOB_CYCLE"
}

const Main = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    .container{
        max-height: 70%;
        max-width: 70%;
        position: absolute;  
        top: 0;  
        bottom: 0;  
        left: 0;  
        right: 0;  
        margin: auto;
    }
`;

function Knob(props) {

    const [rotAngle, setRotAngle] = useState(0);
    const range = [[-135, 135]];
    const radius = 32;

    
    // const allowed = [[-135, 135]];

    useEffect(() => {
        if (props.ret){
            props.ret(rotAngle);
        }
    }, [props, rotAngle])

    return (
        <Rotating set={setRotAngle} allowed={range}>
            <Main >
                <svg viewBox={`0 0 ${(radius * 2)} ${(radius * 2)}`} className="container">
                    <circle cx={radius}
                            cy={radius}
                            r={radius}
                            fill="#444"
                            clipPath="circle() view-box"
                            // style={{filter: "url(#lighting)"}}
                        />
                    <line x1={radius} 
                          y1={radius} 
                          x2={radius} 
                          y2={radius/4} 
                          stroke="red" />
                </svg>
            </Main>
        </Rotating>
    );
}

export default Knob;
