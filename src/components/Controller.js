import React from 'react';
import styled from '@emotion/styled/macro';
import KnobRange from './KnobRange';
import KnobCycle from './KnobCycle';
import CrossFade from './CrossFade';
import TempoSlider from './TempoSlider';

const Main = styled.div`
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 4fr 2fr;
    grid-template-areas:
    "loadleft loadknob loadright"
    "highleft . highright"
    "highleft mastervol highright"
    "midleft mastervol midright"
    "midleft cuevol midright"
    "lowleft cuevol lowright"
    "lowleft micvol lowright"
    "passfilterleft micvol passfilterright"
    "passfilterleft . passfilterright"
    "volleft . volright"
    "fade fade fade";
    

    .knob-container{
        height: 100%;
        width: 100%;
        > button{
            height: 100%;
            width: 100%;
            display: block;
            background-color: #222;
            border-radius: 2px;
        }
    }

    .loadleft{
        grid-area: loadleft;
        height: 25%;
        width: 25%;
        margin: auto;
    }
    .loadknob{
        grid-area: loadknob;
    }
    .loadright{
        grid-area: loadright;
        height: 25%;
        width: 25%;
        margin: auto;
    }
    .highleft{
        grid-area: highleft;
    }
    .mastervol{
        /* height: 50%;
        padding-top: 25%; */
        grid-area: mastervol;
    }
    .highright{
        grid-area: highright;
    }
    .midleft{
        grid-area: midleft;
    }
    .midright{
        grid-area: midright;
    }
    .lowleft{
        grid-area: lowleft;
    }
    .micvol{
        /* height: 50%;
        padding-top: 25%; */
        grid-area: micvol;
    }
    .cuevol{
        /* height: 50%;
        padding-top: 25%; */
        grid-area: cuevol;
    }
    .lowright{
        grid-area: lowright;
    }
    .passfilterleft{
        grid-area: passfilterleft;
    }
    .passfilterright{
        grid-area: passfilterright;
    }

    .crossfade{
        grid-area: fade;
        display: grid;
        grid-template-rows: 1fr max-content 1fr;
        grid-template-columns: 15% 70% 15%;
        >div {
            grid-row: 2/3;
            grid-column: 2/3;
        }
    }
    .volleft{
        grid-area: volleft;
        /* max-height: 100%; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .volright{
        grid-area: volright;
        /* max-height: 100%; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

function Controller(props) {

  return (
    <Main>
        <div className="knob-container loadleft"><button /></div>
        <div className="knob-container loadknob"><KnobCycle/></div>
        <div className="knob-container loadright"><button /></div>
        <div className="knob-container highleft"><KnobRange /></div>
        <div className="knob-container mastervol"><KnobRange /></div>
        <div className="knob-container highright"><KnobRange /></div>
        <div className="knob-container midleft"><KnobRange /></div>
        <div className="knob-container midright"><KnobRange /></div>
        <div className="knob-container lowleft"><KnobRange /></div>
        <div className="knob-container micvol"><KnobRange /></div>
        <div className="knob-container cuevol"><KnobRange /></div>
        <div className="knob-container lowright"><KnobRange /></div>
        <div className="knob-container passfilterleft"><KnobRange /></div>
        <div className="knob-container passfilterright"><KnobRange /></div>
        <div className="volleft"> <TempoSlider /> </div>
        <div className="volright"> <TempoSlider /> </div>
        <div className="crossfade"><CrossFade /></div>

    </Main>
  );
}

export default Controller;
