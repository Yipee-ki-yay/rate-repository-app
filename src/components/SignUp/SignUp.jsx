import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';
import { useHistory } from "react-router-native";

import FormikTextInput from '../FormikTextInput';
import Button from '../Button';

const validationSchema = yup.object().shape({
  username: yup.string().required('username is required').min(1).max(30),
  password: yup.string().required('password is required').min(5).max(50),
  passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match'),
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
  passwordConfirmation: '',
};

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => {
          return (
            <View>
              <FormikTextInput name="username" placeholder="username" />
              <FormikTextInput name="password" placeholder="password" />
              <FormikTextInput name="passwordConfirmation" placeholder="repeat password" />
              <Button styles={styles.btn} onPress={handleSubmit}>Sign up</Button>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

const SignUp = () => {
  const [createNewUser] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    console.log(username, password);

    try {
      const { createUser } = await createNewUser({ username, password });
      const { data } = await signIn({ username, password });
      console.log('createUser', createUser);
      console.log('signIn', data);
      history.push(`/`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit} />
  );
};

export default SignUp;