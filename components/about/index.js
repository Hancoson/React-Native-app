/**
 * @Author: Guoxing.han
 * @Date: 2017-11-20 14:19:33
 * @version 0.0.1
  */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class About extends Component {

  static navigationOptions = {
    title: 'Chat with Lucy'
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

export default About;