/**
 * @Author: Guoxing.han
 * @Date: 2017-11-20 14:19:33
 * @version 0.0.1
  */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Item extends Component {
  constructor(props) {
    super(props)
    const {navigation} = this.props;
    this.params = navigation.state.params.id;
  }

  static navigationOptions = {
    title: 'Item'
  };
  render() {
    console.log(this.params)
    return (
      <View>
        <Text>item-{this.params}</Text>
      </View>
    );
  }
}

export default Item;