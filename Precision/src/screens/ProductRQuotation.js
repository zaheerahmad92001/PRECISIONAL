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

import {Col, Row, Grid} from 'react-native-easy-grid';

const NewAnalysis = () => {
  const navigation = useNavigation();
  const [dropdown, setDropdown] = useState(null);
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);

  const data = [
    {label: '3418', value: '3418'},
    {label: '4202', value: '4202'},
    {label: '7890', value: '7890'},
    {label: '3250', value: '3250'},
  ];

  const data2 = [
    {label: '20,000', value: '20,000'},
    {label: '30,000', value: '30,000'},
  ];
  const data3 = [
    {label: '20,000', value: '20,000'},
    {label: '30,000', value: '30,000'},
  ];
  const data4 = [
    {label: '20,000', value: '20,000'},
    {label: '30,000', value: '30,000'},
  ];
  const data5 = [
    {label: '10', value: '10'},
    {label: '15', value: '15'},
  ];
  const data6 = [
    {label: '15', value: '15'},
    {label: '18', value: '18'},
  ];
  const data7 = [
    {label: '20', value: '20'},
    {label: '50', value: '50'},
  ];

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
        <Text style={STYLES.subHeading}>PURCHASE REQUEST QUOTATION</Text>
        <View style={{flexDirection: 'row', marginTop: 25, marginLeft: 10}}>
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
            selectedTextStyle={{fontSize: 10, fontFamily: 'Montserrat-Regular'}}
            placeholderStyle={{fontSize: 10, fontFamily: 'Montserrat-Regular'}}
          />
          <TouchableOpacity style={{marginLeft: 20}}>
            <Text
              style={[STYLES.appButton, {alignSelf: 'flex-end', bottom: 14}]}>
              SEARCH
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[STYLES.headView, {marginTop: 20}]}>
          <Text style={STYLES.headText}>PR 4478</Text>
        </View>
        <ScrollView>
          <View style={{margin: 10, marginTop: 30}}>
            <Grid>
              <Col size={25}>
                <Row
                  style={[
                    STYLES.RowView,
                    {
                      borderTopLeftRadius: 15,
                      height: 60,
                      backgroundColor: colors.SECONDARY,
                    },
                  ]}>
                  <Text
                    style={[
                      STYLES.RowText,
                      {fontWeight: 'bold', color: '#000', fontSize: 16},
                    ]}>
                    SUPPLIERS
                  </Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 70, backgroundColor: '#ffffff'},
                  ]}>
                  <Text style={STYLES.RowText}>SUPPLIER 1</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 70, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text style={STYLES.RowText}>SUPPLIER 2</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 70, backgroundColor: '#ffffff'},
                  ]}>
                  <Text style={STYLES.RowText}>SUPPLIER 3</Text>
                </Row>
              </Col>
              <Col size={20}>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 60, backgroundColor: colors.SECONDARY},
                  ]}>
                  <Text
                    style={[
                      STYLES.RowText,
                      {fontWeight: 'bold', color: '#000', fontSize: 16},
                    ]}>
                    DEAL PRICE
                  </Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 70, backgroundColor: '#ffffff'},
                  ]}>
                  <Dropdown
                    style={[
                      STYLES.inputReqQuotationRows,
                      {marginLeft: 5, marginTop: 12},
                    ]}
                    data={data2}
                    labelField="label"
                    valueField="value"
                    placeholder="10,000"
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
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 70, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Dropdown
                    style={[
                      STYLES.inputReqQuotationRows,
                      {marginLeft: 5, marginTop: 12},
                    ]}
                    data={data3}
                    labelField="label"
                    valueField="value"
                    placeholder="10,000"
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
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 70, backgroundColor: '#ffffff'},
                  ]}>
                  <Dropdown
                    style={[
                      STYLES.inputReqQuotationRows,
                      {marginLeft: 5, marginTop: 12},
                    ]}
                    data={data4}
                    labelField="label"
                    valueField="value"
                    placeholder="10,000"
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
                </Row>
              </Col>
              <Col size={17}>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 60, backgroundColor: colors.SECONDARY},
                  ]}>
                  <Text
                    style={[
                      STYLES.RowText,
                      {fontWeight: 'bold', color: '#000', fontSize: 16},
                    ]}>
                    DAYS
                  </Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 70, backgroundColor: '#ffffff'},
                  ]}>
                  <Dropdown
                    style={[
                      STYLES.inputReqQuotationRows2,
                      {marginLeft: 5, marginTop: 12},
                    ]}
                    data={data5}
                    labelField="label"
                    valueField="value"
                    placeholder="12"
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
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 70, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Dropdown
                    style={[
                      STYLES.inputReqQuotationRows2,
                      {marginLeft: 5, marginTop: 12},
                    ]}
                    data={data6}
                    labelField="label"
                    valueField="value"
                    placeholder="19"
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
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 70, backgroundColor: '#ffffff'},
                  ]}>
                  <Dropdown
                    style={[
                      STYLES.inputReqQuotationRows2,
                      {marginLeft: 5, marginTop: 12},
                    ]}
                    data={data7}
                    labelField="label"
                    valueField="value"
                    placeholder="10"
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
                </Row>
              </Col>
              <Col size={25}>
                <Row
                  style={[
                    STYLES.RowView,
                    {
                      borderTopRightRadius: 15,
                      height: 60,
                      backgroundColor: colors.SECONDARY,
                    },
                  ]}>
                  <Text
                    style={[
                      STYLES.RowText,
                      {fontWeight: 'bold', color: '#000', fontSize: 16},
                    ]}>
                    ACTION
                  </Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {
                      height: 70,
                      backgroundColor: '#ffffff',
                      flexDirection: 'column',
                    },
                  ]}>
                  <TouchableOpacity>
                    <Text
                      style={[
                        STYLES.appButtonUsers,
                        {
                          alignSelf: 'center',
                          fontSize: 8,
                          color: '#ffffff',
                          marginTop: 16,
                        },
                      ]}>
                      GENERATE PO
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={[
                        STYLES.appButtonUsers,
                        {
                          alignSelf: 'center',
                          fontSize: 8,
                          color: '#ffffff',
                          marginTop: 5,
                        },
                      ]}>
                      REJECT QUOTATION
                    </Text>
                  </TouchableOpacity>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {
                      height: 70,
                      backgroundColor: '#d7ed4e',
                      flexDirection: 'column',
                    },
                  ]}>
                  <TouchableOpacity>
                    <Text
                      style={[
                        STYLES.appButtonUsers,
                        {
                          alignSelf: 'center',
                          fontSize: 8,
                          color: '#ffffff',
                          marginTop: 16,
                        },
                      ]}>
                      GENERATE PO
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={[
                        STYLES.appButtonUsers,
                        {
                          alignSelf: 'center',
                          fontSize: 8,
                          color: '#ffffff',
                          marginTop: 5,
                        },
                      ]}>
                      {' '}
                      REJECT QUOTATION
                    </Text>
                  </TouchableOpacity>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {
                      height: 70,
                      backgroundColor: '#ffffff',
                      flexDirection: 'column',
                    },
                  ]}>
                  <TouchableOpacity>
                    <Text
                      style={[
                        STYLES.appButtonUsers,
                        {
                          alignSelf: 'center',
                          fontSize: 8,
                          color: '#ffffff',
                          marginTop: 16,
                        },
                      ]}>
                      GENERATE PO
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={[
                        STYLES.appButtonUsers,
                        {
                          alignSelf: 'center',
                          fontSize: 8,
                          color: '#ffffff',
                          marginTop: 5,
                        },
                      ]}>
                      {' '}
                      REJECT QUOTATION
                    </Text>
                  </TouchableOpacity>
                </Row>
              </Col>
            </Grid>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{marginTop: 20}}>
                <Text
                  style={[
                    STYLES.appButton,
                    {alignSelf: 'flex-start', bottom: 14},
                  ]}>
                  ADD
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop: 20, marginLeft: 10}}>
                <Text
                  style={[
                    STYLES.appButton,
                    {alignSelf: 'flex-start', bottom: 14},
                  ]}>
                  DELETE
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductRReview')}>
              <Text
                style={[
                  STYLES.appButton,
                  {alignSelf: 'flex-end', marginRight: 10, marginTop: 20},
                ]}>
                UPDATE PR
              </Text>
            </TouchableOpacity>
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
