/**
 * @Author: Guoxing.han
 * @Date: 2017-12-01 11:53:10
 * @version 0.0.1
  */
import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window')
export default styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: '#999'
  },
  navBtn: {
    position: 'absolute',
    left: 10,
    top: 20,
    width: 20,
    height: 20
  }
})