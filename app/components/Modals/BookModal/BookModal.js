import { View, Text, Modal, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import { AntDesign } from '@expo/vector-icons';
import colors from '@/app/styles/Color';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './BookModalStyles'
// Define the BookModal Component
const BookModal = ({ visible, onClose }) => {
  // Initial values for the form fields
  const initialValues = {
    bookName: '',
    quantity: '',
    author: '',
    photoUrl: '',
    genre: '',
  };

  // Validation schema for form validation using Yup
  const BookSchema = Yup.object().shape({
    bookName: Yup.string()
      .required('Zorunlu Alan'),
    quantity: Yup.number()
      .typeError('Kitap adedi sayı olmalıdır')
      .required('Zorunlu Alan')
      .positive('Sayı pozitif olmalıdır'),
    author: Yup.string()
      .required('Zorunlu Alan'),
    photoUrl: Yup.string()
      .url('Geçerli bir URL giriniz')
      .required('Zorunlu Alan'),
    genre: Yup.string()
      .required('Kitap türü seçilmelidir'),
  });

  // List of book genres
  const genres = [
    'Roman', 'Şiir', 'Dil', 'Bilim Kurgu', 'Tarih', 
    'Biyografi', 'Korku', 'Fantastik', 'Macera', 'Eğitim'
  ];

  // Function to handle form submission
  const handleSubmitForm = (values) => {
    console.log('Form Values:', values);
    // Perform any action with form values, e.g., saving data
    onClose(); // Close modal after submission
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose} // Handles Android's back button behavior
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Kitap Ekle</Text>

          {/* Formik for handling form state */}
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmitForm}
            validationSchema={BookSchema}
          >
            {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
              <ScrollView>
                {/* Book Name Input */}
                <Input
                  placeholder="Kitap Adını Yazınız"
                  value={values.bookName}
                  onChangeText={handleChange('bookName')}
                />
                {errors.bookName && touched.bookName && (
                  <Text style={styles.errorText}>{errors.bookName}</Text>
                )}

                {/* Quantity Input */}
                <Input
                  placeholder="Kitap Adedi"
                  keyboardType="numeric"
                  value={values.quantity}
                  onChangeText={handleChange('quantity')}
                />
                {errors.quantity && touched.quantity && (
                  <Text style={styles.errorText}>{errors.quantity}</Text>
                )}

                {/* Author Input */}
                <Input
                  placeholder="Yazarın Adını Yazınız"
                  value={values.author}
                  onChangeText={handleChange('author')}
                />
                {errors.author && touched.author && (
                  <Text style={styles.errorText}>{errors.author}</Text>
                )}

                {/* Photo URL Input */}
                <Input
                  placeholder="Kitap Fotoğrafının URL'sini Yazınız"
                  value={values.photoUrl}
                  onChangeText={handleChange('photoUrl')}
                />
                {errors.photoUrl && touched.photoUrl && (
                  <Text style={styles.errorText}>{errors.photoUrl}</Text>
                )}

                {/* Genre Dropdown */}
                <Text style={styles.label}>Kitap Türü</Text>
                <SelectDropdown
                  data={genres}
                  defaultButtonText="Tür Seçiniz"
                  onSelect={(selectedItem) => 
                  {
                    setFieldValue('genre', selectedItem);
                  }}
                  buttonStyle={styles.dropdown}
                  buttonTextStyle={styles.dropdownText}
                />
                {errors.genre && touched.genre && (
                  <Text style={styles.errorText}>{errors.genre}</Text>
                )}
                <Text>test</Text>

                {/* Submit Button */}
                <Button title="Kaydet" onPress={handleSubmit} theme="Primary" />
              </ScrollView>
            )}
          </Formik>

          {/* Close Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <AntDesign name="close" color={colors.darkRed} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default BookModal;

