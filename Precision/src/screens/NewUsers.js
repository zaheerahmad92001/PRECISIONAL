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
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
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
import dateFormat, {masks} from 'dateformat';

const NewAnalysis = () => {
  var date = dateFormat(' mmmm dS, yyyy');

  const data = [
    {label: 'ANALYST', value: 'analyst'},
    {label: 'PURCHASERS', value: 'purchasers'},
    {label: 'BODY WORKER', value: 'body work'},
    {label: 'PAINTER', value: 'painter'},
    {label: 'MECHANIC', value: 'mechanic'},
    {label: 'DETAILER', value: 'detailer'},
    {label: 'ADMIN', value: 'admin'},
  ];

  console.log('date', date);

  var Id = Math.floor(Math.random() * 234431); // Returns a random integer from 0 to 100:
  const E_Id = Id * 3456345;
  console.log(Id);
  const [dropdown, setDropdown] = useState(null);
  const [tDate, setDate] = useState(date);
  const [EmployeeN, setEmployeeN] = useState('');
  const [EmployeeID, setEmployeeID] = useState(E_Id);
  const [Username, setUsername] = useState('');
  const [Hoursrate, setHoursrate] = useState('');
  const [Password, setPassword] = useState('');
  const [Comment, setComment] = useState('');
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);
  const [enableShift, setEnableShift] = useState(false);
  const navigation = useNavigation();

  const [load, setload] = useState(false);

  console.log('dropdown', dropdown);
  const Signup = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      user_name: Username,
      user_password: Password,
      user_type: dropdown,
      employe_name: EmployeeN,
      employe_id: EmployeeID,

      hour_rate: Hoursrate,
      date: tDate,
      // user_email: 'abc@gmail.com',
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://66.29.131.211:3000/api/signup', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.message), Alert.alert(result.message);

        if (result.message == 'User Sign Up Successfully.') {
          setload(false);
          setEmployeeN('');
          setEmployeeID(E_Id);
          setUsername('');
          setHoursrate('');
          setPassword('');
          setComment('');
        } else {
        }
      })
      .catch(error => console.log('error', error));
  };

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
              PRECISION AUTOMOBILE MANAGEMENT SYSTEM
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{marginLeft: 5}}
              onPress={() => navigation.openDrawer()}>
              <Ionicons
                name="menu-outline"
                style={{marginTop: 0, marginLeft: 0}}
                size={30}
                color={colors.TEXT}
              />
            </TouchableOpacity>
            <Text
              style={[STYLES.Heading, {marginLeft: '14%', marginTop: '-10%'}]}>
              USER AND ROLES
            </Text>
          </View>

          <Text
            style={[
              STYLES.subHeading,
              {marginLeft: '5%', fontSize: 20, marginBottom: -10},
            ]}>
            ADD A USER
          </Text>
          <ScrollView>
            <View style={{flexDirection: 'column', marginTop: '4%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 33,
                  alignSelf: 'center',
                }}>
                <Text style={[STYLES.textInputName, {marginTop: 8}]}>
                  DATE:
                </Text>

                <View
                  style={{
                    width: 165,
                    borderColor: '#1f1f1f',
                    borderRadius: 6,
                    marginLeft: 20,
                    borderWidth: 1.0,
                    height: 36,
                  }}>
                  <Text
                    style={[
                      {
                        marginLeft: 10,
                        // alignSelf: 'center',
                        marginTop: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                    ]}>
                    {tDate}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 0}}>
                <Text style={STYLES.textInputName}>EMPLOYEE NAME:</Text>
                <TextInput
                  placeholder="ENTER EMPLOYEE NAME"
                  onChangeText={text => setEmployeeN(text)}
                  value={EmployeeN}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewBodyWor, {marginLeft: 10}]}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>EMPLOYEE ID:{}</Text>
                <View
                  style={[
                    STYLES.inputNewBodyWor,
                    {
                      marginLeft: 46,
                      fontSize: 16,
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      marginTop: 5,
                      color: '#1f1f1f',
                    }}>
                    {EmployeeID}
                  </Text>
                </View>
                <TextInput
                  placeholder="AUTO GENERATED"
                  onChangeText={text => setEmployeeID(text)}
                  value={Id}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewBodyWor, {marginLeft: 46}]}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>SELECT ROLE:</Text>
                <Dropdown
                  style={[STYLES.inputNewBodyWor, {marginLeft: 46}]}
                  data={data}
                  labelField="label"
                  valueField="value"
                  placeholder="SELECT ROLE OF USER"
                  // placeholderTextColor="grey"
                  value={dropdown}
                  onChange={item => {
                    setDropdown(item.value);
                    'selected', item;
                  }}
                  maxHeight={112}
                  selectedTextStyle={{
                    fontSize: 12,
                    // fontFamily: 'Montserrat-Regular',
                  }}
                  placeholderStyle={{
                    fontSize: 12,
                    // fontFamily: 'Montserrat-Regular',
                  }}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>HOURS RATES:</Text>
                <TextInput
                  placeholder="ENTER HOURS RATES"
                  onChangeText={text => setHoursrate(text)}
                  value={Hoursrate}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewBodyWor, {marginLeft: 38}]}
                  // secureTextEntry={true}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>USERNAME:</Text>
                <TextInput
                  placeholder="ENTER USERNAME"
                  onChangeText={text => setUsername(text)}
                  value={Username}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewBodyWor, {marginLeft: 62}]}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>PASSWORD:</Text>
                <TextInput
                  placeholder="ENTER PASSWORD"
                  onChangeText={text => setPassword(text)}
                  value={Password}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewBodyWor, {marginLeft: 62}]}
                  secureTextEntry={true}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                setload(true);
                Signup();
              }}>
              <Text
                style={[
                  STYLES.appButton,
                  {alignSelf: 'flex-end', marginRight: 10, marginTop: 30},
                ]}>
                ADD USER
              </Text>
            </TouchableOpacity>

            {(() => {
              if (load == true) {
                return (
                  <View>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <ActivityIndicator size="large" color="red" />
                  </View>
                );
              } else return null;
            })()}

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
