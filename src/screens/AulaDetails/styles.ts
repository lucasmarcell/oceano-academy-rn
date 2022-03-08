import { FlatList } from 'react-native'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { AulaDTO } from '../../dtos/AulaDTO'

export const Container = styled.View`
 flex: 1;
 background-color: ${({ theme }) => theme.colors.background_secondary};
`

export const Header = styled.View`
 flex-direction: row;
 justify-content: space-between;
 align-items: center;

 position: absolute;
 margin-top: ${getStatusBarHeight() + 18}px;
 margin-left: 24px;
`
export const ChartImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`
export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center'
  },
  showsVerticalScrollIndicator: false
})``;
export const Infos = styled.View`
width: 100%;

flex-direction: row;
align-items: center;
justify-content: space-between;

margin-top: 38px;
`;


export const InfoTeacher = styled.View`
`;
export const Teacher = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.text_detail};
font-size: ${RFValue(10)}px;

text-transform: uppercase;
`;
export const TeacherName = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.title};
font-size: ${RFValue(25)}px;

`;

export const InfoStudents = styled.View`
justify-content: center;
align-items: center;
`;

export const Students = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.text_detail};
font-size: ${RFValue(10)}px;

text-transform: uppercase;
`;

export const QrCodeIcon = styled.View`
  justify-content: center;
  align-items: center;

  padding-bottom: 10px;
`;

export const QrCode = styled.View`
  
`;

export const TitleQrCode = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.text_detail};
font-size: ${RFValue(10)}px;

text-transform: uppercase;
`;


export const StudentsCount = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.main};
font-size: ${RFValue(25)}px;

`;

export const Resumo = styled.Text`
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.text};
font-size: ${RFValue(15)}px;
text-align: justify;

margin-top: 10px;
margin-bottom: 30px;
line-height: ${RFValue(25)}px;
`;

export const StudentsList = styled(FlatList as new () => FlatList<AulaDTO>).attrs({
  contentContainerStyle: {
    paddingBottom: 40,
  },
  showsVerticalScrollIndicator: false
})``;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  padding: 24px 24px ${getBottomSpace() + 24}px;
`;
