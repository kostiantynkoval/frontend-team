import styled from 'styled-components'

export default styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: space-between;
flex: 1;
background: red;
width: 100%;
@media (min-width: 320px)  {
  flex-wrap: nowrap;
}
@media (min-width: 768px)  {
  flex-wrap: wrap;
}
@media (min-width: 1300px)  {
  flex-wrap: nowrap;
}
@media (min-width: 1900px)  {
  flex-wrap: wrap;
}

`