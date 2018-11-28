import React from 'react';
import ButtonStyled from './styled/ButtonStyled'
import Title from './styled/Title'
import GroupIcon from './GroupIcon'
import ArrowDownIcon from './ArrowDownIcon'

const IconButton = ({teamPage}) => {
  return (
    <ButtonStyled withTransformation={teamPage} >
      <Title>{teamPage ? 'Team Page' : 'Show All'}</Title>
      {
        teamPage ? <GroupIcon/> : <ArrowDownIcon/>
      }
    </ButtonStyled>
  );
};

export default IconButton;