import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from '../Text';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';

const validationSchema = yup.object().shape({
  username: yup.string().required('username is required'),
  password: yup.string().required('password is required'),
});

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 15,
  },
  btn: {
    marginTop: 10,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const button = [theme.button.standard, styles.btn];

  const onSubmit = values => {
    const {username, password} = values;

    console.log(username, password);
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => {
          return (
            <View>
              <FormikTextInput name="username" placeholder="username" />
              <FormikTextInput name="password" placeholder="password" secureTextEntry />
              <Pressable style={button} onPress={handleSubmit}>
                <Text color="textSecondary" fontWeight="bold">Calculate</Text>
              </Pressable>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default SignIn;