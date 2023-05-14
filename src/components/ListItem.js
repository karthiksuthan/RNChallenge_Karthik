import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {postBoxImage} from '../../assets/images/index';
import FontSize from '../styles/FontSize';

const ListItem = props => {
  return (
    <View
      style={[
        styles.tile,
        props?.flag ? styles.singleRowTile : styles.doubleColoumnTile,
      ]}>
      <View style={{}}>
        <Image
          source={postBoxImage}
          style={styles.postBoxImage}
          resizeMode={'contain'}
        />
        {/* <View style={styles.postBoxImage} /> */}
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.nameText}>{props?.item?.Name}</Text>
        <Text style={styles.typeText}>Type : {props?.item?.BranchType}</Text>
        <Text style={styles.stateText}>State : {props?.item?.State}</Text>
        <Text style={styles.pincodeText}>
          Pin Code : {props?.item?.Pincode}
        </Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  tile: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
  },
  imageWrap: {},
  postBoxImage: {
    height: 50,
    width: 50,
  },
  nameText: {
    fontWeight: '600',
    fontSize: FontSize.medium,
    letterSpacing: 1,
  },
  typeText: {
    fontSize: FontSize.small,
    color: 'gray',
    lineHeight: 12,
  },
  stateText: {
    paddingTop: 3,
  },
  pincodeText: {},
  textWrap: {
    marginLeft: 10,
    flex: 1,
  },
  singleRowTile: {
    width: '100%',
  },
  doubleColoumnTile: {
    width: '45%',
    marginLeft: '3.5%',
  },
});
