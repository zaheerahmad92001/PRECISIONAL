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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {STYLES} from '../assets/styles/index';
import * as colors from '../assets/colors/index';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import {Col, Row, Grid} from 'react-native-easy-grid';
// import DatePickerModal from 'react-native-modal-datetime-picker';
import {connect} from 'react-redux';
import moment from 'moment';

// const Data = [
//   {id: 1, vin_no: 7070, date: '22/5,', hours: 4},
//   {id: 1, vin_no: 7070, date: '22/5,', hours: 4},
// ];
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
  console.log('dsd', props.check);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      fetch(
        'http://66.29.131.211:3000/api/workshoopListBy/61f2b4dc9014567a3ce501ee',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      console.log('gg');
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
      {props.text}
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

  const handlePicker = date => {
    setIsVisible(false);
    setChoosenDate(date);
    setFromDate(moment(choosenDate).format('DD-MM-YYYY'));
  };

  const hidePicker = date => {
    setIsVisible(false);
  };

  const handlePicker2 = date => {
    setIsVisible2(false);
    setChoosenDate2(date);
    setToDate(moment(choosenDate2).format('DD-MM-YYYY'));
  };

  const hidePicker2 = date => {
    setIsVisible2(false);
  };

  const showDatePicker = () => {
    setIsVisible(true);
  };

  const showDatePicker2 = () => {
    setIsVisible2(true);
  };

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

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
      <Text style={{marginLeft: '4%'}}>{item.vin_no}</Text>
      <Text style={{marginRight: '-1%'}}>{item.date}</Text>
      <Text style={{marginRight: '6%'}}>{item.hours}</Text>
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
                Saad Ali
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
                {' '}
                PAINTER{' '}
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
                {' '}
                BODY - 12559{' '}
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
            <Pressable
              style={{width: '46%', height: 60}}
              onPress={showDatePicker}>
              <TextInput
                placeholder="Pick Start Date"
                editable={false}
                value={
                  choosenDate != ''
                    ? moment(choosenDate).format('DD-MM-YYYY')
                    : null
                }
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  backgroundColor: '#f7f7f7',
                  color: '#000',
                  padding: 10,
                  fontSize: 11,
                  borderRadius: 3,
                }}
                onChange={e => e.target.value}
              />
            </Pressable>

            <Pressable
              style={{width: '46%', height: 60}}
              onPress={showDatePicker2}>
              <TextInput
                placeholder="Pick End Date"
                editable={false}
                value={
                  choosenDate2 != ''
                    ? moment(choosenDate2).format('DD-MM-YYYY')
                    : null
                }
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  backgroundColor: '#f7f7f7',
                  color: '#000',
                  padding: 10,
                  fontSize: 11,
                  borderRadius: 3,
                }}
                onChange={e => e.target.value}
              />
            </Pressable>
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
  };
};
const mapDispatchToProps = dispatch => {
  return {
    AddData: product =>
      dispatch({type: 'AddData', payload: product}, console.log('AddData')),
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
