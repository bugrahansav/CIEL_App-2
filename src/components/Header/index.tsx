import React from 'react'
import { View, Text } from 'react-native';
import styles from './styles';


function index () {

  return (
    <View style={ styles.header }>
      <Text style={ styles.headerTxt }>
        Coffeeciel
        </Text>
    </View>
  )
}

export default index;