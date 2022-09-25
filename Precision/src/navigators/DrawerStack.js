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
import WorkInfoAdmin from '../screens/WorkInfoAdmin';
import Scandata from '../screens/Scandata';
import SupplierList from '../screens/SupplierList';
import NewSupplier from '../screens/NewSupplier';
import ProductOrderDev from '../screens/ProductOrderDev';
import GRN from '../Component/GRN';
import POScreen from '../screens/POScreen';
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Dashboard',
        }}
      />
      <Drawer.Screen
        name="NewRegistration"
        component={NewRegistration}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'New Registration',
        }}
      />
      <Drawer.Screen
        name="ProductOrderDev"
        component={ProductOrderDev}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'New Registration',
        }}
      />
      <Drawer.Screen
        name="CameraScan"
        component={CameraScan}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'New Registration',
        }}
      />
      {/* sss/// */}
      <Drawer.Screen
        name="NewSupplier"
        component={NewSupplier}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'New Registration',
        }}
      />
      <Drawer.Screen
        name="SupplierList"
        component={SupplierList}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'New Registration',
        }}
      />
      <Drawer.Screen
        name="Scandata"
        component={Scandata}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'New Registration',
        }}
      />
      <Drawer.Screen
        name="GRN"
        component={GRN}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'New Registration',
        }}
      />
      <Drawer.Screen
        name="WorkInfoAdmin"
        component={WorkInfoAdmin}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'New Registration',
        }}
      />
      <Drawer.Screen
        name="UserRecords"
        component={UserRecords}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'New Registration',
        }}
      />
      <Drawer.Screen
        name="Registration"
        component={Registration}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Registration',
        }}
      />
      <Drawer.Screen
        name="NewAnalysis"
        component={NewAnalysis}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'New Analysis',
        }}
      />
      <Drawer.Screen
        name="Analysis"
        component={Analysis}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Analysis',
        }}
      />
      <Drawer.Screen
        name="ProductROrder"
        component={ProductROrder}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Product R Order',
        }}
      />
      <Drawer.Screen
        name="BodyWorkshop"
        component={BodyWorkshop}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Body Workshop',
        }}
      />
      <Drawer.Screen
        name="MechanicWorkshop"
        component={MechanicWorkshop}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Mechanic Workshop',
        }}
      />
      <Drawer.Screen
        name="PaintWorkshop"
        component={PaintWorkshop}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Paint Workshop',
        }}
      />
      <Drawer.Screen
        name="NewUsers"
        component={NewUsers}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'New Users',
        }}
      />
      <Drawer.Screen
        name="DetailerWorkshop"
        component={DetailerWorkshop}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Detailer Workshop',
        }}
      />
      <Drawer.Screen
        name="Users"
        component={Users}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Users',
        }}
      />
      <Drawer.Screen
        name="ProductRQuotation"
        component={ProductRQuotation}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Product R Quotation',
        }}
      />
      <Drawer.Screen
        name="ProductRPurchase"
        component={ProductRPurchase}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Product R Purchase',
        }}
      />
      <Drawer.Screen
        name="ProductRGood"
        component={ProductRGood}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Product R Good',
        }}
      />
      <Drawer.Screen
        name="ProductRReview"
        component={ProductRReview}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Product R Review',
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Settings',
        }}
      />
      <Drawer.Screen
        name="POScreen"
        component={POScreen}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#000',
          drawerLabel: 'Settings',
        }}
      />
    </Drawer.Navigator>
  );
}
