/**
 * @Author: Guoxing.han
 * @Date: 2017-11-30 16:15:10
 * @version 0.0.1
  */
import React, {Component} from 'react';
import {AppRegistry, Text, View, Image} from 'react-native';

import Swiper from 'react-native-swiper';
import styles from './styles'
import { setTimeout } from 'core-js/library/web/timers';

class SwiperView extends Component {
  constructor(props){
    super(props);
    this.state={
      swiperShow:false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({swiperShow: true});
    }, 0)
  }

  render() {

    if(this.state.swiperShow){
      return(
        <View style={styles.container}> 
          <Swiper
            style={styles.swiper}
            height={400}
            loop={true}
            autoplay={true}
            autoplayTimeout={2.5} //时间间隔
            horizontal={true} //水平方向
            paginationStyle={{bottom:10}}
            showsButtons={false}
            showsPagination={true}
            dot={
              <View style={styles.dot}></View>
            }
            activeDot={
              <View style={styles.activeDot}></View>
            }>
            <Image source={require('../../../assist/images/banner.jpg')} style={styles.img} resizeMode='stretch'/>
            <Image source={require('../../../assist/images/banner.jpg')} style={styles.img} resizeMode='stretch'/>

          </Swiper> 
        </View>
      )
    }
    else{
      return(
        <View style={styles.container}>
          <Text style={styles.text}>正在加载…</Text>
        </View>
      )
    }
  }
}

export {SwiperView}