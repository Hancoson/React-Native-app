/**
 * @Author: Guoxing.han
 * @Date: 2017-11-20 12:00:21
 * @version 0.0.1
 * StackNavigator :类似于普通的Navigator，实现不同的页面进行跳转 https://reactnavigation.org/docs/navigators/stack
 */
import {StackNavigator} from 'react-navigation';
import Home from '../components/home';
import About from '../components/about';
import Item from '../components/item';

const ModalNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  About: {
    screen: About
  },
  Item: {
    screen: Item,
    path: 'item/:id'
  }
})
export default ModalNavigator;