/**
 * @Author: Guoxing.han
 * @Date: 2017-11-30 16:33:18
 * @version 0.0.1
  */
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window')
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center'
  },
  swiper: {},
  img: {
    flex: 1,
    width,
    height: 400
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 18,
    height: 18,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 9,
    marginTop: 9,
    marginBottom: 9
  },
  activeDot: {
    backgroundColor: '#007aff',
    width: 18,
    height: 18,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 9,
    marginTop: 9,
    marginBottom: 9
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
})