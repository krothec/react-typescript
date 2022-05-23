import styled from 'styled-components'

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // padding: 24px;
  height: 96px;

  .title{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
  }

  .search{
    display: flex;
    flex-direction: row;
  }
`

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 6px 6px 6px;
  width: 32px;
  height: 32px;
  background: #F39200;
  border-radius: 4px;

 }
`
export const EditBarDiv = styled.div`
  display: flex;

`
