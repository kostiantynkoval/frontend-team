import styled from 'styled-components'

export default styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
flex: 1;
@media (min-width: 320px)  {
  flex-flow: column nowrap;
}
@media (min-width: 768px)  {
  flex-flow: row wrap;
}
@media (min-width: 1300px)  {
  flex-flow: column nowrap;
}
@media (min-width: 1900px)  {
  flex-flow: row wrap;
}

`