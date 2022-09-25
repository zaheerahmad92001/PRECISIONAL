{
  /* <FlatList
  data={[{title: 'Title Text', key: 'item1'}]}
  renderItem={({item, index, separators}) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log('ada');
          let {textInputs} = this.state;
          textInputs[index] = 'BTN1';
          this.setState({
            textInputs,
          });
        }}>
        <View style={{backgroundColor: 'white'}}>
          <Text> BTN1 </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('ada');
          let {textInputs} = this.state;
          textInputs[index] = 'BTN2';
          this.setState({
            textInputs,
          });
        }}>
        <View style={{backgroundColor: 'white'}}>
          <Text> BTN2</Text>
        </View>
      </TouchableOpacity>
    </View>
  )}
/>; */
}
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as colors from '../assets/colors/index';

import {Dropdown} from 'react-native-element-dropdown';
import {STYLES} from '../assets/styles/index';
import React, {Component} from 'react';
import {log} from 'react-native-reanimated';

export class Mcart extends Component {
  state = {
    textInputs: [],
    greeting: '',
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
    this.PO();
  }

  render() {
    console.log('_______________', this.state.Data);

    return (
      <View>
        <FlatList
          style={{flex: 1}}
          data={this.state.Data}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 0.5,
                  borderBottomColor: colors.SECONDARY,
                  marginTop: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // borderBottomWidth: '0.8',
                }}>
                <View style={(styles.Header, {marginLeft: 0, width: '15%'})}>
                  <Text style={styles.flateText}>{item.po_no}</Text>
                </View>
                <View style={(styles.Header, {width: '15%', marginLeft: 5})}>
                  <Text style={styles.flateText}>{item.total_amount}:$</Text>
                  {/* <Text style={styles.flateText}> RO</Text> */}
                </View>
                <View style={(styles.Header, {width: '25%'})}>
                  <Text style={[styles.flateText, {marginLeft: 0}]}>
                    {item.expected_date}
                  </Text>
                </View>
                <View
                  style={
                    (styles.Header,
                    {
                      marginLeft: -15,
                      width: '25%',
                      marginRight: '10%',
                      flexDirection: 'row',
                      // justifyContent: 'center',
                      alignItems: 'center',
                    })
                  }>
                  <FlatList
                    data={item.parts}
                    renderItem={({item}) => (
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
                          {item.part_name}
                        </Text>

                        <Text>t{this.state.textInputs[index]}</Text>
                        <FlatList
                          data={[1]}
                          renderItem={({item, index, separators}) => (
                            <View>
                              <TouchableOpacity
                                onPress={() => {
                                  console.log('ada');
                                  let {textInputs} = this.state;
                                  textInputs[index] = 'BTN1';
                                  this.setState({
                                    textInputs,
                                  });
                                }}>
                                <View style={{backgroundColor: 'white'}}>
                                  <Text> BTN1 </Text>
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => {
                                  console.log('ada');
                                  let {textInputs} = this.state;
                                  textInputs[index] = 'BTN2';
                                  this.setState({
                                    textInputs,
                                  });
                                }}>
                                <View style={{backgroundColor: 'white'}}>
                                  <Text> BTN2</Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                          )}
                          keyExtractor={innerItem => innerItem.id}
                        />
                      </View>
                    )}
                    keyExtractor={innerItem => innerItem.id}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
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
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  flateText: {
    color: '#1f1f1f',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
