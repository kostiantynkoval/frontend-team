import styled from 'styled-components'
import {transitionHover} from '../../../theme/transitionHover'
import ItemContainer from '../../TeamMemberItem/styled/ItemContainer'

export default styled.div.attrs({
  onClick: props => props.onClick
})`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
justify-content: center;
align-items: center;
background: white;
border-radius: 50%;
transform: scale(0);
svg {
  fill: ${props => props.theme.warningColor};
}

${transitionHover()}
&:hover {
  border: 2px solid ${props => props.theme.warningColor};
}
${ItemContainer}:hover & {
  transform: scale(1);
}
`