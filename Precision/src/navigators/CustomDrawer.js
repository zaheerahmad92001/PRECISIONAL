import {Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#C6E633'}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#C6E633'}}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            height: 120,
            width: '95%',
            marginVertical: 20,
            marginHorizontal: 5,
          }}
        />
        <View style={{flex: 1, paddingVertical: 2}}>
          <DrawerItem
            label="DASHBOARD"
            labelStyle={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000',
              marginBottom: -7,
            }}
            onPress={() => props.navigation.navigate('Dashboard')}
          />

          <View style={{paddingVertical: 5}}>
            <Collapse>
              <CollapseHeader>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#000',
                      marginLeft: 18,
                      marginTop: 10,
                    }}>
                    REGISTRATIONS
                  </Text>

                  <FontAwesome5
                    name="chevron-down"
                    size={15}
                    color="#000"
                    style={{position: 'absolute', right: 35, top: 13}}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <DrawerItem
                  label="NEW REGISTRATION"
                  labelStyle={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: '#000',
                  }}
                  onPress={() => props.navigation.navigate('NewRegistration')}
                  focused={true}
                />
                <DrawerItem
                  label="REGISTRATION"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('Registration')}
                  focused={true}
                />
              </CollapseBody>
            </Collapse>
          </View>

          <View style={{paddingVertical: 5}}>
            <Collapse>
              <CollapseHeader>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#000',
                      marginLeft: 18,
                      marginTop: 10,
                    }}>
                    SUPPLIERS
                  </Text>

                  <FontAwesome5
                    name="chevron-down"
                    size={15}
                    color="#000"
                    style={{position: 'absolute', right: 35, top: 13}}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <DrawerItem
                  label="ADD SUPPLIERS"
                  labelStyle={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: '#000',
                  }}
                  onPress={() => props.navigation.navigate('NewSupplier')}
                  focused={true}
                />
                <DrawerItem
                  label="SUPPLIERS LIST"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('SupplierList')}
                  focused={true}
                />
              </CollapseBody>
            </Collapse>
          </View>

          <View style={{paddingVertical: 10}}>
            <Collapse>
              <CollapseHeader>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#000',
                      marginLeft: 18,
                      marginTop: 10,
                    }}>
                    ANALYSIS OF PARTS
                  </Text>
                  <FontAwesome5
                    name="chevron-down"
                    size={15}
                    color="#000"
                    style={{position: 'absolute', right: 35, top: 13}}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <DrawerItem
                  label="NEW ANALYSIS"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('NewAnalysis')}
                  focused={true}
                />
                <DrawerItem
                  label="ANALYSIS LIST"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('Analysis')}
                  focused={true}
                />
              </CollapseBody>
            </Collapse>
          </View>

          {/* <View style={{paddingVertical: 10}}>
            <Collapse>
              <CollapseHeader>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#000',
                      marginLeft: 18,
                      marginTop: 10,
                    }}>
                    WORKSHOP
                  </Text>
                  <FontAwesome5
                    name="chevron-down"
                    size={15}
                    color="#000"
                    style={{position: 'absolute', right: 35, top: 13}}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <DrawerItem
                  label="DETAILER WORKSHOP"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('DetailerWorkshop')}
                  focused={true}
                />
                <DrawerItem
                  label="BODY WORKSHOP"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('BodyWorkshop')}
                  focused={true}
                />
                <DrawerItem
                  label="MECHANIC WORKSHOP"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('MechanicWorkshop')}
                  focused={true}
                />
                <DrawerItem
                  label="PAINT WORKSHOP"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('PaintWorkshop')}
                  focused={true}
                />
              </CollapseBody>
            </Collapse>
          </View> */}

          <View style={{paddingVertical: 10}}>
            <Collapse>
              <CollapseHeader>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#000',
                      marginLeft: 18,
                      marginTop: 10,
                    }}>
                    PRODUCT PROCURMENT
                  </Text>
                  <FontAwesome5
                    name="chevron-down"
                    size={15}
                    color="#000"
                    style={{position: 'absolute', right: 35, top: 13}}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <DrawerItem
                  label="PURCHASE REQUEST"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('ProductRPurchase')}
                  focused={true}
                />

                <DrawerItem
                  label="PO LIST"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('ProductRGood')}
                  focused={true}
                />
              </CollapseBody>
            </Collapse>
          </View>

          <View style={{paddingVertical: 10}}>
            <Collapse>
              <CollapseHeader>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#000',
                      marginLeft: 18,
                      marginTop: 10,
                    }}>
                    USER AND ROLE
                  </Text>
                  <FontAwesome5
                    name="chevron-down"
                    size={15}
                    color="#000"
                    style={{position: 'absolute', right: 35, top: 13}}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <DrawerItem
                  label="ADD A USER"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('NewUsers')}
                  focused={true}
                />

                <DrawerItem
                  label="USER LIST"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('Users')}
                  focused={true}
                />
              </CollapseBody>
            </Collapse>
          </View>

          {/* <View style={{paddingVertical: 10}}>
            <Collapse>
              <CollapseHeader>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#000',
                      marginLeft: 18,
                      marginTop: 10,
                    }}>
                    SETTINGS
                  </Text>
                  <FontAwesome5
                    name="chevron-down"
                    size={15}
                    color="#000"
                    style={{position: 'absolute', right: 35, top: 13}}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <DrawerItem
                  label="HOURLY RATE OF LABOUR"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('Settings')}
                  focused={true}
                />
              </CollapseBody>
            </Collapse>
          </View> */}
        </View>

        <TouchableOpacity
          style={{
            width: '90%',
            height: 38,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#C6E600',
            borderRadius: 6,
            marginTop: 30,
            bottom: 0,
          }}
          activeOpacity={0.8}
          onPress={() => {
            props.EmailAdd({
              user_type: '',
              message: '',
              id: '',
              header: '',
              name: '',
              employe_id: '',
              date: '',
            });
            // Login();
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ffffff'}}>
            LOGOUT
          </Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    check: state.ApiReducer.check,
    name: state.Auth.name,
    date: state.Auth.date,
    employe_id: state.Auth.employe_id,
    header: state.Auth.header,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    EmailAdd: product =>
      dispatch({type: 'EmailAdd', payload: product}, console.log('AddData')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
// export default CustomDrawer;
