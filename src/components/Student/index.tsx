import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { AulaDTO } from '../../dtos/AulaDTO';

import {
  Container,
  Details,
  Title,
  StudentName,
} from './styles';

export interface StudentsData {
  students: {
    username: string;
  }
}

interface Props extends RectButtonProps {
  data: StudentsData;
}

export function Student({ data }: Props) {
  return (
    <Container>
      <Details>
        <Title>Aluno</Title>
        <StudentName>{data.students.username}</StudentName>
      </Details>
    </Container>
  );
}