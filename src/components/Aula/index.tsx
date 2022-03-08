import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { AulaDTO } from '../../dtos/AulaDTO'

import {
  Container,
  Details,
  Teacher, Lesson,
  AlunosPresentes,
  Title, About
} from './styles';

export interface AulasData {
  teacher: {
    username: string;
  };
  lesson: string;
  students: {
    username: string;
  };
  _count: {
    students?: number;
  }
}

interface Props extends RectButtonProps {
  data: AulasData;
}

export function Aulas({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Details>
        <Title>Professor</Title>
        <Teacher>{data.teacher.username}</Teacher>


        <Title>Aula</Title>
        <Lesson>{data.lesson}</Lesson>
      </Details>
      <About>
        <Title>Alunos</Title>
        <AlunosPresentes>{data._count.students}</AlunosPresentes>
      </About>

    </Container>
  );
}