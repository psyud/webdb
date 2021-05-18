  
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, FormControl, IconButton, InputBase, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { AccountCircle } from '@material-ui/icons';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Fantasy",
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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
    padding: theme.spacing(0, 2),
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
}));


export default function Header() {
    const classes = useStyles();

    const [ term, setTerm ] = useState('');
    const history = useHistory();

    const handleSearch = e => {
        e.preventDefault();
        if(term.length < 1){
            return;
        }
        history.push(`/search`, {
            term
        });
        setTerm('')
    }

    return (
    <AppBar position="fixed">
          <Toolbar>
                <IconButton color="inherit">
                    <Link to="/" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>
                        <Typography variant="h4" className={classes.title} noWrap>WebDb</Typography>
                    </Link>
                </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <form onSubmit={handleSearch}>
                <InputBase
                    placeholder="Search…"
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                />
              </form>
              
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <Link to="/me" style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                    <IconButton color="inherit">
                    <AccountCircle/>
                    </IconButton>
                </Link>
            </div>
          </Toolbar>
        </AppBar>
  );
}