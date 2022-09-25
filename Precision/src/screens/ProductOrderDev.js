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
  SafeAreaView,
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

import {Col, Row, Grid} from 'react-native-easy-grid';

const NewAnalysis = ({route}) => {
  const navigation = useNavigation();
  const [dropdown, setDropdown] = useState(null);
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);
  const [price, setprice] = useState([0]);
  const [IntPrice, setIntPrice] = useState(false);
  const [Total, setTotal] = useState(0);
  const [Supplierlist, setSupplier] = useState();
  const [refreshPage, setRefreshPage] = useState('');
  const [modalVisible, setModalVisible] = useState([]);
  const [suppliername, setSuppliername] = useState([]);
  const [Podev, setPodev] = useState([]);
  const refresh = () => {
    setRefreshPage(true);
  };
  const [load, setload] = useState(false);

  const {parts, Analysis_id} = route.params;
  console.log(Podev);

  const Supplier = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://66.29.131.211:3000/api/allsuppliers', requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result);

        setSupplier(result.data);
        setload(false);
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // getDevice();

      setprice([0]);
      Supplier();
      setTotal(0);
      setPodev([]);

      // Podev([];
    });

    return unsubscribe;
  }, []);

  // console.log('Price', price);
  const Data = [
    {
      Sno: 1,
      parts: 'Gear box',
      partid: '678B',
      supplier: 'Ali Autos',
      Amount: 300,
    },

    {
      Sno: 2,
      parts: 'Plugs',
      partid: '234f',
      supplier: 'Precision',
      Amount: 600,
    },
    {
      Sno: 3,
      parts: 'Tire',
      partid: '564g',
      supplier: 'Precision',
      Amount: 900,
    },
  ];

  // const

  const renderItem = ({item, index}) => {
    const Sum = () => {
      var result = price.map(function (x) {
        return parseInt(x, 10);
      });

      console.log(result);
      const sum = result.reduce((partialSum, a) => partialSum + a);

      console.log(sum);
      setTotal(sum);
    };

    var id = index;

    var part_name = item.part_name;
    var part_model_num = item.part_model_num;
    var part_amount = price[index];
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.Header}>
          <Text style={(styles.HeaderText, {color: '#1f1f1f'})}>
            {index + 1}
          </Text>
        </View>
        <View style={(styles.Header, {marginLeft: '4%', width: '20%'})}>
          <Text style={(styles.HeaderText, {color: '#1f1f1f', width: '90%'})}>
            {item.part_name}
          </Text>
        </View>
        <View style={(styles.Header, {width: '20%'})}>
          <Text style={(styles.HeaderText, {color: '#1f1f1f', width: '98%'})}>
            {item.part_model_num}
          </Text>
        </View>
        <View style={(styles.Header, {width: '20%', marginLeft: '-2%'})}>
          {(() => {
            if (modalVisible[index] == 'true') {
              return (
                <View
                  style={{
                    marginLeft: '-4%',
                    minHeight: 50, 
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
                    data={Supplierlist}
                    renderItem={({item, index}) => (
                      <ScrollView style={{}}>
                        <TouchableOpacity
                          onPress={() => {
                            refresh();
                            suppliername[id] = item.supplier_name;
                            setSuppliername(suppliername);

                            (Podev[id] = {
                              part_name: part_name,
                              part_model_num: part_model_num,
                              part_amount: part_amount,
                              part_supplier: item._id,
                            }),
                              setPodev(...[Podev]);

                            modalVisible[id] = 'false';
                            setModalVisible(modalVisible);
                            setRefreshPage('notrefresh');
                            console.log('1');
                          }}>
                          <Text
                            style={[
                              styles.flateText,
                              {
                                marginLeft: 4,
                                width: 50,
                                fontSize: 10,
                              },
                            ]}>
                            {item.supplier_name}
                          </Text>
                        </TouchableOpacity>
                      </ScrollView>
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
                      // padding: 5,
                    })
                  }>
                  <Text
                    style={{
                      color: '#1f1f1f',
                      marginRight: 5,
                      fontSize: 12,
                      width: 50,
                    }}>
                    {suppliername[id]}
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
                  <Text
                    style={{
                      color: '#1f1f1f',
                      marginRight: 5,
                      fontSize: 12,
                      width: 50,
                    }}>
                    Select Supplier
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
        <View style={(styles.Header, {width: '20%', marginRight: '0%'})}>
          <TextInput
            style={styles.input}
            onChangeText={text => {
              let P = price;
              P[index] = text;

              setprice(P);

              (Podev[id] = {
                part_name: part_name,
                part_model_num: part_model_num,
                part_amount: text,
                part_supplier: item._id,
              }),
                setPodev(...[Podev]);
              setIntPrice(true);
              Sum();
            }}
            value={price[index]}
            placeholder="price"
            keyboardType="numeric"
          />
        </View>
      </View>
    );
  };

  const data = [
    {label: '3418', value: '3418'},
    {label: '4202', value: '4202'},
  ];

  const OrderDev = index => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      expected_date: '2022-06-22',
      total_amount: Total,
      analysis_id: Analysis_id,
      parts: Podev,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://66.29.131.211:3000/api/poDevelopment', requestOptions)
      .then(response => response.json())
      .then(result => {
        setload(false);
        console.log(result);
        Alert.alert(result.message);
        if (result.message == 'Successfully saved.') {
          navigation.navigate('ProductRGood');
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <SafeAreaView>
      <ScrollView style={STYLES.container}>
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
            style={{marginTop: '4%', marginLeft: 0}}
            size={28}
            color={colors.TEXT}
          />
        </TouchableOpacity>
        <Text
          style={[
            STYLES.Heading,
            {fontSize: 20, marginTop: '4%', marginLeft: '12%'},
          ]}>
          PRODUCT REQUEST-PURCHASE
        </Text>

        <Text style={STYLES.subHeading}>PURCHASE ORDER DEVELOPMENT</Text>
        <View style={[STYLES.headView, {marginTop: 20}]}>
          <Text style={STYLES.headText}>PR 4478</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 25, marginLeft: 10}}>
          <Dropdown
            style={STYLES.inputReqQuotation}
            data={data}
            labelField="label"
            valueField="value"
            placeholder="SEARCH BY PR NUMBER"
            value={dropdown}
            onChange={item => {
              setDropdown(item.value);
              'selected', item;
            }}
            maxHeight={95}
            selectedTextStyle={{fontSize: 10, fontFamily: 'Montserrat-Regular'}}
            placeholderStyle={{fontSize: 10, fontFamily: 'Montserrat-Regular'}}
          />
          <Dropdown
            style={STYLES.inputReqQuotation}
            data={data}
            labelField="label"
            valueField="value"
            placeholder="SEARCH BY VIN"
            value={dropdown}
            onChange={item => {
              setDropdown(item.value);
              'selected', item;
            }}
            maxHeight={95}
            selectedTextStyle={{fontSize: 10, fontFamily: 'Montserrat-Regular'}}
            placeholderStyle={{fontSize: 10, fontFamily: 'Montserrat-Regular'}}
          />
          <TouchableOpacity style={{marginLeft: 15}}>
            <Text
              style={[STYLES.appButton, {alignSelf: 'flex-end', bottom: 14}]}>
              SEARCH
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text style={{color: colors.TEXT}}>VEHICLE OWNER:</Text>
            <Text style={{color: colors.TEXT}}>VIN NUMBER:</Text>
            <Text style={{color: colors.TEXT}}>STOCK RO #:</Text>
            <Text style={{color: colors.TEXT}}>LICENESE PLATE:</Text>
          </View>
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text style={{color: colors.TEXT}}>ALEEM ALI</Text>

            <Text style={{color: colors.TEXT}}>5432</Text>
            <Text style={{color: colors.TEXT}}>4445</Text>
            <Text style={{color: colors.TEXT}}>YUK-4478</Text>
          </View>
        </View>
        <ScrollView>
          <View style={{marginTop: 0}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center',
                backgroundColor: colors.SECONDARY,
                justifyContent: 'center',
              }}>
              <View style={styles.Header}>
                <Text style={styles.HeaderText}> #</Text>
              </View>
              <View style={(styles.Header, {marginLeft: '4%', width: '20%'})}>
                <Text style={styles.HeaderText}>PARTS</Text>
              </View>
              <View style={(styles.Header, {width: '20%'})}>
                <Text style={styles.HeaderText}>PART #</Text>
              </View>
              <View style={(styles.Header, {width: '20%', marginRight: '0%'})}>
                <Text style={styles.HeaderText}>Supplier</Text>
              </View>
              <View style={(styles.Header, {width: '20%', marginRight: '0%'})}>
                <Text style={styles.HeaderText}>AMOUNT</Text>
              </View>
            </View>
            <FlatList
              data={parts}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 40,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={{fontSize: 20, fontWeight: '600'}}>SUB TOTAL</Text>

              <View
                style={{
                  marginLeft: 20,
                  marginRight: 15,
                  width: 140,
                  borderWidth: 0.7,
                  height: 30,
                  justifyContent: 'center',
                  borderRadius: 6,
                }}>
                <Text style={{fontSize: 14, marginLeft: 5, fontWeight: '600'}}>
                  {Total} $
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  setload(true);
                  OrderDev();

                  // navigation.navigate('ProductRGood');
                }}>
                <Text
                  style={[
                    STYLES.appButton,
                    {
                      // alignSelf: 'flex-end',
                      marginRight: 10,
                      // width: ;

                      paddingHorizontal: 25,
                      marginTop: 40,
                    },
                  ]}>
                  SAVE PO
                </Text>
              </TouchableOpacity>

              {/* <TouchableOpacity>
                <Text
                  style={[STYLES.appButton, {marginRight: 10, marginTop: 40}]}>
                  SAVE PO AND PRINT PDF
                </Text>
              </TouchableOpacity> */}
            </View>

            <View>
              {(() => {
                if (load == true) {
                  return (
                    <View>
                      <Text></Text>
                      <Text></Text>
                      <Text></Text>
                      <Text></Text>
                      <ActivityIndicator size="large" color="yellow" />
                    </View>
                  );
                } else return null;
              })()}
            </View>
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
        </ScrollView>
      </ScrollView>
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
    width: '10%',
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
    borderWidth: 0.8,
    padding: 5,
    borderRadius: 4,
    height: 35,
    color: '#1f1f1f',
    marginLeft: 5,
  },
});
