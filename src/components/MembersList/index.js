import React from 'react';
import ListStyled from './styled/ListStyled'
import {connect} from 'react-redux'
import {closeSearchBar} from '../../store/actions'
import TeamMemberItem from '../TeamMemberItem'
import SearchTeamMember from '../SearchTeamMember'
import ClickableLayout from '../ClickableLayout'
import { CSSTransitionGroup } from 'react-transition-group'

const MembersList = ({items, isSearchBarOpened, closeSearchBar}) => {
  return (
    <ListStyled>
        <CSSTransitionGroup
          transitionName="memberItem"
          transitionEnterTimeout={200}
          transitionLeave={false}
          >
          <TeamMemberItem addNew primary="Add team member to this test"/>
          {
            items.map((item,i) => <TeamMemberItem key={item.id} required={item.role==='External'} primary={item.role} secondary={item.username} id={item.id} source={item.picture}/>)
          }
          {
            isSearchBarOpened && <ClickableLayout onClick={() => closeSearchBar()} />
          }
          <CSSTransitionGroup
            transitionName="searchItem"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
          {
            isSearchBarOpened && <SearchTeamMember/>
          }
          </CSSTransitionGroup>
        </CSSTransitionGroup>
    </ListStyled>
  );
};

export default connect(
  state => ({
    isSearchBarOpened: state.members.isSearchBarOpened
  }),
  dispatch => ({
    closeSearchBar: () => dispatch(closeSearchBar())
  })
)(MembersList);