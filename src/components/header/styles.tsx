import styled from "styled-components";

export const Head = styled.header`
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .text{
    display: flex;
    font-weight: 600;
  }

  .first{
    margin: 3rem 3rem  3rem 0rem
  }

  .menu{
    margin: 3rem;
  }
  .conf{
    color: #F39200
  }
  .prod{
    color: #495057;
    >span{
      margin-left: 0.8rem;
    }
  }

`
