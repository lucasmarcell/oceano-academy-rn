import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native'
import { BackButton } from '../../components/BackButton';
import { AulaSlider } from '../../components/AulaSlider';
import { Student, StudentsData } from '../../components/Student'
import { Button } from '../../components/Button'
import { api } from '../../services/api'

import { MaterialIcons } from '@expo/vector-icons'

import {
  Container,
  Header,
  ChartImages,
  Content,
  Infos,
  InfoTeacher,
  Teacher,
  TeacherName,
  InfoStudents,
  Students,
  StudentsCount,
  Resumo,
  StudentsList,
  QrCode,
  TitleQrCode,
  QrCodeIcon,
  Footer,
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AulaDTO } from '../../dtos/AulaDTO';
import { FlatList } from 'react-native-gesture-handler';
import { StudentDTO } from '../../dtos/StudentsDTO';

interface Params {
  aulas: AulaDTO;
}




export function AulaDetails() {
  const navigation = useNavigation()
  const route = useRoute()
  const [dadosaulas, setDadosAulas] = useState<AulaDTO[]>([])
  const [students, setStudents] = useState<StudentDTO[]>([])

  const { aulas } = route.params as Params


  async function fetchStudents() {
    try {
      const response = await api.get(`/aulas/${aulas.id}/students`)
      setStudents(response.data)
      console.log(response)
    } catch (error) {
      //console.log(error)
    } finally {
      //setLoading(false)
    }

  }
  useEffect(() => {
    fetchStudents();
  }, [])

  const alunosDataOne = {
    id: '123123123-12312312',
    username: 'Lucas Marcell Martins Mendes'
  }

  function handleAddAluno() {
    navigation.navigate("Home")
  }

  function handleBack() {
    navigation.goBack()
    console.log(aulas.id)
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton onPress={handleBack} />

      </Header>

      <ChartImages>
        <AulaSlider imagesUrl={['https://github.com/lucasmarcell.png']} />
      </ChartImages>

      <Content>
        <Infos>
          <InfoTeacher>
            <Teacher>Professor</Teacher>
            <TeacherName>{aulas.teacher.username}</TeacherName>
          </InfoTeacher>
          <InfoStudents>
            <Students>Alunos</Students>
            <StudentsCount>{aulas._count.students}</StudentsCount>
          </InfoStudents>
          <QrCode>
            <TitleQrCode>Qr Code</TitleQrCode>
            <QrCodeIcon>
              <MaterialIcons
                name="qr-code-2"
                size={35}
              />
            </QrCodeIcon>
          </QrCode>
        </Infos>

        <Resumo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur
          orci arcu. Nullam congue diam at interdum finibus. Nam placerat dictum
          odio, at bibendum ex laoreet ut. In non laoreet purus.
        </Resumo>
      </Content>


      {/* <FlatList
        data={aulas.students}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Student data={String(item)} />}
      />
      */}


      <Footer>
        <Button title="Novo Aluno" onPress={handleAddAluno} />
      </Footer>

    </Container>
  );
}