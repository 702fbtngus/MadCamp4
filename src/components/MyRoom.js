import React from "react";
import { useEffect, useRef, useState } from "react";
import './MyRoom.css';
import { Link } from "react-router-dom"
import FastAverageColor from 'fast-average-color';

const MyRoom = () => {

    // const albumList = [["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"],
    // ["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"],
    // ["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"],
    // ["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"],
    // ["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"],
    // ["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"],
    // ["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
    //     "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"]];

    const albumList = [['https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined'], ['https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined'], ['https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined'], ['https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined'], ['https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined'], ['https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined'], ['https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined'], ['https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined'], ['https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined'], ['https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined', 'https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined']];

    var colorList = new Map([]);

    const len = albumList.length;

    var clicked = -1;

    const onAlbumOver = (i, j) => {
        if (clicked == i) { return; }
        console.log("over", i, j);
        if (j > 0) {
            if (albumList[i].length >= 9) {
                for (let k = 0; k < j; k++) {
                    document.getElementById(`album.${i}.${k}`).style.left = `${k / (albumList[i].length - 2) * 57 + 5}%`;
                }
                for (let k = j; k < albumList[i].length; k++) {
                    document.getElementById(`album.${i}.${k}`).style.left = `${(k - 1) / (albumList[i].length - 2) * 57 + 19}%`;
                }
            } else {
                for (let k = 0; k < j; k++) {
                    document.getElementById(`album.${i}.${k}`).style.left = `${k / (albumList[i].length - 2) * ((albumList[i].length - 1) / 8 * 71 - 14) + 5}%`;
                }
                for (let k = j; k < albumList[i].length; k++) {
                    document.getElementById(`album.${i}.${k}`).style.left = `${(k - 1) / (albumList[i].length - 2) * ((albumList[i].length - 1) / 8 * 71 - 14) + 19}%`;
                }
            }
        }
        if (clicked == -1) {
            try {
                document.getElementById("myroomlight").style.background = `linear-gradient(to bottom,  ${colorList[(i, j)]} 0%, ${colorList[(i, j)]} 100%)`;
            } catch (e) {
                document.getElementById("myroomlight").style.background = `white`;
            }
        }
    }

    const onAlbumLeave = (i, j) => {
        if (clicked == i) { return; }
        console.log("leave", i, j);
        if (albumList[i].length >= 9) {
            for (let k = 0; k < albumList[i].length; k++) {
                document.getElementById(`album.${i}.${k}`).style.left = `${k / (albumList[i].length - 1) * 71 + 5}%`;
            }
        } else {
            for (let k = 0; k < albumList[i].length; k++) {
                document.getElementById(`album.${i}.${k}`).style.left = `${k / 8 * 71 + 5}%`;
            }
        }
        if (clicked == -1) {
            document.getElementById("myroomlight").style.background = "rgba(0, 0, 0, 0)";
        }
    }

    const onAlbumClick = (i, j) => {
        if (clicked == i) {
            clicked = -1
            onAlbumLeave(i, j);
            document.getElementById(`myroomaddbutton${i}`).style.opacity = 0;
            document.getElementById(`myroomplaybutton${i}`).style.opacity = 0;
            return;
        }
        if (clicked != -1) {
            if (albumList[clicked].length >= 9) {
                for (let k = 0; k < albumList[clicked].length; k++) {
                    document.getElementById(`album.${clicked}.${k}`).style.left = `${k / (albumList[clicked].length - 1) * 71 + 5}%`;
                }
            } else {
                for (let k = 0; k < albumList[clicked].length; k++) {
                    document.getElementById(`album.${clicked}.${k}`).style.left = `${k / 8 * 71 + 5}%`;
                }
            }
            document.getElementById(`myroomaddbutton${clicked}`).style.opacity = 0;
            document.getElementById(`myroomplaybutton${clicked}`).style.opacity = 0;
        }
        clicked = i;
        if (albumList[i].length >= 9) {
            for (let k = 0; k < albumList[i].length; k++) {
                document.getElementById(`album.${i}.${k}`).style.left = `${k / (albumList[i].length - 1) * 50 + 5}%`;
            }
        } else {
            for (let k = 0; k < albumList[i].length; k++) {
                document.getElementById(`album.${i}.${k}`).style.left = `${k / 8 * 50 + 5}%`;
            }
        }
        document.getElementById("myroomlight").style.background = `linear-gradient(to bottom,  ${colorList[(i, j)]} 0%, ${colorList[(i, j)]} 100%)`;
        document.getElementById(`myroomaddbutton${i}`).style.opacity = 1;
        document.getElementById(`myroomplaybutton${i}`).style.opacity = 1;
    }

    const onAdd = (i) => {
        console.log(`add ${i}`);
    }

    const onPlay = (i) => {
        console.log(`play ${i}`);
    }

    const onAddPL = () => {
        console.log(`add playlist`);
    }

    const onGramo = () => {
        window.location =
            "localhost:3000/musingroom";
    };

    // function fac(u) {
    //     const fac = new FastAverageColor();
    //     fac.getColorAsync(u)
    //         .then(color => {
    //             document.getElementById("myroomcontainer").style.background = "linear-gradient(to bottom, rgba(20, 20, 20, 0.1) 10%, rgba(20, 20, 20, 0.7) 70%, rgba(20, 20, 20, 1))";
    //             // document.getElementById("main-heading").style.color = color.isDark ? '#fff' : '#000';
    //             console.log('Average color', color);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    const renderItem = (j) => {
        let albums = [];
        if (albumList[j].length >= 9) {
            for (let i = 0; i < albumList[j].length; i++) {
                albums.push(
                    <div id={`album.${j}.${i}`}
                        style={{
                            width: "14%",
                            height: "65%",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            top: "15%",
                            left: `${i / (albumList[j].length - 1) * 71 + 5}%`,
                            backgroundImage: `url(${albumList[j][i]})`,
                            position: "absolute",
                            zIndex: `${albumList[j].length + 80 - i}`,
                            filter: "drop-shadow(5px 5px 5px #00000080)"
                        }}
                        onMouseOver={() => { onAlbumOver(j, i); }}
                        onMouseLeave={() => { onAlbumLeave(j, i); }}
                        onClick={() => { onAlbumClick(j, i); }}
                    >
                    </div>
                );
            }
        } else {
            for (let i = 0; i < albumList[j].length; i++) {
                albums.push(
                    <div id={`album.${j}.${i}`}
                        style={{
                            width: "14%",
                            height: "65%",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            top: "15%",
                            left: `${i / 8 * 71 + 5}%`,
                            backgroundImage: `url(${albumList[j][i]})`,
                            position: "absolute",
                            zIndex: `${albumList[j].length + 80 - i}`,
                            filter: "drop-shadow(5px 5px 5px #00000080)"
                        }}
                        onMouseOver={() => { onAlbumOver(j, i); }}
                        onMouseLeave={() => { onAlbumLeave(j, i); }}
                        onClick={() => { onAlbumClick(j, i); }}
                    >
                    </div>
                );
            }
        }
        return albums;
    }

    const renderColor = () => {
        const fac = new FastAverageColor();
        for (let i = 0; i < albumList.length; i++) {
            for (let j = 0; j < albumList[i].length; j++) {
                fac.getColorAsync(albumList[i][j])
                    .then(color => {
                        // document.getElementById("main-heading").style.color = color.isDark ? '#fff' : '#000';
                        console.log('Average color', color);
                        colorList[(i, j)] = color.rgba;
                        console.log(colorList[(i, j)]);
                    })
            }
        }
    }

    const renderList = () => {
        let items = [];
        for (let i = 0; i < len; i++) {
            items.push(
                <div id={`playlist${i}`}
                    style={{
                        width: "auto",
                        height: "30%",
                        alignSelf: "center",
                        justifyContent: "center",
                        position: "relative"
                    }} // 계산할 수 있게 사이즈를 지정했다.
                >
                    <div id="myroomstick" />
                    <div id={`myroomaddbutton${i}`} style={{
                        position: "absolute",
                        top: "47%",
                        left: "74%",
                        width: "15%",
                        height: "30%",
                        opacity: "0",
                        backgroundImage: `url("https://i.imgur.com/v3vvZNy.png")`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        filter: "drop-shadow(-7px -7px 5px #000000ff)",
                        zIndex: "25",
                    }}
                        onClick={() => { onAdd(i); }} />
                    <div id={`myroomplaybutton${i}`} style={{
                        position: "absolute",
                        top: "21%",
                        left: "74%",
                        width: "15%",
                        height: "30%",
                        opacity: "0",
                        backgroundImage: `url("https://i.imgur.com/HCE3tv2.png")`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        filter: "drop-shadow(-7px -7px 5px #000000ff)",
                        zIndex: "25",
                    }} onClick={() => { onPlay(i); }} />
                    {renderItem(i)}
                </div>
            );
        }
        items.push(
            <div id={"addplbutton"}
                onClick={onAddPL}
            />)
        return items;
    };
    return (
        <div id="myroomcontainer">
            <div id="myroombg"></div>
            {renderColor()}
            <div id="myroomtop" />
            <div id="myroomlight" />
            <div id="myroomshadow" />
            <div id="albumshelf">
                {renderList()}
            </div>
            <Link to="./musingroom">
                <div id="gramophone" onClick={onGramo} />
            </Link>
        </div>
    );
}

export default MyRoom;