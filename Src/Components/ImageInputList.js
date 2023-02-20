import React, {useRef} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import AppImagePicker from './ImagePicker';

function ImageInputList({imageUris = [], onRemoveImage, onAddImage}) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        <View style={styles['container']}>
          {imageUris.map(uri => {
            return (
              <View style={styles['image']} key={uri}>
                <AppImagePicker
                  imageUri={uri}
                  onChangeImage={() => onRemoveImage(uri)}
                />
              </View>
            );
          })}

          <AppImagePicker onChangeImage={uri => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
