import React, {Component} from 'react';
import theme from '../../theme'
import { connect } from 'react-redux'
import {openSearchBar} from '../../store/actions'
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AvatarAddNew from '../AvatarAddNew/AvatarAddNew';
import AvatarPhoto from '../AvatarPhoto/AvatarPhoto';
import ItemContainer from './styled/ItemContainer'


class TeamMemberItem extends Component {

  openSearchBar = () => {
    const {addNew, openSearchBar} = this.props
    if(addNew) {
      openSearchBar()
    }
  }

  render() {
    const {addNew, primary, secondary, required, source, id} = this.props
    return (
      <ItemContainer addNew={addNew} onClick={this.openSearchBar} required={required} >
        <ListItemModified>
          { addNew ? <AvatarAddNew />: <AvatarPhoto id={id} src={require(`../../assets/${source}`)} /> }
          { addNew ? <ListItemTextNewMember primary={primary} /> : <ListItemTextExisting primary={primary} secondary={secondary} />}
        </ListItemModified>
      </ItemContainer>
    )
  }
}

const ListItemTextNewMember = withStyles({
  root: {
    padding: `0 ${theme.scaleMid}px`
  },
  primary: {
    color: theme.addTextColor,
    maxWidth: 150,
    fontWeight: 'bold',
    fontSize: `${theme.titleFontSize}px`,
    lineHeight: `${theme.titleFontSize + 4}px`
  },
  secondary: { color: 'blue'}
})(ListItemText)

const ListItemTextExisting = withStyles({
  root: {
    padding: `0 ${theme.scaleMid}px`
  },
  primary: {
    color: theme.defaultFontColor,
    fontWeight: 'normal',
    fontSize: `${theme.titleFontSize}px`,
    lineHeight: `${theme.titleFontSize + 4}px`
  },
  secondary: {
    color: theme.defaultFontColor,
    fontWeight: 'bold',
    fontSize: `${theme.titleFontSize}px`,
    lineHeight: `${theme.titleFontSize + 4}px`
  }
})(ListItemText)

const ListItemModified = withStyles({
  root: {
    padding: `${theme.scaleBig}px`
  }
})(ListItem)

export default connect(
  null,
  dispatch => ({
    openSearchBar: () => dispatch(openSearchBar())
  })
)(TeamMemberItem)