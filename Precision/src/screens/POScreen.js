import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  Button,
  ScrollView,
  Dimensions,
  Pressable,
  SafeAreaView,
  Alert,
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
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ProductROrder = ({route}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);

  const {PoData} = route.params;
  const [data, setdata] = useState([PoData.data]);
  const Data = [
    {
      _id: '6213dafeed8f4d5f973c6270',
      delivery_status: 'notrecieved',
      part_amount: '900',
      part_model_num: '4545',
      part_name: 'gear',
      part_supplier: '61ffad7b363dc82c90e2157e',
    },
    {
      _id: '6213dafeed8f4d5f973c6271',
      delivery_status: 'recieved',
      part_amount: '800',
      part_model_num: '2215',
      part_name: 'clutch',
      part_supplier: '61ffae10363dc82c90e21580',
    },
  ];

  // const {PoData} = route.params;
  console.log(data);

  useEffect(() => {
    // PO();
  }, []);

  const renderItem = ({item, index}) => {
    var date = dateFormat(' mmmm dS, yyyy');
    return (
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          borderBottomColor: colors.SECONDARY,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
        }}>
        <View style={(styles.Header, {marginLeft: -10, width: '15%'})}>
          <Text style={styles.flateText}> {item.po_no}</Text>
        </View>
        <View style={(styles.Header, {marginLeft: 0, width: '10%'})}>
          <Text style={styles.flateText}> {item.total_amount}</Text>
        </View>
        <View style={(styles.Header, {marginLeft: 0, width: '25%'})}>
          <Text style={styles.flateText}> {item.expected_date}</Text>
        </View>

        <View
          style={
            (styles.Header,
            {
              // marginRight: '-10%',
              marginLeft: '-5%',
              // width: '30%',
              flexDirection: 'row',
              alignItems: 'center',
            })
          }>
          <FlatList
            data={item.parts}
            // numColumns={2}
            renderItem={({item, index}) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={[
                    styles.flateText,
                    {
                      margin: 5,
                      marginLeft: 15,
                    },
                  ]}>
                  {index + 1}.{item.part_name}
                </Text>
                <Text
                  style={[
                    styles.flateText,
                    {
                      margin: 5,
                      marginLeft: 15,
                    },
                  ]}>
                  {item.part_amount} $
                </Text>
              </View>
            )}
            keyExtractor={innerItem => innerItem.id}
          />
        </View>
      </View>
    );
  };

  // const A = navigation.route.params.Data;

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
        <Text style={[STYLES.Heading, {fontSize: 20, marginTop: 9}]}>
          PRODUCT REQUEST-PURCHASE
        </Text>
        <Text style={STYLES.subHeading}>PURCHASE ORDER SUMMERY</Text>
        <View style={[STYLES.headView, {marginTop: 20}]}>
          <Text style={STYLES.headText}>List for Purchase Order</Text>
        </View>
        <ScrollView>
          <View style={{margin: 0, marginTop: 30}}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#1f1f1f',
                backgroundColor: '#C6E600',
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                width: '100%',
                height: 40,
              }}>
              <View style={(styles.Header, {marginLeft: '2%', width: '15%'})}>
                <Text style={styles.flateText}>PO.#</Text>
              </View>

              <View style={(styles.Header, {marginLeft: '0%', width: '10%'})}>
                <Text style={styles.flateText}>PRICE</Text>
              </View>
              <View style={(styles.Header, {marginLeft: '4%', width: '25%'})}>
                <Text style={styles.flateText}>Exp Date</Text>
              </View>

              <View
                style={
                  (styles.Header,
                  {
                    // width: '50%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  })
                }>
                <Text
                  style={[
                    styles.flateText,
                    {
                      // margin: 5,
                      marginLeft: -12,
                    },
                  ]}>
                  PARTS
                </Text>
              </View>

              <View
                style={
                  (styles.Header,
                  {
                    // width: '50%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  })
                }>
                <Text
                  style={[
                    styles.flateText,
                    {
                      // margin: 5,
                      marginLeft: 15,
                    },
                  ]}>
                  SUB PRICE
                </Text>
              </View>
            </View>

            <FlatList
              data={data}
              // data={Data}
              // data={[1, 2, 3]}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            {/* <Text>{PoData.data.analysis_id}</Text> */}
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
      </View>
    </SafeAreaView>
  );
};

export default ProductROrder;

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
    fontWeight: 'bold',
  },
  flateText: {
    textTransform: 'capitalize',
    color: '#1f1f1f',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
