import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './CreateButtonStyles'

const CreateButton = ({onPress, buttonName}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.buttonName}>{buttonName}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CreateButton