import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'
import people from "../data/people.json"
import CleanCard from "./CleanCard"

const NewSwipe = () => {
    return (
        <View style={styles.container}>
           
                <CleanCard people={people}></CleanCard>



       
        </View>
    )
}

export default NewSwipe


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000"

    },
    icon : {



    },
    circle: {
        width: 44,
        height: 44,
        borderRadius: 44/2,
        backgroundColor: "beige",

 
     }
})