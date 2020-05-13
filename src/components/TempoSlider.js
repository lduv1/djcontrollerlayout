import React from 'react';
import styled from '@emotion/styled/macro';

const Main = styled.div`
    
    height: 100%;
    min-width: 4rem;
    width: 50%;
    /* margin: auto; */
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #bbbbbb30;
    display: grid;
    grid-template-rows: 5% 90% 5%;
    z-index: 2;

    input{
        display: block;
        grid-row: 2/3;
        margin: auto;
        writing-mode: bt-lr; /* IE */
        -webkit-appearance: slider-vertical; 
        width: 5px; /*Full-width */
        height: 100%; /* Specified height */
        background: #d3d3d3; /* Grey background */
        border-radius: 2px;
        outline: none; /* Remove outline */
        opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
        -webkit-transition: .2s; /* 0.2 seconds transition on hover */
        transition: opacity .2s;
        /* appearance: none; */

        &::-webkit-slider-thumb {
            /* none of this works for vertical sliders :| */
            width: 800%; /* Set a specific slider handle width */
            height: 2px; /* Slider handle height */
            background: #ccc; /* Green background */
            border: 6px solid #444;
            border-radius: 3px;
            cursor: pointer; /* Cursor on hover */
        }
        &::-moz-range-thumb {
            width: 800%; /* Set a specific slider handle width */
            height: 2px; /* Slider handle height */
            background: #ccc; /* Green background */
            border: 6px solid #444;
            border-radius: 3px;
            cursor: pointer; /* Cursor on hover */
        }
    }
    
`;


function TempoSlider(props) {


    return (
        <Main>
            <input type='range' orient="vertical" min="1" max="100"/>
        </Main>
    );
}

export default TempoSlider;
