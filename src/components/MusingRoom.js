import React from "react";
import "./MusingRoom.css";
import styled, { keyframes } from "styled-components";
// import ReactCursorPosition from 'react-cursor-position';
import useMousePosition from "./useMousePosition";
import FastAverageColor from "fast-average-color";
import Player from "../Play/Player";

const MusingRoom = () => {
  const params = JSON.parse(localStorage.getItem("params"));
  const accessToken = params.access_token;
  const playlist = ["spotify:track:54flyrjcdnQdco7300avMJ"];

  return (
    <div id="musing_allcontainer">
      <div id="musing_logincontainer">
        <div id="musing_lpcontainer">
          <div id="musing_container">
            <div id="musing_group">
              <div id="musing_glow" />
              <div
                id="musing_record"
                style={{
                  backgroundImage: `url(
                    "https://image.bugsm.co.kr/album/images/1000/202837/20283717.jpg"
                  )`,
                }}
              />
              <div id="musing_arm" />
              {/* // <div id="musing_arm" onDrag={dragHandler} onDragStart={dragStartHandler} onDragEnd={d3} onDrop={d4} /> */}
              <div id="musing_top" />
            </div>
          </div>
        </div>
      </div>
      <div id="player_container">
        <Player
          accessToken={accessToken}
          trackUri={"spotify:track:54flyrjcdnQdco7300avMJ"}
        />
      </div>
    </div>
  );
};

export default MusingRoom;
