import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMembers, getTeamMembers} from '../../store/actions'
import { CSSTransitionGroup } from 'react-transition-group'
import Header from '../Header'
import MembersList from '../MembersList'
import ShowMoreButton from '../ShowMoreButton'
import Loader from '../Loader'
import WrapperStyled from './styled/WrapperStyled'

class Wrapper extends Component {

  state = {
    memberList: [],
    isShort: false,
    expanded: false
  }

  componentDidMount() {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    this.props.getMembers()
    this.props.getTeamMembers()
  }

  static getDerivedStateFromProps(props, state) {
    if(props.teamMemberIds.length || props.list.length) {
      const filtered = props.list.filter(item => props.teamMemberIds.includes(item.id))
      return {
        ...state,
        memberList: filtered,
        isShort: !state.expanded && props.teamMemberIds.length > 5
      }
    }

    return state
  }

  expandMembers = () => {
    this.setState({isShort: false, expanded: true})
  }

  render() {
    const {isLoading, gettingTeamMembers} = this.props
    const {memberList, isShort} = this.state
    return (
      <WrapperStyled>
        <Header/>
        <MembersList items={ isShort ? memberList.slice(0,5) : memberList}/>
        {
          memberList.length > 5 && isShort && <ShowMoreButton onClick={this.expandMembers}/>
        }
        <CSSTransitionGroup
          transitionName="loader"
          transitionEnterTimeout={150}
          transitionLeave={false}
        >
        {
          (isLoading || gettingTeamMembers) && <Loader/>
        }
        </CSSTransitionGroup>
      </WrapperStyled>
    )
  }
}

export default connect(
  state => ({
    list: state.members.list,
    teamMemberIds: state.members.teamMemberIds,
    isLoading: state.members.isLoading,
    gettingTeamMembers: state.members.gettingTeamMembers,
  }),
  dispatch => ({
    getMembers: () => dispatch(getMembers()),
    getTeamMembers: () => dispatch(getTeamMembers())
  })
)(Wrapper);
