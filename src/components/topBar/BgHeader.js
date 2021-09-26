import React, { useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { BlurView } from 'expo-blur';
import useColorScheme from '../../../hooks/useColorScheme';

function BgHeader({offset}) {
  const colorScheme = useColorScheme();
  const opacity = useRef(new Animated.Value(0)).current;
  const [show, setshow] = useState(false)
  const timing = (el,val)=>{
      Animated.timing(el,
          {
            toValue: val,
            duration: 200,
            useNativeDriver: true
          },
          
      ).start();
  }

  useEffect(() => {
      if (!offset) return;
      const listnerId = offset.addListener(({ value })=>{
          (value > diff ? setshow(true) : setshow(false))
      })
      return () => offset.removeListener(listnerId)
  }, [])
  
  useEffect(() => {
     if (show) 
      timing(opacity, 1)
     else
      timing(opacity,0)
  }, [show])
    return (
        <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor:'transparent'}]}>
            {/* <BlurView tint={'dark'} intensity={100} style={StyleSheet.absoluteFill} /> */}
            {/* { colorScheme === 'light' && <View style={styles.bgTint} /> } */}
             <Animated.View style={[StyleSheet.absoluteFill, {opacity,backgroundColor:'red'}]} /> 
        </Animated.View>
    )
}

export default BgHeader
const styles = StyleSheet.create({

    bgTint: {
        backgroundColor:'transparent',
      flex: 1,
      width: "100%",
      height: "100%",
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      flexDirection: 'row'
    }
  })