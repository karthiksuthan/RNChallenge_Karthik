import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
// loader implemented as an absolute view instead of modal to overcome the multiple modal animation clash issue in ios
const Loader = (props) => { 
  return props?.loadingStatus ? (
    <View style={styles.container}> 
      <View
        style={styles.loaderWrap}>
            <ActivityIndicator size={'large'} color={'#90ee90'}/>
      </View>
    </View>
  ) : null;
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#11111150',
    zIndex: 999,
    elevation: 999,
  },
  loaderWrap:{
    backgroundColor: 'transparent',
    borderRadius: 30,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
export default Loader;
