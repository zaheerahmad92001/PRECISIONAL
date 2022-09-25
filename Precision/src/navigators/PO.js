import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Registration from '../screens/Registration';
import NewRegistration from '../screens/NewRegistration';
import NewAnalysis from '../screens/NewAnalysis';
import Analysis from '../screens/Analysis';
import ProductROrder from '../screens/ProductROrder';
import ProductRQuotation from '../screens/ProductRQuotation';
import BodyWorkshop from '../screens/BodyWorkshop';
import MechanicWorkshop from '../screens/MechanicWorkshop';
import PaintWorkshop from '../screens/PaintWorkshop';
import NewUsers from '../screens/NewUsers';
import DetailerWorkshop from '../screens/DetailerWorkshop';
import Users from '../screens/Users';
import ProductOrderDev from '../screens/ProductOrderDev';
import ProductRPurchase from '../screens/ProductRPurchase';
import ProductRGood from '../screens/ProductRGood';
import ProductRReview from '../screens/ProductRReview';
import Settings from '../screens/Settings';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import CameraScan from '../screens/CameraScan';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomDrawer from './CustomDrawer';
import UserRecords from '../screens/UserRecord';
import WorkerCustomDrawer from './workerCustomDrawer';
import POcustomJS from './POcustom.js';
import GRN from '../Component/GRN';
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator drawerContent={props => <POcustomJS {...props} />}>
      <Drawer.Screen
        name="PaintWorkshop"
        component={ProductRPurchase}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'PaintWorkshop',
        }}
      />
      <Drawer.Screen
        name="UserRecords"
        component={ProductRGood}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'UserRecords',
        }}
      />
      <Drawer.Screen
        name="GRN"
        component={GRN}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'UserRecords',
        }}
      />
      <Drawer.Screen
        name="ProductOrderDev"
        component={ProductOrderDev}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'UserRecords',
        }}
      />
    </Drawer.Navigator>
  );
}
