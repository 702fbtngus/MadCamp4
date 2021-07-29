import React from "react";
import _ from "lodash";
import { getParamValues } from "../utils/functions";
import axios from "axios";
import { firestore } from "../fbase";

export default class RedirectPage extends React.Component {
  componentDidMount() {
    const { setExpiryTime, history, location } = this.props;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push("/dashboard");
      }

      const access_token = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem("params", JSON.stringify(access_token));
      localStorage.setItem("expiry_time", expiryTime);
      setExpiryTime(expiryTime);
      const params = JSON.parse(localStorage.getItem("params"));
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${params.access_token}`,
      };
      axios
        .get("https://api.spotify.com/v1/me", { headers })
        .then((res) => {

          console.log(res.data.email);
          localStorage.setItem('email', res.data.email)
          firestore.collection('users').doc(res.data.email).set({
            playlists: []
          }).then(function () {
            console.log(1)
            history.push("/playdashboard");
          }).catch(function (error) {
            console.log('error', error)
          })


        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      history.push("/");
    }
  }

  render() {
    return null;
  }
}
