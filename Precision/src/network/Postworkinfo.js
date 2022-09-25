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
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import dateFormat from 'dateformat';

const NewAnalysis = props => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    product_id: '61dd0fce919c2418540ed074',
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

  const count = props.id + 1;
  console.log(count);
  const [dropdown, setDropdown] = useState(null);
  const [EmployeeN, setEmployeeN] = useState(props.name);
  const [EmployeeID, setEmployeeID] = useState(props.employe_id);
  const [vin, setvin] = useState('7070707');
  var date = dateFormat(props.date, 'shortDate');
  const [Date, setDate] = useState(date);
  const [Hours, setHours] = useState('3');
  const [Comment, setComment] = useState(' testing for implementing');
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);
  const [enableShift, setEnableShift] = useState(false);
  const navigation = useNavigation();
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

// export default connect(mapStateToProps, mapDispatchToProps)(NewAnalysis);

export default NewAnalysis;
