import React, {useState , useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {STYLES} from '../assets/styles/index';
import {connect} from 'react-redux';
import * as colors from '../assets/colors/index';
import {log} from 'react-native-reanimated';

import RNTextDetector from "rn-text-detector";
import ImagePicker from 'react-native-image-crop-picker';

function LoginScreen(props) {
  // const navigation = useNavigation();
const camera = useRef()

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const [Auth, setAuth] = useState(0);
  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('abc123');

  const [load, setload] = useState(false);
  const Login = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      user_name: email,
      user_password: password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://66.29.131.211:3000/api/user_login', requestOptions)
      .then(response => response.json())

      .then(result => {
        Alert.alert(result.message);

        console.log('LOGIN RESPONSE', result.data),
          (() => {
            if (result.message == 'Login Successful.') {
              return (
                console.log('successful', result.data.user_type),
                props.EmailAdd({
                  user_type: result.data.user_type,
                  message: 'log',
                  id: result.data.user_type,
                  header: result.data._id,
                  name: result.data.employe_name,
                  employe_id: result.data.employe_id,
                  date: result.data.updatedAt,
                  token: result.data.user_authentication,
                })
              );
            } else if (result.message !== 'Login Successful.') {
              return (
                console.log('invalid', result.message),
                Alert.alert(result.message)
              );
            } else return console.log(' invalid enrty');
          })();
      })

      .catch(error => {
        console.log('error', error);
        Alert.alert('Check Your Internet Connection');
      });
  };


 const takePicture = async () => {
  ImagePicker.openPicker({
    cropping: false,
  }).then(async (image) => {
    var Image = {
      uri: image.path,
      type: image.mime,
      // name: `Image${index + 1}`,
    };
    const visionResp = await RNTextDetector.detectFromFile(image.path);
    visionResp?.map((item)=>{
    console.log(item.text);

    })
    // console.log('visionResp', visionResp);
    // console.log('here is URI' ,image.path);
  });
  };





  return (
    <View style={[STYLES.container, {alignItems: 'center'}]}>
      <Image
        source={require('../assets/images/dark.jpg')}
        style={{
          opacity: 0.1,
          zIndex: -1,
          position: 'absolute',
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
        }}
      />
      <View style={{marginTop: 50}}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
        }}>
        <LinearGradient
          colors={['#E3FBFF', '#F2F2F2']}
          style={styles.linearGradientText}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            allowFontScaling={false}
          />
        </LinearGradient>
        <LinearGradient
          colors={['#E3FBFF', '#F2F2F2']}
          style={styles.linearGradientText}>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            allowFontScaling={false}
            secureTextEntry={true}
          />
        </LinearGradient>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          Login();
          setload(true);
        }}>
        <LinearGradient
          colors={[colors.SECONDARY, colors.SECONDARY]}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>SIGIN</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{
            color: '#228588',
            textDecorationLine: 'underline',
            marginTop: 15,
            fontFamily: 'Montserrat-Regular',
          }}>
          Forgot Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>takePicture()}>
            <Text style={{ fontSize: 14 , }}> SNAP </Text>
          </TouchableOpacity>

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
  );
}

const mapStateToProps = state => {
  return {
    id: state.Auth.header,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    EmailAdd: product =>
      dispatch({type: 'EmailAdd', payload: product}, console.log('EmailAdd')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  loginText: {
    fontSize: 32,
    color: colors.PRIMARY,
    fontFamily: 'Montserrat-Regular',
  },
  linearGradient: {
    width: 290,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 25,
    marginTop: 10,
  },
  linearGradientText: {
    width: 290,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
  },
  buttonBorder: {
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'blue',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  buttonIn: {
    fontSize: 15,
    color: 'blue',
    fontFamily: 'Montserrat-Regular',
  },
  lastText: {
    justifyContent: 'center',
    marginTop: 30,
    flexDirection: 'row',
    fontFamily: 'Montserrat-Regular',
  },
  input: {
    height: 50,
    width: 290,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: 'black',
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  logo: {
    width: 250,
    height: 250,
  },


  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },

});

