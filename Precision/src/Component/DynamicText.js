import React, {Component} from 'react';
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
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-crop-picker';

import {STYLES} from '../assets/styles/index';
import {Dropdown} from 'react-native-element-dropdown';
import {connect} from 'react-redux';
import dateFormat, {masks} from 'dateformat';
import {navigation} from 'react-navigation';

const now = new Date();
import moment from 'moment';

class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
      inputData: [],
      id: 1,
      name: '',
      Partid: '',
      dropdown: ['001', '002', '3'],
      vin: 'p',
      stock: '',
      comment: '',
      date: dateFormat(' mmmm dS, yyyy'),
      Product: [],
      arry: [4, 5, 6, 7, 8],
      DropData: [],
      Images: [],
      button: ['Imagename0'],
      laod: false,
    };
  }

  openGallery = index => {
    ImagePicker.openPicker({
      cropping: false,
    }).then(image => {
      console.log('selected image', image);
      let name = ` "Name" : Image${index + 1}`;
      let {Images} = this.state;
      var Image = {
        Value: index,
        uri: image.path,
        type: image.mime,
        name: `Image${index + 1}`,
      };

      Images[index] = Image;
      this.setState({Images});
    });
  };

  Alertbox = () => {
    Alert.alert('ITEM ADDED', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };
  Alertbox_faild = () => {
    Alert.alert('INVALID ENRTY', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };

  NewAnalysis = (created_by, comment, stock_ro) => {
    var axios = require('axios');
    var data = JSON.stringify({
      vin_number: this.state.dropdown,
      // need to be static
      product_id: '61dd0fce919c2418540ed074',
      date: this.state.date,
      parts: this.state.inputData,
      created_by: this.props.id,
      comment: this.state.comment,
      stock_ro: this.state.stock,
    });

    var config = {
      method: 'post',
      url: 'http://66.29.131.211:3000/api/addNewAnalysis',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        this.Alertbox();
      })
      .catch(function (error) {
        // this.Alertbox();
        console.log(error);
      });
  };

  setCount = () =>
    this.setState(prevState => ({...prevState, id: this.state.id + 1}));

  decCount = () =>
    this.setState(prevState => ({...prevState, id: this.state.id - 1}));

  addTextInput = (index, Id) => {
    console.log('here is index', index);
    let textInput = this.state.textInput;
    let ImagePath = this.state.Images[index-1];

    console.log('_______Image path after add _______', ImagePath);

    textInput.push(
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginRight: 10,
        }}>
        <Text style={STYLES.textInputName}>{index + 1}</Text>

        <TextInput
          style={[
            STYLES.input2NewAna,
            {marginLeft: 10, width: '36%', color: '#1f1f1f'},
          ]}
          onChangeText={text => this.setState({name: text})}
        />
        <TextInput
          style={[
            STYLES.input2NewAna,
            {marginLeft: 10, width: '30%', color: '#1f1f1f'},
          ]}
          onChangeText={text => this.setState({Partid: text})}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#C6E600',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            marginTop: -5,
            height: 30,
          }}
          onPress={() => {
            this.openGallery(index);
            let {button} = this.state;

            button[index] = `Added${index}`;
            this.setState({button});
          }}>
          <Text style={{color: '#ffffff', fontSize: 12, margin: 4}}>
            Add Image
          </Text>
        </TouchableOpacity>
      </View>,
    );
    this.setState({textInput});
  };

  addValues = (text, index, partid) => {
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach(element => {
        if (element.index === index) {
          element.part_name = text;
          element.part_model_num = partid;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        inputData: dataArray,
      });
    } else {
      dataArray.push({part_name: text, part_model_num: partid});
      this.setState({
        inputData: dataArray,
      });
    }
  };

  getValues = () => {
    console.log('Data', this.state.inputData);
  };

  //function to remove TextInput dynamically
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({textInput, inputData});
  };

  product = () => {
    var raw = '';

    var requestOptions = {
      method: 'GET',
      body: raw,
      redirect: 'follow',
    };

    fetch('http://66.29.131.211:3000/api/dropDownVin', requestOptions)
      .then(response => response.json())
      .then(result => {
        // this.setState({Product: result.data});

        this.setState({
          DropData: result.data,
        });
        const objArray = [
          {foo: 1, bar: 2},
          {foo: 3, bar: 4},
          {foo: 5, bar: 6},
        ];
        let Vin = result.data;
        let t = Vin.map(({vin_number}) => {
          vin_number;

          // console.log(vin_number);
          this.setState({
            Product: [
              ...this.state.Product,
              {label: vin_number, value: vin_number},
            ],
          });
          // this.setState([Product: {label: vin_number, value: vin_number}]);
        });
      })
      .catch(error => console.log('error', error));
  };
  componentDidMount() {
    this.product();
    this.addTextInput(this.state.textInput.length, this.state.button);
    this.setCount();
  }
  data = [
    {label: '001', value: '001'},
    {label: '002', value: '002'},
    {label: '222', value: '222'},
    {label: '035', value: '035'},
  ];
  arry = [4, 5, 6, 7, 8];

  test = Stock => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      vin_number: this.state.vin,
      // need to be static
      product_id: '61b4bd364b039e407903163d',
      date: this.state.date,
      parts: this.state.inputData,
      created_by: this.props.id,
      comment: this.state.comment,
      stock_ro: Stock,
    });

// console.log('images ', this.state.Images)
// console.log('data sending to server' ,raw);
//     return false

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://66.29.131.211:3000/api/addNewAnalysis', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result), Alert.alert(result.message);

        (() => {
          if (result.message == 'Successfull') {
            {
              this.setState({
                load: false,
              });
              this.setState({vin: ''}),
                this.setState({inputData: []}),
                this.setState({id: ''}),
                this.setState({comment: ''}),
                this.setState({Stock: ''}),
                this.setState({textInput: []});
              this.removeTextInput(), this.decCount();
              this.setState({button: true});
              this.setCount();
              this.addTextInput(this.state.textInput.length);
              this.props.navigation.navigate('Analysis');
            }
          } else return null;
        })();
      })
      .catch(error => console.log('error', error));
  };



  // getView(){
  //   this
  // }
  render() {
    var DATA = this.state.DropData;
    var a = this.state.vin;

    // console.log(
    //   '################_____IMAGE_____############',
    //   this.state.Images,
    // );

    var newArray = DATA.filter(function (el) {
      return el.vin_number.startsWith(a);
    });
    // console.log('new Array', newArray);
    console.log('vin', this.state.vin);

    const _Stock = newArray.map(ele => ele.stock_ro);

    var Stock = Number(_Stock);

    console.log('stock',Stock);

    let textInput = this.state.textInput;

    let ImagePath = this.state.button[0];
    console.log('image path', ImagePath);

    this.getValues();
    // {
    //   (() => {
    //     if (this.state.button[0] === 0) {
    //       return console.log('match');
    //     } else return console.log(' not  match');
    //   })();
    // }
    // Im();

    return (
      <View>
        <SafeAreaView style={{flexDirection: 'column', marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
              paddingRight: 10,
            }}>
            <Text style={STYLES.textInputName}>VIN NUMBER:</Text>

            <Dropdown
              style={[STYLES.inputNewAna, {marginLeft: -15}]}
              data={this.state.Product}
              labelField="label"
              valueField="value"
              placeholder="Select Vin Here"
              // value={this.state.dropdown}
              onChange={item => {
                // setDropdown(item.value);
                'selected', item;
                this.setState({vin: item.value});
              }}
              value={this.state.vin}
              maxHeight={312}
              // maxWidth={300}
              selectedTextStyle={{
                fontSize: 12,
                color: '#1f1f1f',
              }}
              placeholderStyle={{
                color: '#1f1f1f',

                fontSize: 12,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
              paddingRight: 10,
            }}>
            <Text style={STYLES.textInputName}>STOCK RO NUMBER: </Text>

            <View
              style={{
                width: '48%',
                borderRadius: 6,
                borderWidth: 1,
                height: 36,
                backgroundColor: '#ffffff',
                borderColor: '#777474',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Text style={[{marginLeft: 10, fontSize: 14, color: '#1f1f1f'}]}>
                {Stock}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
              paddingRight: 10,
            }}>
            <Text style={STYLES.textInputName}>DATE OF ANALYSIS:</Text>

            <View
              style={[
                STYLES.inputNewAna,
                {
                  // marginLeft: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Text style={{color: '#1f1f1f'}}>{this.state.date}</Text>
            </View>
          </View>
        </SafeAreaView>
        <Text style={[STYLES.textInputName, {marginTop: 30}]}>
          MALFUNCTIONING PARTS:
        </Text>

        <View style={styles.row}></View>
        {this.state.textInput.map(value => {
          return value;
        })}

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginTop: 10,
            marginRight: 12,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setCount();
              this.addValues(this.state.name, this.state.id, this.state.Partid);
              this.addTextInput(this.state.textInput.length);
            }}>
            <Text style={[STYLES.appButton, {marginRight: 12}]}>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.removeTextInput(), this.decCount();

              this.setState({button: true});
            }}>
            <Text style={STYLES.appButton}>DELETE</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20, paddingRight: 10}}>
          <Text style={STYLES.textInputName}>COMMENT:</Text>

          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={text => {
              this.setState({comment: text});
            }}
            value={this.state.comment}
            // onFocus={() => setEnableShift(true)}
            color="#707070"
            style={[
              STYLES.input3NewAna,
              {
                marginLeft: 27,

                // paddingRight: 40,
              },
            ]}
            placeholder="ENTER COMMENT (IF ANY)"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            (() => {
              if (this.state.vin == 'p') {
                return Alert.alert('Empty filed');
              } else {
                // this.setCount();
                // this.addTextInput(this.state.textInput.length);
                this.setState({
                  load: true,
                });
                this.addValues(
                  this.state.name,
                  this.state.id,
                  this.state.Partid,
                );
                setTimeout(() => {
                  this.test(Stock);
                }, 500);
              }
            })();
          }}>
          <Text
            style={[
              STYLES.appButton,
              {alignSelf: 'flex-end', marginRight: 10},
            ]}>
            SUBMIT
          </Text>
        </TouchableOpacity>

        <View>
          {(() => {
            if (this.state.load == true) {
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonView: {
    flexDirection: 'row',
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    id: state.Auth.header,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Upsale: product => dispatch({type: 'Upsale', payload: product}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyClass);
