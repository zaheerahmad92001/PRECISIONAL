import {Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#C6E633'}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#C6E633'}}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            height: 120,
            width: '95%',
            marginVertical: 20,
            marginHorizontal: 5,
          }}
        />
        <View style={{flex: 1, paddingVertical: 2}}>
          <DrawerItem
            label="NewAnalysis"
            labelStyle={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000',
              marginBottom: -7,
            }}
            onPress={() => props.navigation.navigate('PaintWorkshop')}
          />

          <DrawerItem
            label="Analysis "
            labelStyle={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000',
              marginBottom: -7,
            }}
            onPress={() => props.navigation.navigate('UserRecords')}
          />
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity
        style={{
          width: '90%',
          height: 38,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#C6E600',
          borderRadius: 6,
          marginTop: 20,
          bottom: 40,
        }}
        activeOpacity={0.8}
        onPress={() => {
          props.EmailAdd({
            // AuthEmail: Email,
            // Password: Password,
            user_type: '',
            message: '',
            id: '',
            header: '',
            name: '',
            employe_id: '',
            date: '',
          });
          // Login();
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ffffff'}}>
          LOGOUT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    check: state.ApiReducer.check,
    name: state.Auth.name,
    date: state.Auth.date,
    employe_id: state.Auth.employe_id,
    header: state.Auth.header,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    EmailAdd: product =>
      dispatch({type: 'EmailAdd', payload: product}, console.log('AddData')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
// export default CustomDrawer;
