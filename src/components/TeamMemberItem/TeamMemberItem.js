import React from 'react';
import theme from '../../theme'
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AvatarAddNew from '../AvatarAddNew/AvatarAddNew';
import AvatarPhoto from '../AvatarPhoto/AvatarPhoto';
import ItemContainer from './styled/ItemContainer'
//primary={item.role} secondary={item.username} source={item.picture}
const TeamMemberItem = ({addNew, primary, secondary, required, source, id}) => (
  <ItemContainer addNew={addNew} required={required} >
    <ListItemModified>
      { addNew ? <AvatarAddNew />: <AvatarPhoto id={id} src={require(`../../assets/${source}`)} /> }
      { addNew ? <ListItemTextNewMember primary={primary} /> : <ListItemTextExisting primary={primary} secondary={secondary} />}
    </ListItemModified>
  </ItemContainer>
)

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

export default TeamMemberItem