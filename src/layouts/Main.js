import React, { Children, useRef } from 'react';
import { StyleSheet,Animated, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from './Themed';
import BgHeader from '../components/topBar/BgHeader';
import ShowTitle from '../components/topBar/ShowTitle';
import ZoomTitle from '../components/topBar/ZoomTitle';

export default function Main({navigation,title ,headerRight, headerLeft,style,children }) {
  const offset = useRef(new Animated.Value(0)).current;

  React.useLayoutEffect(() => {
        navigation.setOptions({
            //   headerRight,
            //   headerLeft,
            headerTitle: () => <ShowTitle offset={offset}>{title}</ShowTitle>,
            headerTransparent: true,
            headerBackground: () => <BgHeader />,
            });
  }, [navigation]);

  return (
    <SafeAreaView  forceInset={{ top: 'always' }}>
        <Animated.ScrollView  
          contentContainerStyle={{
              paddingTop:50
            }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: offset } } }],
              {useNativeDriver: true}
              )}>
<Button
  title="Update the title"
  onPress={() => navigation.navigate('NotFound')}
/>
              <ShowTitle offset={offset}>{title}</ShowTitle>
              <ZoomTitle offset={offset} >{title}</ZoomTitle>
            {children}
{/* <Button
  title="Update the title"
  onPress={() => navigation.setOptions({ headerTitle:() => <ShowTitle offset={offset}>{title}</ShowTitle> })}
/> */}
        </Animated.ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'transparent'
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
