import React from 'react';
import { TextInputProps } from 'react-native';

import { TextInput } from './styles';

type Props = TextInputProps & {
  size?: 'small' | 'medium' | 'large';
}

export function Valor({ size = 'large', ...rest }: Props) {
  return (
    <TextInput size={size}  {...rest} />
  );
}