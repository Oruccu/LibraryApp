import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import styles from './CreateButtonStyles'

const CreateButton = ({ onPress, buttonName, theme }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles[theme].container}>
        
          <Text style={styles[theme].buttonName}>{buttonName}</Text>

      </View>
    </TouchableOpacity>
  )
}

export default CreateButton