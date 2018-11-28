import React from 'react';
import ListStyled from './styled/ListStyled'
import TeamMemberItem from '../TeamMemberItem/TeamMemberItem'
import { CSSTransitionGroup } from 'react-transition-group'

const MembersList = ({items}) => {
  return (
    <ListStyled>
        <CSSTransitionGroup
          transitionName="memberItem"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
          <TeamMemberItem addNew primary="Add team member to this test"/>
          {
            items.map((item,i) => <TeamMemberItem key={item.id} required={i===1} primary={item.role} secondary={item.username} id={item.id} source={item.picture}/>)
          }
        </CSSTransitionGroup>
    </ListStyled>
  );
};

export default MembersList;