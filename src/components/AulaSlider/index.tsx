import React from 'react';


import {
  Container,
  ImageIndexes,
  ImageIndex,
  ChartsWrapper,
  Chart,
} from './styles';

interface Props {
  imagesUrl: string[]
}

export function AulaSlider({ imagesUrl }: Props) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={false} />
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <ChartsWrapper>
        <Chart
          source={{ uri: imagesUrl[0] }}
          resizeMode="contain"
        />
      </ChartsWrapper>
    </Container>
  );
}