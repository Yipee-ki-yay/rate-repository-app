import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import useCreateReview from '../../hooks/useCreateReview';
import { useHistory } from "react-router-native";

import FormikTextInput from '../FormikTextInput';
import Button from '../Button';

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('username is required'),
  repositoryName: yup.string().required('repository name is required'),
  rating: yup.number().min(0).max(100).required('rating is required'),
  text: yup.string(),
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
  ownerName: '',
  repositoryName: '',
  rating: 0,
  text: '',
};

export const ReviewFormContainer = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => {
          return (
            <View>
              <FormikTextInput name="ownerName" placeholder="Owner name" />
              <FormikTextInput name="repositoryName" placeholder="Repository name" />
              <FormikTextInput name="rating" placeholder="Rating" />
              <FormikTextInput name="text" placeholder="Text" multiline />
              <Button styles={styles.btn} onPress={handleSubmit}>Create review</Button>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

const ReviewForm = () => {
  const [createNewReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    console.log(ownerName, repositoryName, rating, text);

    try {
      const { createReview } = await createNewReview({ ownerName, repositoryName, rating: Number(rating), text });
      history.push(`/repository/${createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ReviewFormContainer onSubmit={onSubmit} />
  );
};

export default ReviewForm;