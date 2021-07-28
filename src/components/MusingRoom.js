import React from 'react';
import './MusingRoom.css';
import styled, { keyframes } from 'styled-components';
// import ReactCursorPosition from 'react-cursor-position';
import useMousePosition from './useMousePosition';
import FastAverageColor from 'fast-average-color';

const MusingRoom = () => {


    // const D1 = () => {
    //     console.log("d1");
    //     const { x, y } = useMousePosition();
    //     console.log(x, y);
    // }

    // const dragStartHandler = e => {
    //     const img = new Image();
    //     e.dataTransfer.setDragImage(img, 0, 0);

    //     posX = e.clientX;
    //     posY = e.clientY;

    //     originalX = e.target.offsetLeft;
    //     originalY = e.target.offsetTop;
    // };

    // const dragHandler = e => {
    //     e.target.style.left = `${e.target.offsetLeft + e.clientX - posX}px`;
    //     e.target.style.top = `${e.target.offsetTop + e.clientY - posY}px`;
    //     posY = e.clientY;
    //     posX = e.clientX;
    // };
    // const D1 = () => {
    //     console.log("d1");
    // }

    // const d2 = () => {
    //     console.log("d2");
    // }

    // const d3 = () => {
    //     console.log("d3");
    // }

    // const d4 = () => {
    //     console.log("d4");
    // }

    return (
        <div id="musing_allcontainer">
            <div id="musing_logincontainer">
                <div id="musing_lpcontainer">
                    <div id="musing_container">
                        <audio id="music" src="https://www.mboxdrive.com/lofimusic.mp3" />
                        <div id="musing_group">
                            <div id="musing_glow" />
                            <div id="musing_record" />
                            <div id="musing_arm" />
                            {/* // <div id="musing_arm" onDrag={dragHandler} onDragStart={dragStartHandler} onDragEnd={d3} onDrop={d4} /> */}
                            <div id="musing_top" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusingRoom;