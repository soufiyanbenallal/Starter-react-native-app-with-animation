import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NotFoundScreen from '../screens/NotFoundScreen';
import ProductScreen from '../screens/ProductScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
// import LinkingConfiguration from './LinkingConfiguration';
const Stack = createStackNavigator();
const Header = ({light}) => 
  <View style={{backgroundColor: light ? '#efefef33' : '#33333333'}}>
    <SafeAreaView>
      <StatusBar
        barStyle={light?'dark-content':"light-content"}
        backgroundColor="#6a51ae"
      />
      <View style={{padding: 16}}>
        <Text style={{color: light ? '#333' : '#fff'}}>Hi there!</Text>
      </View>
    </SafeAreaView>
  </View>

export default function Navigation({ colorScheme }) {
  return (
    // linking={LinkingConfiguration}
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Root" options={{headerShown: false}} component={BottomTabNavigator} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
