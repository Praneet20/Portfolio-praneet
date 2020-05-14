import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Components/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './Components/Resume';
import portfolio from './Components/portfolio'
import Contacts from './Components/Contacts'


import './App.css';

function App() {
  return (
    <>
      <CssBaseline/>
   
  <Route exact path="/" component={Home}/>
  <Route path="/resume" component={Resume}/>
  <Route path="/portfolio" component={portfolio}/>
  <Route path="/contacts" component={Contacts}/>
    </>
  );
}

export default App;
