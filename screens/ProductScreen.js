import React, {useLayoutEffect, useRef} from 'react';
import {View, ScrollView, Image, Animated, Button, StyleSheet} from 'react-native';
import { Text } from '../src/layouts/Themed';
import { BlurView } from 'expo-blur';
import global from "../constants/Layout";
const BANNER_H = global.window.width;

const ProductScreen = ({navigation}) => {
  const scrollA = useRef(new Animated.Value(0)).current;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Update count" />
      ),
      title: <Text>sofiyan</Text>,
      headerTransparent: true,
      headerBackground: () => (<BlurView tint="default" intensity={100} style={StyleSheet.absoluteFill} />),
    });
  }, [])
  return (
    <View>
      <Animated.ScrollView
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollA}}}],{useNativeDriver: true},)}
        scrollEventThrottle={16}
      >
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={{uri:'https://raw.githubusercontent.com/bungferdly/ScrollAnimation-RN/master/src/banner.jpg'}}
          />
        </View>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text style={{backgroundColor:'red',flex: 1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text style={{backgroundColor:'red',flex: 1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text style={{backgroundColor:'red',flex: 1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text style={{backgroundColor:'red',flex: 1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
        <Text>jchdfdjhfj</Text>
      </Animated.ScrollView>
    </View>
  );
};

const styles = {
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000 + 20,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
};

export default ProductScreen;