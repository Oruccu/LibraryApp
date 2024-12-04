import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Button from '@/app/components/Button'
import styles from '../../Favorite/FavoriteStyles';

export default function Context({navigation}) {
  function Register() {
    navigation.navigate('Register')
  }

  function LogIn() {
    navigation.navigate('LogIn')
  }
  
  return (
    <SafeAreaView>
      <Text>Kütüphanemize Hoşgeldiniz</Text>
      <View>
        <Button title={"Kayıt Ol"} theme={"Primary"} onPress={Register}/>
        <Button title={"Giriş Yap"} theme={"Secondary"} onPress={LogIn}/>
      </View>
    </SafeAreaView>
  )
}