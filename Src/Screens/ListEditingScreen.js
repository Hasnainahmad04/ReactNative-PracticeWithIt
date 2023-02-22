import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {Formik} from 'formik';
import * as yup from 'yup';

import AppButton from '../Components/AppButton';
import AppPicker from '../Components/AppPicker';
import AppTextInput from '../Components/AppTextInput';
import ErrorMessage from '../Components/ErrorMessage';
import ImageInputList from '../Components/ImageInputList';

const validationSchema = yup.object({
  title: yup.string().min(1).required().label('Title'),
  price: yup.number().min(1).max(10000).required().label('Price'),
  description: yup.string().min(1).required().label('Desription'),
  category: yup.object().required().nullable().label('Category'),
  images: yup.array().min(1, 'Please Select at least 1 Image'),
});

function ListEditingScreen(props) {
  useEffect(() => {}, []);
  const categories = [
    {label: 'value 1', value: 1},
    {label: 'value 2', value: 2},
    {label: 'value 3', value: 3},
  ];

  return (
    <View style={{padding: 10}}>
      <Formik
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: '',
          images: [],
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {({
          handleChange,
          handleSubmit,
          errors,
          touched,
          setFieldTouched,
          setFieldValue,
          values,
        }) => (
          <>
            <ImageInputList
              imageUris={values['images']}
              onAddImage={uri =>
                setFieldValue('images', [...values['images'], uri])
              }
              onRemoveImage={uri =>
                setFieldValue(
                  'images',
                  values['images'].filter(imageUri => imageUri !== uri),
                )
              }
            />
            <ErrorMessage error={errors.images} visible={true} />
            <AppTextInput
              placeholder="Title"
              maxLength={200}
              onChangeText={handleChange('title')}
              onBlur={() => setFieldTouched('title')}
            />
            <ErrorMessage error={errors['title']} visible={touched['title']} />
            <AppTextInput
              placeholder="Price"
              maxLength={8}
              keyboardType="numeric"
              onChangeText={handleChange('price')}
              onBlur={() => setFieldTouched('price')}
            />
            <ErrorMessage error={errors['price']} visible={touched['price']} />

            <AppPicker
              placeholder={'Category'}
              itemtoRender={categories}
              onSelectItem={item => setFieldValue('category', item)}
              selectedItem={values['category']}
            />
            <ErrorMessage error={errors['category']} visible={true} />
            <AppTextInput
              placeholder="Description"
              multiline={true}
              onChangeText={handleChange('description')}
              onBlur={() => setFieldTouched('description')}
            />
            <ErrorMessage
              error={errors['description']}
              visible={touched['description']}
            />
            <AppButton
              title={'Post'}
              onPress={handleSubmit}
              maxLength={200}
              numberOfLines={3}
            />
          </>
        )}
      </Formik>
    </View>
  );
}

export default ListEditingScreen;
