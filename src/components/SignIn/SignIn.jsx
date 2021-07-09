import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import { useHistory } from "react-router-native";

import FormikTextInput from '../FormikTextInput';
import Button from '../Button';

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

export const SignInContainer = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => {
          return (
            <View>
              <FormikTextInput testID='formikUsername' name="username" placeholder="username" />
              <FormikTextInput testID='formikPassword' name="password" placeholder="password" secureTextEntry />
              <Button testID='formikSubmit' styles={styles.btn} onPress={handleSubmit}>Sign in</Button>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

const SignIn = () => {
  // const button = [theme.button.standard, styles.btn];
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    console.log(username, password);

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInContainer onSubmit={onSubmit} />
  );
};

export default SignIn;