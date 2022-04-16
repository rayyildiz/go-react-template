import React from "react";
import {AppBar, Button, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import {useNavigate} from "react-router-dom";
import {Search} from "./Search";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
        cursor: 'pointer',
      },
    }),
);

export const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => navigate("/")}>
              <HomeIcon />
            </IconButton>
            
            <Typography variant="h6" className={classes.title} onClick={() => navigate("/")}>
              Go React Template
            </Typography>

            <Search/>
            <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
  )
};
