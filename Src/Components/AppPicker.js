import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PickerItem from './PickerItem';

function AppPicker({
  icon,
  placeholder,
  itemtoRender,
  onSelectItem,
  selectedItem,
  width = '100%',
}) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModal(true)}>
        <View style={[styles['container'], {width}]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              style={styles['icon']}
            />
          )}
          <Text style={styles['text']}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons name="chevron-down" size={20} />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modal} animationType="slide">
        <View>
          <Button title="Close" onPress={() => setModal(false)} />
          <FlatList
            data={itemtoRender}
            keyExtractor={item => item.value}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModal(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 25,
    padding: 10,
    height: 60,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    flex: 1,
  },
});

export default AppPicker;
