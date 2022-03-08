import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

import { StackRoutes } from './stack'
import { SignIn } from '../screens/SignIn'

type User = {
  uid: string;
}

export function Routes() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userInfo => {
      setUser(userInfo)
    })
    return subscriber;
  }, [])
  return (
    <NavigationContainer>
      {user ? <StackRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}