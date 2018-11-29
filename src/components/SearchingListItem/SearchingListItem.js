import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addMember, closeSearchBar} from '../../store/actions/index'
import SearchingListItemStyled from './styled/SearchingListItemStyled'
import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'


class SearchingListItem extends Component {

  addMember = () => {
    this.props.addMember(this.props.item.id)
    this.props.closeSearchBar()
  }

  render() {
    const { classes, item } = this.props
    return (
      <SearchingListItemStyled>
        <ListItem onClick={this.addMember}  classes={{root: classes.listItem}}>
          <ListItemAvatar>
            <Avatar className={classes.avatar} src={require(`../../assets/${item.picture}`)}/>
          </ListItemAvatar>
          <ListItemText
            primary={item.username}
            classes={{root: classes.listItemText}}
          />
        </ListItem>
      </SearchingListItemStyled>
    );
  }
}

const styles = {
  avatar: {
    width: 30,
    height: 30,
  },
  listItem: {
    padding: '8px 10px'
  },
  listItemText: {
    padding: '0 10px'
  }
};

export default connect(
  null,
  dispatch => ({
    addMember: id => dispatch(addMember(id)),
    closeSearchBar: () => dispatch(closeSearchBar())
  })
)(withStyles(styles)(SearchingListItem));