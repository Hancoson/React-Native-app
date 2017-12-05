/**
 * @Author: Guoxing.han
 * @Date: 2017-11-23 16:11:44
 * @version 0.0.1
 * 首页store
 */
import {observable} from 'mobx'

class HomeStore {
  @observable list = [];
}
const homeStore = new HomeStore()

export default homeStore