import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {forwardRef} from 'react';
import ListItem from './ListItem';

const Listing = forwardRef((props, ref) => {
  const {height, width} = useWindowDimensions();
  const flag = height > width;
  const renderEmpty = () => (
    <View style={styles.emptyTextWrap}>
      <Text style={styles.emptyText}>
        {props?.flag
          ? "We couldn't find any post offices for your input '\n' Kindly try with adifferent phrase"
          : 'Type in a city name in search box and press the green button to view post offices in the city'}
      </Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        ref={ref}
        keyExtractor={(item, index) => item?.Pincode + index + flag}
        data={props?.listArray}
        renderItem={({item, index}) => {
          return <ListItem item={item} flag={flag} />;
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={{flexGrow: 1}}
        numColumns={2}
      />
    </View>
  );
});

export default Listing;
const styles = StyleSheet.create({
  emptyTextWrap: {
    height: '30%',
    // backgroundColor: 'pink',
    justifyContent: 'flex-end',
  },
  emptyText: {textAlign: 'center', color: 'lightgray'},
});
