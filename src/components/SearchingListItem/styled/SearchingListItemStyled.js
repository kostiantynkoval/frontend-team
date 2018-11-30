import styled from 'styled-components'
import {transitionHover} from '../../../theme/transitionHover'

export default styled.div`
background: white;
cursor: pointer;
${transitionHover()}
&:hover {
  background: ${props => props.theme.addBtnBgColor};
}
`