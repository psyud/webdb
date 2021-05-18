import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import Detail from './Detail';
import Me from './Me';
import NotFound from './NotFound';

import reportWebVitals from './reportWebVitals';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Search from './Search';

ReactDOM.render(
  <ThemeProvider>
    <CssBaseLine/>
      <BrowserRouter  onUpdate={() => window.scrollTo(0, 0)} >
        <ScrollToTop/>
        <Header/>
        <div style={{ marginTop: 90, display: 'block'}}/>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path='/me' component={Me}/>
          <Route exact path="/app/:url" component={Detail}/>
          <Route exact path="/search" component={Search}/>
          <Route path='' component={NotFound}/>
        </Switch>
      </BrowserRouter>
  </ThemeProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
