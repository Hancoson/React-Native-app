/**
 * @Author: Guoxing.han
 * @Date: 2017-11-20 14:18:35
 * @version 0.0.1
  */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Home extends Component {

  static navigationOptions = {
    title: 'Welcome', //在导航中显示的标题内容
  };
  render() {
    //这里可以是导入的其他组件
    const {navigate} = this.props.navigation;

    console.log(this)

    return (
      <View>
        <Text>
          Hello, Chat App !</Text>
        <Button onPress= { () => navigate('About') } title="Chat with Lucy"/>
      </View>
    )
  }
}

export default Home;