import styled from 'styled-components'

export default styled.div`
display: flex;
flex-flow: column nowrap;
align-items: stretch;
background: white;
position: absolute;
top: 0;
left: 0;
box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.3);
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
`