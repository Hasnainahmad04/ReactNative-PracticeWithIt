import React, {useContext} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

import useLocation from '../hooks/useLocation';
import AppTextInput from '../Components/AppTextInput';
import ErrorMessage from '../Components/ErrorMessage';
import AppButton from '../Components/AppButton';
import AuthContext from '../auth/context';

const validationSchema = yup.object({
  username: yup.string().required().min(3).label('Username'),
  email: yup.string().email().required().label('Email'),
  password: yup.string().min(6).required().label('Password'),
});

function RegisterScreen(props) {
  const authContext = useContext(AuthContext);
  const location = useLocation();

  const handleSubmit = user => {
    authContext.setUser({...user, location});
  };
  return (
    <View style={styles['container']}>
      <Image
        source={require('../assets/logo-red.png')}
        style={styles['logo']}
      />
      <Formik
        initialValues={{username: '', password: '', email: ''}}
        onSubmit={values => handleSubmit(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, touched, setFieldTouched, errors}) => (
          <>
            <AppTextInput
              icon={'account'}
              placeholder="Username"
              maxLength={100}
              onBlur={() => setFieldTouched('username')}
              onChangeText={handleChange('username')}
            />
            <ErrorMessage
              error={errors['username']}
              visible={touched['username']}
            />
            <AppTextInput
              icon={'email'}
              placeholder="Email"
              keyboardType={'email-address'}
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange('email')}
            />
            <ErrorMessage error={errors['email']} visible={touched['email']} />
            <AppTextInput
              icon={'key'}
              placeholder="Password"
              secureTextEntry={true}
              maxLength={14}
              onBlur={() => setFieldTouched('password')}
              onChangeText={handleChange('password')}
            />
            <ErrorMessage
              error={errors['password']}
              visible={touched['password']}
            />
            <AppButton title={'Register'} onPress={handleSubmit} />
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
export default RegisterScreen;
