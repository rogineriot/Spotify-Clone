import React from 'react';

import {
  Container, Title, List, PlayList,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <PlayList to="/playlists/1">
        <img
          src="http://iv1.lisimg.com/image/1343375/500full-one-by-one-cover.jpg"
          alt="Platlist"
        />
        <strong>Rock</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="http://iv1.lisimg.com/image/1343375/500full-one-by-one-cover.jpg"
          alt="Platlist"
        />
        <strong>Rock</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="http://iv1.lisimg.com/image/1343375/500full-one-by-one-cover.jpg"
          alt="Platlist"
        />
        <strong>Rock</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="http://iv1.lisimg.com/image/1343375/500full-one-by-one-cover.jpg"
          alt="Platlist"
        />
        <strong>Rock</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial</p>
      </PlayList>
    </List>
  </Container>
);

export default Browse;
