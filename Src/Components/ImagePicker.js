import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

const AppImagePicker = ({imageUri, onChangeImage}) => {
  const options = {
    mediaType: 'photo',
    quality: 0.5,
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert(
        'Delete Image',
        'Are you sure you want to delete this Image',
        [{text: 'Yes', onPress: () => onChangeImage(null)}, {text: 'No'}],
      );
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibrary(options);
      if (!result.didCancel) {
        onChangeImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles['container']}>
        {!imageUri && (
          <MaterialCommunityIcons name="camera" size={40} color="#495057" />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles['image']} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppImagePicker;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
