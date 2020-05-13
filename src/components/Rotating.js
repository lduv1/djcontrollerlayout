/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {useRef, useEffect, useState} from 'react';

const styles = css`
  height: 100%;
  width: 100%;
`;

function Rotating(props) {

    const ref = useRef();

    // const initTouch = function() {
    //     if(ref.current){
    //         console.log(ref);
    //         ref.current.children[0].addEventListener("touchstart", start, false);
    //         ref.current.children[0].addEventListener("touchmove", rotate, false);
    //         return window.addEventListener("touchstop", stop, false);
    //     }
    // };

    const [allowed, setAllowed] = useState(props.allowed || [[0,360]])

    // setAllowed(allowed.map(pair => {
    //     pair[0] = ((pair[0] % 360) + 360) % 360;
    //     pair[1] = ((pair[1] % 360) + 360) % 360;
    //     return pair;
    // }))

    let set = props.set || false;

    useEffect(() => {
        const initMouse = function() {
            if(curr){
                // console.log(ref);
                curr.children[0].addEventListener("mousedown", start, false);
                window.addEventListener("mousemove", rotate, false);
                window.addEventListener("mouseup", stop, false);
            }
        };

        const R2D = 180 / Math.PI;
        let active = false;
        let angle = 0;
        let lastRotation = 0;
        let rotation = 0;
        let startAngle = 0;
        let center = {
            x: 0,
            y: 0
        };

        const outside = function(val){
            val = ((val % 360) + 360) % 360;
            // console.log(val, nRange[0], nRange[1]);
            const a = allowed.map(pair => {
                pair[0] = ((pair[0] % 360) + 360) % 360;
                pair[1] = ((pair[1] % 360) + 360) % 360;
                return pair;
            })
            // console.log("b", a, val)
            // console.log("c", a.filter(pair => {
            //     // console.log("d", pair[0], pair[1])
            //     return !((val > pair[0] && val > pair[1]) || (val < pair[0] && val < pair[1]))
            // }
            // ));

            if (a.filter(pair => !((val > pair[0] && val > pair[1]) || (val < pair[0] && val < pair[1]))).length >= 1
            ){
                return true
            } else return false;

            // if (a[0][0] && !((val > a[0][0] && val > a[0][1]) || (val < a[0][0] && val < a[0][1]))){
            //     return true;
            // }
            // return false;
        }

        const closestval = function(val, lastVal){
            val = ((val % 360) + 360) % 360;
            lastVal = ((lastVal % 360) + 360) % 360;

            let curr = lastVal;

            allowed.map(pair => {
                pair[0] = ((pair[0] % 360) + 360) % 360;
                pair[1] = ((pair[1] % 360) + 360) % 360;
                // console.log("val",val)
                // console.log("pair0curr",curr, (Math.abs(pair[0]) - curr))
                // console.log("pair0", pair[0], (Math.abs(pair[0]) - val))
                let pair0dif = Math.abs((pair[0]) - val);
                let pair1dif = Math.abs((pair[1]) - val);
                let currdif = Math.abs((curr) - val);
                // console.log(pair0dif,pair1dif, currdif)

                // let ncurrdif = ((currdif % 360) + 360) % 360;
                // let npair1dif = ((pair1dif % 360) + 360) % 360;
                // let npair0dif = ((pair0dif % 360) + 360) % 360;

                // console.log(pair0dif,pair1dif, currdif, npair0dif,npair1dif, ncurrdif)
                if( pair0dif < currdif){
                    curr = pair[0];
                }
                // console.log("pair1curr", (Math.abs(pair[1]) - curr))
                // console.log("pair1", pair[1],(Math.abs(pair[1]) - val))

                if( pair1dif < currdif){
                    curr = pair[1];
                }
            });
            // console.log(curr)
            return curr;
        }

        const start = function(e) {
            var height, left, top, width, x, y, _ref;
            e.preventDefault();
            _ref = curr.children[0].getBoundingClientRect()
            top = _ref.top
            left = _ref.left
            height = _ref.height
            width = _ref.width;
            center = {
                x: left + (width / 2),
                y: top + (height / 2)
            };
            x = e.clientX - center.x;
            y = e.clientY - center.y;
            startAngle = R2D * Math.atan2(y, x);
            return active = true;
        };

        const rotate = function(e) {
            if (active) {
                e.preventDefault();

                var d, x, y;

                x = e.clientX - center.x;
                y = e.clientY - center.y;
                d = R2D * Math.atan2(y, x);
                rotation = d - startAngle;
                let val = angle + rotation;
                
                // console.log(val, lastRotation);
                if(outside(val)){
                    val = closestval(val,lastRotation);
                }

                if(set){
                    set(val);
                }
                
                lastRotation = val;
                return curr.children[0].style.webkitTransform = "rotate(" + (val) + "deg)";
            }
        };

        const stop = function() {

            angle += rotation;
            return active = false;
        };

        let curr = ref.current;
        initMouse();
        // console.log("init")
        // initTouch();
        return () => {
            curr.children[0].removeEventListener("mousedown", start, false);
            window.removeEventListener("mousemove", rotate, false);
            window.removeEventListener("mouseup", stop, false);
        } 
    }, [set, allowed]);


    return (
        <div css={styles} ref={ref}>
            {props.children}
        </div>
    );
}

export default Rotating;
