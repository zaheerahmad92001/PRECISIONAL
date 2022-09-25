import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  ScrollView,
  Dimensions,
  FlatList,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {STYLES} from '../assets/styles/index';
import * as colors from '../assets/colors/index';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Dropdown} from 'react-native-element-dropdown';

import {Col, Row, Grid} from 'react-native-easy-grid';

import Modal from 'react-native-modal';
import ModalView from './ModalView';
import {fonts} from 'react-native-elements/dist/config';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Registration = () => {
  const [S_Data, setData] = useState('');

  const [load, setload] = useState(true);
  const DeleteSupplier = Sid => {
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow',
    };

    fetch(`http://66.29.131.211:3000/api/deleteSupplier/${Sid}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  const Supplier = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://66.29.131.211:3000/api/allSuppliers', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);

        settData(result.data);
        setload(false);
      })
      .catch(error => console.log('error', error));
  };

  // const
  const [Tdata, settData] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Supplier();

      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      fetch('http://66.29.131.211:3000/api/allSuppliers', requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);

          settData(result.data);
        })
        .catch(error => console.log('error', error));
    });

    return unsubscribe;
  }, [navigation]);

  const data = [
    {label: 'Active', value: 'Active'},
    {label: 'In-Active', value: 'InActive'},
  ];
  const Data = [
    {Sno: 1, Supplier: 'Ali', contact: 2932092},

    {Sno: 2, Supplier: 'Hasan', contact: 2323235445},
    {Sno: 3, Supplier: 'RIZWAN', contact: 3232424},
    {Sno: 4, Supplier: 'AHEMD', contact: 3543234},
  ];

  const [VIN, setVIN] = useState('');
  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // borderBottomWidth: '0.8',
      }}>
      <View style={(styles.Header, {marginLeft: '4%', width: '30%'})}>
        <Text style={styles.flateText}>{item.supplier_name}</Text>
      </View>
      <View style={(styles.Header, {width: '25%'})}>
        <Text style={styles.flateText}>{item.contact_person}</Text>
      </View>
      <View
        style={
          (styles.Header,
          {
            flexDirection: 'row',
            width: '30%',
            alignItems: 'center',
          })
        }>
        <TouchableOpacity
          style={{
            width: 40,
            height: 32,
            backgroundColor: colors.SECONDARY,
            marginRight: 5,
            borderRadius: 6,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 12, color: '#ffffff'}}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            DeleteSupplier(item._id);
            setTimeout(function () {
              Supplier();
            }, 1000);
          }}
          style={{
            width: 58,
            height: 32,
            backgroundColor: colors.SECONDARY,
            borderRadius: 6,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 12, color: '#ffffff'}}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const _renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // borderBottomWidth: '0.8',
      }}>
      <View style={(styles.Header, {marginLeft: 40, width: '20%'})}>
        <Text style={styles.flateText}>{item.supplier_name}</Text>
      </View>
      <View style={(styles.Header, {width: '30%'})}>
        <Text style={styles.flateText}>{item.contact_person}</Text>
      </View>
      <View style={(styles.Header, {width: '25%'})}>
        <Text style={[styles.flateText, {marginLeft: 4}]}>{item.date}</Text>
      </View>

      <View style={(styles.Header, {width: '25%', marginRight: '10%'})}>
        <FlatList
          data={item.parts}
          renderItem={({item}) => (
            <View>
              <Text
                style={[
                  styles.flateText,
                  {
                    margin: 5,
                    marginLeft: 15,
                  },
                ]}>
                {item.part_name}
              </Text>
            </View>
          )}
          keyExtractor={innerItem => innerItem.id}
        />
      </View>
    </View>
  );

  const A = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          // borderBottomWidth: '0.8',
        }}>
        <View style={(styles.Header, {marginLeft: '4%', width: '30%'})}>
          <Text style={styles.flateText}>{item.supplier_name}</Text>
        </View>
        <View style={(styles.Header, {width: '25%'})}>
          <Text style={styles.flateText}>{item.contact_person}</Text>
        </View>
        <View
          style={
            (styles.Header,
            {
              flexDirection: 'row',
              width: '30%',
              alignItems: 'center',
            })
          }>
          <TouchableOpacity
            style={{
              width: 45,
              height: 42,
              backgroundColor: colors.SECONDARY,
              marginRight: 5,
              borderRadius: 6,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Entypo name="edit" size={28} color="#1f1f1f" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              DeleteSupplier(item._id);
              setTimeout(function () {
                Supplier();
              }, 1000);
            }}
            style={{
              width: 45,
              height: 42,
              backgroundColor: colors.SECONDARY,
              borderRadius: 6,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <FontAwesome name="delete-forever" size={28} color="#1f1f1f" />
            {/* <Text style={{fontSize: 12, color: '#ffffff'}}>DELETE</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  console.log(Tdata);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={STYLES.container}>
        <Image
          source={require('../assets/images/light.jpg')}
          style={{
            opacity: 0.1,
            zIndex: -1,
            position: 'absolute',
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height,
          }}
        />
        <View style={STYLES.headView}>
          <Text style={STYLES.headText}>PRECISION AUTOS MANAGEMENT SYSTEM</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons
            name="menu-outline"
            style={{marginTop: 13, marginLeft: 10}}
            size={30}
            color={colors.TEXT}
          />
        </TouchableOpacity>
        <Text style={STYLES.Heading}>SUPPLIERS</Text>
        <Text style={STYLES.subHeading}>SUPPLIERS LIST</Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            backgroundColor: colors.SECONDARY,
            justifyContent: 'center',
          }}>
          <View style={(styles.Header, {marginLeft: '4%', width: '30%'})}>
            <Text style={styles.HeaderText}>SUPPLIERS</Text>
          </View>
          <View style={(styles.Header, {width: '30%'})}>
            <Text style={styles.HeaderText}>CONTACT</Text>
          </View>
          <View style={(styles.Header, {width: '20%', marginRight: '10%'})}>
            <Text style={styles.HeaderText}>ACTION</Text>
          </View>
        </View>
        <View>
          {(() => {
            if (load == true) {
              return (
                <View>
                  <Text></Text>
                  <Text></Text>
                  <Text></Text>
                  <Text></Text>
                  <ActivityIndicator size="large" color="red" />
                </View>
              );
            } else return null;
          })()}
        </View>
        <FlatList
          data={Tdata}
          renderItem={A}
          // keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  Header: {
    width: '15%',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  },
  HeaderText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  flateText: {
    color: '#1f1f1f',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
