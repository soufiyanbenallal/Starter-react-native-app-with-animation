AnimatedHeaderTitle
import { BlurView } from 'expo-blur';
import React, { useEffect, useRef, useState } from 'react';
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


const AnimatedHeaderTitle = ({offset,children,style}) => {
    const opacity = useRef(new Animated.Value(0)).current;
    const refTitleWidth = useRef(0)

    const scale = offset.interpolate({
        inputRange: [-100, 0],
        outputRange: [1.1, 1],
        extrapolate: 'clamp'
    })
    const translateX = offset.interpolate({
        inputRange: [-100,0],
        outputRange: [refTitleWidth.current * .05 ,0],
        extrapolate: 'clamp'
    })

    const onLayout = ({layout}) =>{
        refTitleWidth.current = layout.width 
    }
    return  (
            <AnimatedText onLayout={({nativeEvent}) => onLayout(nativeEvent)} style={[
                { 
                    fontSize:35, 
                    fontWeight:'800',
                    transform:[{scale},{translateX}]
                },
                style
             ]
                }>{children}</AnimatedText> 
    )
    
};


export default AnimatedHeaderTitle;
