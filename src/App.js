import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';

import { Provider } from 'react-redux';
import store from './store';


import Dashboard from './components/layout/Dashboard';

import EditClient from './components/clients/EditClient';
import ClientDetails from './components/clients/ClientDetails';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Settings from './components/settings/Settings';
import PickQuiz from './components/layout/PickQuiz';
import './App.css';

import Quizzes from './components/layout/Quizzes';
import MainQuiz from './components/quiz/MainQuiz';


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            
            <div className='containr'>
              <Switch>
                <Route
                  exact
                  path='/'
                  component={UserIsAuthenticated(Dashboard)}
                />
                <Route
                  exact
                  path='/client/edit/:id'
                  component={UserIsAuthenticated(EditClient)}
                />
                <Route
                  exact
                  path='/client/:id'
                  component={UserIsAuthenticated(ClientDetails)}
                />
                <Route
                  exact
                  path='/login'
                  component={UserIsNotAuthenticated(Login)}
                />
                <Route
                  exact
                  path='/register'
                  component={UserIsNotAuthenticated(Register)}
                />
                <Route
                  exact
                  path='/settings'
                  component={UserIsAuthenticated(Settings)}
                />
                <Route
                  exact
                  path='/pickQuiz'
                  component={UserIsAuthenticated(PickQuiz)}
                />
                <Route
                  exact
                  path='/createQuiz'
                  component={UserIsAuthenticated(Dashboard)}
                />
                <Route
                  exact
                  path='/quizzes'
                  component={UserIsAuthenticated(Quizzes)}
                />
                <Route
                  exact
                  path='/quiz'
                  component={UserIsAuthenticated(MainQuiz)}
                />
                
              </Switch>
        
            </div>
            
          </div>
          
        </Router>
       
      </Provider>
    );
  }
}

export default App;
