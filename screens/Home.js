import React, { useRef } from 'react';
import { ScrollView, StyleSheet,Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View  } from '../components/Themed';
import AnimatedHeader from '../src/layouts/AnimatedHeader';
export default function Home() {
  const offset = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView  forceInset={{ top: 'always' }}>
        <AnimatedHeader animatedValue={offset} title="Home" />
        <Animated.ScrollView  
          contentContainerStyle={{
            alignItems: 'center',
            paddingTop:100
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            {useNativeDriver: true}
          )}> 

        <View style={styles.container}>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text style={{backgroundColor:'red',flex: 1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text style={{backgroundColor:'red',flex: 1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text style={{backgroundColor:'red',flex: 1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
              <Text style={{backgroundColor:'red',flex: 1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate magni optio dolores commodi! Earum, expedita repellendus? Ipsa cupiditate a quo rerum, perspiciatis quaerat assumenda, suscipit reiciendis incidunt natus explicabo!</Text>
        </View>
        </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'transparent'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
