import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './AuthorModalStyles';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import { AntDesign } from '@expo/vector-icons';
import colors from '@/app/styles/Color';
// Define the AuthorModal Component
const AuthorModal = ({ visible, onClose }) => {
  // Initial values for the form fields
  const initialValues = {
    ID: '',
    fullName: '',
    birthOfDay: '',
  };

  // Validation schema for form validation using Yup
  const AuthorSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Zorunlu Alan'),
    birthOfDay: Yup.string()
      .required('Zorunlu Alan')
      .matches(
        /^\d{4}-\d{2}-\d{2}$/,
        'Tarih formatı: YYYY-MM-DD şeklinde olmalıdır.'
      ),
  });

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
          <Text style={styles.modalTitle}>Yazar Ekle</Text>

          {/* Formik for handling form state */}
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmitForm}
            validationSchema={AuthorSchema}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                {/* Full Name Input */}
                <Input
                  placeholder="Yazarın Adını Yazınız"
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                />
                {errors.fullName && touched.fullName && (
                  <Text style={styles.errorText}>{errors.fullName}</Text>
                )}

                {/* Birth Date Input */}
                <Input
                  placeholder="Doğum Tarihi (YYYY-MM-DD)"
                  value={values.birthOfDay}
                  onChangeText={handleChange('birthOfDay')}
                />
                {errors.birthOfDay && touched.birthOfDay && (
                  <Text style={styles.errorText}>{errors.birthOfDay}</Text>
                )}

                {/* Submit Button */}
                <Button title="Kaydet" onPress={handleSubmit} theme={"Primary"}/>
              </>
            )}
          </Formik>

          {/* Close Button */}
          <TouchableOpacity onPress={onClose}>
            <AntDesign
              name='close'
              color={colors.darkRed}
              size={25}
              style={styles.closeText} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AuthorModal;
