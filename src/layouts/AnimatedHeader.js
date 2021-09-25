import { BlurView } from 'expo-blur';
import React, { Children, useEffect, useRef, useState } from 'react';
import {
    Animated,
    View,
    Text,
    Dimensions,
    Easing,
    StyleSheet
} from 'react-native';
import {
    useSafeAreaInsets
} from 'react-native-safe-area-context';
import { AnimatedText, AnimatedView } from "./Themed";
import global from "../../constants/Layout";


const AnimatedHeader = ({offset,children}) => {
    const opacity = useRef(new Animated.Value(0)).current;
    const [show, setshow] = useState(false)
    const timing = (el,val)=>{
        Animated.timing(el,
            {
              toValue: val,
              duration: 200,
              useNativeDriver: true
            },
            
        ).start();
    }

    useEffect(() => {
        if (!offset) return;
        const listnerId = offset.addListener(({ value })=>(value > 33 ? setshow(true) : setshow(false)))
        return () => offset.removeListener(listnerId)
    }, [])
    
    useEffect(() => {
       if (show) 
        timing(opacity, 1)
       else
        timing(opacity,0)
       
    }, [show])

    return  (
       <Animated.View
            style={styles.container}>
            <AnimatedText style={{opacity}}>{children}</AnimatedText> 
        </Animated.View>
    )
    
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: insets.top,
        left: 0,
        right: 0,
        zIndex: 10,
        height: 45,
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#111'
    }
  })
export default AnimatedHeader;
