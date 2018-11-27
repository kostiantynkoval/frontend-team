import styled from 'styled-components'
import {transitionHover} from '../../../theme/transitionHover'

export default styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: flex-end;
align-items: center;
//width: 87px;
padding: 8px;
position: absolute;
top: -10px;
right: 0;
${transitionHover()}

h2 {
  display: block;
  margin-right: 8px;
}
@media (min-width: 320px)  {
  h2 {
    display: none;
  }
}
@media (min-width: 768px)  {
  h2 {
    display: block;
  }
}
@media (min-width: 1300px)  {
  h2 {
    display: none;
  }
}
@media (min-width: 1900px)  {
  h2 {
    display: block;
  }
}

&:hover {
  background: ${props => props.theme.addBtnBgColor};
}
`