import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './InputStyles'

export default function Input({ placeholder, onChangeText, value, isSecure }) {
  return (
    <View style={styles.container}>
      <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      secureTextEntry={isSecure}
      autoCapitalize='none'
      placeholderTextColor={'#979AAA'}
      />

    </View>
  )
}