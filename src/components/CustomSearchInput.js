import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {searchIcon} from '../../assets/icons';
import FontSize from '../styles/FontSize';

const SearchInput = props => {
  const [searchString, setSearchString] = useState('');
  const inputRef = useRef();
  const onPress = () => {
    console.log(searchString);
    if (searchString?.length >= 3) {
      // minimum 3 characters required for a meaningfull search and to reduce results
      inputRef.current?.blur();
      props?.onSearch?.(searchString);
    } else Alert.alert('Alert', 'please enter at least 3 characters to search');
  };
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          returnKeyType='search'
          ref={inputRef}
          value={searchString}
          placeholder="type name of post office here"
          onChangeText={setSearchString}
          style={styles.input}
          onSubmitEditing={onPress}
        />
        <TouchableOpacity style={styles.iconWrap} onPress={onPress}>
          <Image
            source={searchIcon}
            style={styles.searchIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 12,
    overflow: 'hidden',
    borderColor: 'lightgray',
    marginVertical: 15,
  },
  input: {
    paddingHorizontal: 15,
    flex: 1,
    fontSize: FontSize.normal,
  },
  iconWrap: {
    backgroundColor: 'lightgreen',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    height: 35,
    width: 35,
  },
});

export default SearchInput;
