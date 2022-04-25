import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabBar from '../src/layouts/TabBar';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProductScreen from '../screens/ProductScreen';
// icons, albums, notifications, cart, person

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }} >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarIcon:{ name:'home'  }}}
      />
      <BottomTab.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ tabBarIcon:{name:'albums'  }}}
      />
      <BottomTab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ tabBarIcon:{ name:'person'  }}}
      />
    </BottomTab.Navigator>

  );
}


