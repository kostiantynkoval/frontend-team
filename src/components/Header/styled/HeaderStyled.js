import styled from 'styled-components'

export default styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: space-between;
flex: 1;
width: 100%;
padding-bottom: ${props => props.theme.scaleBig}px;
position: relative;
`