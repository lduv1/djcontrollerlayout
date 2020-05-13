import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import styled from '@emotion/styled/macro';
import Rotating from './Rotating';

const NUMBUMPS = 16;

const Main = styled.div`
    height: 100%;
    width: 100%;
    .container {
        max-height: 100%;
        max-width: 100%;
        position: absolute;  
        top: 0;  
        bottom: 0;  
        left: 0;  
        right: 0;  
        margin: auto;
    }
      
`;


function Platter(props) {

    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width:10, height: 10 });
    const [rotAngle, setRotAngle] = useState(0);
    const [bumps, setBumps] = useState([]);

    
    useLayoutEffect(() => {
        let movement_timer = null;
        const RESET_TIMEOUT = 5;

        function min(a,b){
            return a < b ? a : b;
        }

        const set_dimensions = () => {
            if (targetRef.current) {
                setDimensions({
                    width: min(targetRef.current.offsetHeight, targetRef.current.offsetWidth),
                    height: min(targetRef.current.offsetHeight, targetRef.current.offsetWidth)
                });
            }
        }
        function handleResize(){
            clearInterval(movement_timer);
            movement_timer = setTimeout(set_dimensions, RESET_TIMEOUT);
        }

        window.addEventListener('resize', handleResize, true);
        set_dimensions();
        return () => {
            window.removeEventListener("resize", handleResize, true);
        };
    }, []);
    


    const createBumps = (rotAngle, dimensions) => {
        let bumps = []
        for (let i = 0; i < NUMBUMPS; i++) {
            let angle = ((i / (NUMBUMPS/2)) * Math.PI);
            let width = dimensions.width;
            let radius = dimensions.width/2;

            bumps.push({ 
                key: i,
                cx: radius * Math.cos(angle) + (width/2),
                cy: radius * Math.sin(angle) + (width/2),
                rx: dimensions.width/NUMBUMPS,
                ry: dimensions.height/NUMBUMPS}
            )

            // bumps.push(<ellipse 
            //     key={i}
            //     cx={radius * Math.cos(angle) + (width/2)}
            //     cy={radius * Math.sin(angle) + (width/2)}
            //     rx={dimensions.width/20}
            //     ry={dimensions.height/20}
            //     // className="bump" 
            //     fill="blue"
            //     clip-path="url(#clip)"
            //     style={{filter: "url(#lighting)"}}
            //    />
            // )
        }
        return bumps
    }

    useEffect(() => {
        setBumps(createBumps(rotAngle, dimensions))
        
    }, [rotAngle, dimensions])

    return (
        <Rotating set={setRotAngle}>
            <Main ref={targetRef}>
                <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} className="container">
                    <clipPath id="circle">
                        <circle cx={dimensions.width/2}
                            cy={dimensions.height/2}
                            r={dimensions.width/2}
                            />
                    </clipPath>
                    <clipPath id="bumps">
                        <circle cx={dimensions.width/2}
                            cy={dimensions.height/2}
                            r={dimensions.width/2}
                        />
                        {bumps.map(bump => 
                                <ellipse 
                                    key={bump.key}
                                    cx={bump.cx}
                                    cy={bump.cy}
                                    rx={bump.rx}
                                    ry={bump.ry}
                                />
                        )}
                    </clipPath>
                    
                    {/* <filter id="lighting">
                        <feSpecularLighting result="specOut" specularExponent="20" lightingColor="#bbb">
                            <fePointLight x={dimensions.width} y={dimensions.height} z='200' />
                        </feSpecularLighting>
                        <feComposite in="SourceGraphic" in2="specOut" 
                            operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
                    </filter> */}
                    <circle cx={dimensions.width/2}
                        cy={dimensions.height/2}
                        r={dimensions.width/2}
                        fill="#888"
                        clipPath="circle() view-box"
                        // style={{filter: "url(#lighting)"}}
                        />
                    {bumps.map(bump => <ellipse 
                            key={bump.key}
                            cx={bump.cx}
                            cy={bump.cy}
                            rx={bump.rx}
                            ry={bump.ry}
                            fill={bump.key ? "#bbb" : "#000"}
                            clipPath="url(#circle)"
                            // style={{filter: "url(#lighting)"}}
                        />
                        )}
                    <use />
                </svg>
            </Main>
        </Rotating>
    );
}

export default Platter;
