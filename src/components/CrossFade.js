import React from 'react';
import styled from '@emotion/styled/macro';

const Main = styled.div`

    min-height: 4rem;
    height: 50%;
    width: 100%;
    border: 1px solid #ccc;
    margin: auto;
    border-radius: 3px;
    background-color: #bbbbbb30;
    display: grid;
    grid-template-columns: 5% 90% 5%;
    z-index: 2;

    input{
        grid-column: 2/3;

        display: block;
        margin: auto;
        width: 100%; /*Full-width */
        height: 5px; /* Specified height */
        background: #d3d3d3; /* Grey background */
        outline: none; /* Remove outline */
        opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
        -webkit-transition: .2s; /* 0.2 seconds transition on hover */
        transition: opacity .2s;
        /* padding-top: 5%; */

        /* appearance: none; */

        &::-webkit-slider-thumb {
            /* none of this works for vertical sliders :| */
            width: 2px; /* Set a specific slider handle width */
            height: 800%; /* Slider handle height */
            background: #ccc; /* Green background */
            border: 6px solid #444;
            border-radius: 3px;
            cursor: pointer; /* Cursor on hover */
        }
        &::-moz-range-thumb {
            width: 2px; /* Set a specific slider handle width */
            height: 800%; /* Slider handle height */
            background: #ccc; /* Green background */
            border: 6px solid #444;
            border-radius: 3px;
            cursor: pointer; /* Cursor on hover */
        }
    }
    
`;


function CrossFade(props) {


    return (
        <Main>
            <input type='range' min="1" max="100"/>
        </Main>
    );
}

export default CrossFade;
