import styled from 'styled-components'
import {transitionHover} from '../../../theme/transitionHover'

export default styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 50%;
position: relative;
overflow: hidden;
background: ${props => props.theme.addBtnBgColor};
${transitionHover()};
`