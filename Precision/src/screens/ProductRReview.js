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

  const data5 = [
    {label: 'Order', value: 'Order'},
    {label: 'Not Order', value: 'Not Order'},
  ];
  const data6 = [
    {label: 'Order', value: 'Order'},
    {label: 'Not Order', value: 'Not Order'},
  ];
  const data7 = [
    {label: 'Order', value: 'Order'},
    {label: 'Not Order', value: 'Not Order'},
  ];
  const data8 = [
    {label: 'Order', value: 'Order'},
    {label: 'Not Order', value: 'Not Order'},
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
        <Text style={STYLES.subHeading}>PURCHASE REQUEST REVIEW</Text>
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
        <View style={[STYLES.headView, {marginTop: 10}]}>
          <Text style={STYLES.headText}>PR 4478</Text>
        </View>
        <ScrollView>
          <View style={{margin: 10, marginTop: 30}}>
            <Grid>
              <Col size={5}>
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
                    S No
                  </Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#ffffff'},
                  ]}>
                  <Text style={STYLES.RowText}>1.</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text style={STYLES.RowText}>2.</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#ffffff'},
                  ]}>
                  <Text style={STYLES.RowText}>3.</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text style={STYLES.RowText}>4.</Text>
                </Row>
              </Col>
              <Col size={15}>
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
                    Parts
                  </Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#ffffff'},
                  ]}>
                  <Text style={STYLES.RowText}>Gear Box</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text style={STYLES.RowText}>Self Motor D475V</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#ffffff'},
                  ]}>
                  <Text style={STYLES.RowText}>Rubbing Polish S78</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text style={STYLES.RowText}>Indicator B34</Text>
                </Row>
              </Col>
              <Col size={7}>
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
                    VIN
                  </Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#ffffff'},
                  ]}>
                  <Text style={STYLES.RowText}>89321</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text style={STYLES.RowText}>89321</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#ffffff'},
                  ]}>
                  <Text style={STYLES.RowText}>89321</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text style={STYLES.RowText}>89321</Text>
                </Row>
              </Col>
              <Col size={17}>
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
                    {height: 50, backgroundColor: '#ffffff'},
                  ]}>
                  <Dropdown
                    style={[
                      STYLES.inputReqGoodRows,
                      {marginLeft: 5, marginTop: 16},
                    ]}
                    data={data5}
                    labelField="label"
                    valueField="value"
                    placeholder="Not Order"
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
                      fontSize: 11,
                      fontFamily: 'Montserrat-Regular',
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 6,
                      backgroundColor: 'yellow',
                      borderColor: 'blue',
                      borderWidth: 2,
                      borderRadius: 50,
                      width: 20,
                      height: 20,
                    }}></View>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Dropdown
                    style={[
                      STYLES.inputReqGoodRows,
                      {marginLeft: 5, marginTop: 16},
                    ]}
                    data={data6}
                    labelField="label"
                    valueField="value"
                    placeholder="Order"
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
                      fontSize: 11,
                      fontFamily: 'Montserrat-Regular',
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 6,
                      backgroundColor: 'blue',
                      borderColor: 'blue',
                      borderWidth: 2,
                      borderRadius: 50,
                      width: 20,
                      height: 20,
                    }}></View>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#ffffff'},
                  ]}>
                  <Dropdown
                    style={[
                      STYLES.inputReqGoodRows,
                      {marginLeft: 5, marginTop: 16},
                    ]}
                    data={data7}
                    labelField="label"
                    valueField="value"
                    placeholder="Order"
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
                      fontSize: 11,
                      fontFamily: 'Montserrat-Regular',
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 6,
                      backgroundColor: 'blue',
                      borderColor: 'blue',
                      borderWidth: 2,
                      borderRadius: 50,
                      width: 20,
                      height: 20,
                    }}></View>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Dropdown
                    style={[
                      STYLES.inputReqGoodRows,
                      {marginLeft: 5, marginTop: 16},
                    ]}
                    data={data8}
                    labelField="label"
                    valueField="value"
                    placeholder="Order"
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
                      fontSize: 11,
                      fontFamily: 'Montserrat-Regular',
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 6,
                      backgroundColor: 'blue',
                      borderColor: 'blue',
                      borderWidth: 2,
                      borderRadius: 50,
                      width: 20,
                      height: 20,
                    }}></View>
                </Row>
              </Col>
            </Grid>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductRPurchase')}>
              <Text
                style={[
                  STYLES.appButton,
                  {alignSelf: 'flex-end', marginRight: 10, marginTop: 40},
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
