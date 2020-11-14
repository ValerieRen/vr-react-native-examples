import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {fetchData} from '../data';

const List = () => {
  const dispatch = useDispatch();
  const listItems = useSelector((state) => state.list.items);
  const totalItems = Array.isArray(listItems) ? listItems.length : 0;
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    (async function initialiseList() {
      await AsyncStorage.removeItem('saved_list');
      // get current persisted list items (will be null if above line is not removed)
      const curItems = await AsyncStorage.getItem('saved_list');
      let json = [];
      if (curItems === null) {
        // no current items in AsyncStorage - fetch initial items
        json = fetchData(0);
        // set initial list in AsyncStorage
        await AsyncStorage.setItem('saved_list', JSON.stringify(json));
      } else {
        json = JSON.parse(curItems);
      }

      dispatch({
        type: 'UPDATE_LIST',
        items: json,
      });
    })();
  }, []);

  const loadMoreResults = async (info) => {
    // if already loading more, or all loaded, return
    if (loadingMore || allLoaded) {
      return;
    }
    setLoadingMore(true);
    const newItems = fetchData(totalItems);

    // delay execution for 2 second
    setTimeout(async () => {
      if (newItems.length === 0) {
        // if no new items were fetched, set all loaded to true to prevent further requests
        setAllLoaded(true);
      } else {
        // process the newly fetched items
        await persistData(newItems);
      }
      // load more complete, set loading more to false
      setLoadingMore(false);
    }, 2000);
  };

  const persistData = async (newItems) => {
    // get current persisted list items
    const curItems = await AsyncStorage.getItem('saved_list');
    let json = curItems === null ? {} : JSON.parse(curItems);
    // add new items to json object
    for (let item of newItems) {
      json.push(item);
    }
    // persist updated item list
    await AsyncStorage.setItem('saved_list', JSON.stringify(json));

    dispatch({
      type: 'UPDATE_LIST',
      items: json,
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Displaying {totalItems} Items</Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.footer}>
            {loadingMore && (
              <Text style={styles.footerText}>Loading More...</Text>
            )}
          </View>
        }
        scrollEventThrottle={250}
        onEndReached={(info) => {
          loadMoreResults(info);
        }}
        onEndReachedThreshold={0.01}
        data={listItems}
        keyExtractor={(item) => 'item_' + item._id}
        renderItem={({item, index}) => {
          return (
            <React.Fragment key={index}>
              <View style={styles.item}>
                <Text>Item {item._id}</Text>
              </View>
            </React.Fragment>
          );
        }}
      />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
  },
  list: {},
  item: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '100%',
  },
  footer: {
    padding: 15,
  },
  footerText: {
    fontWeight: '600',
  },
});

export default List;
