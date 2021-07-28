import React from "react";
import "./LP.css";

const lp = () => {
  const BookOpen = () => {
    console.log("onclick");
    document.getElementById("music").play();
    document.getElementById("record").style.animation =
      "spin 3s linear infinite running";
    document.getElementById("arm").style.animation =
      "armwobble 10s ease-in-out infinite running";
    document.getElementById("leftpage").style.animation =
      "leftpageflip 2s running";
    document.getElementById("leftpage").style.animationFillMode = "both";
    document.getElementById("book").style.animation = "bookflip 2s running";
    document.getElementById("book").style.animationFillMode = "both";
    document.getElementById("button1").style.zIndex = 40;
    document.getElementById("button2").style.zIndex = 40;
  };

  const Gujul = () => {
    console.log("gujul");
    document.getElementById("music").pause();
    document.getElementById("record").style.animation =
      "spin 3s linear infinite paused";
    document.getElementById("arm").style.animation =
      "armwobble 10s ease-in-out infinite paused";
    document.getElementById("leftpage").style.animation =
      "leftpagerevflip 2s running";
    document.getElementById("leftpage").style.animationFillMode = "both";
    document.getElementById("book").style.animation = "bookrevflip 2s running";
    document.getElementById("book").style.animationFillMode = "both";
    document.getElementById("button1").style.zIndex = 21;
    document.getElementById("button2").style.zIndex = 21;
  };

  const handleLogin = () => {
    window.location =
      "https://accounts.spotify.com/ko/authorize?client_id=bcb45f6c1ff34b4c976b4b192062796c&redirect_uri=http:%2F%2Flocalhost:3000%2Fredirect&response_type=token&show_dialog=true";
  };

  return (
    <div id="allcontainer">
      <div id="logincontainer">
        <div id="book"></div>
        <div id="leftpage" />
        <div id="rightpage" onClick={Gujul} />
        <div id="button1" onClick={handleLogin} />
        <div id="button2" onClick={Gujul} />
        <div id="bookshadow" />
        <div id="bookbutton" onClick={BookOpen} />
        <div id="lpcontainer">
          <div id="container">
            <audio id="music" src="https://www.mboxdrive.com/lofimusic.mp3" />
            <div id="group">
              <div id="glow" />
              <div id="record" />
              <div id="arm" />
              <div id="top" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default lp;
