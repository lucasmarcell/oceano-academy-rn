import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'react-native'

import { api } from '../../services/api'
import { AulaDTO } from '../../dtos/AulaDTO'

import { FlatList } from "react-native";

import {
  Container,
  Header,
  Logo,
  TotalAulas,
  HeaderContent,
} from './styles';

import { Aulas } from '../../components/Aula'
import { useNavigation } from '@react-navigation/native';
import { ButtonIcon } from '../../components/ButtonIcon';

import auth from '@react-native-firebase/auth';

const wait = (timeout: number | undefined) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

interface NavigationProps {
  navigate: (
    screen: string,
    carObject: {
      aulas: AulaDTO
    }
  ) => void
}

type Props = {
  showLogoutButton?: boolean;
}

export function Home({ showLogoutButton = true }: Props) {
  const [aulas, setAulas] = useState<AulaDTO[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation<NavigationProps>()
  const [refreshing, setRefreshing] = useState(false)

  async function fetchAulas() {
    try {
      const response = await api.get('/aulas/')
      setAulas(response.data)
      console.log(response.data)
    } catch (error) {
      //console.log(error)
    } finally {
      setLoading(false)
    }

  }
  useEffect(() => {
    fetchAulas();
  }, [])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchAulas();
    wait(3000).then(() => setRefreshing(false));
  }, [])

  function handleAulaDetails(aulas: AulaDTO) {
    navigation.navigate('AulaDetails', { aulas })
  }

  function handleLogout() {
    auth().signOut()
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo>
            {/** Aqui vai ficar a logo do app */}
            Logo
          </Logo>

          <TotalAulas>
            Total de {aulas.length} Aulas
          </TotalAulas>

          {
            showLogoutButton &&
            <ButtonIcon
              icon="logout"
              color="alert"
              onPress={handleLogout}
            />
          }


        </HeaderContent>
      </Header>


      <FlatList
        data={aulas}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <Aulas data={item} onPress={() => handleAulaDetails(item)} />}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />


    </Container>
  );
}