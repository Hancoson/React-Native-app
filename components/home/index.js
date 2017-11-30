/**
 * @Author: Guoxing.han
 * @Date: 2017-11-20 14:18:35
 * @version 0.0.1
  */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import {SwiperView} from './swiper/swiper'

class Home extends Component {

  static navigationOptions = {
    title: '首页', //在导航中显示的标题内容
  };
  render() {
    //这里可以是导入的其他组件
    const {navigate} = this.props.navigation;
    return (
      <View>
        <View>
          <SwiperView/>
        </View>
        
        {/*<Text>
          Hello, Chat App1231 !</Text>
        <Button onPress= { () => navigate('About') } title="About"/>
        <Button onPress= { () => navigate('Item',{id:1}) } title="Item"/>
        */}
      </View>
    )
  }
}

export default Home;