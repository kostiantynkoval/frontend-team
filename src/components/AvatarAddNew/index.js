import React from 'react';
import { withTheme } from 'styled-components'
import AvatarStyled from './styled/AvatarStyled'

const AvatarAddNew = ({theme}) => {
  return (
    <AvatarStyled >
      <svg fill={theme.addTextColor} width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
    </AvatarStyled>
  );
};

export default withTheme(AvatarAddNew);