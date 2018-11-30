import styled from 'styled-components'

export default styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
background: ${props => props.theme.loaderBgColor};
z-index: 1999;
svg{
  width: 100px;
  height: 100px;
  margin: 20px;
  display:inline-block;
}
`