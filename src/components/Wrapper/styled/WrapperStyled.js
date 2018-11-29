import styled from 'styled-components'

export default styled.div`
display: flex;
flex-flow: column nowrap;
align-items: stretch;
flex: 1;

.loader-enter {
  opacity: 0.01;
}

.loader-enter.loader-enter-active {
  opacity: 1;
  transition: opacity 150ms ease;
}
.loader-leave {
  opacity: 0.01;
}

.loader-leave.loader-leave-active {
  opacity: 1;
  transition: opacity 30ms ease;
}
`