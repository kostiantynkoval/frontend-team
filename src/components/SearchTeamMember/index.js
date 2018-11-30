import React, {Component} from 'react';
import theme from '../../theme'
import SearchingList from '../SearchingList'
import SearchStyled from './styled/SearchStyled'
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

class SearchTeamMember extends Component {

  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  clearValue = () => {
    this.setState({value: ''})
  }

  render() {
    const {classes} = this.props
    return (
      <SearchStyled>
        <FormControl className={classes.formControl}>
          <Input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
            classes={{
              underline: classes.underline,
              input: classes.input,
            }}
            endAdornment={
              <InputAdornment position="end" classes={{root: classes.adornment}}>
                <svg onClick={this.clearValue} style={{cursor: 'pointer'}} fill="orange" width="16" height="16" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0V0z"/>
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                </svg>
              </InputAdornment>
            }
          />
        </FormControl>
        <SearchingList value={this.state.value}/>
      </SearchStyled>
    );
  }
}

const styles = {
  underline: {
    '&:after': {
      borderBottomColor: theme.addTextColor,
    },
    '&:before': {
      borderBottomColor: theme.addTextColor,
    },
  },
  input: {
    color: theme.addTextColor,
    padding: `${theme.scaleBig}px ${theme.scaleMid}px`
  },
  formControl: {
    padding: `0 ${theme.scaleMid}px`
  },
  adornment: {
    marginRight: `${theme.scaleMid}px`
  }
}

export default withStyles(styles)(SearchTeamMember);
