import React, {useState, useRef} from 'react';
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
import {SafeAreaView} from 'react-native-safe-area-context';
import DynamicText from '../Component/DynamicText';
const NewAnalysis = () => {
  const data = [
    {label: '5432', value: '5432'},
    {label: '8412', value: '8412'},
    {label: '5431', value: '5431'},
    {label: '2232', value: '2232'},
  ];

  const [dropdown, setDropdown] = useState(null);
  const [Date, setDate] = useState('');
  const [Stock, setStock] = useState('');
  const [PartName, setPartName] = useState('');
  const [ModelNo, setModelNo] = useState('');
  const [Comment, setComment] = useState('');
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);
  const [enableShift, setEnableShift] = useState(false);
  const navigation = useNavigation();
  // this will be attached with each input onChangeText
  const [textValue, setTextValue] = useState(''); // our number of inputs, we can add the length or decrease
  const [numInputs, setNumInputs] = useState(1); // all our input fields are tracked with this array
  //  const refInputs = useRef<string[]>([textValue]);
  // this will be attached with each input onChangeText

  return (
    <ScrollView>
      <SafeAreaView style={{width: '100%', height: '100%'}}>
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
          <Text style={STYLES.Heading}>PARTS</Text>
          <Text style={STYLES.subHeading}>ADD NEW PARTS</Text>

          <Text style={[STYLES.textInputName, {marginTop: 30}]}>
            MALFUNCTIONING PARTS:
          </Text>
          <View
            style={{
              flexDirection: 'column',
              marginTop: 10,
              marginLeft: 5,
            }}></View>

          <DynamicText />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default NewAnalysis;
