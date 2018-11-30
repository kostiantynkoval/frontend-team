import styled from 'styled-components'

export default styled.h1`
margin: 0;
padding: 0;
font-size: ${props => props.theme.titleFontSize}px;
line-height: ${props => props.theme.titleFontSize + 2}px;
color: ${props => props.theme.titleFontColor};
text-transform: uppercase;
`