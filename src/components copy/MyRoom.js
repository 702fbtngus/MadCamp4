import React from "react";
import { render } from "react-dom";
import { useEffect, useRef, useState } from "react";
// import "../style.css";
import './MyRoom.css';
import { func } from "prop-types";

const MyRoom = () => {

    const mo = () => {
        console.log("mouse over");
        document.getElementById("main-heading").textContent = "My ......... Room";
    }

    const ml = () => {
        console.log("mouse leave");
        document.getElementById("main-heading").textContent = "My Room";
    }

    const albumList = ["https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40586/4058623.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40553/4055320.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204073/20407398.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203973/20397321.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/203980/20398006.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/204017/20401773.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40491/4049180.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/154325/15432584.jpg?version=undefined",
        "https://image.bugsm.co.kr/album/images/original/40400/4040011.jpg?version=undefined"];

    const len = 1;
    const listHeight = 300;
    const [selectedItem, setSelectedItem] = useState(1); // item's index number

    /****** [1] ******/
    const itemRef = useRef({});
    const currentScroll = useRef({ scrollTop: 0, scrollBottom: listHeight });
    const containerRef = useRef();

    useEffect(() => {
        const keyPress = (e) => {
            if (e.key === "ArrowLeft") {
                // ?????? ????????? ???
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
                // ????????? ????????? ???
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
                document.getElementById(`album.${i}.${k}`).style.left = `${k / (albumList.length - 2) * 57 + 3}%`;
            }
            for (let k = j; k < albumList.length; k++) {
                document.getElementById(`album.${i}.${k}`).style.left = `${(k - 1) / (albumList.length - 2) * 57 + 21}%`;
            }
        }
    }

    const onAlbumLeave = (i, j) => {
        console.log("leave", i, j);
        for (let k = 0; k < albumList.length; k++) {
            document.getElementById(`album.${i}.${k}`).style.left = `${k / (albumList.length - 1) * 75 + 3}%`;
        }
    }

    const onGramo = () => {
        window.location =
          "https://accounts.spotify.com/ko/authorize?client_id=bcb45f6c1ff34b4c976b4b192062796c&redirect_uri=http:%2F%2Flocalhost:3000%2Fredirect&response_type=token&show_dialog=true";
    };

    const renderItem = (j) => {
        let albums = [];
        for (let i = 0; i < albumList.length; i++) {
            albums.push(
                <div id={`album.${j}.${i}`}
                    style={{
                        width: "80px",
                        height: "80px",
                        backgroundSize: "contain",
                        left: `${i / (albumList.length - 1) * 75 + 3}%`,
                        backgroundImage: `url(${albumList[i]})`,
                        position: "absolute",
                        zIndex: `${albumList.length + 2 - i}`
                    }}
                    onMouseOver={() => { onAlbumOver(j, i); }}
                    onMouseLeave={() => { onAlbumLeave(j, i); }}
                >

                </div>
            );
        }
        return albums;
    }

    const renderList = () => {
        let items = [];
        for (let i = 1; i <= len; i++) {
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
                    }} // ????????? ??? ?????? ???????????? ????????????.
                >
                    {renderItem(i)}
                </div>
            );
        }
        return items;
    };
    return (
        <div className="App">
            <div id="main-heading" onMouseOver={mo} onMouseLeave={ml}>My Room</div>
            <div className="list-container" onScroll={onScroll} ref={containerRef}>
                {renderList()}
            </div>
            <div id="gramophone" onClick={ onGramo }/>
        </div>
    );
}

export default MyRoom;