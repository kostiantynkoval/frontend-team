import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMembers, getTeamMembers} from '../../store/actions'
import Header from '../Header/Header'
import MembersList from '../MembersList/MembersList'
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton'
import WrapperStyled from './styled/WrapperStyled'

class Wrapper extends Component {

  state = {
    memberList: [],
    isShort: false,
    expanded: false
  }

  componentDidMount() {
    localStorage.setItem('teamMembers', '[1,2,3,4,5,6,7,8,9,10]')
    this.props.getMembers()
    this.props.getTeamMembers()
  }

  static getDerivedStateFromProps(props, state) {

    console.log('getDerivedStateFromProps', props, state)

    if(props.teamMemberIds.length && props.list.length) {
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
    console.log('props', this.props)
    const {memberList, isShort} = this.state
    return (
      <WrapperStyled>
        <Header/>
        <MembersList items={ isShort ? memberList.slice(0,5) : memberList}/>
        {
          memberList.length > 5 && isShort && <ShowMoreButton onClick={this.expandMembers}/>
        }
      </WrapperStyled>
    )
  }
}

export default connect(
  state => ({
    list: state.members.list,
    teamMemberIds: state.members.teamMemberIds,
  }),
  dispatch => ({
    getMembers: () => dispatch(getMembers()),
    getTeamMembers: () => dispatch(getTeamMembers())
  })
)(Wrapper);
