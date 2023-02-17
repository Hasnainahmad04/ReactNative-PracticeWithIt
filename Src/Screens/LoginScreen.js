import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import AppButton from '../Components/AppButton';
import AppTextInput from '../Components/AppTextInput';
import ErrorMessage from '../Components/ErrorMessage';
const validationSchema = yup.object({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});
function LoginScreen(props) {
  return (
    <View style={styles['container']}>
      <Image
        source={require('../assets/logo-red.png')}
        style={styles['logo']}
      />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <AppTextInput
              autoCapitalize={'none'}
              autoCorrect={false}
              icon={'email'}
              keyboardType={'email-address'}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder={'Email'}
              testContentType="emailAddress"
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              icon={'key'}
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              placeholder={'Password'}
              secureTextEntry={true}
              testContentType="password"
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <AppButton title={'Login'} onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {padding: 10},
  logo: {
    width: 80,
    height: 90,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
