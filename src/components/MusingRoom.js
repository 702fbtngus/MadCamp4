import React from 'react';
import './MusingRoom.css';
import styled, { keyframes } from 'styled-components';
// import ReactCursorPosition from 'react-cursor-position';
import useMousePosition from './useMousePosition';
import FastAverageColor from 'fast-average-color';

const MusingRoom = () => {

    const playlist = [{
        artist: "태연",
        title: "Weekend",
        uri: "spotify:track:7j2FhVH4n7X7D669o8T87z",
        albumUrl: "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined"
    }, {
        artist: "STAYC",
        title: "ASAP",
        uri: "spotify:track:7j2FhVH4n7X7D669o8T87z",
        albumUrl: "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"
    }, {
        artist: "오마이걸",
        title: "Dun Dun Dance",
        uri: "spotify:track:7j2FhVH4n7X7D669o8T87z",
        albumUrl: "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined"
    }, {
        artist: "AKMU",
        title: "낙하",
        uri: "spotify:track:7j2FhVH4n7X7D669o8T87z",
        albumUrl: "https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined"
    }, {
        artist: "BTS",
        title: "Permission to Dance",
        uri: "spotify:track:7j2FhVH4n7X7D669o8T87z",
        albumUrl: "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined"
    }, {
        artist: "태연",
        title: "Weekend",
        uri: "spotify:track:7j2FhVH4n7X7D669o8T87z",
        albumUrl: "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined"
    }, {
        artist: "STAYC",
        title: "ASAP",
        uri: "spotify:track:7j2FhVH4n7X7D669o8T87z",
        albumUrl: "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"
    }, {
        artist: "오마이걸",
        title: "Dun Dun Dance",
        uri: "spotify:track:7j2FhVH4n7X7D669o8T87z",
        albumUrl: "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined"
    }, {
        artist: "AKMU",
        title: "낙하",
        uri: "spotify:track:7j2FhVH4n7X7D669o8T87z",
        albumUrl: "https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined"
    }, {
        artist: "BTS",
        title: "Permission to Dance",
        uri: "spotify:track:7j2FhVH4n7X7D669o8T87z",
        albumUrl: "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined"
    }]

    var clicked = -1;

    const onSongClick = (i) => {
        if (clicked != -1)
        {
            document.getElementById(`back${clicked}`).style.backgroundColor = "#ffffff20";
            document.getElementById(`title${clicked}`).style.color = "#ffffff";
            document.getElementById(`artist${clicked}`).style.color = "#ffffff";
        }
        clicked = i
        document.getElementById("musing_record").style.backgroundImage = `url(${playlist[i].albumUrl})`;
        document.getElementById(`back${clicked}`).style.backgroundColor = "#ffffff80";
        document.getElementById(`title${clicked}`).style.color = "#000000";
        document.getElementById(`artist${clicked}`).style.color = "#000000";
    }

    const renderPL = () => {
        let items = [];
        for (let i = 0; i < playlist.length; i++) {
            items.push(
                <div id={`song${i}`}
                    style={{
                        width: "100%",
                        height: "20%",
                        // backgroundImage: `url("https://i.imgur.com/HCE3tv2.png")`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        alignSelf: "center",
                        justifyContent: "center",
                        position: "relative"
                    }} // 계산할 수 있게 사이즈를 지정했다.
                >
                    <div style={{
                        position: "absolute",
                        width: "100%",
                        height: "90%",
                        zIndex: "40"
                    }} onClick={() => { onSongClick(i); }}/>
                    
                    <div id={`back${i}`}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "90%",
                        backgroundColor: "#ffffff20",
                    }}>
                        <div style={{
                            position: "absolute",
                            width: "70%",
                            height: "70%",
                            top: "10%",
                            left: "3%",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: `url(${playlist[i].albumUrl})`,
                            filter: "drop-shadow(5px 5px 5px #00000080)",
                        }} />

                        <div id={`title${i}`}
                        style={{
                            position: "absolute",
                            width: "70%",
                            height: "70%",
                            top: "10%",
                            left: "25%",
                            filter: "drop-shadow(5px 5px 5px #00000080)",
                            color: "#ffffff",
                            fontFamily: 'SEBANG_Gothic_Bold',
                            fontSize: "25px",
                        }}>{playlist[i].title}</div>
                        
                        <div id={`artist${i}`}
                        style={{
                            position: "absolute",
                            width: "70%",
                            height: "70%",
                            top: "50%",
                            left: "25%",
                            filter: "drop-shadow(5px 5px 5px #00000080)",
                            color: "#ffffff",
                            fontFamily: 'SEBANG_Gothic_Bold',
                            fontSize: "18px",
                        }}>{playlist[i].artist}</div>

                    </div>
                </div>
            );
        }
        return items;
    };

    return (
        <div id="musing_allcontainer">
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
            <div id="musing_playlist">
                {renderPL()}
            </div>
        </div>
    )
}

export default MusingRoom;