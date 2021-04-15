import React from 'react'
import { StyleSheet, Text, View, Animated, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CleanCard from "./CleanCard"
import people from "../data/people.json"
import {Interactable, concat} from "react-native-redash"
import { Extrapolate, interpolate, Value } from 'react-native-reanimated';
import { Dimensions } from 'react-native';


const {width, height} = Dimensions.get("window");
const g = (1 + Math.sqrt(5)) / 2;
const w = width - 32;
const h = w * g;
const a = Math.PI / 12;
const A = h * Math.sin(a) + w * Math.cos(a)



const Swipe = () => {
    const x = new Value(0);
    const y = new Value(0);
    const rotateZ = concat(interpolate(x, {
        inputRange: [-width, width],
        outputRange: [-a, a],
        extrapolate: Extrapolate.CLAMP,
    }), "rad"); 
    const styles = {
        ...StyleSheet.absoluteFillObject,
        transform: [
            {rotateZ}, 
            {translateX: x},
            {translateY: y},
        ] 
    }

    return (
        <SafeAreaView>
            <View styles={styles.header}>
                <Text>
                    The swipey swipe
                </Text>

            </View>

            <View style={styles.cards}>
                <Animated.View {...{style}}>
                     <CleanCard />

                </Animated.View>

                <Interactable
                animatedValueX={x}
                animatedValueY={y}   
                snapPoints ={[{x: -A}, {x:0}, {x : A}]}
                style={StyleSheet.absoluteFill}/>

                
               
            </View>
            <View style={styles.footer}>
                <View style= {styles.circle}></View>
            </View>

        </SafeAreaView>
            
        
    )
}

export default Swipe
 /*
const styles = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: '#fff',
      fontFamily: "Roboto"

    },
  });
  */