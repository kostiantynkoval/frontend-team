import styled from 'styled-components'
import {transitionHover} from '../../../theme/transitionHover'

export default styled.button.attrs({
  onClick: props => props.onClick
})`
display: flex;
flex: 1;
width: 100%;
justify-content: center;
align-items: center;
position: relative;
margin-top: 2px;
height: 40px;
background: ${props => props.theme.addBtnBgColor};
border: 2px solid ${props => props.theme.addBtnBgColor};
outline: none;
${transitionHover()}
&:hover {
  background: white;
}
`