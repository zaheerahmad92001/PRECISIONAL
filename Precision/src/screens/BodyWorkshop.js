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
  KeyboardAvoidingView,
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

const NewAnalysis = () => {
  const data = [
    {label: '5432', value: '5432'},
    {label: '8412', value: '8412'},
    {label: '5431', value: '5431'},
    {label: '2232', value: '2232'},
  ];

  const [dropdown, setDropdown] = useState(null);
  const [EmployeeN, setEmployeeN] = useState('');
  const [EmployeeID, setEmployeeID] = useState('');
  const [Date, setDate] = useState('');
  const [Hours, setHours] = useState('');
  const [Comment, setComment] = useState('');
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);
  const [enableShift, setEnableShift] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        style={STYLES.container}
        behavior="padding"
        enable={enableShift}>
        <View>
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
            <Text style={STYLES.headText}>
              PRECISION AUTOS MANAGEMENT SYSTEM
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons
              name="menu-outline"
              style={{marginTop: 13, marginLeft: 10}}
              size={30}
              color={colors.TEXT}
            />
          </TouchableOpacity>
          <Text style={STYLES.Heading}>WORKSHOP</Text>
          <Text style={STYLES.subHeading}>BODY WORKSHOP</Text>
          <ScrollView>
            <View style={{flexDirection: 'column', marginTop: 20}}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>EMPLOYEE NAME:</Text>
                <TextInput
                  placeholder="AUTO EXTRACT FROM LOGIN"
                  onChangeText={text => setEmployeeN(text)}
                  value={EmployeeN}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewBodyWor, {marginLeft: 10}]}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>EMPLOYEE ID:</Text>
                <TextInput
                  placeholder="AUTO EXTRACT FROM LOGIN"
                  onChangeText={text => setEmployeeID(text)}
                  value={EmployeeID}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewBodyWor, {marginLeft: 46}]}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>VIN NUMBER:</Text>
                <Dropdown
                  style={[STYLES.inputNewBodyWor, {marginLeft: 50}]}
                  data={data}
                  labelField="label"
                  valueField="value"
                  placeholder="ENTER NUMBER HERE"
                  // placeholderTextColor="grey"
                  value={dropdown}
                  onChange={item => {
                    setDropdown(item.value);
                    'selected', item;
                  }}
                  maxHeight={112}
                  selectedTextStyle={{
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}
                  placeholderStyle={{
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>DATE:</Text>
                <TextInput
                  placeholder="AUTO EXTRACT FROM LOGIN"
                  onChangeText={text => setDate(text)}
                  value={Date}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewBodyWor, {marginLeft: 115}]}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>HOURS:</Text>
                <TextInput
                  placeholder="AUTO EXTRACT FROM LOGIN"
                  onChangeText={text => setHours(text)}
                  value={Hours}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewBodyWor, {marginLeft: 100}]}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>COMMENT:</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={text => setComment(text)}
                  value={Comment}
                  onFocus={() => setEnableShift(true)}
                  color="#707070"
                  style={[STYLES.input3NewBodyWor, {marginLeft: 70}]}
                  placeholder="ENTER COMMENT (IF ANY)"
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('MechanicWorkshop')}>
              <Text
                style={[
                  STYLES.appButton,
                  {alignSelf: 'flex-end', marginRight: 10, marginTop: 20},
                ]}>
                SUBMIT HOURS
              </Text>
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
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NewAnalysis;
