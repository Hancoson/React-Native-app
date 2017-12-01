/**
 * @Author: Guoxing.han
 * @Date: 2017-11-20 14:19:33
 * @version 0.0.1
  */
import React, {Component} from 'react';
import {View, Text, Image, findNodeHandle} from 'react-native';
import {BlurView} from 'react-native-blur'

import styles from './styles'
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
      <View style={styles.container}>
        <ImageButton
          onPress={() => navigate('DrawerOpen')}
          style={styles.navBtn}
          source={require('../../assist/images/arrow-left.png')}></ImageButton>

        <Image
          style={styles.bg}
          resizeMode='cover'
          source={require('../../assist/images/about-bg.jpg')}></Image>
        {/* <BlurView
          style={styles.bg}
          viewRef={this.state.viewRef}
          blurType="light"
        blurAmount={10}></BlurView> */}
        <View style={styles.portrait}>
          <Image style={styles.portraitImg} source={require('../../assist/images/598190a04_xl.jpg')}></Image>
        </View>


        <ImageButton
          onPress={() => navigate('DrawerOpen')}
          style={styles.navBtn}
          source={require('../../assist/images/arrow-left.png')}></ImageButton>
      </View>
    );
  }
}

export default About;