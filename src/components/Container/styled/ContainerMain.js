import styled from 'styled-components'

export default styled.div`
display: flex;
flex-flow: column nowrap;
flex: 1;
padding: ${props => props.theme.grid}px;
border: 1px solid ${props => props.theme.wrapperBorderColor};
border-top: 2px solid ${props => props.theme.borderColor};
box-sizing: border-box;
font-family: 'Open Sans';
@media (min-width: 320px)  {
  max-width: 100%;
}
@media (min-width: 768px)  {
  max-width: 100%;
}
@media (min-width: 1300px)  {
  max-width: 100%;
}
@media (min-width: 1900px)  {
  max-width: 100%;
}

`
