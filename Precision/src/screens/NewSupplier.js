import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  // FlatList,
  StyleSheet,
  Picker,
  ActivityIndicator,
  Alert,
  Pressable,
  SafeAreaView,
} from 'react-native';
import dateFormat, {masks} from 'dateformat';

import {STYLES} from '../assets/styles/index';
import * as colors from '../assets/colors/index';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-element-dropdown';
import Select, {SelectItem} from '@redmin_delishaj/react-native-select';
import {connect} from 'react-redux';
import {Col, Row, Grid} from 'react-native-easy-grid';

import {fonts} from 'react-native-elements/dist/config';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';

const Registration = props => {
  var date = dateFormat(' mmmm dS, yyyy');
  const [Drop, setDrop] = useState();
  const [dropdown, setDropdown] = useState('NEW');
  const data = [
    {label: 'NEW', value: 'new'},
    {label: 'USED', value: 'used'},
    {label: 'BOTH', value: 'both'},
    {label: 'COMPANY AGENT', value: 'company agent'},
    {label: 'COMPANY OUTLET', value: 'company outlet'},
  ];

  console.log('dropdown', dropdown);
  const [selectedItem, setSelectedItem] = useState('');

  const [VIN, setVIN] = useState('');
  const navigation = useNavigation();
  const [SupplierName, setSupplierName] = useState('');
  const [Contactperson, setContactperson] = useState('');
  const [Email, setEmail] = useState('');
  const [Contact, setContact] = useState('');
  const [Catagory, setCatagory] = useState('new');
  const [Acc, setAcc] = useState('');
  const [AccNo, setAccNo] = useState('');

  const [load, setload] = useState(false);
  const token = props.token;

  const created_by = props.id;
  console.log(token);
  const Add_supplier = () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append(
        'Authorization',
        `Bearer ${token}`,
        // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI0YmQzNjRiMDM5ZTQwNzkwMzE2M2QiLCJpYXQiOjE2NDU0NjY0MzZ9.wDHfoVvfce4h9cOYJRlyssrsZSvQFV0jZ4MWC5ojsos',
      );
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        supplier_name: SupplierName,
        supplier_contact: Contact,
        supplier_category: dropdown,
        contact_person: Contactperson,
        supplier_email: Email,
        account_title: Acc,
        account_no: AccNo,
        created_by: created_by,
        user_id: created_by,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('http://66.29.131.211:3000/api/addSupplier/', requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log('!!!!!!!!!!!!!!logf!!!!!!!!!! ', result),
            Alert.alert(result.message);

          if (result.message == 'Success') {
            setload(false);
            setSupplierName(''),
              setContactperson(''),
              setEmail(''),
              setContact(''),
              setAcc(''),
              setAccNo('');

            navigation.navigate('SupplierList');
          } else {
            null;
          }
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log('#######', error, '$$$$$$$$$$$');
    }
  };

  // Add_supplier();
  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <SafeAreaView>
        <ScrollView>
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
            <Text style={STYLES.Heading}>SUPPLIERS</Text>
            <View
              style={{
                alignSelf: 'center',
                marginTop: 15,
                marginBottom: 15,
                width: '100%',
                height: 35,
                justifyContent: 'center',
                backgroundColor: '#C6E600',
              }}>
              <Text
                style={
                  (STYLES.SupplierText,
                  {marginLeft: 20, fontSize: 16, fontWeight: 'bold'})
                }>
                ADD A SUPPLIERS
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 23,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={STYLES.Text}>DATE</Text>
              <View
                style={{
                  width: '50%',
                  height: 30,
                  borderWidth: 0.7,
                  borderRadius: 6,
                  marginLeft: 20,
                  justifyContent: 'center',
                }}>
                <Text style={(STYLES.Text, {marginLeft: 15, color: '#1f1f1f'})}>
                  {date}
                </Text>
              </View>
            </View>
            {/* new view  */}
            <View style={styles.Text}>
              <Text style={STYLES.Text}>SUPPLIER</Text>
              <View style={styles.Inputcontainer}>
                {/* <TextInput
                  style={[styles.input, {height: 50}]}
                  onChangeText={setSupplierName}
                  value={SupplierName}
                  placeholder=" Supplier name"
                  placeholderTextColor={'#1f1f1f'}
                  // keyboardType="numeric"
                /> */}
                <TextInput
                  style={{
                    marginLeft: 4,
                    width: '90%',
                    borderRadius: 6,
                    // borderWidth: 1,
                    height: 40,
                    fontSize: 12,
                  }}
                  onChangeText={setSupplierName}
                  value={SupplierName}
                  placeholder=" Supplier name"
                  placeholderTextColor={'#1f1f1f'}
                />
              </View>
            </View>

            {/* new view  */}
            <View style={styles.Text}>
              <Text style={STYLES.Text}>CONTACT PERSON</Text>
              <View style={styles.Inputcontainer}>
                <TextInput
                  style={{
                    marginLeft: 4,
                    width: '90%',
                    borderRadius: 6,
                    // borderWidth: 1,
                    height: 40,
                    fontSize: 12,
                  }}
                  onChangeText={setContactperson}
                  value={Contactperson}
                  placeholder=" Contact Person"
                  placeholderTextColor={'#1f1f1f'}
                />
              </View>
            </View>

            {/* new view  */}
            <View style={styles.Text}>
              <Text style={STYLES.Text}>CONTACT NUMBER</Text>
              <View style={styles.Inputcontainer}>
                <TextInput
                  style={{
                    marginLeft: 4,
                    width: '90%',
                    borderRadius: 6,
                    height: 40,
                    fontSize: 12,
                  }}
                  onChangeText={setContact}
                  value={Contact}
                  placeholder=" Phone Number"
                  placeholderTextColor={'#1f1f1f'}
                  keyboardType="numeric"
                />
              </View>
            </View>

            {/* new view  */}
            <View style={styles.Text}>
              <Text style={STYLES.Text}>CONTACT EMAIL</Text>
              <View style={styles.Inputcontainer}>
                <TextInput
                  style={{
                    marginLeft: 4,
                    width: '90%',
                    borderRadius: 6,
                    height: 40,
                    fontSize: 12,
                  }}
                  onChangeText={setEmail}
                  value={Email}
                  placeholder=" Email"
                  placeholderTextColor={'#1f1f1f'}
                />
              </View>
            </View>
            <View style={styles.Text}>
              <Text style={STYLES.Text}>SELECT CATAGORY</Text>
              <Dropdown
                style={[
                  STYLES.inputNewAna,
                  {
                    fontSize: 12,
                    marginLeft: '6.35%',
                    height: 35,
                    marginTop: 10,
                    marginBottom: '-4%',
                    width: '50%',
                    borderRadius: 8,
                  },
                ]}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Select Catagory"
                minHeight={90}
                value={dropdown}
                onChange={item => {
                  setDropdown(item.value);
                  'selected', item;
                  console.log(
                    '************** value seletc ***************',
                    item.value,
                  );
                }}
                maxHeight={280}
                selectedTextStyle={{
                  fontSize: 12,
                }}
                placeholderStyle={{
                  fontSize: 12,
                }}
              />
            </View>
            <View style={styles.Text}>
              <Text style={STYLES.Text}>ACCOUNT TITLE</Text>
              <View style={styles.Inputcontainer}>
                <TextInput
                  style={{
                    marginLeft: 4,
                    width: '90%',
                    borderRadius: 6,
                    // borderWidth: 1,
                    height: 40,
                    fontSize: 12,
                  }}
                  onChangeText={setAcc}
                  value={Acc}
                  placeholder=" Acount Title"
                  placeholderTextColor={'#1f1f1f'}

                  // keyboardType="numeric"
                />
              </View>
            </View>
            {/* new view  */}
            <View style={styles.Text}>
              <Text style={STYLES.Text}>ACCOUNT NO</Text>

              <View style={styles.Inputcontainer}>
                <TextInput
                  style={{
                    marginLeft: 4,
                    width: '90%',
                    borderRadius: 6,
                    // borderWidth: 1,
                    height: 40,
                    fontSize: 12,
                  }}
                  onChangeText={setAccNo}
                  value={AccNo}
                  placeholder=" Account number"
                  placeholderTextColor={'#1f1f1f'}
                  keyboardType="numeric"
                />
              </View>
            </View>
            {/* view end  */}
            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={() => {
                setload(true);
                Add_supplier();
                // navigation.naviagte('SupplierList');
              }}>
              <Text
                style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>
                ADD SUPPLIER
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = state => {
  return {
    id: state.Auth.header,
    token: state.Auth.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Upsale: product => dispatch({type: 'Upsale', payload: product}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
// export default Registration;

const styles = StyleSheet.create({
  TouchableOpacity: {
    // position: 'absolute',
    // right: 20,
    // bottom: 20,
    marginTop: 30,
    marginLeft: '55%',
    width: 140,
    backgroundColor: colors.SECONDARY,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
  },
  Inputcontainer: {
    width: '50%',
    height: 30,
    borderWidth: 0.7,
    marginLeft: 20,
    borderRadius: 6,
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  Header: {
    width: '15%',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  },
  HeaderText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  flateText: {
    color: '#1f1f1f',
    fontSize: 14,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    fontSize: 12,
    color: '#1f1f1f',
  },
  Text: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    margin: 10,
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
});
