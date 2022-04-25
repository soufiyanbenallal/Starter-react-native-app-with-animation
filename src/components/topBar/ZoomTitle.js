import React, {  useRef } from 'react';

import { AnimatedText } from "../../layouts/Themed";


const ZoomTitle = ({offset, children, style , size = 35}) => {
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
            <AnimatedText 
                onLayout={({nativeEvent}) => onLayout(nativeEvent)} 
                style={[{ 
                    fontSize: size, 
                    fontWeight:"bold",
                    transform:[{scale},{translateX}]
                },style]}>
                {children}
            </AnimatedText> 
    )
    
};


export default ZoomTitle;
