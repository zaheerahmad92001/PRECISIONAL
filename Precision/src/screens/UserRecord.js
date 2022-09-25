import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  Pressable,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {STYLES} from '../assets/styles/index';
import * as colors from '../assets/colors/index';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {connect} from 'react-redux';
import moment from 'moment';
import dateFormat from 'dateformat';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TableData = [
  {
    id: 1,
    heading: 'S.NO',
    title: 'Record 1',
  },
  {
    id: 2,
    heading: 'VIN NO.',
    title: 'Record 2',
  },
  {
    id: 3,
    heading: 'DATE',
    title: 'Record 3',
  },
  {
    id: 4,
    heading: 'HOURS',
    title: 'Record 4',
  },
];
const UserRecords = props => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('gg');
      console.log('ddd', date);
      // console.log('dsd', props.check);
    });

    return unsubscribe;
  }, [navigation]);

  const [Data, setdata] = useState(props.check);
  const data = [
    {label: '5432', value: '5432'},
    {label: '8412', value: '8412'},
    {label: '5431', value: '5431'},
    {label: '2232', value: '2232'},
  ];

  const TextView = props => (
    <Text style={{fontWeight: 'bold', color: '#1f1f1f', fontSize: 14}}>
      {props.text}ss
    </Text>
  );
  const [dropdown, setDropdown] = useState(null);
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const [choosenDate, setChoosenDate] = useState('');
  const [choosenDate2, setChoosenDate2] = useState('');

  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const [date, setDate] = useState(new Date(1598051730000));

  const handlePicker = date => {
    setIsVisible(false);
    setChoosenDate(date);
    setFromDate(moment(choosenDate).format('DD-MM-YYYY'));
  };

  const handlePicker2 = date => {
    setIsVisible2(false);
    setChoosenDate2(date);
    setToDate(moment(choosenDate2).format('DD-MM-YYYY'));
  };

  const hidePicker2 = date => {
    setIsVisible2(false);
  };

  // const showDatePicker = () => {
  //   setIsVisible(true);
  // };

  const showDatePicker2 = () => {
    setIsVisible2(true);
  };

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    var DATE = dateFormat(date, 'shortDate');
    // console.log(DATE);
    console.log(date);
    console.log('A date has been picked: ', DATE);

    hideDatePicker();
  };

  const dates = ['2018-09-12', '2018-10-18', '2018-12-30'];
  const filteredDates = dates.filter(d => new Date(d) - new Date() > 0);

  console.log('fgf', filteredDates);

  moment.locale();

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
        paddingRight: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{marginLeft: '6%'}}>{item.id}</Text>
      <Text style={{marginLeft: '4%'}}>{item.vin}</Text>
      <Text style={{marginRight: '-1%'}}>{item.date}</Text>
      <Text style={{marginRight: '6%'}}>{item.Hours}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
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
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View>
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
          <Text style={STYLES.Heading}>User Records</Text>
          <Text style={STYLES.subHeading}>WORKSHOP RESOURCE RECORD</Text>
          <View style={{flexDirection: 'column', marginTop: 20}}>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={STYLES.textInputName}>EMPLOYEE NAME:</Text>
              <Text
                style={{
                  fontSize: 17,
                  color: '#000',
                  marginLeft: 17,
                  alignSelf: 'center',
                }}>
                {props.name}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={STYLES.textInputName}>EMPLOYEE ROLE:</Text>
              <Text
                style={{
                  fontSize: 17,
                  color: '#000',
                  marginLeft: 20,
                  alignSelf: 'center',
                }}>
                {props.user_type}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={STYLES.textInputName}>EMPLOYEE ID:</Text>
              <Text
                style={{
                  fontSize: 17,
                  color: '#000',
                  marginLeft: 44,
                  alignSelf: 'center',
                }}>
                {props.employe_id}
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={STYLES.textInputName}>SELECTED VIN:</Text>
              <Dropdown
                style={[
                  STYLES.inputNewBodyWor,
                  {marginLeft: 40, backgroundColor: '#f7f7f7'},
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

            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={STYLES.textInputName}>DATE RANGE:</Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
            }}>
            {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}

            <TouchableOpacity
              onPress={showDatePicker}
              style={{
                width: '40%',
                height: 35,
                margin: 5,
                borderWidth: 1,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 14, fontWeight: '700'}}>
                Pick Start Date
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <TouchableOpacity
              onPress={showDatePicker}
              style={{
                margin: 5,
                width: '40%',
                height: 35,
                borderWidth: 1,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 14, fontWeight: '700'}}>
                Pick End Date
              </Text>
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              confirmTextIOS={handleConfirm}
              cancelTextIOS={hideDatePicker}
              isDarkModeEnabled={false}
            />
          </View>
          <View style={styles.container}>
            <TextView text={'S.NO'} />
            <TextView text={'VIN NO'} />
            <TextView text={'DATE'} />
            <TextView text={'HOURS'} />
          </View>
          <View>
            <FlatList
              data={props.check}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// export default UserRecords;

const mapStateToProps = state => {
  return {
    check: state.ApiReducer.check,
    name: state.Auth.name,
    date: state.Auth.date,
    employe_id: state.Auth.employe_id,
    header: state.Auth.header,
    user_type: state.Auth.user_type,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    AddData: product =>
      dispatch({type: 'AddData', payload: product}, console.log('AddData')),
    EmailAdd: product =>
      dispatch({type: 'EmailAdd', payload: product}, console.log('AddData')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRecords);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height: 70,
    backgroundColor: '#C6E600',
    width: '95%',
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
