import React from 'react';
import RootNav from './navigations/Root'
import store from './store'

//SCREENS
import { Provider } from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNav/>
      </Provider>
    );
  }
}
