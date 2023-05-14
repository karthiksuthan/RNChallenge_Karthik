import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';

async function apiCall(method, url, params) {
  const netInfo = await NetInfo.fetch();
  if (netInfo.isConnected) {
    try {
      const config = {
        method: method,
        url,
        timeout: 8000,
        timeoutErrorMessage:
          'Something went wrong. Please check your network connectivity',
      };
      __DEV__ && console.log('API Request config', config);
      const response = await axios(config);
      __DEV__ && console.log('API Reponse', response);

      return response?.data;
    } catch (err) {
      __DEV__ && console.log('API Error Reponse', err);
      return null;
    }
  } else {
    Alert.alert({
      message:
        'No network connection. Please check your connection and try again.',
    });
    return null;
  }
}

export default {
  apiCall,
};
