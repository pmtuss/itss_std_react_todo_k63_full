import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import firebase from "../lib/firebase";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function Login() {
  return (
    <div className="column panel-block">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth} />
    </div>
  );
}

export default Login;