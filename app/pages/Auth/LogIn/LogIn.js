import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import * as Yup from 'yup';
import { Formik } from 'formik';
import ImageCard from '@/app/components/AuthScreen/ImageCard';
import { useNavigation } from '@react-navigation/native';

export default function LogIn() {
  const navigation = useNavigation();

  function initialValues() {
    email = '',
      password = ''
  }

  const LoginSchema = Yup.object().shape({
    email: Yup
      .string()
      .email('GeçersizE-Mail')
      .required('ZorunluAlan'),
    password: Yup
      .string()
      .required('ZorunluAlan')
  });

  function SingIn() {
  }
  function goRegister() {
    navigation.navigate('Register')
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