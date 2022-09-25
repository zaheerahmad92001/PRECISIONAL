import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  ScrollView,
  Pressable,
  FlatList,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {STYLES} from '../assets/styles/index';
import * as colors from '../assets/colors/index';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Modal from 'react-native-modal';
import ModalView from './ModalView';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import dateFormat, {masks} from 'dateformat';

const NewRegistration = ({route}) => {
  var date = dateFormat(' mmmm dS, yyyy');

  var val = Math.floor(112120 + Math.random() * 9000);
  console.log(val);

  const QrData = JSON.parse(route.params.qrCode);
  const a = route.params.qrCode;
  const color = QrData.color;
  const make = QrData.make;
  const model = QrData.model;
  const [Scandata, setScandata] = useState(QrData);
  console.log(Scandata);
  const [colori, setcolor] = useState(color);
  const [VIN, setVIN] = useState(QrData.vin);
  const [Date, setDate] = useState(date);
  const [Stock, setStock] = useState(val);
  const [Comment, setComment] = useState('');
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);
  const [all, setAll] = useState(true);
  const [order, setOrder] = useState(false);
  const [deliver, setDeliver] = useState(false);
  const [returned, setReturned] = useState(false);
  const [owner, setowner] = useState('');
  const [Platenumber, setPlatenumber] = useState('');
  const [enableShift, setEnableShift] = useState(false);
  const navigation = useNavigation();

  const All = () => {
    setAll(true);
    setOrder(false);
    setDeliver(false);
    setReturned(false);
  };
  const Order = () => {
    setOrder(true);
    setAll(false);
    setDeliver(false);
    setReturned(false);
  };
  const Deliver = () => {
    setDeliver(true);
    setAll(false);
    setOrder(false);
    setReturned(false);
  };
  const Return = () => {
    setReturned(true);
    setAll(false);
    setOrder(false);
    setDeliver(false);
  };

  const Login = () => {
    var formdata = new FormData();
    formdata.append('vin_number', VIN);
    formdata.append('model', model);
    formdata.append('make', make);
    formdata.append('color', colori);
    formdata.append('stock_ro', Stock);
    formdata.append('owner_name', owner);
    formdata.append('plat_number', Platenumber);
    formdata.append('comment', Comment);
    formdata.append('created_by', '61b4bd364b039e407903163d');

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch('http://66.29.131.211:3000/api/newProduct', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result), Alert.alert(result.message);
      })
      .catch(error => console.log('error', error));
  };

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
        paddingRight: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{marginLeft: '6%'}}>ddd{item.statusCode}</Text>
      <Text style={{marginLeft: '4%'}}>{item.vin}</Text>
      <Text style={{marginRight: '-1%'}}>{item.date}</Text>
      <Text style={{marginRight: '6%'}}>{item.Hours}</Text>
    </View>
  );
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
          <Text style={STYLES.Heading}> REGISTRATION </Text>
          <ScrollView>
            <Text style={STYLES.subHeading}> NEW REGISTRATION </Text>
            <View style={{alignItems: 'center', marginTop: 30}}>
              <Image source={require('../assets/images/loader.jpg')} />
              <Text style={{color: '#fff', bottom: '38%'}}>Click to Image</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('CameraScan')}>
                <Text style={STYLES.appButton}>SCAN CAMERA</Text>
              </TouchableOpacity>

              <View style={{margin: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: colors.SECONDARY,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 10,
                    borderRadius: 6,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    Country
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    Manufacturer
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    Vehicle Type
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    Body Type
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    // backgroundColor: colors.SECONDARY,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 20,
                    borderRadius: 6,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    --
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    --
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    --
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    --
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: colors.SECONDARY,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 10,
                    borderRadius: 6,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    Engine
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    Series
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    Restraint
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    Model
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    // backgroundColor: colors.SECONDARY,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 20,
                    borderRadius: 6,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    --
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    --
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    --
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    --
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: colors.SECONDARY,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 10,
                    borderRadius: 6,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    Check Digit
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    Model Year
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    Plant
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    Series number
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    // backgroundColor: colors.SECONDARY,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 20,
                    borderRadius: 6,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    --
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    --
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    --
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#1f1f1f',
                      fontWeight: 'bold',
                    }}>
                    --
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={STYLES.textInputName}>VIN NUMBER:</Text>
              <View
                style={{
                  borderWidth: 0.8,
                  // width: ''
                  width: '62%',
                  height: 37,
                  borderRadius: 6,
                  marginLeft: 16,
                  fontSize: 14,
                  justifyContent: 'center',
                }}>
                <Text>{VIN}</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={STYLES.textInputName}>DATE:</Text>
              <View
                style={{
                  borderWidth: 0.8,
                  // width: ''
                  width: '62%',
                  height: 37,
                  borderRadius: 6,
                  marginLeft: 80,
                  fontSize: 14,
                  justifyContent: 'center',
                }}>
                <Text>{Date}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={STYLES.textInputName}>STOCK RO #</Text>
              <View
                style={{
                  borderWidth: 0.8,
                  // width: ''
                  width: '62%',
                  height: 37,
                  borderRadius: 6,
                  marginLeft: 24,
                  fontSize: 14,
                  justifyContent: 'center',
                }}>
                <Text>{Stock}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={STYLES.textInputName}>Owner Name:</Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                onChangeText={text => setowner(text)}
                value={owner}
                onFocus={() => setEnableShift(true)}
                color="#707070"
                style={[STYLES.input2NewR, {marginLeft: '4%'}]}
                placeholder=" Owner Name"
              />
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={STYLES.textInputName}>License Plate</Text>
                <Text style={STYLES.textInputName}>Number:</Text>
              </View>
              <TextInput
                multiline={true}
                numberOfLines={4}
                onChangeText={text => setPlatenumber(text)}
                value={Platenumber}
                onFocus={() => setEnableShift(true)}
                color="#707070"
                style={[STYLES.input2NewR, {marginLeft: '4%'}]}
                placeholder="License Plate"
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
                style={[STYLES.input2NewR, {marginLeft: 32}]}
                placeholder="ENTER COMMENT (IF ANY)"
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                Login();

                setTimeout(() => {
                  navigation.navigate('Registration');
                }, 1500);
              }}>
              <Text
                style={[
                  STYLES.appButton,
                  {alignSelf: 'flex-end', marginRight: 10, marginTop: 20},
                ]}>
                ADD RECORD
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
    Scan_Data: state.CartItem.Scan_Data,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Scan_data: product =>
      dispatch({type: 'Scan_data', payload: product}, console.log('Scan_data')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRegistration);

// export default NewRegistration;

const styles = StyleSheet.create({
  filterLine: {
    borderBottomWidth: 4,
    flexDirection: 'column',
    borderColor: 'orange',
  },
});
