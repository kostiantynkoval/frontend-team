import styled from 'styled-components'

export default styled.div`
display: flex;
flex: 1;

// CSS Transition Animation
>span {
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
}

.memberItem-enter {
  opacity: 0.01;
}

.memberItem-enter.memberItem-enter-active {
  opacity: 1;
  transition: opacity 200ms ease-in;
}

.memberItem-leave {
  opacity: 1;
}

.memberItem-leave.memberItem-leave-active {
  opacity: 0.01;
  transition: opacity 200ms ease-in;
}
`