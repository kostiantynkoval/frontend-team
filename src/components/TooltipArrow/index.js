import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import theme from '../../theme'

class ArrowTooltip extends Component {

  state = {
    arrowRef: null,
  }

  handleArrowRef = node => {
    this.setState({
      arrowRef: node,
    });
  };

  render() {
    const {children, tooltipTitle, classes} = this.props
    return (
      <Tooltip
        classes={{popper: classes.arrowPopper, tooltip: classes.lightTooltip}}
        placement='top'
        PopperProps={{
          popperOptions: {
            modifiers: {
              arrow: {
                enabled: Boolean(this.state.arrowRef),
                element: this.state.arrowRef,
              },
            },
          },
        }}
        title={
          <React.Fragment>
            {tooltipTitle}
            <span className={classes.arrowArrow} ref={this.handleArrowRef}/>
          </React.Fragment>
        }
      >
        {children}
      </Tooltip>
    )
  }
}

const styles = {
  lightTooltip: {
    background: 'white',
    color: theme.defaultFontColor,
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
    fontSize: theme.tooltipFontSize,
  },
  arrowArrow: {
    position: 'absolute',
    fontSize: 7,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  arrowPopper: {
    '&[x-placement*="bottom"] $arrowArrow': {
      top: 0,
      left: 0,
      marginTop: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent white transparent`,
      },
    },
    '&[x-placement*="top"] $arrowArrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `white transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrowArrow': {
      left: 0,
      marginLeft: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent white transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrowArrow': {
      right: 0,
      marginRight: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent white`,
      },
    },
  },
}

export default withStyles(styles)(ArrowTooltip);
