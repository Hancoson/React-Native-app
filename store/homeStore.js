/**
 * @Author: Guoxing.han
 * @Date: 2017-11-23 16:11:44
 * @version 0.0.1
 * 首页store
 */
import {observable, action} from 'mobx'

class HomeStore {
  @observable list;

  constructor() {
    this.list = 0
  }

  //
  @action addList = (items) => {
    this.list += 1
  }
}
const homeStore = new HomeStore()

export default homeStore