/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Platform
} from 'react-native';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import Navigator from './app/Navigator.js';
import reducers from './app/reducers';


export default class App extends Component<{}> {

  render() {
    return (
        <Provider store={createStore(reducers,{},applyMiddleware(reduxThunk))}>
            <Navigator style = {styles.container}/>
        </Provider>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
