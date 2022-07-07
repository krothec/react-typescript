import styled from 'styled-components'

export const Head = styled.header`
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 1rem;

  .menu-text{
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  }
  }
`
