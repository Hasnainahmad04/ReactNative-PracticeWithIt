import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import ListItem from '../Components/ListItem';
import ListItemDeleteAction from '../Components/ListItemDeleteAction';
import ListItemSeperator from '../Components/ListItemSeperator';

function MessagesScreen(props) {
  const [refreshing, setRefrehing] = useState(false);
  const [messages, setMessages] = useState([
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
  ]);
  const handleDelete = item => {
    const newMessage = messages.filter(message => message.id !== item.id);
    setMessages(newMessage);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={messages}
        keyExtractor={message => message.id}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            swipeAction={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            image={item.image}
            onPress={() => console.log('Selected Item', item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => setMessages(messages)}
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
