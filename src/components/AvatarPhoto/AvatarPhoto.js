import React from 'react';
import AvatarStyled from './styled/AvatarStyled'
import Image from './styled/Image'
import RemoveIcon from './styled/RemoveIcon'


const AvatarPhoto = () => {
  return (
    <AvatarStyled>
      <Image src={require('../../assets/avatar-default.png')} alt=""/>
      <RemoveIcon>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z"/>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
        </svg>
      </RemoveIcon>
    </AvatarStyled>
  );
};

export default AvatarPhoto;