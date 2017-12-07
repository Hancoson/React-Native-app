/**
 * @Author: Guoxing.han
 * @Date: 2017-11-20 15:33:46
 * @version 0.0.1
 */
import React from 'react';
import {observe} from 'mobx';
import {Provider} from 'mobx-react'

import * as stores from '../store/index'
import ModalNavigator from './../routers/routers';

const App = () => {

  console.log(...stores)

  return (
    <Provider {...stores}>
      <ModalNavigator/>
    </Provider>
  )
};

export default App;
