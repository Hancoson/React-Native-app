/**
 * @Author: Guoxing.han
 * @Date: 2017-11-20 15:33:46
 * @version 0.0.1
 */
import React from 'react';
//import {Provider} from 'mobx-react'

//import {store} from '../store/index'
import ModalNavigator from './../routers/routers';

const App = () => {
  /* return (
    <Provider store={store}>
      <ModalNavigator/>
    </Provider>
  ) */
  return <ModalNavigator/>
};

export default App;
