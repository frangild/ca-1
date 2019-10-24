import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import TabBar from './components/tabbar';
import Achievements from './components/achievements';
import Home from './components/home';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <TabBar/>  
              <Route exact path="/" component={Home}/>
              <Route path="/achievements" component={Achievements}/>
            </BrowserRouter>
        );
    }
}

export default App;