import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  justify-content: center;
  align-items: center;
  padding: 24px;  
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.shape_dark};
`;

export const Subtitle = styled.Text`
  font-size:14px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.shape_dark};
  margin-bottom: 32px;
`;

export const Account = styled.View`
  width: 100%;
  margin-top: 32px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;