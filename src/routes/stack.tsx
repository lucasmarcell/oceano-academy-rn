import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';



import { Home } from '../screens/Home'
import { AulaDetails } from '../screens/AulaDetails'
import { SignIn } from '../screens/SignIn'


export type RootStackParamList = {
  Home: undefined;
  AulaDetails: undefined;
  SignIn: undefined;
}

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();



export function StackRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false }} >

      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="AulaDetails"
        component={AulaDetails}
      />
    </Navigator >
  )
}