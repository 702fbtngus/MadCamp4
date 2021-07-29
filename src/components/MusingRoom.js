import React, { useState, useEffect } from "react";
import "./MusingRoom.css";
import styled, { keyframes } from "styled-components";
// import ReactCursorPosition from 'react-cursor-position';
import useMousePosition from "./useMousePosition";
import FastAverageColor from "fast-average-color";
import Player from "../Play/Player";
import axios from "axios";
import SpotifyPlayer from "react-spotify-web-playback";

//var clicked = -1;

var clicked = -1;

const MusingRoom = () => {
  const params = JSON.parse(localStorage.getItem("params"));
  const accessToken = params.access_token;
  const [playingTrack, setPlayingTrack] = useState();
  const [lyrics, setLyrics] = useState("");
  const [clicked, setClicked] = useState(0);
  const [play, setPlay] = useState(false);
  const playlist = [
    {
      artist: "DAY6",
      title: "Zombie",
      uri: "spotify:track:0LcQLfS4gjaFyPReRdExtQ",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b2736b2b448f14b021b049cdceb1",
    },
    {
      artist: "DAY6",
      title: "Sweet Chaos",
      uri: "spotify:track:3G3c7sWlKSv12ft9TGy3D0",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273e3f3b11777ef77dcf72d9cd2",
    },
    {
      artist: "DAY6 (Even of Day)",
      title: "땡스 투 (Thanks to)",
      uri: "spotify:track:3k9ajnDAgLeQkXUVjt7rpf",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b2734b65c65759c4dbbc6a591ce3",
    },
    {
      artist: "DAY6",
      title: "한 페이지가 될 수 있게",
      uri: "spotify:track:0EhdXt3y460mTRsi97Pyk5",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b27380c0a2d0bf89e3707b6365c4",
    },
    {
      artist: "DAY6",
      title: "예뻤어",
      uri: "spotify:track:3Pqp7yCHo6hbxMS0ZGc93N",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273b6d756ed33cd43ec46ffe6db",
    },
    {
      artist: "DAY6 (Even of Day)",
      title: "LOVE PARADE",
      uri: "spotify:track:1e0dgKoOIe7pzSKHXtauhr",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273a1f6e0ef3baee6f6c65679f5",
    },
  ];

  function chooseTrack(track) {
    setPlayingTrack(track);
  }

  useEffect(() => {
    setPlayingTrack(
      playlist.map((track) => {
        return {
          artist: track.artists,
          title: track.title,
          uri: track.uri,
          albumUrl: track.albumUrl,
        };
      })
    );
  });

  const onSongClick = (i) => {
    console.log(i, clicked);

    document.getElementById(`back${clicked}`).style.backgroundColor =
      "#ffffff20";
    document.getElementById(`title${clicked}`).style.color = "#ffffff";
    document.getElementById(`artist${clicked}`).style.color = "#ffffff";

    //clicked = i;
    setClicked(i);
    document.getElementById(
      "musing_record"
    ).style.backgroundImage = `url(${playlist[i].albumUrl})`;
    document.getElementById(`back${i}`).style.backgroundColor = "#ffffff80";
    document.getElementById(`title${i}`).style.color = "#000000";
    document.getElementById(`artist${i}`).style.color = "#000000";
  };

  const renderPL = () => {
    let items = [];
    for (let i = 0; i < playlist.length; i++) {
      items.push(
        <div
          id={`song${i}`}
          style={{
            width: "100%",
            height: "20%",
            // backgroundImage: `url("https://i.imgur.com/HCE3tv2.png")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            alignSelf: "center",
            justifyContent: "center",
            position: "relative",
          }} // 계산할 수 있게 사이즈를 지정했다.
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "90%",
              zIndex: "40",
            }}
            onClick={() => {
              onSongClick(i);
            }}
          />

          <div
            id={`back${i}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "90%",
              backgroundColor: "#ffffff20",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "70%",
                height: "70%",
                top: "10%",
                left: "3%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${playlist[i].albumUrl})`,
                filter: "drop-shadow(5px 5px 5px #00000080)",
              }}
            />

            <div
              id={`title${i}`}
              style={{
                position: "absolute",
                width: "70%",
                height: "70%",
                top: "10%",
                left: "25%",
                filter: "drop-shadow(5px 5px 5px #00000080)",
                color: "#ffffff",
                fontFamily: "SEBANG_Gothic_Bold",
                fontSize: "25px",
              }}
            >
              {playlist[i].title}
            </div>

            <div
              id={`artist${i}`}
              style={{
                position: "absolute",
                width: "70%",
                height: "70%",
                top: "50%",
                left: "25%",
                filter: "drop-shadow(5px 5px 5px #00000080)",
                color: "#ffffff",
                fontFamily: "SEBANG_Gothic_Bold",
                fontSize: "18px",
              }}
            >
              {playlist[i].artist}
            </div>
          </div>
        </div>
      );
    }
    return items;
  };

  useEffect(() => {}, [clicked]);

  return (
    <div id="musing_allcontainer">
      <div id="player_container">
        <SpotifyPlayer
          token={accessToken}
          /*
          trackUri={playlist.map((track) => {
            return track.uri;
          })}*/
          showSaveIcon
          callback={(state) => {
            if (!state.isPlaying) setPlay(false);
            console.log("track: ", state.track.name);
          }}
          play={play}
          uris={playlist.map((track) => {
            return track.uri;
          })}
          offset={clicked}
          autoPlay={true}
          styles={{
            activeColor: "#fff",
            bgColor: "#0a0e11",
            color: "#fff",
            loaderColor: "#fff",
            sliderColor: "#1cb954",
            trackArtistColor: "#ccc",
            trackNameColor: "#fff",
            height: "12%",
          }}
        />
      </div>
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
      <div id="musing_playlist">{renderPL()}</div>
    </div>
  );
};

export default MusingRoom;
