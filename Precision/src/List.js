import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Dimensions,
  Pressable,
  FlatList,
  SafeAreaView,
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
import GRN from '../Component/GRN';

import {Col, Row, Grid} from 'react-native-easy-grid';

const NewAnalysis = props => {
  const navigation = useNavigation();
  const [dropdown, setDropdown] = useState(null);
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);
  const [Data, setdata] = useState('');
  const [Product, setProduct] = useState([]);

  const PO = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://66.29.131.211:3000/api/listOfPO',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setdata(response.data.data);
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
    // PO();
  }, []);

  const data = [
    {label: '3418', value: '3418'},
    {label: '4202', value: '4202'},
    {label: '7890', value: '7890'},
    {label: '3250', value: '3250'},
  ];

  const data5 = [
    {label: 'Recieved', value: 'Recieved'},
    {label: 'NotRecieve', value: 'NotRecieve'},
  ];
  const data6 = [
    {label: 'Recieved', value: 'Recieved'},
    {label: 'NotRecieve', value: 'NotRecieve'},
  ];
  const data7 = [
    {label: 'Recieved', value: 'Recieved'},
    {label: 'NotRecieve', value: 'NotRecieve'},
  ];

  const renderItem = ({item}) => {
    var parts = item.parts;
    return (
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          borderBottomColor: colors.SECONDARY,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={(styles.Header, {marginLeft: 0, width: '15%'})}>
          <Text style={styles.flateText}>{item.po_no}</Text>
        </View>
        <View style={(styles.Header, {width: '15%', marginLeft: 5})}>
          <Text style={styles.flateText}>{item.total_amount}:$</Text>
          {/* <Text style={styles.flateText}> RO</Text> */}
        </View>
        <View style={(styles.Header, {width: '25%'})}>
          <Text style={[styles.flateText, {marginLeft: 0}]}>
            {item.expected_date}
          </Text>
        </View>
        <View
          style={
            (styles.Header,
            {
              marginLeft: -15,
              width: '25%',
              marginRight: '10%',
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
            })
          }>
          <FlatList
            data={parts}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
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

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GRN', {
                Parts: parts,
                t: 'anything you want here',
              });
            }}
            style={{
              // width: 60,
              // height: 25,
              backgroundColor: '#1f1f1f',
              borderRadius: 6,
              alignItems: 'center',
              // padding: 5,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                margin: 5,

                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: 12,
                alignSelf: 'center',
              }}>
              UPDATE
            </Text>
            <Text
              style={{
                margin: 5,
                marginTop: -2,
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: 12,
                alignSelf: 'center',
              }}>
              RECIEVING
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

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
        <Text style={[STYLES.Heading, {fontSize: 20, marginTop: 9}]}>
          PRODUCT REQUEST-PURCHASE
        </Text>
        <Text style={STYLES.subHeading}>GOOD RECIEVING NOTES</Text>

        <View style={{flexDirection: 'row', marginTop: 25, marginLeft: 10}}>
          <Dropdown
            style={STYLES.inputReqQuotation}
            data={data}
            labelField="label"
            valueField="value"
            placeholder="SEARCH BY PR NUMBER"
            value={dropdown}
            onChange={item => {
              setDropdown(item.value);
              'selected', item;
            }}
            maxHeight={95}
            selectedTextStyle={{fontSize: 10, fontFamily: 'Montserrat-Regular'}}
            placeholderStyle={{fontSize: 10, fontFamily: 'Montserrat-Regular'}}
          />
          <Dropdown
            style={STYLES.inputReqQuotation}
            data={data}
            labelField="label"
            valueField="value"
            placeholder="SEARCH BY VIN"
            value={dropdown}
            onChange={item => {
              setDropdown(item.value);
              'selected', item;
            }}
            maxHeight={95}
            selectedTextStyle={{fontSize: 10, fontFamily: 'Montserrat-Regular'}}
            placeholderStyle={{fontSize: 10, fontFamily: 'Montserrat-Regular'}}
          />
          <TouchableOpacity style={{marginLeft: 15}}>
            <Text
              style={[STYLES.appButton, {alignSelf: 'flex-end', bottom: 14}]}>
              SEARCH
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10}}></View>
        <ScrollView>
          {/* <GRN /> */}

          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
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

export default NewAnalysis;

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
