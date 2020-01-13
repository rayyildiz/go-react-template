import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Container, createStyles, CssBaseline, makeStyles, Theme, ThemeProvider} from "@material-ui/core";
import {AppRoutes} from "./App.Routes";
import {Header} from "./Components/Header";
import {createMuiTheme} from '@material-ui/core/styles';
import {deepOrange, red} from "@material-ui/core/colors";


const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: deepOrange,
  },
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      main: {
        paddingLeft: 0,
        paddingRight: 0
      },
      paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        marginRight: theme.spacing(4),
        marginLeft: theme.spacing(4),
      },
    }));

const App: React.FC = () => {
  const classes = useStyles();

  return (
      <BrowserRouter>
        <Container component="main" className={classes.main} maxWidth="xl">
          <CssBaseline/>
          <ThemeProvider theme={theme}>
            <Header/>
            <div className={classes.paper}>
              <AppRoutes/>
            </div>
          </ThemeProvider>
        </Container>
      </BrowserRouter>
  );
};

export default App;
