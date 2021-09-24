import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    View,
    Text,
    Dimensions,
    Easing
} from 'react-native';
import {
    useSafeAreaInsets
} from 'react-native-safe-area-context';
import { AnimatedText, AnimatedView } from "../../components/Themed";
import global from "../../constants/Layout";


const AnimatedHeader = ({animatedValue,title}) => {
    const insets = useSafeAreaInsets();
    const opacity = useRef(new Animated.Value(0)).current;
    const translateX = useRef(new Animated.Value(0)).current;
    const [show, setshow] = useState(false)

    // const diffClampY = Animated.diffClamp(animatedValue,0,170)
    const timing = (el,val)=>{
        Animated.timing(el,
            {
              toValue: val,
              duration: 300,
              useNativeDriver: true
            },
            
        ).start();
    }
    const scale = animatedValue.interpolate({
        inputRange: [-100, 100],
        outputRange: [1, .5],
        extrapolate: 'clamp'
    })
    const tx = animatedValue.interpolate({
        inputRange: [-100, 100],
        outputRange: ['50%', '0%'],
        extrapolate: 'clamp'
    })
    // const scale =1
    useEffect(() => {
        if (!animatedValue) return;
        
        const listnerId = animatedValue.addListener(({ value })=>(value > 50 ? setshow(true) : setshow(false)))
        return () => animatedValue.removeListener(listnerId)
        
    }, [])
    
    useEffect(() => {
       if (show) {
        timing(opacity, 1)
        timing(translateX, global.window.width/2)
       }else{
        timing(opacity,0)
        timing(translateX,0)
       }
    }, [show])
    // const translateX = diffClampY.interpolate({
    //     inputRange: [0, 40],
    //     outputRange: [0, 200 ],
    //     extrapolate: 'clamp',
    // })

    return  <Animated.View
        style={{
        position: 'absolute',
        top: insets.top,
        left: 0,
        right: 0,
        zIndex: 10,
        height : 60,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        backgroundColor:'#666'
        }}>
        <AnimatedText style={{ opacity: 1,fontWeight: '700', fontSize:34 ,backgroundColor:"#eee" ,transform:[
            {
                scale 
            },
            {
                translateX:tx
            }
        
        ]}}>{title} vdhsd hey iu would say love </AnimatedText> 
   
    </Animated.View>
};


export default AnimatedHeader;