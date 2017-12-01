/**
 * @Author: Guoxing.han
 * @Date: 2017-12-01 16:42:37
 * @version 0.0.1
  */
import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window')
export default styles = StyleSheet.create({
  container: {
    width
  },
  navBtn: {
    position: 'absolute',
    zIndex: 10,
    left: 10,
    top: 20,
    width: 20,
    height: 20
  },
  bg: {
    width,
    height: 250,
    position: 'relative',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  portrait: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 70,
    height: 70,
    top: '50%',
    left: '50%',
    marginTop: -35,
    marginLeft: -35,
    borderRadius: 70,
    overflow: 'hidden'
  },
  portraitImg: {
    width: 70,
    height: 70
  }
})