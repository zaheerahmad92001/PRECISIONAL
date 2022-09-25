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
  Pressable,
  Dimensions,
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
    {label: '12', value: '12'},
    {label: '10', value: '10'},
  ];
  const data6 = [
    {label: '14', value: '14'},
    {label: '16', value: '16'},
  ];
  const data7 = [
    {label: '25', value: '25'},
    {label: '20', value: '20'},
  ];
  const data8 = [
    {label: '18', value: '18'},
    {label: '21', value: '21'},
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
        <Text style={STYLES.Heading}>SETTINGS</Text>
        <Text style={STYLES.subHeading}>HOURLY RATE OF LABOUR</Text>
        <View style={[STYLES.headView, {marginTop: 20}]}>
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
                      {fontWeight: 'bold', color: '#ffffff', fontSize: 16},
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
                      {fontWeight: 'bold', color: '#ffffff', fontSize: 16},
                    ]}>
                    LABOUR TYPE
                  </Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#ffffff'},
                  ]}>
                  <Text style={STYLES.RowText}>BODY WORKER</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text style={STYLES.RowText}>PAINTER</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#ffffff'},
                  ]}>
                  <Text style={STYLES.RowText}>MECHANUC</Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text style={STYLES.RowText}>DETAILER</Text>
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
                      {fontWeight: 'bold', color: '#ffffff', fontSize: 16},
                    ]}>
                    PER HOUR CHARGES
                  </Text>
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#ffffff'},
                  ]}>
                  <Text
                    style={[
                      STYLES.RowText,
                      {fontWeight: 'bold', marginRight: '25%'},
                    ]}>
                    $
                  </Text>
                  <Dropdown
                    style={[
                      STYLES.inputSettingRow,
                      {marginLeft: 5, marginTop: 16},
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
                      fontSize: 11,
                      fontFamily: 'Montserrat-Regular',
                    }}
                  />
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text
                    style={[
                      STYLES.RowText,
                      {fontWeight: 'bold', marginRight: '25%'},
                    ]}>
                    $
                  </Text>
                  <Dropdown
                    style={[
                      STYLES.inputSettingRow,
                      {marginLeft: 5, marginTop: 16},
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
                      fontSize: 11,
                      fontFamily: 'Montserrat-Regular',
                    }}
                  />
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#ffffff'},
                  ]}>
                  <Text
                    style={[
                      STYLES.RowText,
                      {fontWeight: 'bold', marginRight: '25%'},
                    ]}>
                    $
                  </Text>
                  <Dropdown
                    style={[
                      STYLES.inputSettingRow,
                      {marginLeft: 5, marginTop: 16},
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
                      fontSize: 11,
                      fontFamily: 'Montserrat-Regular',
                    }}
                  />
                </Row>
                <Row
                  style={[
                    STYLES.RowView,
                    {height: 50, backgroundColor: '#d7ed4e'},
                  ]}>
                  <Text
                    style={[
                      STYLES.RowText,
                      {fontWeight: 'bold', marginRight: '25%'},
                    ]}>
                    $
                  </Text>
                  <Dropdown
                    style={[
                      STYLES.inputSettingRow,
                      {marginLeft: 5, marginTop: 16},
                    ]}
                    data={data8}
                    labelField="label"
                    valueField="value"
                    placeholder="7"
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
                </Row>
              </Col>
            </Grid>
            <TouchableOpacity
              onPress={() => navigation.navigate('NewRegistration')}>
              <Text
                style={[
                  STYLES.appButton,
                  {alignSelf: 'flex-end', marginRight: 10, marginTop: 40},
                ]}>
                UPDATE LABOUR CHARGES
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
