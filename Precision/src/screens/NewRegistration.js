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

const NewRegistration = props => {
  var date = dateFormat(' mmmm dS, yyyy');

  console.log('datta scan', props.Scan_data);
  const [VIN, setVIN] = useState('');
  const [Date, setDate] = useState('');
  const [Stock, setStock] = useState('');
  const [Comment, setComment] = useState('');
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);
  const [all, setAll] = useState(true);
  const [order, setOrder] = useState(false);
  const [deliver, setDeliver] = useState(false);
  const [returned, setReturned] = useState(false);
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
              {' '}
              PRECISION AUTOS MANAGEMENT SYSTEM{' '}
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
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={STYLES.textInputName}>VIN NUMBER:</Text>
              <TextInput
                placeholder="AUTO SCANNED NUMBER HERE"
                onChangeText={text => setVIN(text)}
                value={VIN}
                onFocus={() => setEnableShift(true)}
                style={[STYLES.inputNewR, {marginLeft: 10}]}
              />
            </View>
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
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  Country
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  Manufacturer
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  Vehicle Type
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
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
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  --
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  --
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  --
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
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
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  Engine
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  Series
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  Restraint
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
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
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  --
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  --
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  --
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
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
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  Check Digit
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  Model Year
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  Plant
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
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
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  --
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  --
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  --
                </Text>
                <Text
                  style={{fontSize: 14, color: '#1f1f1f', fontWeight: 'bold'}}>
                  --
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={STYLES.textInputName}>DATE:</Text>
              <TextInput
                placeholder="AUTO DATE"
                onChangeText={text => setDate(text)}
                value={date}
                onFocus={() => setEnableShift(true)}
                style={[STYLES.input2NewR, {marginRight: 10}]}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={STYLES.textInputName}>Owner Name:</Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                onChangeText={text => setComment(text)}
                value={Comment}
                onFocus={() => setEnableShift(true)}
                color="#707070"
                style={[STYLES.input2NewR, {marginRight: 10}]}
                placeholder="Owner Name "
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text style={STYLES.textInputName}>License Plate</Text>
                <Text style={STYLES.textInputName}>Number:</Text>
              </View>
              <TextInput
                multiline={true}
                numberOfLines={4}
                onChangeText={text => setComment(text)}
                value={Comment}
                onFocus={() => setEnableShift(true)}
                color="#707070"
                style={[STYLES.input2NewR, {marginRight: 10}]}
                placeholder="License Plate"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={STYLES.textInputName}>STOCK RO #</Text>
              <TextInput
                placeholder="ENTER RO NUMBER"
                onChangeText={text => setStock(text)}
                value={Stock}
                onFocus={() => setEnableShift(true)}
                style={[STYLES.input2NewR, {marginRight: 10}]}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={STYLES.textInputName}>COMMENT:</Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                onChangeText={text => setComment(text)}
                value={Comment}
                onFocus={() => setEnableShift(true)}
                color="#707070"
                style={[STYLES.input2NewR, {marginRight: 10}]}
                placeholder=" ENTER COMMENT (IF ANY)"
              />
            </View>
            <TouchableOpacity
            // onPress={() => navigation.navigate('Registration')}
            >
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
