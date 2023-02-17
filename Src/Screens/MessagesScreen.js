import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import ListItem from '../Components/ListItem';
import ListItemSeperator from '../Components/ListItemSeperator';

function MessagesScreen(props) {
  const messages = [
    {
      id: 1,
      title: 'T1',
      description: 'D1',
      image: require('../assets/jacket.jpg'),
    },
    {
      id: 2,
      title: 'T2',
      description: 'D2',
      image: require('../assets/jacket.jpg'),
    },
  ];
  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={message => message.id}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Selected Item', item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  //   screen: {
  //     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  //   },
});
export default MessagesScreen;
