import styled from 'styled-components'

export default styled.img.attrs({
  src: props => props.src
})`
display: block;
width: 100%;
height: 100%;
`