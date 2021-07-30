import styled from "styled-components";

export const Container = styled.div`
  grid-area: CN;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #17212b;

  .userInfo {
    margin-left: 2rem;
    h1 {
      font-size: 27px;
      color: #edeef7;
    }

    p {
      font-size: 16px;
      margin-right: 10px;
      color: #99acbd;
    }
  }

  .icons {
    color: #768c9e;
    font-size: 2.2rem;
    padding: 2rem;

    .item {
      margin-left: 2rem;
      cursor: pointer;
      &:hover {
        filter: brightness(1.5);
      }
    }
  }
`;
