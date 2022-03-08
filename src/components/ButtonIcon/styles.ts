import styled from 'styled-components/native';

type Props = {
  color: 'success' | 'alert';
  size: 'small' | 'large';
}

export const Container = styled.TouchableOpacity<Props>`
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color:  ${({ color, theme }) => color === 'success' ? theme.colors.success : theme.colors.main};
  width: ${({ size }) => size === 'small' ? 40 : 60}px;
  height: ${({ size }) => size === 'small' ? 40 : 60}px;
`;