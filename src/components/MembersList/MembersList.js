import React from 'react';
import ListStyled from './styled/ListStyled'
import {connect} from 'react-redux'
import TeamMemberItem from '../TeamMemberItem/TeamMemberItem'
import SearchTeamMember from '../SearchTeamMember/SearchTeamMember'
import { CSSTransitionGroup } from 'react-transition-group'

const MembersList = ({items, isSearchBarOpened}) => {
  return (
    <ListStyled>
        <CSSTransitionGroup
          transitionName="memberItem"
          transitionEnterTimeout={200}
          transitionAppear={true}
          transitionAppearTimeout={200}
          transitionLeave={false}
          >
          <TeamMemberItem addNew primary="Add team member to this test"/>
          {
            items.map((item,i) => <TeamMemberItem key={item.id} required={i===1} primary={item.role} secondary={item.username} id={item.id} source={item.picture}/>)
          }
          {
            isSearchBarOpened && <SearchTeamMember/>
          }
        </CSSTransitionGroup>
    </ListStyled>
  );
};

export default connect(
  state => ({
    isSearchBarOpened: state.members.isSearchBarOpened
  })
)(MembersList);