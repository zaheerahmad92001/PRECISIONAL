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
  Pressable,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {STYLES} from '../assets/styles/index';
import * as colors from '../assets/colors/index';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-element-dropdown';

import {Col, Row, Grid} from 'react-native-easy-grid';

import Modal from 'react-native-modal';
import ModalView from './ModalView';

const Registration = () => {
  const data = [
    {label: 'Active', value: 'Active'},
    {label: 'In-Active', value: 'InActive'},
  ];

  const [VIN, setVIN] = useState('');
  const [Data, setdata] = useState(null);
  const [StoreData, setStoreData] = useState(null);
  const [flag, setflag] = useState(false);
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);
  const navigation = useNavigation();

  const Api = () => {
    var raw = '';

    var requestOptions = {
      method: 'GET',
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'http://66.29.131.211:3000/api/productListBy/?header=61f2c12d9014567a3ce501f8',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        setdata(result.data);
        setStoreData(result.data);
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Api();
    });

    return unsubscribe;
  }, [navigation]);
  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 34,
      }}>
      <View style={(styles.Header, {width: '35%'})}>
        <Text style={[styles.HeaderText, {color: '#1f1f1f'}]}>
          {item.vin_number}
        </Text>
      </View>
      <View style={(styles.Header, {width: '24%'})}>
        <Text style={[styles.HeaderText, {color: '#1f1f1f'}]}>
          {item.stock_ro}
        </Text>
      </View>
      <View style={(styles.Header, {width: '20%'})}>
        <Text style={[styles.HeaderText, {color: '#1f1f1f'}]}>
          {item.model}
        </Text>
      </View>
      <View style={(styles.Header, {width: '20%'})}>
        <Text style={[styles.HeaderText, {color: '#1f1f1f'}]}>
          {item.color}
        </Text>
      </View>
    </View>
  );

  const filterdata = () => {
    try {
      if (VIN != '') {
        if (Data != '') {
          // console.log('data', Data);
          setTimeout(function () {
            try {
              var newArray = Data.filter(function (el) {
                return el.vin_number.startsWith(VIN);
              });

              setdata(newArray);
              // setflag(true);
              console.log('vin', newArray);
            } catch (error) {
              console.log(error);
            }
          }, 0);
        } else {
          setdata(StoreData);
          return console.log('null');
        }
      } else {
        setdata(StoreData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    filterdata();
  }, []);

  {
    (() => {
      if (flag == true) {
        filterdata();
      } else return null;
    })();
  }

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
        <Text style={[STYLES.Heading, {marginTop: '3%'}]}>REGISTRATION</Text>
        <Text style={STYLES.subHeading}>VEHICLE LIST</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="VIN NO"
            onChangeText={text => {
              setVIN(text);
              filterdata();
              setTimeout(function () {
                filterdata();
              }, 500);
            }}
            value={VIN}
            style={[
              STYLES.inputReg,
              {
                width: '90%',
                marginLeft: 20,
              },
            ]}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            backgroundColor: colors.SECONDARY,
            justifyContent: 'center',
            height: 34,
          }}>
          <View style={(styles.Header, {width: '30%', marginLeft: 10})}>
            <Text style={[styles.HeaderText, {paddingHorizontal: 20}]}>
              VIN NO
            </Text>
          </View>
          <View style={(styles.Header, {width: '28%'})}>
            <Text style={styles.HeaderText}>STOCK RO</Text>
          </View>
          <View style={(styles.Header, {width: '23%'})}>
            <Text style={styles.HeaderText}>MODEL</Text>
          </View>
          <View style={(styles.Header, {width: '23%'})}>
            <Text style={styles.HeaderText}>COLOR</Text>
          </View>
        </View>
        <ScrollView>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />

          <TouchableOpacity onPress={() => navigation.navigate('NewAnalysis')}>
            <Text style={[STYLES.appButton, {alignSelf: 'center'}]}>NEXT</Text>
          </TouchableOpacity>
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
                    {/* {icon == true 
                              ?
                              <Ionicons name='add-circle-outline' style={{marginLeft: 8}} size={25} color="#ffffff" />
                              :
                              <Ionicons name='remove-circle-outline' style={{marginLeft: 8}} size={25} color="#ffffff" />
                          } */}
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
    marginLeft: 13,
    fontWeight: 'bold',
  },
  flateText: {
    color: '#1f1f1f',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
