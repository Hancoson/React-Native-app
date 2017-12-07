/**
 * @Author: Guoxing.han
 * @Date: 2017-11-20 14:18:35
 * @version 0.0.1
  */
import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

// import ImageButton from './../common/imageButton' import {SwiperView} from
// './swiper/swiper' import styles from './styles'

class Home extends Component {

  render() {
    const {navigate} = this.props.navigation;
    //const {list, addList} = this.props.store;

    console.log(this.props)
    const _s = JSON.stringify(this.props)

    return (
      <View>
        <Text style={{
          marginTop: 300
        }}>hahah-{`${_s}`}</Text>
      </View>
    )

    /*return (
      <View style={styles.container}>
         <ImageButton
          onPress={() => navigate('DrawerOpen')}
          style={styles.navBtn}
          source={require('../../assist/images/nav.png')}></ImageButton>
        <Text style={{
          marginTop: 300
        }}>{`${_s}`}</Text>

         <View>
          <Text>{list}</Text>
          <Button onPress = {()=>addList}></Button>
        </View>

        <View>
          <SwiperView/>
        </View>

        <Text>
          Hello, Chat App1231 !</Text>
        <Button onPress= { () => navigate('About') } title="About"/>
        <Button onPress= { () => navigate('Item',{id:1}) } title="Item"/>

      </View>
    )*/
  }
}

export default Home;