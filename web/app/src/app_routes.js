import React from 'react'
import IndexPage from "./pages/index_page";
import PrivacyPage from "./pages/privacy_page";
import {Route, Switch} from "react-router-dom";

const AppRoutes = () => (
  <Switch>
    <Route path='/' exact component={IndexPage}/>
    <Route path='/privacy' component={PrivacyPage}/>
  </Switch>
);

export default AppRoutes;
