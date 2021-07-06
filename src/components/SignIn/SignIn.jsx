import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import { useHistory } from "react-router-native";

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

export const SignInContainer = ({ onSubmit }) => {
  const button = [theme.button.standard, styles.btn];

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => {
          return (
            <View>
              <FormikTextInput testID='formikUsername' name="username" placeholder="username" />
              <FormikTextInput testID='formikPassword' name="password" placeholder="password" secureTextEntry />
              <Pressable testID='formikSubmit' style={button} onPress={handleSubmit}>
                <Text color="textSecondary" fontWeight="bold">Calculate</Text>
              </Pressable>
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
    // <View style={styles.container}>
    //   <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    //     {({ handleSubmit }) => {
    //       return (
    //         <View>
    //           <FormikTextInput name="username" placeholder="username" />
    //           <FormikTextInput name="password" placeholder="password" secureTextEntry />
    //           <Pressable style={button} onPress={handleSubmit}>
    //             <Text color="textSecondary" fontWeight="bold">Calculate</Text>
    //           </Pressable>
    //         </View>
    //       );
    //     }}
    //   </Formik>
    // </View>
  );
};

export default SignIn;