import React, { useState, useEffect} from 'react';
import styled from '@emotion/styled/macro';
import Rotating from './Rotating';


const Main = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    .container{
        max-height: 50%;
        max-width: 50%;
        position: absolute;  
        top: 0;  
        bottom: 0;  
        left: 0;  
        right: 0;  
        margin: auto;
    }
`;

function KnobCycle(props) {

    const [rotAngle, setRotAngle] = useState(0);
    // const [range, setRange] = useState([[0,360]]);
    const radius = 32;
    const NUMBUMPS = 16;

    let arr = []
    for (let i = 0; i < NUMBUMPS; i++) {
        arr.push([(360/NUMBUMPS) * i,(360/NUMBUMPS) * (i + 1) -1 ])
    }
    const range = arr;    
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
                            r={radius-1}
                            fill="#000"
                            clipPath="circle() view-box"
                            // style={{filter: "url(#lighting)"}}
                        />
                    <line x1={radius} 
                          y1={radius} 
                          x2={radius} 
                          y2={radius/4} 
                          stroke="white" />
                </svg>
            </Main>
        </Rotating>
    );
}

export default KnobCycle;
