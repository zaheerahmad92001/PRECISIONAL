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
  SafeAreaView,
  FlatList,
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

const NewAnalysis = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);
  const [data, setdata] = useState(false);

  const [load, setload] = useState(true);
  const Userdata = () => {
    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
    };

    fetch('http://66.29.131.211:3000/api/getAllUser', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result), setdata(result.data);
        setload(false);
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // getDevice();
      Userdata();

      console.log('focus');
    });

    return unsubscribe;
  }, []);

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
            style={{marginTop: 13, marginLeft: '2%'}}
            size={28}
            color={colors.TEXT}
          />
        </TouchableOpacity>
        <Text style={[STYLES.Heading, {marginTop: '3%'}]}>USER AND ROLES</Text>
        <Text style={STYLES.subHeading}>USER LIST</Text>
        <View style={[STYLES.headView, {marginTop: 20}]}>
          <Text style={STYLES.headText}>USER LIST</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            backgroundColor: colors.SECONDARY,
            justifyContent: 'center',
          }}>
          <View style={[styles.Header, {width: '15%', marginLeft: 0}]}>
            <Text style={styles.HeaderText}>S.no#</Text>
          </View>

          <View style={[styles.Header, {width: '35%', marginLeft: -20}]}>
            <Text style={styles.HeaderText}>Name</Text>
          </View>
          <View style={[styles.Header, {width: '25%', marginLeft: 0}]}>
            <Text style={styles.HeaderText}>User Type</Text>
          </View>
          <View style={[styles.Header, {width: '25%', marginRight: '0%'}]}>
            <Text style={styles.HeaderText}>Hours Rate</Text>
          </View>
        </View>

        <ScrollView>
          <View style={{margin: 0, marginTop: 0}}>
            <FlatList
              ItemSeparatorComponent={({highlighted}) => (
                <View style={{marginLeft: 0}} />
              )}
              data={data}
              renderItem={({item, index, separators}) => (
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={[styles.Header, {width: '15%', marginLeft: '7%'}]}>
                    <Text style={styles.Text}>{index + 1}</Text>
                  </View>
                  <View style={[styles.Header, {width: '30%', marginLeft: 0}]}>
                    <Text style={styles.Text}>{item.user_name}</Text>
                  </View>
                  <View style={[styles.Header, {width: '35%', marginLeft: 0}]}>
                    <Text style={styles.Text}>{item.user_type}</Text>
                  </View>
                  {/* <View style={[styles.Header, {width: '25%'}]}>
                    <Text style={styles.Text}>{item.user_email}</Text>
                  </View> */}
                  <View
                    style={[styles.Header, {width: '25%', marginRight: '0%'}]}>
                    <Text style={styles.Text}>{item.hour_rate}</Text>
                  </View>
                </View>
              )}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Text
                style={[
                  STYLES.appButton,
                  {alignSelf: 'center', marginTop: 20},
                ]}>
                NEXT
              </Text>
            </TouchableOpacity>
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
                    <ActivityIndicator size="large" color="red" />
                  </View>
                );
              } else return null;
            })()}
          </View>

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
    fontSize: 12,
    marginLeft: 13,
    fontWeight: 'bold',
  },

  Text: {
    color: '#1f1f1f',
    fontSize: 10,
    // marginLeft: 13,
    fontWeight: 'bold',
  },

  flateText: {
    width: 80,
    color: '#1f1f1f',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
