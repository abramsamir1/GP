import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Home from './src/Home';
import VisitedPlaces from './src/VisitedPlaces';
import reducers from './src/reducers';

class App extends Component {
constructor() {
super();
console.disableYellowBox = true;
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Home />
      </Provider>
    );
  }
}
export default App;
