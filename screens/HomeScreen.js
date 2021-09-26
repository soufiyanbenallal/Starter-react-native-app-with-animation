import React, { useRef } from 'react';
import { StyleSheet,Animated, Button } from 'react-native';
import { Text  } from '../src/layouts/Themed';
import Main from '../src/layouts/Main';
export default function HomeScreen({navigation}) {

  return (
        <Main style={styles.container} navigation={navigation} title='Home Screen'>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('ProductScreen')}
          />
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
        </Main>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#444'
  }
});
