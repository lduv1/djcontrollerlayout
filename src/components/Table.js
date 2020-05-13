import React from 'react';
import styled from '@emotion/styled/macro';
import Platter from './Platter';
import Knob from './KnobRange';
import TempoSlider from './TempoSlider';
import ButtonController from './ButtonController';

const Main = styled.div`
    max-height: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr 5fr 2fr;
    grid-template-areas: ${props => props.side === 'left' ?
        '"tempo fx fx"  "tempo platter platter"  "buttons buttons buttons"' :
        '"fx fx tempo"  "platter platter tempo" "buttons buttons buttons"'         
    };

    .Tempo{
        grid-area: tempo;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .FX{
        grid-area: fx;
        padding: 1rem;
        .Container{
            height: 100%;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

    }
    .Platter{
        grid-area: platter;
        vertical-align: middle;
        position: relative;
        
    }
    .Buttons{
        grid-area: buttons;
    }
`;



function Table(props) {


    return (
        <Main  {...props}>
            <div className="Tempo">
                <TempoSlider />
            </div>
            <div className="FX">
                <div className="Container">
                    <Knob/>
                    <Knob/>
                    <Knob/>
                </div>
            </div>
            <div className="Platter">
                <Platter/> 
            </div>
            <div className="Buttons">
                <ButtonController />
            </div>

        </Main>
    );
}

export default Table;
