import React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import TabBarIcon from '../components/tabBar/TabBarIcon';
import { BlurView } from 'expo-blur';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// icons, albums, notifications, cart, person

export default function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const colorScheme = useColorScheme();
  if (focusedOptions.tabBarVisible === false) return null;
  
  return (
    <BlurView tint={colorScheme === 'dark' ? 'dark' : "default"} intensity={100} style={styles.bgBlur}>
      { colorScheme === 'light' && <View style={styles.bgTint} /> }
      <View style={styles.tabContent}>

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        // const label = options.tabBarLabel !== undefined ? options.tabBarLabel : (options.title !== undefined ? options.title : route.name)
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={.9}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ ...styles.btnTab, backgroundColor: ( isFocused ? "#00000020" : null ) }}
          >
            <TabBarIcon name={isFocused ? options.tabBarIcon.name : options.tabBarIcon.name+'-outline'}  size={28} color={Colors[colorScheme].tint} />
    
            <Text style={{ color: isFocused ? '#666' : '#222',fontSize:12,marginTop:2 }}>
              {options.tabBarIcon.name}
            </Text>
          </TouchableOpacity>
        );
      })}
      </View>

    </BlurView>
  );
}
// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const styles = StyleSheet.create({
  btnTab: {
    flex: 1,
    alignItems: 'center',
    margin: 1,
    padding: 3,
    borderRadius: 6,
  },
  bgTint: {
    backgroundColor: '#ffffffba',
    flex: 1,
    width: "100%",
    height: "100%",
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row'
  },
  bgBlur: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    flex: 1,
    flexDirection: 'row'
  },
  tabContent: {
    padding: 1,
    backgroundColor: 'rgba(255,255,255,0)',
    flex: 1,
    flexDirection: 'row'
  },
})