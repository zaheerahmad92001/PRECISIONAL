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
  Alert,
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
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

import {Col, Row, Grid} from 'react-native-easy-grid';

const NewAnalysis = () => {
  const navigation = useNavigation();
  const [refreshPage, setRefreshPage] = useState('');
  const [modalVisible, setModalVisible] = useState([]);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);

  const refresh = () => {
    setRefreshPage(true);
  };

  console.log(modalVisible);
  console.log('data');
  const [data, setDate] = useState('');
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
        setDate(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    PO();
    //
    const unsubscribe = navigation.addListener('focus', () => {});
    PO();
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({item, index}) => {
    // item

    const part = item.parts;
    const Length = part.length;
    // console.log('length', Length);
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
          <Text style={styles.flateText}>$: {item.total_amount}</Text> 
        </View>
        <View style={(styles.Header, {width: '25%'})}>
          <Text style={[styles.flateText, {marginLeft: 0}]}>
            {item.expected_date}
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'flex-end',
            marginRight: '-10%',
          }}>
          {(() => {
            if (modalVisible[index] == 'true') {
              return (
                <View
                  style={{
                    // marginLeft: '4%',

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
                  <Text
                    style={{color: '#1f1f1f', marginRight: 5, fontSize: 10}}>
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
                  <Text
                    style={{color: '#1f1f1f', marginRight: 5, fontSize: 10}}>
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
        <Text
          style={[
            {
              marginLeft: 10,
              fontSize: 10,
              fontWeight: '700',
              color: '#1f1f1f',
              width: 55,
            },
          ]}>
          {item.delivery_status}
        </Text>
      </View>
    );
    // </View>
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
            style={{marginTop: '4%', marginLeft: 4}}
            size={26}
            color={colors.TEXT}
          />
        </TouchableOpacity>
        <Text
          style={[
            STYLES.Heading,
            {fontSize: 20, marginTop: '4%', marginLeft: '18%'},
          ]}>
          PRODUCT REQUEST-PURCHASE
        </Text>
        <Text style={STYLES.subHeading}>PURCHASE ORDER LIST</Text>
        <View style={[STYLES.headView, {marginTop: 20}]}>
          <Text style={STYLES.headText}>List of Purchase order</Text>
        </View>
        <ScrollView>
          <View style={{margin: 0, marginTop: 30}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center',
                backgroundColor: colors.SECONDARY,
                justifyContent: 'center',
              }}>
              <View style={styles.Header}>
                <Text style={styles.HeaderText}>P.O #</Text>
              </View>
              <View style={[styles.Header, {width: '15%', marginLeft: 0}]}>
                <Text style={styles.HeaderText}>PRICE</Text>
              </View>
              <View style={[styles.Header, {width: '25%'}]}>
                <Text style={styles.HeaderText}> Exp Date</Text>
              </View>
              <View style={[styles.Header, {width: '15%', marginRight: '0%'}]}>
                <Text style={styles.HeaderText}>Parts</Text>
              </View>
              <View style={[styles.Header, {width: '25%', marginRight: '0%'}]}>
                <Text style={styles.HeaderText}>EXP DElIVERY</Text>
              </View>
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
    marginLeft: 13,
    fontWeight: 'bold',
  },
  flateText: {
    width: 80,
    color: '#1f1f1f',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
