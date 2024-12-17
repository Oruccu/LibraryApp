import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React from 'react'
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import * as Yup from 'yup';
import { Formik } from 'formik';
import ImageCard from '@/app/components/AuthScreen/ImageCard';
import { useNavigation } from '@react-navigation/native';
import styles from './LogInStyles.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig.js';

export default function LogIn() {
  const navigation = useNavigation();

  const initialValues = {
    email: '',
    password: ''
  }

  const LoginSchema = Yup.object().shape({
    email: Yup
      .string()
      .email('Geçersiz E-Mail')
      .required('Zorunlu Alan'),
    password: Yup
      .string()
      .required('Zorunlu Alan')
  });
  
  function goRegister() {
    navigation.navigate('Register')
  }

  const SingIn = async(values) =>{
    try
    {
      const userCheck = await signInWithEmailAndPassword(auth, values.email, values.password)
      console.log('Giriş ekranın içinde');
      if(userCheck.user && userCheck.user.emailVerified){
        navigation.navigate('Root');
      }
    }
    catch(error)
    {
      //Buraya lottie paketinden error koy sonra da kayıt sayfasına yönlensin.
      console.log(error)
    }
  }


  return (
    <SafeAreaView>
    
          <ImageCard />
          <Formik
            initialValues={initialValues}
            onSubmit={SingIn}
            validationSchema={LoginSchema}>
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                <Input
                  placeholder={'E-Mail'}
                  onChangeText={handleChange("email")}
                  value={values.email} />

                {errors.email && touched.email && <Text style={styles.message}>{errors.email}</Text>}

                <Input
                  placeholder={'Şifre'}
                  onChangeText={handleChange("password")}
                  value={values.password}
                  isSecure />
                {
                  errors.password && touched.password && <Text style={styles.message}>{errors.password}</Text>
                }
                <Button
                  title={'Giriş Yap'}
                  theme={'Primary'}
                  onPress={handleSubmit} />
              </>
            )}
          </Formik>
          <Button
            theme={'Secondary'}
            title={'Kayıt Ol'}
            onPress={goRegister} />
  
    </SafeAreaView>
  )
}