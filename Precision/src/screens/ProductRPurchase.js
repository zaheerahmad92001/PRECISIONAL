import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  Button,
  ScrollView,
  Dimensions,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {STYLES} from '../assets/styles/index';
import * as colors from '../assets/colors/index';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-element-dropdown';
import Modal from 'react-native-modal';
import ModalView from './ModalView';

import {Col, Row, Grid} from 'react-native-easy-grid';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ProductROrder = () => {
  const navigation = useNavigation();
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);
  const [data, setdata] = useState('');
  const [load, setload] = useState(true);

  const [refreshPage, setRefreshPage] = useState('');
  const [modalVisible, setModalVisible] = useState([]);

  const refresh = () => {
    setRefreshPage(true);
  };

  const Data = [
    {
      Sno: 1,
      Ro: '3434',
      Po: '678B',
      Status: 'Delivered',
      date: '20 Nov 2020',
    },

    {
      Sno: 2,
      Ro: '34343',
      Po: '234f',
      Status: 'Delivered',
      date: '20 Nov 2020',
    },
    {
      Sno: 3,
      Ro: '45454',
      Po: '564g',
      Status: 'Delivered',
      date: '20 Nov 2020',
    },
  ];

  const PO = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://66.29.131.211:3000/api/analysisList',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        setdata(response.data.data);
        setload(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // getDevice();
      PO();

      console.log('focus');
    });

    return unsubscribe;
  }, []);

  const renderItem = ({item, index}) => {
    const part = item.parts;
    const Length = part.length;
    return (
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          borderBottomColor: colors.SECONDARY,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
        }}>
        <View style={(styles.Header, {marginLeft: '0%', width: '10%'})}>
          <Text style={styles.flateText}>{index + 1}</Text>
        </View>

        <View
          style={
            (styles.Header,
            {
              marginLeft: '-7%',
              width: '22%',
              flexDirection: 'row',
              alignItems: 'center',
            })
          }>
          <Text style={[styles.flateText, {fontSize: 10}]}>
            {item.vin_number}
          </Text>
        </View>

        <View style={(styles.Header, {marginLeft: '0%', width: '20%'})}>
          {(() => {
            if (modalVisible[index] == 'true') {
              return (
                <View
                  style={{
                    marginLeft: '4%',

                    minHeight: 50,
                    // marginLeft: -20,
                    backgroundColor: '#FFFFFF',
                    width: 80,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,
                    elevation: 24,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 5,
                  }}>
                  <FlatList
                    data={item.parts}
                    renderItem={({item, index}) => (
                      <View style={{}}>
                        <Text
                          style={[
                            styles.flateText,
                            {
                              marginLeft: 4,
                              width: 50,
                              fontSize: 10,
                            },
                          ]}>
                          {item.part_name}
                        </Text>
                      </View>
                    )}
                    keyExtractor={innerItem => innerItem.id}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      refresh();
                      modalVisible[index] = 'false';
                      setModalVisible(modalVisible);

                      setRefreshPage('notrefresh');
                      console.log('dada');
                    }}>
                    <Text
                      style={{fontSize: 19, color: '#1f1f1f', marginLeft: 6}}>
                      X
                    </Text>
                  </TouchableOpacity>
                  <Text style={{color: '#ffffff'}}>.</Text>
                </View>
              );
            } else if (modalVisible[index] == 'false') {
              return (
                <View
                  style={
                    (styles.Header,
                    {
                      width: 60,
                      marginRight: '10%',
                      flexDirection: 'row',
                      borderRadius: 20,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    })
                  }>
                  <Text style={{color: '#1f1f1f', marginRight: 5}}>
                    {Length} Parts
                  </Text>
                  <TouchableOpacity
                    style={{
                      borderRadius: 20,
                      backgroundColor: colors.SECONDARY,
                      width: 30,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      refresh();
                      modalVisible[index] = 'true';
                      setModalVisible(modalVisible);

                      setRefreshPage('refresh');
                      console.log('dada');
                    }}>
                    <Text style={{fontSize: 35, marginTop: -10}}>+</Text>
                  </TouchableOpacity>
                </View>
              );
            } else
              return (
                <View
                  style={
                    (styles.Header,
                    {
                      width: 60,
                      marginRight: '10%',
                      flexDirection: 'row',
                      borderRadius: 20,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    })
                  }>
                  <Text style={{color: '#1f1f1f', marginRight: 5}}>
                    {Length} Parts
                  </Text>
                  <TouchableOpacity
                    style={{
                      borderRadius: 20,
                      backgroundColor: colors.SECONDARY,
                      width: 30,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      refresh();
                      modalVisible[index] = 'true';
                      setModalVisible(modalVisible);

                      setRefreshPage('refresh');
                      console.log('dada');
                    }}>
                    <Text style={{fontSize: 35, marginTop: -10}}>+</Text>
                  </TouchableOpacity>
                </View>
              );
          })()}
        </View>
        <View style={(styles.Header, {marginLeft: '0%', width: '20%'})}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProductOrderDev', {
                parts: item.parts,
                text: 'data',
                Analysis_id: item._id,
              });
            }}
            style={{
              // width:
              height: 30,
              backgroundColor: colors.SECONDARY,
              alignItems: 'center',
              justifyContent: 'center',
              width: 100,
              paddingLeft: 7,
              paddingRight: 7,
              borderRadius: 6,
              marginLeft: '-20%',
            }}>
            <Text style={[styles.flateText, {color: '#1f1f1f', fontSize: 11}]}>
              Forword Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // console.log(data);..
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
            style={{marginTop: '4%', marginLeft: 3}}
            size={28}
            color={colors.TEXT}
          />
        </TouchableOpacity>
        <Text
          style={[
            STYLES.Heading,
            {fontSize: 20, marginTop: '4%', marginLeft: '17%'},
          ]}>
          PRODUCT REQUEST-PURCHASE
        </Text>
        <Text style={STYLES.subHeading}>PURCHASE REQUEST LIST</Text>
        <View style={[STYLES.headView, {marginTop: 20}]}>
          <Text style={STYLES.headText}>List for Purchase Request</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            backgroundColor: colors.SECONDARY,
            borderBottomColor: colors.SECONDARY,
            marginTop: 20,
            height: 40,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '100%',
          }}>
          <View style={(styles.Header, {marginLeft: '6%', width: '15%'})}>
            <Text style={styles.flateText}>S.NO</Text>
          </View>

          <View style={(styles.Header, {marginLeft: '6%', width: '25%'})}>
            <Text
              style={[
                styles.flateText,
                {
                  paddingHorizontal: 20,
                },
              ]}>
              VIN
            </Text>
          </View>

          <View
            style={
              (styles.Header,
              {
                width: '30%',
                flexDirection: 'row',
                alignItems: 'center',
              })
            }>
            <Text style={[styles.flateText, {margin: 5, marginLeft: 30}]}>
              PARTS
            </Text>
          </View>
          <View style={(styles.Header, {marginLeft: '6%', width: '25%'})}>
            <Text
              style={[
                styles.flateText,
                {
                  paddingHorizontal: 20,
                },
              ]}>
              Action
            </Text>
          </View>

          <View style={{width: '15%'}}></View>
        </View>

        <ScrollView>
          <View style={{margin: 0, marginTop: 30}}>
            <View>
              {(() => {
                if (load == true) {
                  return (
                    <View>
                      <Text></Text>
                      <Text></Text>
                      <Text></Text>
                      <Text></Text>
                      <ActivityIndicator size="large" color="yellow" />
                    </View>
                  );
                } else return null;
              })()}
            </View>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <Modal
            transparent={true}
            isVisible={modalVisibleMenu}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            backdropOpacity={0.2}
            onBackdropPress={() => setModalVisibleMenu(false)}>
            <LinearGradient
              colors={[colors.SECONDARY, colors.SECONDARY]}
              style={STYLES.modalViewRegistration}>
              <ScrollView>
                <View style={{marginTop: '8%', margin: 10}}>
                  <TouchableOpacity
                    onPress={() => setModalVisibleMenu(false)}
                    style={{zIndex: 1, width: 25, alignSelf: 'flex-end'}}>
                    <FontAwesome
                      name="times"
                      style={{marginTop: 90, bottom: 60}}
                      size={30}
                      color="#ffffff"
                    />
                  </TouchableOpacity>
                  <Image
                    source={require('../assets/images/logo-white.png')}
                    style={{width: 250, height: 250, marginTop: -120}}
                    resizeMode="contain"
                  />
                  <ModalView />
                </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
              </ScrollView>
            </LinearGradient>
          </Modal>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductROrder;

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
    textTransform: 'capitalize',
    color: '#1f1f1f',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
