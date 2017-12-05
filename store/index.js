/**
 * @Author: Guoxing.han
 * @Date: 2017-11-23 15:52:42
 * @version 0.0.1
 */
//import { homeStore } from './homeStore'
import { observable } from 'mobx/lib/api/observable';

class observableStore {
  @observable list = []
}

const store = new observableStore()

export {store}