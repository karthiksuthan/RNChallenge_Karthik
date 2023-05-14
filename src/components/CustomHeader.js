import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FontSize from '../styles/FontSize';

const CustomHeader = props => {
  return (
    <View>
      <Text style={styles.title}>{props?.title ?? ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: FontSize.header,
  },
});

export default CustomHeader;
