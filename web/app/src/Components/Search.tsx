import React, {FC, FormEvent, useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import {createStyles, fade, InputBase, makeStyles, Theme} from "@material-ui/core";


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
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 180,
          '&:focus': {
            width: 240,
          },
        },
      },
    }),
);


type SearchProps = {}


export const Search: FC<SearchProps> = (props) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const doSearch = async (e: FormEvent) => {
    e.preventDefault();
  };

  return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon/>
        </div>
        <form onSubmit={doSearch}>
          <InputBase
              placeholder="Search…"
              value={searchTerm}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{'aria-label': 'search'}}
              onChange={event => setSearchTerm(event.target.value)}
          />
        </form>
      </div>
  )
};
