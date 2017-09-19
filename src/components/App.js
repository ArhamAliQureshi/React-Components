/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
// import { Switch, NavLink } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import EntityWorkBoard from './EntityWorkBoard.jsx';
import StatusWizard from './StatusWizard.jsx';
import EntitySearch from './EntitySearch/EntitySearch.jsx';
// import HomePage from './HomePage';
import FuelSavingsPage from '../containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    // const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          {/*<NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>*/}
          {/*{' | '}*/}
          {/*<NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>*/}
          {/*{' | '}*/}
          {/*<NavLink to="/about" activeStyle={activeStyle}>About</NavLink>*/}
        </div>
        <Switch>
          <Route exact path="/" component={EntitySearch} />
          <Route exact path="/statusWizard" component={StatusWizard} />
          <Route exact path="/entityWorkboard" component={EntityWorkBoard} />
          <Route path="/fuel-savings" compo  nent={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
