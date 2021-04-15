import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import {Card} from 'react-native-elements'
import TinderCard from 'react-tinder-card'

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}



const CleanCard = ({people}) => {
    return (

        people.map((person) =>
        (   
        
            <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']} style={{}}>
        <Card containerStyle={styles.card}>
            
            <View>
                    <Card.Image style={styles.card_image} source={{uri: person.image_url}}>
                                <Card.Title style={styles.details}>
                                     <Text style={styles.font}>
                                        {person.name}

                                             
                                              {",   "}
                
                                               
                                             {person.age}
                                         </Text>

        
    
                                    </Card.Title>

                    </Card.Image>






            </View>

            </Card>

            </TinderCard>

        ))

        

     



          
     
    )
}

export default CleanCard


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "flex-start"
    },
    details : 
    {
        flex: 1,
        backgroundColor: "transparent",
        position: "absolute",
        color: "#f6f6f6",
        top: -40, left: -100, right: 0, bottom: 0, 
        alignItems: "flex-start", 
        justifyContent: "flex-start"
  
  
        

    },
    card : {
        flex: 1,
        backgroundColor: "orange",
        height: "500px",
        padding: "0px",
        position: "absolute",
        width: "92%"



    }
    ,
    card_image : {
        height: "500px",
        position: "relative"
    },
    font : {
        fontSize: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10

    }
  });