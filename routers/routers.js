/**
 * @Author: Guoxing.han
 * @Date: 2017-11-20 12:00:21
 * @version 0.0.1
 */
import { StackNavigator } from 'react-navigation';
import Home from '../components/home';
import About from '../components/about';

const ModalNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  About: {
    screen: About
  }
})
export default ModalNavigator;