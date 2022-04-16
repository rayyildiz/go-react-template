import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {IndexPage} from "./Pages/IndexPage";
import {LoginPage} from "./Pages/Auth/LoginPage";
import {RegisterPage} from "./Pages/Auth/RegisterPage";
import {ForgetPasswordPage} from "./Pages/Auth/ForgetPasswordPage";
import {PrivacyPage} from "./Pages/PrivacyPage";

type AppRoutesProps = {}

export const AppRoutes: FC<AppRoutesProps> = (props) => {
  return (
      <Routes>
        <Route path="/" children={<IndexPage />}/>
        <Route path='/login' children={<LoginPage />}/>
        <Route path='/signup' children={<RegisterPage />}/>
        <Route path='/forget-password' children={<ForgetPasswordPage />}/>
        <Route path='/privacy' children={<PrivacyPage />}/>
      </Routes>
  )
};
