import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Button,
  Picker,
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
import {connect} from 'react-redux';
import dateFormat from 'dateformat';
import Postworkinfo from '../network/Postworkinfo';

import DropDownPicker from 'react-native-dropdown-picker';

const NewAnalysis = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const WorkInfo = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      product_id: '222',
      user_id: props.header,
      emp_name: EmployeeN,
      date: Date,
      hours: Hours,
      comment: Comment,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://66.29.131.211:3000/api/workShopHours/', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  const data = [
    {label: '5432', value: '5432'},
    {label: '8412', value: '8412'},
    {label: '5431', value: '5431'},
    {label: '2232', value: '2232'},
  ];
  const count = props.id + 1;
  console.log(count);

  const [selectedValue, setSelectedValue] = useState('java');

  const [dropdown, setDropdown] = useState(null);
  const [EmployeeN, setEmployeeN] = useState(props.name);
  const [EmployeeID, setEmployeeID] = useState(props.employe_id);
  const [vin, setvin] = useState(' ');
  var date = dateFormat(props.date, 'shortDate');
  const [Date, setDate] = useState(date);
  const [Hours, setHours] = useState(4);
  const [Comment, setComment] = useState('test for ui api side');
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
          <Text style={STYLES.subHeading}>DETAILER WORKSHOP</Text>
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
                  style={[
                    STYLES.inputNewBodyWor,
                    {marginLeft: 49, backgroundColor: '#f7f7f7'},
                  ]}
                  data={data}
                  labelField="label"
                  valueField="value"
                  placeholder="SEARCH BY PR NUMBER"
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

                {/* <Text>{props.header}</Text> */}
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={text => setComment(text)}
                  value={Comment}
                  onFocus={() => setEnableShift(true)}
                  color="#1f1f1f"
                  style={[STYLES.input3NewBodyWor, {marginLeft: 70}]}
                  placeholder="ENTER COMMENT (IF ANY)"
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UserRecords'), WorkInfo();
                props.AddData({
                  check: {
                    id: count,
                    name: EmployeeN,
                    vin: vin,
                    date: Date,
                    Hours: Hours,
                    Comment: Comment,
                  },
                  id: count,
                });
              }}>
              <Text
                style={[
                  STYLES.appButton,
                  {alignSelf: 'flex-end', marginRight: 10, marginTop: 20},
                ]}>
                SUBMIT HOURS
              </Text>
            </TouchableOpacity>

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

const mapStateToProps = state => {
  return {
    id: state.ApiReducer.id,
    name: state.Auth.name,
    date: state.Auth.date,
    employe_id: state.Auth.employe_id,
    header: state.Auth.header,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    AddData: product =>
      dispatch({type: 'AddData', payload: product}, console.log('AddData')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAnalysis);

// export default NewAnalysis;
