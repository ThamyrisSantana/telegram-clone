import styled from "styled-components";

export const Container = styled.div`
  grid-area: CN;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #17212b;

  h1 {
    margin-left: 2rem;
    color: #edeef7;
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
