import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

import AppButton from '../Components/AppButton';
import AppPicker from '../Components/AppPicker';
import AppTextInput from '../Components/AppTextInput';
import ErrorMessage from '../Components/ErrorMessage';

const validationSchema = yup.object({
  title: yup.string().min(1).required().label('Title'),
  price: yup.number().min(1).max(10000).required().label('Price'),
  description: yup.string().min(1).required().label('Desription'),
  category: yup.object().required().nullable().label('Category'),
});
function ListEditingScreen(props) {
  const categories = [
    {label: 'value 1', value: 1},
    {label: 'value 2', value: 2},
    {label: 'value 3', value: 3},
  ];
  return (
    <View>
      <Formik
        initialValues={{title: '', price: '', category: null, description: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          errors,
          touched,
          setFieldTouched,
          setFieldValue,
          values,
        }) => (
          <>
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
            <ErrorMessage
              error={errors['category']}
              visible={touched['category']}
            />
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
