import styled from "styled-components";

export const Container = styled.div`
  grid-area: CN;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #7868e6;

  h1 {
    margin-left: 2rem;
    color: #edeef7;
  }

  .icons {
    color: #edeef7;
    font-size: 2.2rem;
    padding: 2rem;

    .item {
      margin-left: 2rem;
      cursor: pointer;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
