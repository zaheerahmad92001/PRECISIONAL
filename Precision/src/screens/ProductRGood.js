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
  ActivityIndicator,
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
  const [Data, setdata] = useState('');
  const [load, setload] = useState(true);
  const [flag, setflag] = useState(false);

  const [StoreData, setStoreData] = useState(null);
  const [VIN, setVIN] = useState('');
  const [dropdown, setDropdown] = useState(null);
  const refresh = () => {
    setRefreshPage(true);
  };

  console.log(modalVisible);
  console.log('data');
  const PO = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://66.29.131.211:3000/api/listOfPO',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data.data);
        setload(false);
        setdata(response.data.data);
        setStoreData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
    PO();
    });
    // PO();
    return unsubscribe;
  }, [navigation]);
  const data = [
    {label: '3418', value: '3418'},
    {label: '4202', value: '4202'},
    {label: '7890', value: '7890'},
    {label: '3250', value: '3250'},
  ];


  const renderItem = ({item, index}) => {
    // item
    const part = item.parts;
    const Length = part.length;
    var parts = item.parts;
    // var d_status = item.delivery_status
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
          <Text style={[styles.flateText, {width: '90%', fontSize: 10}]}>
            {item.delivery_status}
          </Text>
        </View>
        <View style={(styles.Header, {width: '18%'})}>
          <Text style={[styles.flateText, {marginLeft: 0, fontSize: 10}]}>
            {item.expected_date}
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'flex-end',
            marginRight: '-10%',
            marginLeft: 4,
            width: '30%',
          }}>
          {(() => {
            if (modalVisible[index] == 'true') {
              return (
                <View
                  style={{
                    marginLeft: '4%',

                    minHeight: 50,
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

        <TouchableOpacity
          onPress={() => {
            console.log('GRN' , parts);
            navigation.navigate('GRN', {
              Parts: parts,
              // deliveryStatus : d_status,
              t: ' testsdsd',
            });
          }}
          style={{
            backgroundColor: '#1f1f1f',
            borderRadius: 6,
            alignItems: 'center',
            marginLeft: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              margin: 5,

              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: 10,
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
              fontSize: 10,
              alignSelf: 'center',
            }}>
            RECIEVING
          </Text>
        </TouchableOpacity>
      </View>
    );
    // </View>
  };

  const filterdata = () => {
    if (VIN != '') {
      if (Data != '') {
        setTimeout(function () {
          try {
            var newArray = Data.filter(function (el) {
              var e = el.po_no;
              return e.startwith(VIN);
            });

            setdata(newArray);
            console.log('vin', newArray);
          } catch (error) {
            console.log('vin', Data.po_no);
            console.log(error);
          }
        }, 0);
      } else return console.log('null');
    } else {
      setdata(StoreData);
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
            style={{marginTop: '4%', marginLeft: 0}}
            size={28}
            color={colors.TEXT}
          />
        </TouchableOpacity>
        <Text
          style={[
            STYLES.Heading,
            {fontSize: 20, marginTop: '4%', marginLeft: '12%'},
          ]}>
          PRODUCT REQUEST-PURCHASE
        </Text>
        <Text style={[STYLES.subHeading, {marginLeft: '5%'}]}>
          PERCHASE ORDER LIST
        </Text>

        <View style={{flexDirection: 'row', marginTop: 25, marginLeft: 10}}>
          <TextInput
            placeholder="VIN NO"
            onChangeText={text => {
              setVIN(text);
              filterdata();
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

          <TouchableOpacity style={{marginLeft: 15}}>
            <Text
              style={[STYLES.appButton, {alignSelf: 'flex-end', bottom: 14}]}>
              SEARCH
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10}}></View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            backgroundColor: colors.SECONDARY,
            justifyContent: 'center',
          }}>
          <View style={[styles.Header, {width: '15%', marginLeft: 0}]}>
            <Text style={styles.HeaderText}>P.O #</Text>
          </View>
          <View style={[styles.Header, {width: '15%', marginLeft: 0}]}>
            <Text
              style={[
                styles.HeaderText,
                {
                  paddingHorizontal: 4,
                },
              ]}>
              Status
            </Text>
          </View>
          <View style={[styles.Header, {width: '18%'}]}>
            <Text style={[styles.HeaderText]}>Exp Date</Text>
          </View>
          <View style={[styles.Header, {width: '16%', marginRight: '0%'}]}>
            <Text style={[styles.HeaderText, {}]}>Parts</Text>
          </View>
          <View style={[styles.Header, {width: '35%', marginRight: -28}]}>
            <Text
              style={[
                styles.HeaderText,
                {
                  paddingHorizontal: 20,
                },
              ]}>
              Status
            </Text>
          </View>
        </View>

        <ScrollView>
          {/* <GRN /> */}

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
    // width: '15%',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  },
  HeaderText: {
    color: '#FFFFFF',
    fontSize: 14,
    // marginLeft: 13,
    fontWeight: 'bold',
  },
  flateText: {
    width: 80,
    color: '#1f1f1f',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
