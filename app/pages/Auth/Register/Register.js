import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import * as Yup from 'yup';
import { Formik } from 'formik';
import ImageCard from '@/app/components/AuthScreen/ImageCard';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();

  function initialValues() {
    username = '',
      email = '',
      password = '',
      confirmPassword = ''
  }

  const schemaRegister = Yup.object({
    username: Yup.string().required('ZorunluAlan').min(3, 'Geçersizisim'),
    email: Yup.string()
      .email('Geçersiz E-Mail')
      .required('Zorunlu alan'),
    password: Yup
      .string()
      .required('Zorunlu alan')
      .matches(
        /^(?=.*[a-z])/,
        "Bir küçük harf içermeli"
      )
      .matches(
        /^(?=.*[A-Z])/,
        "Bir büyük harf içermeli"
      )
      .matches(
        /^(?=.*[0-9])/,
        "Bir sayı içermeli"
      )
      .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        "Özel karakter harf içermeli"
      ),
    confirmPassword: Yup.string().required('Zorunlualan').oneOf([Yup.ref("password"), null], "Uyumsuzşifre")
  });

  function goLogIn() {
    navigation.navigate('LogIn')
  }

  function CreateUser() {

  }
  return (
    <SafeAreaView>
      <ImageCard />
      <Formik
        initialValues={initialValues}
        onSubmit={CreateUser}
        validationSchema={schemaRegister}>
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
            <Input
              placeholder={'Şifre'}
              onChangeText={handleChange('confirmPassword')}
              value={values.confirmPassword} />
            {errors.confirmPassword && touched.confirmPassword &&
              <Text style={styles.message}>{errors.confirmPassword}</Text>}

            <Button
              title={'Kayıt Ol'}
              theme={'Primary'}
              onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button
        theme={'Secondary'}
        title={'Giriş Yap'}
        onPress={goLogIn} />
    </SafeAreaView>
  )
}