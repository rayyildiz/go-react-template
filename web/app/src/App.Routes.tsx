import React, {FC} from "react";
import {Route, Switch} from "react-router-dom";
import {IndexPage} from "./Pages/IndexPage";
import {LoginPage} from "./Pages/Auth/LoginPage";
import {RegisterPage} from "./Pages/Auth/RegisterPage";
import {ForgetPasswordPage} from "./Pages/Auth/ForgetPasswordPage";
import {PrivacyPage} from "./Pages/PrivacyPage";

type AppRoutesProps = {}

export const AppRoutes: FC<AppRoutesProps> = (props) => {
  return (
      <Switch>
        <Route exact={true} path="/" component={IndexPage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/signup' component={RegisterPage}/>
        <Route path='/forget-password' component={ForgetPasswordPage}/>
        <Route path='/privacy' component={PrivacyPage}/>
      </Switch>
  )
};
