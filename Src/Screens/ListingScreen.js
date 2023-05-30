import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import Card from '../Components/Card';
import ActivityIndicator from '../Components/ActivityIndicator';

function ListingScreen({navigation}) {
  const [refreshing, setRefrehing] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItem = async () => {
    try {
      setLoading(true);
      const {data, status} = await axios.get(
        'https://my-json-server.typicode.com/Hasnainahmad04/PracticeWithIt/data',
      );
      setLoading(false);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <View style={styles['screen']}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card
              title={item.title}
              subTitle={`$ ${item.subTitle}`}
              image={item.images[0]}
              onPress={() => navigation.navigate('ListingDetail', item)}
            />
          )}
          refreshing={refreshing}
          onRefresh={getItem}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});
export default ListingScreen;
