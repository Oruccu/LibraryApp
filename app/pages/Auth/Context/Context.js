import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Button from '@/app/components/Button'
import styles from './ContextStyles';
import ImageCard from '../../../components/AuthScreen/ImageCard';
export default function Context({ navigation }) {
  function Register() {
    navigation.navigate('Register')
  }

  function LogIn() {
    navigation.navigate('LogIn')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabcontainer}>
        <ImageCard />
      </View>
      <View style={styles.innerContainer}>
        <Button title={"Kayıt Ol"} theme={"Primary"} onPress={Register} />
        <Button title={"Giriş Yap"} theme={"Secondary"} onPress={LogIn} />
      </View>
    </SafeAreaView>
  )
}