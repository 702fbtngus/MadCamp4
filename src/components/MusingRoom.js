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
  const a = [1, 3, 5];
  const unit = a.map((unit, idx) => {
    return unit - 1;
  });
  //console.log(unit);
  const playlist = [
    {
      artist: "DAY6",
      title: "Sweet Chaos",
      uri: "spotify:track:3G3c7sWlKSv12ft9TGy3D0",
      albumUrl:
        "https://i.scdn.co/image/ab67616d00004851e3f3b11777ef77dcf72d9cd2",
    },
    {
      artist: "DAY6 (Even of Day)",
      title: "뚫고 지나가요 Right Through Me",
      uri: "spotify:track:6PiDq1VQiwWHxBJjdKviuZ",
      albumUrl:
        "https://i.scdn.co/image/ab67616d00004851a1f6e0ef3baee6f6c65679f5",
    },
    {
      artist: "DAY6",
      title: "Zombie",
      uri: "spotify:track:0LcQLfS4gjaFyPReRdExtQ",
      albumUrl:
        "https://i.scdn.co/image/ab67616d000048516b2b448f14b021b049cdceb1",
    },
    {
      artist: "DAY6",
      title: "한 페이지가 될 수 있게",
      uri: "spotify:track:0EhdXt3y460mTRsi97Pyk5",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000485180c0a2d0bf89e3707b6365c4",
    },
  ];

  return (
    <div id="musing_allcontainer">
      <div id="player_container">
        <Player
          accessToken={accessToken}
          //trackUri={"spotify:track:54flyrjcdnQdco7300avMJ"}
          //trackUri={"spotify:track:3G3c7sWlKSv12ft9TGy3D0"}

          trackUri={playlist.map((track) => {
            return track.uri;
          })}
        />
      </div>
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
    </div>
  );
};

export default MusingRoom;
