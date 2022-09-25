import React from 'react';
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
import {NavigationContainer} from '@react-navigation/native';
import Scandata from '../screens/Scandata';
import GRN from '../Component/GRN';
const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="NewRegistration"
        component={NewRegistration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Scandata"
        component={Scandata}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewAnalysis"
        component={NewAnalysis}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Analysis"
        component={Analysis}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductROrder"
        component={ProductROrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BodyWorkshop"
        component={BodyWorkshop}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MechanicWorkshop"
        component={MechanicWorkshop}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaintWorkshop"
        component={PaintWorkshop}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewUsers"
        component={NewUsers}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailerWorkshop"
        component={DetailerWorkshop}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Users"
        component={Users}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductRQuotation"
        component={ProductRQuotation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductRPurchase"
        component={ProductRPurchase}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductRGood"
        component={ProductRGood}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductRReview"
        component={ProductRReview}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen name="GRN" component={GRN} options={{headerShown: false}} />
      <Stack.Screen
        name="CameraScan"
        component={CameraScan}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
