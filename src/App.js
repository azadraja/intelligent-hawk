import React, { Component } from 'react';
import { Header } from './components/Header/Header';
import { Route, Switch } from 'react-router-dom'
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Details } from './components/Details/Details';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

import './App.css';

class App extends Component {
  state = {
    mobilemenuclicked : false
  };

  handleMenuClick = () => {
    this.setState({mobilemenuclicked : !this.state.mobilemenuclicked})
  }

  render() {
    return (
      <div>
        <Header isMobileMenuActive={this.state.mobilemenuclicked} handleClick={this.handleMenuClick} />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/details' component={Details}/>
          <Route path='/about' component={About}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
