import React, {Component} from 'react';
import theme from '../../theme'
import {connect} from 'react-redux'
import SearchingListItem from '../SearchingListItem'
import SearchingListStyled from './styled/SearchingListStyled'

const NotFound = () => (
  <div style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', paddingBottom: `${theme.grid * 1.5}px`}}>
    <span style={{color: theme.addTextColor, fontWeight: 'bold'}}>Team member not found.</span>
    <span style={{color: theme.defaultFontColor, fontSize: theme.tooltipFontSize}}>Maybe she/he is not yet in your <span style={{borderBottom: `1px solid ${theme.warningColor}`}}>team?</span></span>
  </div>
)

class SearchingList extends Component {

  state = {
    showingItems: []
  }

  static getDerivedStateFromProps(props) {
    const teamMembers = props.list
    const reg = new RegExp(props.value)
    const showingItems = teamMembers.filter(item => (!props.teamMemberIds.includes(item.id) && reg.test(item.username)))

    return {showingItems}
  }

  render() {
    return (
      <SearchingListStyled>
        {
          this.state.showingItems.map(item => <SearchingListItem item={item} key={item.id}/>)
        }
        {
          this.state.showingItems.length === 0 && this.props.value !== '' && <NotFound/>
        }
      </SearchingListStyled>
    );
  }
}

export default connect(
  state => ({
    list: state.members.list,
    teamMemberIds: state.members.teamMemberIds
  })
)(SearchingList);