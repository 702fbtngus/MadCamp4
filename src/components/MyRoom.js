import React from "react";
import { render } from "react-dom";
import { useEffect, useRef, useState } from "react";
import "../style.css";
/*
const MyRoom = () => {
  return <h1 className="main-heading">My Room</h1>;
};

export default MyRoom;*/

export default function MyRoom() {
  const len = 60;
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

  const renderList = () => {
    let items = [];
    for (let i = 1; i <= len; i++) {
      items.push(
        <div
          key={i}
          className={`item ${Number(selectedItem) === i ? "active" : ""}`}
          id={i}
          onClick={onClickDiv}
          ref={(ref) => {
            itemRef.current = { ...itemRef.current, [i]: ref };
          }}
          /****** [2] ******/
          style={{
            height: "100px",
            alignSelf: "center",
            justifyContent: "center",
          }} // 계산할 수 있게 사이즈를 지정했다.
        >
          Item{i}.png
        </div>
      );
    }
    return items;
  };
  return (
    <div className="App">
      <div className="list-container" onScroll={onScroll} ref={containerRef}>
        {renderList()}
      </div>
    </div>
  );
}
