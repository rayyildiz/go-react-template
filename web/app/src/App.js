import React from 'react';
import './App.css';
import {Container} from "semantic-ui-react";
import AppHeader from "./components/app_header";
import {BrowserRouter, Link} from "react-router-dom";
import {createBrowserHistory} from 'history';
import * as ReactGA from 'react-ga';
import {ENABLE_TRACK_PANEL, GA_TRACK_ID} from "./constants";
import CookieConsent from "react-cookie-consent";
import AppRoutes from "./app_routes";

const App = () => {
  const history = createBrowserHistory();
  if (ENABLE_TRACK_PANEL) {
    history.listen(location => {
      ReactGA.set({page: location.pathname});
      ReactGA.pageview(location.pathname);
    });
  }

  const onAccept = () => {
    if (ENABLE_TRACK_PANEL) {
      try {
        ReactGA.initialize(GA_TRACK_ID);
      } catch (e) {
        console.error(e)
      }
    }
  };

  const onDecline = () => {
    if (ENABLE_TRACK_PANEL) {
      try {
        console.log("declined");
      } catch (e) {
        console.error(e)
      }
    }
  };

  return (
    <Container>
      <BrowserRouter>
        <AppHeader/>
        <AppRoutes/>

        {ENABLE_TRACK_PANEL && <CookieConsent
          onAccept={onAccept}
          onDecline={onDecline}
          location="bottom"
          cookieName="askForCookie"
          expires={180}
        >
          This website uses cookies to enhance the user experience. <Link to='/privacy'>More information</Link>
        </CookieConsent>}
      </BrowserRouter>
    </Container>
  );
};

export default App;
