import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Header from "./Header";
const Home = (props) => {
  const handleLogin = () => {
    window.location =
      "https://accounts.spotify.com/ko/authorize?client_id=bcb45f6c1ff34b4c976b4b192062796c&redirect_uri=http:%2F%2Flocalhost:3000%2Fredirect&response_type=token&show_dialog=true";
  };
  return (
    <div className="login">
      <Header />
      <Button variant="info" type="submit" onClick={handleLogin}>
        Login to spotify
      </Button>
    </div>
  );
};

//const styles = {};
export default connect()(Home);
