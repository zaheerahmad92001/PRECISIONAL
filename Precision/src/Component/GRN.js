import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import * as colors from '../assets/colors/index';

import {Dropdown} from 'react-native-element-dropdown';
import {STYLES} from '../assets/styles/index';
import React, {Component} from 'react';
import {log} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export class Mcart extends Component {
  state = {
    Dropdown: [],
    textInputs: [],
    greeting: '',
    Parts: this.props.route.params.Parts,
    t: this.props.route.params.t,
    Data: [],
    data: [
      {label: 'Recieved', value: 'Recieved'},
      {label: 'NotRecieve', value: 'NotRecieve'},
    ],
  };
  PO = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://66.29.131.211:3000/api/listOfPO', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({Data: result.data});
      })
      .catch(error => console.log('error', error));
  };

  componentDidMount() {
    // this.PO();
    this.focusListener = this.props.navigation.addListener('focus', () => {
      console.log('focus is called');

      this.setState({Parts: this.props.route.params.Parts});
      //your logic here.
    });
  }

  Drop = () => {
    if (this.state.Dropdown == false) {
      this.setState({Dropdown: true});
      console.log('###', this.state.Dropdown);
    } else if (this.state.Dropdown == true) {
      this.setState({Dropdown: false});
      console.log('###', this.state.Dropdown);
    } else {
      this.setState({Dropdown: false});
    }
  };
  render() {
    return (
      <SafeAreaView style={STYLES.container}>
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

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Ionicons
              name="menu-outline"
              style={{marginTop: 13, marginLeft: 10}}
              size={30}
              color={colors.TEXT}
            />
          </TouchableOpacity>
          <Text style={STYLES.subHeading}>GOOD RECIEVING NOTES</Text>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 20}}>
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

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            backgroundColor: colors.SECONDARY,
            justifyContent: 'center',
          }}>
          <View style={[styles.Header, {width: '15%', marginLeft: 0}]}>
            <Text style={styles.HeaderText}>S.NO#</Text>
          </View>
          <View style={[styles.Header, {width: '15%', marginLeft: 0}]}>
            <Text style={styles.HeaderText}>PARTS</Text>
          </View>
          <View style={[styles.Header, {width: '20%'}]}>
            <Text style={styles.HeaderText}>P ID</Text>
          </View>
          <View style={[styles.Header, {width: '15%', marginRight: '0%'}]}>
            <Text style={styles.HeaderText}>PRICE</Text>
          </View>
          <View style={[styles.Header, {width: '35%', marginRight: '0%'}]}>
            <Text style={styles.HeaderText}>DElIVERY STATUS</Text>
          </View>
        </View>

        <FlatList
          data={this.state.Parts}
          renderItem={({item, index}) => {

            // let {Dropdown} = this.state;

            // const Drop = () => {
            //   let {Dropdown} = this.state;
            //   if (Dropdown == false) {
            //     Dropdown[index] = true;

            //     this.setState({
            //       Dropdown,
            //     });
            //     console.log('###', index, this.state.Dropdown);
            //   } else if (Dropdown == true) {
            //     Dropdown[index] = false;

            //     this.setState({
            //       Dropdown,
            //     });
            //     console.log('###', this.state.Dropdown);
            //   } else {
            //     Dropdown[index] = false;

            //     this.setState({
            //       Dropdown,
            //     });
            //   }
            // };

            var Parts = item.part_name;
            // console.log('item.delivery_status',item._id);
            return (
              
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 0.5,
                  borderBottomColor: colors.SECONDARY,
                  marginTop: 20,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={(styles.Header, {marginLeft: '0%', width: '10%'})}>
                  <Text style={styles.flateText}>{index + 1}</Text>
                </View>
                <View style={[styles.Header, {width: '15%', marginLeft: 0}]}>
                  <Text style={styles.flateText}>{item.part_name}</Text>
                </View>
                <View
                  style={[styles.Header, {width: '20%', marginLeft: '-0%'}]}>
                  <Text style={styles.flateText}>{item.part_model_num} </Text>
                </View>
                <View style={[styles.Header, {width: '15%'}]}>
                  <Text style={[styles.flateText, {marginLeft: 0}]}>
                    $: {item.part_amount}
                  </Text>
                </View>
                <View
                  style={
                    (styles.Header,
                    {
                      alignItems: 'center',
                    })
                  }>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        this.Drop();
                      }}>
                      <Text
                        style={[
                          {marginLeft: 0, fontSize: 14, fontWeight: 'bold'},
                        ]}>
                        {(() => {
                          if (this.state.textInputs[index] == 'recieved') {
                            // console.log('this.state.textInputs[index]',this.state.textInputs[index]);
                            return (
                              <View style={{flexDirection: 'row'}}>
                                <Text
                                  style={{
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    color: '#1f1f1f',
                                    padding: 6,
                                    fontSize: 14,

                                    alignItems: 'center',
                                  }}>
                                  Recieved
                                </Text>

                                <View
                                  style={{
                                    backgroundColor: 'green',
                                    width: 20,
                                    height: 20,
                                    borderRadius: 100,
                                    marginTop: 4,
                                    marginLeft: 5,
                                  }}></View>
                              </View>
                            );
                          } else if (
                            this.state.textInputs[index] == 'notrecieved'
                          ) {
                            return (
                              <View style={{flexDirection: 'row'}}>
                                <Text
                                  style={{
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    padding: 6,

                                    color: '#1f1f1f',

                                    alignItems: 'center',
                                  }}>
                                  Not Recieved
                                </Text>

                                <View
                                  style={{
                                    backgroundColor: 'red',
                                    width: 20,
                                    height: 20,
                                    borderRadius: 100,
                                    marginTop: 4,

                                    marginLeft: 5,
                                  }}></View>
                              </View>
                            );
                          } else
                            return (
                              <View style={{flexDirection: 'row'}}>
                                <Text
                                  style={{
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    padding: 6,
                                    fontSize: 14,
                                    color: '#1f1f1f',
                                  }}>
                                  {item.delivery_status}
                                </Text>

                                {(() => {
                                  if (item.delivery_status == 'notrecieved') {
                                    return (
                                      <View
                                        style={{
                                          backgroundColor: 'red',
                                          width: 20,
                                          height: 20,
                                          borderRadius: 100,
                                          marginTop: 4,
                                          marginLeft: 5,
                                        }}></View>
                                    );
                                  } else if (
                                    item.delivery_status == 'recieved'
                                  ) {
                                    return (
                                      <View
                                        style={{
                                          backgroundColor: 'green',
                                          width: 20,
                                          height: 20,
                                          borderRadius: 100,
                                          marginTop: 4,

                                          marginLeft: 5,
                                        }}></View>
                                    );
                                  } else return null;
                                })()}
                              </View>
                            );
                        })()}
                      </Text>
                    </TouchableOpacity>
                    {this.state.Dropdown == false ? null : (
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            console.log('here is item',item);
                            let {textInputs} = this.state;
                            if (this.state.textInputs[index] == 'recieved') {
                              textInputs[index] = 'notrecieved';
                            } else if (this.state.textInputs[index] == 'notrecieved'){
                              textInputs[index] = 'recieved';
                            } else if (item.delivery_status == 'recieved') {
                              textInputs[index] = 'notrecieved';
                            } else if (item.delivery_status == 'notrecieved') {
                              textInputs[index] = 'recieved';
                              console.log(' recived');
                            } else {
                              console.log('nothing');
                            }
                            this.setState({textInputs});

                            var myHeaders = new Headers();
                            myHeaders.append(
                              'Content-Type',
                              'application/json',
                            );

                            var raw = JSON.stringify({
                              // product_id: item._id,
                              part_id:item._id,
                              delivery_status:this.state.textInputs[index]
                              // product_status: this.state.textInputs[index],
                            });

                            var requestOptions = {
                              method: 'POST',
                              headers: myHeaders,
                              body: raw,
                              redirect: 'follow',
                            };

                            console.log('data sending to server', raw);

                            // return false

                            // fetch(
                            //   'http://66.29.131.211:3000/api/productStatus',
                            //   requestOptions,
                            // )
                            fetch(
                                'http://66.29.131.211:3000/api/deliveryStatus',
                                requestOptions,
                              )
                              .then(response => response.json())
                              .then(result => {
                                console.log('here is api result', result),
                                  Alert.alert(Parts, result.message);
                                this.Drop();
                              })
                              .catch(error => console.log('error', error));

                            // Drop();
                          }}>
                          <View style={{backgroundColor: 'white'}}>
                            <Text style={[styles.flateText, {marginTop: 5}]}>
                              {(() => {
                                if (
                                  this.state.textInputs[index] == 'recieved'
                                ) {
                                  return <Text>Not Recieved</Text>;
                                } else if (
                                  this.state.textInputs[index] == 'notrecieved'
                                ) {
                                  return <Text>Recieved</Text>;
                                } else if (item.delivery_status == 'recieved') {
                                  return <Text>Not Recieved</Text>;
                                } else if (
                                  item.delivery_status == 'notrecieved'
                                ) {
                                  return <Text>Recieved</Text>;
                                } else
                                  return <Text>{item.delivery_status}</Text>;
                              })()}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

export default Mcart;

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
    color: '#1f1f1f',
    fontSize: 14,
    fontWeight: 'bold',
  },
  flateText: {
    color: '#1f1f1f',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
