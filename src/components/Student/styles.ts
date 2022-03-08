import { RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
 width: 100%; 
 height: 60px;

 background-color: ${({ theme }) => theme.colors.background_secondary};

 flex-direction: row;
 justify-content: space-between;
 align-items: center;

padding: 10px 20px;
`

export const Details = styled.View`
background-color: ${({ theme }) => theme.colors.background_primary};
padding: 10px 30px;
`

export const Title = styled.Text`
 font-family: ${({ theme }) => theme.fonts.secondary_500};
 color: ${({ theme }) => theme.colors.text_detail};
 font-size: ${RFValue(10)}px;

 text-transform: uppercase;
`

export const StudentName = styled.Text`
color: ${({ theme }) => theme.colors.title};
font-size: ${RFValue(12)}px;

`