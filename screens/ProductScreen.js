import React, {useRef} from 'react';
import {View, ScrollView, Image, Animated} from 'react-native';
import TopNavigation from '../src/layouts/TopNavigation';
import { Text } from '../src/layouts/Themed';
const BANNER_H = 350;
const ProductScreen = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <TopNavigation title="Home" scrollA={scrollA} />
      <Animated.ScrollView
        // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
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
    paddingTop: 1000,
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