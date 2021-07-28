import React from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Header from "./Header";
import { Redirect } from "react-router-dom";
import App from "../App";

const Home = (props) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    window.location =
      "https://accounts.spotify.com/authorize?response_type=token&client_id=bcb45f6c1ff34b4c976b4b192062796c&redirect_uri=http:%2F%2Flocalhost:3000%2Fredirect&show_dialog=true&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
  };

  const { isValidSession, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;
  /*
  return (
    <React.Fragment>
      {isValidSession() ? (
        <Redirect to="/playdashboard" />
      ) : (
        <div className="login">
          <Header />
          {sessionExpired && (
            <Alert variant="info">Session expired. Please login again.</Alert>
          )}
          <Button variant="info" type="submit" onClick={handleLogin}>
            Login to spotify
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};*/

  return (
    <React.Fragment>
      <div>
        <App />
      </div>
      )
    </React.Fragment>
  );
};

export default connect()(Home);
