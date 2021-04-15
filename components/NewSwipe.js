import React from 'react'
import { View, Text } from 'react-native'

import CleanCard from "./CleanCard"
import TinderCard from 'react-tinder-card'

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}

const NewSwipe = () => {
    return (
        <View>
            <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
                <CleanCard></CleanCard>

            </TinderCard>
        </View>
    )
}

export default NewSwipe
