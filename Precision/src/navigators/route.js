import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthStack from './AuthStack';
import {Provider} from 'react-redux';
import store from '../redux/store/Index';
import Detailer from './Detailer';

import MyStack from './MyStack';
import {NavigationContainer} from '@react-navigation/native';
import DrawerStack from './DrawerStack';
import {connect} from 'react-redux';
import Mech from './Mech';
import Painter from './Painter';
import Analysis from './Analysis';
import PO from './PO';
const route = props => {
  var A = 1;

  return (
    console.log('route', props.id),
    props.id == 'admin' ? (
      <DrawerStack />
    ) : props.id == 'mechanic' ? (
      <Mech />
    ) : props.id == 'painter' ? (
      <Painter />
    ) : props.id == 'detailer' ? (
      <Detailer />
    ) : props.id == 'analyst' ? (
      <Analysis />
    ) : props.id == 'purchaser' ? (
      <PO />
    ) : (
      <AuthStack />
    )
  );
};

const mapStateToProps = state => {
  return {
    id: state.Auth.id,
    message: state.Auth.message,
    user_type: state.Auth.user_type,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    EmailAdd: product =>
      dispatch({type: 'EmailAdd', payload: product}, console.log('EmailAdd')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(route);
// export default route;

const styles = StyleSheet.create({});
