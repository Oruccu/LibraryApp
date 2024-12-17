import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Button from '@/app/components/Button'
import styles from './ContextStyles';
import ImageCard from '@/app/components/AuthScreen/ImageCard';
import GoogleCard from '@/app/components/AuthScreen/GoogleCard';
import { auth } from '@/firebaseConfig';
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

export default function Context({ navigation }) {
  const provider = new GoogleAuthProvider();

  const Register = () => navigation.navigate('Register');
  const LogIn = () => navigation.navigate('LogIn');

  function signInWithGoogle(){
    console.log('henüz çözülemedi hata var');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabcontainer}>
        <ImageCard />
      </View>
      <View style={styles.innerContainer}>
        <Button title={"Kayıt Ol"} theme={"Primary"} onPress={Register} />
        <Button title={"Giriş Yap"} theme={"Secondary"} onPress={LogIn} />
        <GoogleCard onPress={signInWithGoogle} />
      </View>
    </SafeAreaView>
  )
}