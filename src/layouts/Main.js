import React, { Children, useRef } from 'react';
import { StyleSheet,Animated, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { View } from './Themed';
import BgHeader from '../components/topBar/BgHeader';
import ShowTitle from '../components/topBar/ShowTitle';
import ZoomTitle from '../components/topBar/ZoomTitle';
import { IconButton, Colors } from 'react-native-paper';
const Buttons = () => (
  <IconButton
    icon="camera"
    color={Colors.red500}
    size={20}
    onPress={() => console.log('Pressed')}
  />
);
export default function Main({navigation,title ,headerRight = null, headerLeft=null,style,children }) {
  const offset = useRef(new Animated.Value(0)).current;

  React.useLayoutEffect(() => {
        navigation.setOptions({
              headerRight,
              headerLeft,
            headerTitle: () => <ShowTitle offset={offset}>{title}</ShowTitle>,
            headerTransparent: true,
            headerBackground: () => <BgHeader />,
            });
  }, [navigation]);

  return (
    <SafeAreaView  forceInset={[{ top: 'always' },style]}>
        <Animated.ScrollView  
          contentContainerStyle={{paddingTop: 10}}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: offset } } }],
              {useNativeDriver: true}
              )}>

              <View style={{flex:1,flexDirection:'row', paddingHorizontal: 10}}>
                <ZoomTitle offset={offset} style={{flexGrow: 1}} size={32}>{title}</ZoomTitle>
                <Buttons />
              </View>
            {children}
        </Animated.ScrollView>
    </SafeAreaView>
  );
}
