import React from 'react';
import Header from '../Header/Header'
import MembersList from '../MembersList/MembersList'
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton'
import WrapperStyled from './styled/WrapperStyled'

const Wrapper = () => {
  return (
    <WrapperStyled>
      <Header/>
      <MembersList/>
      <ShowMoreButton/>
    </WrapperStyled>
  );
};

export default Wrapper;
