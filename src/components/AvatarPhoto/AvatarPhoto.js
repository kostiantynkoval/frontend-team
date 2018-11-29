import React, {Component} from 'react';
import {connect} from 'react-redux'
import {removeMember} from '../../store/actions'
import AvatarStyled from './styled/AvatarStyled'
import Image from './styled/Image'
import RemoveIcon from './styled/RemoveIcon'
import TooltipArrow from '../TooltipArrow/TooltipArrow'


class AvatarPhoto extends Component {

  remove = () => {
    const {removeMember, id} = this.props
    removeMember(id)
  }

  render() {
    const {src} = this.props
    return (
      <TooltipArrow tooltipTitle="Remove user">
        <AvatarStyled>
          <Image src={src} alt=""/>
          <RemoveIcon onClick={this.remove}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z"/>
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
            </svg>
          </RemoveIcon>
        </AvatarStyled>
      </TooltipArrow>
    );
  }
}


export default connect(
  null,
  dispatch => ({removeMember: id => dispatch(removeMember(id))})
)(AvatarPhoto);