import styled, {css} from 'styled-components'
import {transitionHover} from '../../../theme/transitionHover'

export default styled.div`
display: block;
width: 100%;
background: transparent;
${transitionHover()};
${props => props.addNew && 'cursor: pointer'}
&:hover {
  background: ${props => props.theme.addBtnBgColor};
}
@media (min-width: 320px)  {
  width: 100%;
}
@media (min-width: 768px)  {
  width: 50%;
}
@media (min-width: 1300px)  {
  width: 100%;
}
@media (min-width: 1900px)  {
  width: 50%;
}
${props => (!props.addNew && props.required) && css`
  span:after {
    content: '*';
    color: ${props => props.theme.warningColor};
  }`
}

`