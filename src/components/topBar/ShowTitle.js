import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { AnimatedText } from "../../layouts/Themed";


const ShowTitle = ({offset,children,diff = 33}) => {
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
        const listnerId = offset.addListener(({ value })=>{
            (value > diff ? setshow(true) : setshow(false))
        })
        return () => offset.removeListener(listnerId)
    }, [])
    
    useEffect(() => {
       if (show) 
        timing(opacity, 1)
       else
        timing(opacity,0)
    }, [show])

    return <AnimatedText style={{opacity}}>{children}</AnimatedText>
    
};

export default ShowTitle;
