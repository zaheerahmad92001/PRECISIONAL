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

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <WorkerCustomDrawer {...props} />}>
      <Drawer.Screen
        name="PaintWorkshop"
        component={NewAnalysis}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'PaintWorkshop',
        }}
      />

      <Drawer.Screen
        name="UserRecords"
        component={Analysis}
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
