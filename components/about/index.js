/**
 * @Author: Guoxing.han
 * @Date: 2017-11-20 14:19:33
 * @version 0.0.1
  */
import React, {Component} from 'react';
import {View, Text, Image, findNodeHandle} from 'react-native';

import ImageButton from './../common/imageButton'

class About extends Component {
  constructor(props){
    super(props)
    this.state={
      viewRef:null
    }
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        
      </View>
    );
  }
}

export default About;