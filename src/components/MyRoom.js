import React from "react";
import { render } from "react-dom";
import { useEffect, useRef, useState } from "react";
// import "../style.css";
import './MyRoom.css';
import { func } from "prop-types";
import { Link } from "react-router-dom"
import FastAverageColor from 'fast-average-color';

const MyRoom = () => {

    const mo = () => {
        console.log("mouse over");
        document.getElementById("main-heading").textContent = "My ......... Room";
    }

    const ml = () => {
        console.log("mouse leave");
        document.getElementById("main-heading").textContent = "My Room";
    }

    const albumList = [["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"],
        ["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"],
        ["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"],
        ["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"],
        ["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"],
        ["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"],
        ["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"]];

    var colorList = new Map([]);

    const len = albumList.length;
    const listHeight = 300;
    const [selectedItem, setSelectedItem] = useState(1); // item's index number

    /****** [1] ******/
    const itemRef = useRef({});
    const currentScroll = useRef({ scrollTop: 0, scrollBottom: listHeight });
    const containerRef = useRef();

    useEffect(() => {
        const keyPress = (e) => {
            if (e.key === "ArrowLeft") {
                // 위로 이동할 때
                if (selectedItem === 1) return;
                setSelectedItem((prev) => Number(prev) - 1);
                /****** [2] ******/
                const elementTop = (Number(selectedItem) - 2) * 30;

                /****** [4] ******/
                if (elementTop < currentScroll.current.scrollTop) {
                    const prevItem = itemRef.current[selectedItem - 1];
                    prevItem && prevItem.scrollIntoView({ block: "start" });
                }
            }
            if (e.key === "ArrowRight") {
                // 아래로 이동할 때
                if (selectedItem >= len) return;
                setSelectedItem((prev) => Number(prev) + 1);
                /****** [2] ******/
                const elementBottom = (Number(selectedItem) + 2) * 30;

                /****** [3] ******/
                if (elementBottom > currentScroll.current.scrollBottom) {
                    const nextItem = itemRef.current[selectedItem + 1];
                    nextItem && nextItem.scrollIntoView({ block: "end" });
                }
            }
        };
        window.addEventListener("keydown", keyPress);
        return () => {
            window.removeEventListener("keydown", keyPress);
        };
    }, [selectedItem]);

    const onClickDiv = (e) => {
        setSelectedItem(e.target.id);
    };

    const onScroll = (e) => {
        currentScroll.current = {
            scrollTop: e.target.scrollTop,
            scrollBottom: e.target.scrollTop + listHeight,
        };
    };

    const onAlbumOver = (i, j) => {
        console.log("over", i, j);
        if (j > 0) {
            for (let k = 0; k < j; k++) {
                document.getElementById(`album.${i}.${k}`).style.left = `${k / (albumList[i].length - 2) * 57 + 3}%`;
            }
            for (let k = j; k < albumList[i].length; k++) {
                document.getElementById(`album.${i}.${k}`).style.left = `${(k - 1) / (albumList[i].length - 2) * 57 + 21}%`;
            }
        }
        try {
            document.getElementById("myroomcontainer").style.background = `linear-gradient(to bottom,  ${colorList[(i,j)]} 0%, rgba(255, 255, 255, 1) 100%)`;
        } catch {
            document.getElementById("myroomcontainer").style.background = `white`;
        }
    }

    const onAlbumLeave = (i, j) => {
        console.log("leave", i, j);
        for (let k = 0; k < albumList[i].length; k++) {
            document.getElementById(`album.${i}.${k}`).style.left = `${k / (albumList[i].length - 1) * 75 + 3}%`;
        }
        document.getElementById("myroomcontainer").style.background = "white";
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
        for (let i = 0; i < albumList[j].length; i++) {
            albums.push(
                <div id={`album.${j}.${i}`}
                    style={{
                        width: "80px",
                        height: "80px",
                        backgroundSize: "contain",
                        left: `${i / (albumList[j].length - 1) * 75 + 3}%`,
                        backgroundImage: `url(${albumList[j][i]})`,
                        position: "absolute",
                        zIndex: `${albumList[j].length + 2 - i}`,
                        filter: "drop-shadow(3px 3px 3px #808080f0)"
                    }}
                    onMouseOver={() => { onAlbumOver(j, i); }}
                    onMouseLeave={() => { onAlbumLeave(j, i); }}
                >
                </div>
            );
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
                        colorList[(i,j)] = color.rgba;
                        console.log(colorList[(i,j)]);
                    })
            }
        }
    }

    const renderList = () => {
        let items = [];
        for (let i = 0; i < len; i++) {
            items.push(
                <div key={i} className={`item ${Number(selectedItem) === i ? "active" : ""}`} id={i} onClick={onClickDiv}
                    ref={(ref) => {
                        itemRef.current = { ...itemRef.current, [i]: ref };
                    }}
                    style={{
                        height: "100px",
                        alignSelf: "center",
                        justifyContent: "center",
                        position: "relative",
                        padding: "10px"
                    }} // 계산할 수 있게 사이즈를 지정했다.
                >
                    {renderItem(i)}
                </div>
            );
        }
        return items;
    };
    return (
        <div id="myroomcontainer">
            <div id="myroombg"></div>
            {renderColor()}
            <div id="myroomtop" />
            <div id="albumshelf">
                <div className="list-container">
                    {renderList()}
                </div>
            </div>
                <Link to="./musingroom">
                    <div id="gramophone" onClick={onGramo} />
                </Link>
        </div>
    );
}

export default MyRoom;