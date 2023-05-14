import React, {useRef, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import ApiHelper from '../../helpers/ApiHelper';
import {
  CustomHeader,
  CustomSearchInput,
  Listing,
  Loader,
} from '../../components';

const ListingScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [listarray, setArray] = useState([]);
  const [hasSearched, setHasSearchedFlag] = useState(false);
  const [loading, setLoading] = useState(false);
  const listRef = useRef();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'gray' : 'white',
    flex: 1,
  };

  const handleSearchClick = async searchText => {
    setLoading(true);
    const response = await ApiHelper.apiCall(
      'get',
      `https://api.postalpincode.in/postoffice/${searchText}`,
    );
    setLoading(false);
    // console.log('respi', response);
    if (Array.isArray(response?.[0]?.PostOffice)) {
      setArray(response?.[0]?.PostOffice);
      listRef.current?.scrollToOffset({
        offset: 0,
        animated: false,
      });
    } else if (response?.[0]?.Message === 'No records found') {
      setArray([]);
    } else {
      Alert.alert('Error', 'Something went wrong\nplease try again later');
      return;
    }
    setHasSearchedFlag(true);
  };

  return (
    <>
      <SafeAreaView style={[backgroundStyle]}>
        <View style={styles.subContainer}>
          <CustomHeader title={'Post Office Search'} />
          <CustomSearchInput onSearch={handleSearchClick} />
          <Listing ref={listRef} listArray={listarray} flag={hasSearched} />
        </View>
      </SafeAreaView>
      <Loader loadingStatus={loading} />
    </>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 25,
    borderWidth: 0,
  },
});

export default ListingScreen;
