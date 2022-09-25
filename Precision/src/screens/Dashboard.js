import React, {useState} from 'react';
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
  Alert,
  Pressable,
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
import DropShadow from 'react-native-drop-shadow';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {connect} from 'react-redux';

const carImage = require('../assets/images/car-image.png');

const NewAnalysis = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const [dropdown, setDropdown] = useState(null);
  const [barcode, setBarcode] = useState(null);
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);

  const [all, setAll] = useState(true);
  const [order, setOrder] = useState(false);
  const [deliver, setDeliver] = useState(false);
  const [returned, setReturned] = useState(false);

  const All = () => {
    setAll(true);
    setOrder(false);
    setDeliver(false);
    setReturned(false);
  };
  const Order = () => {
    setOrder(true);
    setAll(false);
    setDeliver(false);
    setReturned(false);
  };
  const Deliver = () => {
    setDeliver(true);
    setAll(false);
    setOrder(false);
    setReturned(false);
  };
  const Return = () => {
    setReturned(true);
    setAll(false);
    setOrder(false);
    setDeliver(false);
  };

  const data = [
    {label: '3418', value: '3418'},
    {label: '4202', value: '4202'},
    {label: '7890', value: '7890'},
    {label: '3250', value: '3250'},
  ];

  const [VINOne, setVINOne] = useState(false);
  const [VINTwo, setVINTwo] = useState(false);
  const [VINThree, setVINThree] = useState(false);
  const [VINFour, setVINFour] = useState(false);

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
        <Text style={STYLES.Heading}>DASHBOARD</Text>
        {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text> Open </Text>
      </TouchableOpacity> */}
        <ScrollView>
          <Modal animationType="fade" transparent={true} visible={VINOne}>
            <DropShadow
              style={{
                height: '45%',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 20,
                },
                shadowOpacity: 1,
                shadowRadius: 8,
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  flexDirection: 'row',
                  backgroundColor: colors.SECONDARY,
                  width: '100%',
                  height: '25%',
                  bottom: 3,
                  elevation: 10,
                  justifyContent: 'center',
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  alignItems: 'center',
                }}>
                <Text
                  style={[STYLES.RowText, {fontSize: 20, color: '#ffffff'}]}>
                  VIN: 89321
                </Text>
                <TouchableOpacity
                  style={{left: '88%', position: 'absolute'}}
                  activeOpacity={0.7}
                  onPress={() => setVINOne(false)}>
                  <FontAwesome name="times" color="#fff" size={30} />
                </TouchableOpacity>
              </View>
              <Grid style={{elevation: 15}}>
                <Col size={15}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {
                        height: 90,
                        backgroundColor: colors.SECONDARY,
                        elevation: 20,
                      },
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      STATUS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                </Col>
                <Col size={30}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[
                        STYLES.RowText,
                        {color: '#ffffff', fontSize: 16},
                      ]}>
                      PARTS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      Gear Box
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      Self Motor D475V
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      Rubbing Polish S78
                    </Text>
                  </Row>
                </Col>
                <Col size={20}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[
                        STYLES.RowText,
                        {color: '#ffffff', fontSize: 16},
                      ]}>
                      VIN
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>80000</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>89321</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>12482</Text>
                  </Row>
                </Col>
              </Grid>
            </DropShadow>
          </Modal>
          <Modal animationType="fade" transparent={true} visible={VINTwo}>
            <DropShadow
              style={{
                height: '45%',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 20,
                },
                shadowOpacity: 1,
                shadowRadius: 8,
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  flexDirection: 'row',
                  backgroundColor: colors.SECONDARY,
                  width: '100%',
                  height: '25%',
                  bottom: 3,
                  elevation: 10,
                  justifyContent: 'center',
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  alignItems: 'center',
                }}>
                <Text
                  style={[STYLES.RowText, {fontSize: 20, color: '#ffffff'}]}>
                  VIN: 89256
                </Text>
                <TouchableOpacity
                  style={{left: '88%', position: 'absolute'}}
                  activeOpacity={0.7}
                  onPress={() => setVINTwo(false)}>
                  <FontAwesome name="times" color="#fff" size={30} />
                </TouchableOpacity>
              </View>
              <Grid style={{elevation: 15}}>
                <Col size={15}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {
                        height: 90,
                        backgroundColor: colors.SECONDARY,
                        elevation: 20,
                      },
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      STATUS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                </Col>
                <Col size={30}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[
                        STYLES.RowText,
                        {color: '#ffffff', fontSize: 16},
                      ]}>
                      PARTS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      Gear Box
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      Self Motor D475V
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      Rubbing Polish S78
                    </Text>
                  </Row>
                </Col>
                <Col size={20}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[
                        STYLES.RowText,
                        {color: '#ffffff', fontSize: 16},
                      ]}>
                      VIN
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>89321</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>89321</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>12482</Text>
                  </Row>
                </Col>
              </Grid>
            </DropShadow>
          </Modal>
          <Modal animationType="fade" transparent={true} visible={VINThree}>
            <DropShadow
              style={{
                height: '45%',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 20,
                },
                shadowOpacity: 1,
                shadowRadius: 8,
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  flexDirection: 'row',
                  backgroundColor: colors.SECONDARY,
                  width: '100%',
                  height: '25%',
                  bottom: 3,
                  elevation: 10,
                  justifyContent: 'center',
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  alignItems: 'center',
                }}>
                <Text
                  style={[STYLES.RowText, {fontSize: 20, color: '#ffffff'}]}>
                  VIN: 89786
                </Text>
                <TouchableOpacity
                  style={{left: '88%', position: 'absolute'}}
                  activeOpacity={0.7}
                  onPress={() => setVINThree(false)}>
                  <FontAwesome name="times" color="#fff" size={30} />
                </TouchableOpacity>
              </View>
              <Grid style={{elevation: 15}}>
                <Col size={15}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {
                        height: 90,
                        backgroundColor: colors.SECONDARY,
                        elevation: 20,
                      },
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      STATUS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'yellow',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                </Col>
                <Col size={30}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[
                        STYLES.RowText,
                        {color: '#ffffff', fontSize: 16},
                      ]}>
                      PARTS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      Gear Box
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      Self Motor D475V
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      Rubbing Polish S78
                    </Text>
                  </Row>
                </Col>
                <Col size={20}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[
                        STYLES.RowText,
                        {color: '#ffffff', fontSize: 16},
                      ]}>
                      VIN
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>89321</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>89321</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>12482</Text>
                  </Row>
                </Col>
              </Grid>
            </DropShadow>
          </Modal>
          <Text
            style={[
              STYLES.subHeading,
              {alignSelf: 'center', marginLeft: -10, marginTop: 20},
            ]}>
            PARTS SUMMARY
          </Text>
          <View style={{flexDirection: 'row', marginTop: 25, marginLeft: 10}}>
            {/* <Dropdown
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
              selectedTextStyle={{
                fontSize: 10,
                fontFamily: 'Montserrat-Regular',
              }}
              placeholderStyle={{
                fontSize: 10,
                fontFamily: 'Montserrat-Regular',
              }}
            />
            <Dropdown
              style={STYLES.inputReqQuotation}
              data={data}
              labelField="label"
              valueField="value"
              placeholder="SEARCH BY STOCK NUMBER"
              // placeholderTextColor="grey"
              value={dropdown}
              onChange={item => {
                setDropdown(item.value);
                'selected', item;
              }}
              maxHeight={95}
              selectedTextStyle={{
                fontSize: 10,
                fontFamily: 'Montserrat-Regular',
              }}
              placeholderStyle={{
                fontSize: 10,
                fontFamily: 'Montserrat-Regular',
              }}
            />
            <TouchableOpacity style={{marginLeft: 10}}>
              <Text
                style={[STYLES.appButton, {alignSelf: 'flex-end', bottom: 14}]}>
                SEARCH
              </Text>
            </TouchableOpacity> */}
          </View>
          <View style={{margin: 10, marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => All()}>
                <View
                  style={all == true ? STYLES.filterLine : STYLES.filterUnline}>
                  <Text
                    style={{fontSize: 14, color: '#000', fontWeight: 'bold'}}>
                    ALL
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} onPress={() => Order()}>
                <View
                  style={
                    order == true ? STYLES.filterLine : STYLES.filterUnline
                  }>
                  <Text
                    style={{fontSize: 14, color: '#000', fontWeight: 'bold'}}>
                    ORDERED
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} onPress={() => Deliver()}>
                <View
                  style={
                    deliver == true ? STYLES.filterLine : STYLES.filterUnline
                  }>
                  <Text
                    style={{fontSize: 14, color: '#000', fontWeight: 'bold'}}>
                    LEFT TO ORDER
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} onPress={() => Return()}>
                <View
                  style={
                    returned == true ? STYLES.filterLine : STYLES.filterUnline
                  }>
                  <Text
                    style={{fontSize: 14, color: '#000', fontWeight: 'bold'}}>
                    NOTHING ORDERED
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {all == true ? (
              <Grid style={{marginTop: 10}}>
                <Col size={15}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {
                        height: 90,
                        backgroundColor: colors.SECONDARY,
                        elevation: 20,
                        borderTopLeftRadius: 15,
                      },
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      S NO.
                    </Text>
                  </Row>

                  {/* CAR MODAL */}

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert('Modal has been closed.');
                      setModalVisible(!modalVisible);
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 0,
                      }}>
                      <View
                        style={{
                          width: '100%',
                          backgroundColor: '#f8f9fa',
                          borderRadius: 10,
                          alignItems: 'center',
                          shadowColor: '#000',
                          shadowOffset: {
                            width: 0,
                            height: 2,
                          },
                          shadowOpacity: 0.25,
                          shadowRadius: 4,
                          elevation: 5,
                        }}>
                        <Image
                          source={carImage}
                          style={{width: '100%', height: '65%'}}
                        />

                        <TouchableOpacity
                          style={{
                            width: '50%',
                            borderRadius: 20,
                            padding: 10,
                            elevation: 2,
                            backgroundColor: '#d9534f',
                          }}
                          onPress={() => setModalVisible(!modalVisible)}>
                          <Text
                            style={{
                              color: 'white',
                              fontWeight: 'bold',
                              textAlign: 'center',
                            }}>
                            CLOSE
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>

                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    {/* <Text style={[STYLES.RowText, {fontSize: 16}]}>1.</Text> */}

                    <TouchableOpacity
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Image
                        source={carImage}
                        style={{width: '100%', height: '40%'}}
                      />
                    </TouchableOpacity>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>2.</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>3.</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4.</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>5.</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>6.</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>7.</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>8.</Text>
                  </Row>
                </Col>
                <Col size={15}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      RO
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                </Col>
                <Col size={30}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      MAKE MODEL
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                </Col>
                {/* <Col size={18}>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 90, backgroundColor: colors.SECONDARY},
                  ]}>
                  <Text style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                    MODEL
                  </Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 60, backgroundColor: '#ffffff'},
                  ]}>
                  <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 60, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 60, backgroundColor: '#ffffff'},
                  ]}>
                  <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 60, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 60, backgroundColor: '#ffffff'},
                  ]}>
                  <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 60, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 60, backgroundColor: '#ffffff'},
                  ]}>
                  <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 60, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                </Row>
              </Col> */}
                <Col size={20}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      VIN
                    </Text>
                  </Row>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setVINOne(!VINOne)}>
                    <Row
                      style={[
                        STYLES.RowView,
                        {height: 60, backgroundColor: '#ffffff'},
                      ]}>
                      <Text
                        style={[
                          STYLES.RowText,
                          {fontSize: 16, textDecorationLine: 'underline'},
                        ]}>
                        89321
                      </Text>
                    </Row>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setVINTwo(!VINTwo)}>
                    <Row
                      style={[
                        STYLES.RowView,
                        {height: 60, backgroundColor: '#d7ed4e'},
                      ]}>
                      <Text
                        style={[
                          STYLES.RowText,
                          {fontSize: 16, textDecorationLine: 'underline'},
                        ]}>
                        89256
                      </Text>
                    </Row>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setVINThree(!VINThree)}>
                    <Row
                      style={[
                        STYLES.RowView,
                        {height: 60, backgroundColor: '#ffffff'},
                      ]}>
                      <Text
                        style={[
                          STYLES.RowText,
                          {fontSize: 16, textDecorationLine: 'underline'},
                        ]}>
                        89786
                      </Text>
                    </Row>
                  </TouchableOpacity>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text
                      style={[
                        STYLES.RowText,
                        {fontSize: 16, textDecorationLine: 'underline'},
                      ]}>
                      89478
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text
                      style={[
                        STYLES.RowText,
                        {fontSize: 16, textDecorationLine: 'underline'},
                      ]}>
                      84785
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text
                      style={[
                        STYLES.RowText,
                        {fontSize: 16, textDecorationLine: 'underline'},
                      ]}>
                      81238
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text
                      style={[
                        STYLES.RowText,
                        {fontSize: 16, textDecorationLine: 'underline'},
                      ]}>
                      83564
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text
                      style={[
                        STYLES.RowText,
                        {fontSize: 16, textDecorationLine: 'underline'},
                      ]}>
                      81964
                    </Text>
                  </Row>
                </Col>
                <Col size={20}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {
                        borderTopRightRadius: 15,
                        height: 90,
                        backgroundColor: colors.SECONDARY,
                      },
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      STATUS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'yellow',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'yellow',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                </Col>
              </Grid>
            ) : (
              <View />
            )}
            {order == true ? (
              <Grid style={{marginTop: 10}}>
                <Col size={15}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {
                        height: 90,
                        backgroundColor: colors.SECONDARY,
                        elevation: 20,
                        borderTopLeftRadius: 15,
                      },
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      S NO.
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>1.</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>2.</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>3.</Text>
                  </Row>
                </Col>
                <Col size={15}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      RO
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                </Col>
                <Col size={20}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      MAKE
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                </Col>
                <Col size={18}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      MODEL
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                  </Row>
                </Col>
                <Col size={20}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      VIN
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>89321</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>89321</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>12482</Text>
                  </Row>
                </Col>

                <Col size={20}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {
                        borderTopRightRadius: 15,
                        height: 90,
                        backgroundColor: colors.SECONDARY,
                      },
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      STATUS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                </Col>
              </Grid>
            ) : (
              <View />
            )}
            {deliver == true ? (
              <Grid style={{marginTop: 10}}>
                <Col size={15}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {
                        height: 90,
                        backgroundColor: colors.SECONDARY,
                        elevation: 20,
                        borderTopLeftRadius: 15,
                      },
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      S NO.
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>1.</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>2.</Text>
                  </Row>
                </Col>
                <Col size={15}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      RO
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                </Col>
                <Col size={20}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      MAKE
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                </Col>
                <Col size={18}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      MODEL
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                  </Row>
                </Col>
                <Col size={20}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      VIN
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>89321</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>12482</Text>
                  </Row>
                </Col>

                <Col size={20}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {
                        borderTopRightRadius: 15,
                        height: 90,
                        backgroundColor: colors.SECONDARY,
                      },
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      STATUS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'yellow',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'yellow',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                </Col>
              </Grid>
            ) : (
              <View />
            )}
            {returned == true ? (
              <Grid style={{marginTop: 10}}>
                <Col size={15}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {
                        height: 90,
                        backgroundColor: colors.SECONDARY,
                        elevation: 20,
                        borderTopLeftRadius: 15,
                      },
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      S NO.
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>1.</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>2.</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>3.</Text>
                  </Row>
                </Col>
                <Col size={15}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      RO
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>4543</Text>
                  </Row>
                </Col>
                <Col size={20}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      MAKE
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      HONDA CIVIC
                    </Text>
                  </Row>
                </Col>
                <Col size={18}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      MODEL
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>CIVIC</Text>
                  </Row>
                </Col>
                <Col size={20}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      VIN
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>89321</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>87562</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>87562</Text>
                  </Row>
                </Col>

                <Col size={20}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {
                        borderTopRightRadius: 15,
                        height: 90,
                        backgroundColor: colors.SECONDARY,
                      },
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      STATUS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                </Col>
              </Grid>
            ) : (
              <View />
            )}
            <Text
              style={[
                STYLES.subHeading,
                {alignSelf: 'center', marginLeft: -10, marginTop: 30},
              ]}>
              BUDGET EYE VIEW
            </Text>
            <View style={{flexDirection: 'row', marginTop: 25, marginLeft: 10}}>
              <Dropdown
                style={[
                  STYLES.inputReqQuotation,
                  {width: '45%', marginLeft: -10},
                ]}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="SEARCH BY PR NUMBER"
                // placeholderTextColor="grey"
                value={dropdown}
                onChange={item => {
                  setDropdown(item.value);
                  'selected', item;
                }}
                maxHeight={95}
                selectedTextStyle={{
                  fontSize: 10,
                  fontFamily: 'Montserrat-Regular',
                }}
                placeholderStyle={{
                  fontSize: 10,
                  fontFamily: 'Montserrat-Regular',
                }}
              />
            </View>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
              ACTUAL COST
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
              0000000000
            </Text>
            <View style={{top: '-6%'}}>
              <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
                <Text style={{fontSize: 10, color: 'black'}}>
                  Purchase Price
                </Text>
                <TextInput
                  placeholder="000000"
                  onChangeText={text => setBarcode(text)}
                  value={barcode}
                  style={[
                    STYLES.inputReg,
                    {marginLeft: 7, height: 24, paddingVertical: 0, width: 60},
                  ]}
                />
              </View>
              <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
                <Text style={{fontSize: 10, color: 'black'}}>Parts Cost</Text>
                <TextInput
                  placeholder="000000"
                  onChangeText={text => setBarcode(text)}
                  value={barcode}
                  style={[
                    STYLES.inputReg,
                    {marginLeft: 7, height: 24, paddingVertical: 0, width: 60},
                  ]}
                />
              </View>
              <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
                <Text style={{fontSize: 10, color: 'black'}}>
                  Body Workshop
                </Text>
                <TextInput
                  placeholder="000000"
                  onChangeText={text => setBarcode(text)}
                  value={barcode}
                  style={[
                    STYLES.inputReg,
                    {marginLeft: 7, height: 24, paddingVertical: 0, width: 60},
                  ]}
                />
              </View>
              <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
                <Text style={{fontSize: 10, color: 'black'}}>
                  Paint Workshop
                </Text>
                <TextInput
                  placeholder="000000"
                  onChangeText={text => setBarcode(text)}
                  value={barcode}
                  style={[
                    STYLES.inputReg,
                    {marginLeft: 7, height: 24, paddingVertical: 0, width: 60},
                  ]}
                />
              </View>
              <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
                <Text style={{fontSize: 10, color: 'black'}}>
                  Mechanic Workshop
                </Text>
                <TextInput
                  placeholder="000000"
                  onChangeText={text => setBarcode(text)}
                  value={barcode}
                  style={[
                    STYLES.inputReg,
                    {marginLeft: 7, height: 24, paddingVertical: 0, width: 60},
                  ]}
                />
              </View>
              <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
                <Text style={{fontSize: 10, color: 'black'}}>
                  Detailer Workshop
                </Text>
                <TextInput
                  placeholder="000000"
                  onChangeText={text => setBarcode(text)}
                  value={barcode}
                  style={[
                    STYLES.inputReg,
                    {marginLeft: 7, height: 24, paddingVertical: 0, width: 60},
                  ]}
                />
              </View>
              <Text
                style={[
                  STYLES.subHeading,
                  {alignSelf: 'center', marginLeft: -10, marginTop: 25},
                ]}>
                CARS TIMELINE PASSED
              </Text>
              <View style={{flexDirection: 'row', marginTop: 25}}>
                <Dropdown
                  style={STYLES.inputReqQuotation}
                  data={data}
                  labelField="label"
                  valueField="value"
                  placeholder="SEARCH BY PR NUMBER"
                  // placeholderTextColor="grey"
                  value={dropdown}
                  onChange={item => {
                    setDropdown(item.value);
                    'selected', item;
                  }}
                  maxHeight={95}
                  selectedTextStyle={{
                    fontSize: 10,
                    fontFamily: 'Montserrat-Regular',
                  }}
                  placeholderStyle={{
                    fontSize: 10,
                    fontFamily: 'Montserrat-Regular',
                  }}
                />
                <Dropdown
                  style={STYLES.inputReqQuotation}
                  data={data}
                  labelField="label"
                  valueField="value"
                  placeholder="SEARCH BY STOCK NUMBER"
                  // placeholderTextColor="grey"
                  value={dropdown}
                  onChange={item => {
                    setDropdown(item.value);
                    'selected', item;
                  }}
                  maxHeight={95}
                  selectedTextStyle={{
                    fontSize: 10,
                    fontFamily: 'Montserrat-Regular',
                  }}
                  placeholderStyle={{
                    fontSize: 10,
                    fontFamily: 'Montserrat-Regular',
                  }}
                />
                <TouchableOpacity style={{marginLeft: 10}}>
                  <Text
                    style={[
                      STYLES.appButton,
                      {alignSelf: 'flex-end', bottom: 14},
                    ]}>
                    SEARCH
                  </Text>
                </TouchableOpacity>
              </View>
              <Grid>
                <Col size={15}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {
                        borderTopLeftRadius: 15,
                        height: 90,
                        backgroundColor: colors.SECONDARY,
                        elevation: 20,
                      },
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      STATUS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'yellow',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'blue',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'yellow',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e', elevation: 20},
                    ]}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Row>
                </Col>
                <Col size={30}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 90, backgroundColor: colors.SECONDARY},
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      DAYS SPEND
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      28 DAYS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      88 DAYS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      46 DAYS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      100 DAYS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      49 DAYS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      75 DAYS DAYS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      115 DAYS
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>
                      128 DAYS
                    </Text>
                  </Row>
                </Col>
                <Col size={25}>
                  <Row
                    style={[
                      STYLES.RowView,
                      {
                        height: 90,
                        backgroundColor: colors.SECONDARY,
                        borderTopRightRadius: 15,
                      },
                    ]}>
                    <Text
                      style={[STYLES.RowText, {color: '#000', fontSize: 16}]}>
                      VIN
                    </Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>89321</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>89321</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>89321</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>89321</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>87562</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>7452</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#ffffff'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>12482</Text>
                  </Row>
                  <Row
                    style={[
                      STYLES.RowView,
                      {height: 60, backgroundColor: '#d7ed4e'},
                    ]}>
                    <Text style={[STYLES.RowText, {fontSize: 16}]}>87562</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('NewRegistration')}>
              <Text
                style={[
                  STYLES.appButton,
                  {alignSelf: 'center', marginRight: 10, marginTop: -60},
                ]}>
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = state => {
  return {
    id: state.Auth.id,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delet: product =>
      dispatch({type: 'delet', payload: product}, console.log('delet')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAnalysis);

// export default NewAnalysis;
