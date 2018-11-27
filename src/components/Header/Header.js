import React from 'react';
import TeamPageButton from '../TeamPageButton/TeamPageButton'
import HeaderStyled from './styled/HeaderStyled'
import Title from './styled/Title'

const Header = () => {
  return (
    <HeaderStyled>
      <Title>Your team for this test</Title>
      <TeamPageButton/>
    </HeaderStyled>
  );
};

export default Header;