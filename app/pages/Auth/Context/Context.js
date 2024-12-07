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

  /*const signInWithGoogle =  async() => {
    try {
      // Ensure Google Sign-In is configured
      GoogleSignin.configure({
        webClientId: '379461250639-t0m3sj16hihq1rgmmbdt7a7blh2859nu.apps.googleusercontent.com',
      });
  
      // Get user's ID token
      const { idToken } = await GoogleSignin.signIn();
  
      // Create a Firebase credential with the token
      const googleCredential = GoogleAuthProvider.credential(idToken);
  
      // Sign in with the credential
      const userCredential = await signInWithCredential(auth, googleCredential);
  
      // User successfully signed in
      console.log('User Info:', userCredential.user);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    } 
  };*/
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