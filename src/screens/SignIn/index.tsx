import { Alert } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

import { Container, Account, Title, Subtitle } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Valor } from '../../components/Valor';
import { useNavigation } from '@react-navigation/native';



export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

  /*  
   //Pensar nessa funcionalidade no futuro
    async function handleSignInAnonymously() {
      try {
        const { user } = await auth().signInAnonymously();
        console.log(user)
      } catch (error) {
        console.log(error)
      }
    } 
    */

  function handleSignInWithEmailAndPassword() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        if (user) {
          navigation.navigate("Home")
        }
        console.log(user)
      })
      .catch(error => {
        console.log(error.code)
      })
  }

  function handleCreateUserAccount() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert('Usuário Criado com Sucesso!'))
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('E-mail já cadastrado!')
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('Formato de email inválido!')
        }

        if (error.code === 'auth/weak-password') {
          Alert.alert('Senha precisa ter no mínimo 6 dígitos!')
        }

        console.log(error.code)

      })
  }

  return (
    <Container>
      <Title>Oceano Academy</Title>
      <Subtitle>Registre sua presença!</Subtitle>

      <Valor
        placeholder="e-mail"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Valor
        placeholder="senha"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Entrar" onPress={handleSignInWithEmailAndPassword} />
      <Account>
        <ButtonText title="Recuperar senha" onPress={() => { }} />
        <ButtonText title="Criar minha conta" onPress={handleCreateUserAccount} />
      </Account>
    </Container>
  );
}


{/* 


 */}


