import React from 'react';
import IconButton from '../IconButton/IconButton'
import HeaderStyled from './styled/HeaderStyled'
import Title from './styled/Title'

const Header = () => {
  return (
    <HeaderStyled>
      <Title>Your team for this test</Title>
      <IconButton teamPage/>
    </HeaderStyled>
  );
};

export default Header;