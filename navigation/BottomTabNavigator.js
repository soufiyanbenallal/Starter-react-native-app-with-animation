import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabBar from '../src/layouts/TabBar';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductScreen from '../screens/ProductScreen';
// icons, albums, notifications, cart, person

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home2"
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarIcon:{ name:'home'  }}}
      />
      <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ tabBarIcon:{name:'person'  }}}
      />
      <BottomTab.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ tabBarIcon:{name:'person'  }}}
      />
    </BottomTab.Navigator>

  );
}


