import styled from 'styled-components'
import {transitionHover} from '../../../theme/transitionHover'
import ItemContainer from '../../TeamMemberItem/styled/ItemContainer'

export default styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 50%;
background: ${props => props.theme.addBtnBgColor};
${transitionHover()};
${ItemContainer}:hover & {
  background: white;
}
`