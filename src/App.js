  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import WebCard from './components/WebCard';
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
      <div className={classes.grow}>
        <Container maxWidth="lg">
          <div>
            <Grid container spacing={2}>
              {
                Array.from(Array(100), (_,x) => x).map(i => <Grid item className={classes.paper} xs={3}><WebCard/></Grid>)
              }
            </Grid>
          </div>
        </Container>
      </div>
  );
}