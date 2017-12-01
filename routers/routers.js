/**
 * @Author: Guoxing.han
 * @Date: 2017-11-20 12:00:21
 * @version 0.0.1
 * StackNavigator :类似于普通的Navigator，实现不同的页面进行跳转 https://reactnavigation.org/docs/navigators/stack
 * DrawerNavigator :抽屉导航
 */
import {DrawerNavigator} from 'react-navigation';
import Home from '../components/home';
import About from '../components/about';
import Item from '../components/item';

const ModalNavigator = DrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: '首页',
      headerStyle: {
        //backgroundColor: '#000'
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }
  },
  About: {
    screen: About
  },
  Item: {
    screen: Item,
    path: 'item/:id'
  }
}, {
  drawerWidth: 200, // 抽屉宽
  drawerPosition: 'left', // 抽屉在左边还是右边]
  contentOptions: {
    initialRouteName: 'Home', // 默认页面组件
    activeItemKey: 'Notifications',
    labelStyle: {
      height: 20
    },
    activeTintColor: '#fff', // 选中文字颜色
    activeBackgroundColor: '#666', // 选中背景颜色
    inactiveTintColor: '#666', // 未选中文字颜色
    inactiveBackgroundColor: '#fff', // 未选中背景颜色
    style: { // 样式
      marginVertical: 0,
    }
  }
})

export default ModalNavigator;