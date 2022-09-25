import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/navigators/route';
import {Provider} from 'react-redux';
import store from './src/redux/store/Index';
import {Text, View, Image, Dimensions} from 'react-native';
import PO from './src/navigators/PO';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  React.useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 2000);
  }, []);

  if (loginState.isLoading) {
    return (
      <Image
        source={require('./src/assets/images/splash.jpg')}
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
        }}
      />
    );
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Route />
      </Provider>
    </NavigationContainer>
  );
}
