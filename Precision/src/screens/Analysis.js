import React, {useState, useEffect} from 'react';
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
  FlatList,
  Alert,
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
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

import {Col, Row, Grid} from 'react-native-easy-grid';

const NewAnalysis = () => {
  const navigation = useNavigation();
  const [refreshPage, setRefreshPage] = useState('');
  const [modalVisible, setModalVisible] = useState([]);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);

  const refresh = () => {
    setRefreshPage(true);
  };

  console.log(modalVisible);
  console.log('data');
  const [Data, setDate] = useState('');
  const AnalysisParts = () => {
    var axios = require('axios');
    var data = '';

    var config = {
      method: 'get',
      url: 'http://66.29.131.211:3000/api/analysisList',
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDate(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    AnalysisParts();
    //
    const unsubscribe = navigation.addListener('focus', () => {});
    AnalysisParts();
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({item, index}) => {
    // item

    const part = item.parts;
    const Length = part.length;
    // console.log('length', Length);
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '-3%',
          // borderBottomWidth: '0.8',
        }}>
        <View style={(styles.Header, {marginLeft: 0, width: '20%'})}>
          <Text style={[styles.flateText, {width: '93%'}]}>
            {item.vin_number}
          </Text>
        </View>
        <View style={(styles.Header, {width: '25%'})}>
          <Text style={styles.flateText}>{item.stock_ro}</Text>
          {/* <Text style={styles.flateText}> RO</Text> */}
        </View>
        <View style={(styles.Header, {width: '25%'})}>
          <Text style={[styles.flateText, {marginLeft: '-6%'}]}>
            {item.date}
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'flex-end',
            marginRight: '-10%',
          }}>
          {(() => {
            if (modalVisible[index] == 'true') {
              return (
                <View
                  style={{
                    marginLeft: '4%',

                    minHeight: 50,
                    // marginLeft: -20,
                    backgroundColor: '#FFFFFF',
                    width: 80,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,
                    elevation: 24,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 5,
                  }}>
                  <FlatList
                    data={item.parts}
                    renderItem={({item, index}) => (
                      <View style={{}}>
                        <Text
                          style={[
                            styles.flateText,
                            {
                              marginLeft: 4,
                              width: 50,
                              fontSize: 10,
                            },
                          ]}>
                          {item.part_name}
                        </Text>
                      </View>
                    )}
                    keyExtractor={innerItem => innerItem.id}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      refresh();
                      modalVisible[index] = 'false';
                      setModalVisible(modalVisible);

                      setRefreshPage('notrefresh');
                      console.log('dada');
                    }}>
                    <Text
                      style={{fontSize: 19, color: '#1f1f1f', marginLeft: 6}}>
                      X
                    </Text>
                  </TouchableOpacity>
                  <Text style={{color: '#ffffff'}}>.</Text>
                </View>
              );
            } else if (modalVisible[index] == 'false') {
              return (
                <View
                  style={
                    (styles.Header,
                    {
                      width: 60,
                      marginRight: '10%',
                      flexDirection: 'row',
                      borderRadius: 20,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    })
                  }>
                  <Text style={{color: '#1f1f1f', marginRight: 5}}>
                    {Length} Parts
                  </Text>
                  <TouchableOpacity
                    style={{
                      borderRadius: 20,
                      backgroundColor: colors.SECONDARY,
                      width: 30,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      refresh();
                      modalVisible[index] = 'true';
                      setModalVisible(modalVisible);

                      setRefreshPage('refresh');
                      console.log('dada');
                    }}>
                    <Text style={{fontSize: 35, marginTop: -10}}>+</Text>
                  </TouchableOpacity>
                </View>
              );
            } else
              return (
                <View
                  style={
                    (styles.Header,
                    {
                      width: 60,
                      marginRight: '10%',
                      flexDirection: 'row',
                      borderRadius: 20,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    })
                  }>
                  <Text style={{color: '#1f1f1f', marginRight: 5}}>
                    {Length} Parts
                  </Text>
                  <TouchableOpacity
                    style={{
                      borderRadius: 20,
                      backgroundColor: colors.SECONDARY,
                      width: 30,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      refresh();
                      modalVisible[index] = 'true';
                      setModalVisible(modalVisible);

                      setRefreshPage('refresh');
                      console.log('dada');
                    }}>
                    <Text style={{fontSize: 35, marginTop: -10}}>+</Text>
                  </TouchableOpacity>
                </View>
              );
          })()}
        </View>
      </View>
    );
  };
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
        <Text style={STYLES.Heading}>ANALYSIS</Text>
        <Text style={STYLES.subHeading}>PARTS LIST</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            backgroundColor: colors.SECONDARY,
            justifyContent: 'center',
          }}>
          <View
            style={
              (styles.Header,
              {marginLeft: '12%', width: '20%', marginHorizontal: -20})
            }>
            <Text style={styles.HeaderText}>VIN</Text>
          </View>
          <View style={(styles.Header, {width: '25%'})}>
            <Text style={styles.HeaderText}>STOCK RO</Text>
            {/* <Text style={styles.HeaderText}> </Text> */}
          </View>
          <View style={(styles.Header, {width: '25%'})}>
            <Text style={styles.HeaderText}>DATE OF</Text>
            <Text style={styles.HeaderText}>ANALYSIS</Text>
          </View>
          <View style={(styles.Header, {width: '27%', marginRight: '10%'})}>
            <Text style={styles.HeaderText}>PARTS</Text>
          </View>
        </View>
        <ScrollView>
          <View style={{margin: 0, marginTop: 10}}>
            <FlatList
              data={Data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />

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

            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible2}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible2(!modalVisible2);
              }}>
              <View style={[STYLES.modalView, {marginTop: '-9%'}]}>
                <View>
                  <Pressable
                    style={{alignSelf: 'flex-end'}}
                    onPress={() => setModalVisible2(!modalVisible2)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <FontAwesome name="close" size={25} color={colors.TEXT} />
                      <Text style={STYLES.modalText}>Close</Text>
                    </View>
                  </Pressable>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={STYLES.modalText}>Part Name - </Text>
                    <Text style={STYLES.modalText}>Part Name - </Text>
                    <Text style={STYLES.modalText}>Part Name</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={STYLES.modalText}>Part Name - </Text>
                    <Text style={STYLES.modalText}>Part Name - </Text>
                    <Text style={STYLES.modalText}>Part Name</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={STYLES.modalText}>Part Name - </Text>
                    <Text style={STYLES.modalText}>Part Name - </Text>
                    <Text style={STYLES.modalText}>Part Name</Text>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible3}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible3(!modalVisible3);
              }}>
              <View style={[STYLES.modalView, {marginTop: '13%'}]}>
                <View>
                  <Pressable
                    style={{alignSelf: 'flex-end'}}
                    onPress={() => setModalVisible3(!modalVisible3)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <FontAwesome name="close" size={25} color={colors.TEXT} />
                      <Text style={STYLES.modalText}>Close</Text>
                    </View>
                  </Pressable>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={STYLES.modalText}>Part Name - </Text>
                    <Text style={STYLES.modalText}>Part Name - </Text>
                    <Text style={STYLES.modalText}>Part Name</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={STYLES.modalText}>Part Name - </Text>
                    <Text style={STYLES.modalText}>Part Name - </Text>
                    <Text style={STYLES.modalText}>Part Name</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={STYLES.modalText}>Part Name - </Text>
                    <Text style={STYLES.modalText}>Part Name - </Text>
                    <Text style={STYLES.modalText}>Part Name</Text>
                  </View>
                </View>
              </View>
            </Modal>
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
                <Text />
                <Text />
                <Text />
              </ScrollView>
            </LinearGradient>
          </Modal>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NewAnalysis;

const styles = StyleSheet.create({
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
    marginLeft: 13,
    fontWeight: 'bold',
  },
  flateText: {
    width: 80,
    color: '#1f1f1f',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
