import React from 'react'
import { View, Text, Image } from 'react-native'
import {Card} from 'react-native-elements'
import people from "../data/people.json"

const CleanCard = () => {
    return (
        <Card >
            <Card.Image source={{uri: people[0].image_url}}>

            </Card.Image>
            <Card.Title>
                {people[0].name}
            </Card.Title>

          
        </Card>
    )
}

export default CleanCard
