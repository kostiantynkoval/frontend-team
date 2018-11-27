import styled from 'styled-components'

export default styled.h2`
margin: 0;
padding: 0;
font-size: ${props => props.theme.subTitleFontSize}px;
line-height: ${props => props.theme.subTitleFontSize + 2}px;
color: ${props => props.theme.titleFontColor};
text-transform: uppercase;
`