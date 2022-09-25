import React, {useState} from 'react';

import {
  View,
  Dimensions,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';
// import {RNCamera} from 'react-native-camera';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

function QrCodeCamera(props, {navigation}) {
  const onSuccess = e => {
    const data = e.data;

    if (data) {
      // Alert.alert(data);
      console.log(data);
      props.Scan_data({
        Scan_data: data,
      }),
        props.navigation.navigate('Scandata', {qrCode: data});
    } else {
      Alert.alert('error');
    }
  };

  function makeSlideOutTranslation(translationType, fromValue) {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18,
      },
      to: {
        [translationType]: fromValue,
      },
    };
  }
  const [cameraRef, setCameraRef] = useState(null);

  return (
    <SafeAreaView>
      {/* <RNCamera
        // ref={cameraRef}
        style={{
          flex: 1,
          width: '100%',
        }}
        type={'back'}
        flashMode={'off'}
        autoFocus={'on'}
        zoom={0}
        ratio={'16:9'}
        focusDepth={0}
        trackingEnabled
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onTextRecognized={({textBlocks}) => {
          console.log(textBlocks);
        }}
      /> */}

      <QRCodeScanner
        showMarker
        onRead={onSuccess}
        cameraStyle={{height: SCREEN_HEIGHT}}
        customMarker={
          <View style={styles.rectangleContainer}>
            <View style={styles.topOverlay}>
              <Text style={{fontSize: 20, color: 'white'}}>Scan a QR-Code</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={styles.leftAndRightOverlay} />

              <View style={styles.rectangle}>
                <Animatable.View
                  style={styles.scanBar}
                  direction="alternate-reverse"
                  iterationCount="infinite"
                  duration={1200}
                  easing="linear"
                  animation={makeSlideOutTranslation(
                    'translateY',
                    SCREEN_WIDTH * -0.54,
                  )}
                />
              </View>

              <View style={styles.leftAndRightOverlay} />
            </View>

            <View style={styles.bottomOverlay} />
          </View>
        }
      />
    </SafeAreaView>
  );
}

const overlayColor = 'rgba(0,0,0,0.5)'; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.003; // this is equivalent to 2 from a 393 device width
const rectBorderColor = '#d9534f';

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = '#22ff00';

const iconScanColor = 'blue';

const styles = {
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25,
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    marginTop: SCREEN_WIDTH * 0.75,
    backgroundColor: scanBarColor,
  },
};

const mapStateToProps = state => {
  return {
    id: state.Auth.id,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Scan_data: product =>
      dispatch({type: 'Scan_data', payload: product}, console.log('Scan_data')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QrCodeCamera);

// export default QrCodeCamera;
