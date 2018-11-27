import React from 'react';
import ListStyled from './styled/ListStyled'
import TeamMemberItem from '../TeamMemberItem/TeamMemberItem'


const MembersList = () => {
  return (
    <ListStyled>
      <TeamMemberItem addNew primary="Add team member to this test"/>
      <TeamMemberItem primary="External Member" secondary="Client Germany"/>
      <TeamMemberItem primary="External Member" secondary="Client Germany"/>
      <TeamMemberItem primary="External Member" secondary="Client Germany"/>
      <TeamMemberItem primary="External Member" secondary="Client Germany"/>
    </ListStyled>
  );
};

export default MembersList;