import React, { useRef } from 'react';
import { StyleSheet,Animated, Button } from 'react-native';
import { Text  } from '../src/layouts/Themed';
import Main from '../src/layouts/Main';
import { Avatar } from 'react-native-paper';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Fix it',
          onPress: () => setVisible(false),
        },
        {
          label: 'Learn more',
          onPress: () => setVisible(false),
        },
      ]}
      icon={({size}) => (
        <Image
          source={{
            uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
          }}
          style={{
            width: size,
            height: size,
          }}
        />
      )}>
      There was a problem processing a transaction on your credit card.
    </Banner>
  );
};
export default function HomeScreen({navigation}) {

  return (
        <Main style={styles.container} navigation={navigation} title='Home Screen'>

        <Avatar.Text size={38} label="XD" />
        <MyComponent />
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
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
