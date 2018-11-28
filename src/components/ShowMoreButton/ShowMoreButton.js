import React from 'react';
import IconButton from '../IconButton/IconButton'
import ShowMoreStyled from './styled/ShowMoreStyled'

const ShowMoreButton = ({onClick}) => {
  return (
    <ShowMoreStyled onClick={onClick}>
      <IconButton/>
    </ShowMoreStyled>
  );
};

export default ShowMoreButton;