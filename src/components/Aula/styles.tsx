import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(RectButton)`
 width: 100%; 
 height: 126px;

 background-color: ${({ theme }) => theme.colors.background_secondary};

 flex-direction: row;
 justify-content: space-between;
 align-items: center;

 padding: 24px;
 margin-bottom: 16px;
`
export const Details = styled.View`
justify-content: space-between;
padding: 24px;
`

export const Title = styled.Text`
 font-family: ${({ theme }) => theme.fonts.secondary_500};
 color: ${({ theme }) => theme.colors.text_detail};
 font-size: ${RFValue(10)}px;

 text-transform: uppercase;
`
export const About = styled.View`
padding: 24px;
`
export const Lesson = styled.Text`
color: ${({ theme }) => theme.colors.title};
font-size: ${RFValue(12)}px;

 text-transform: uppercase;
`

export const Teacher = styled.Text`
color: ${({ theme }) => theme.colors.title};
font-size: ${RFValue(12)}px;

 text-transform: uppercase;
`

export const AlunosPresentes = styled.Text`
color: ${({ theme }) => theme.colors.main};
font-size: ${RFValue(20)}px;

text-align: center;
`