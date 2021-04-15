import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
    return (
        <View styles={styles.container}>
                <Text styles={{}}>Welcome to the Swipe</Text>
                <Button
                     title="Go to Details"
                    onPress={() => navigation.navigate('NewSwipe')}
                    />

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  