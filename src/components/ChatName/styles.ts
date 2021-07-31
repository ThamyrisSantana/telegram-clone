import styled from "styled-components";

export const Container = styled.div`
  grid-area: CN;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #17212b;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    .arrow {
      display: none;
    }
  }

  .userInfo {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    h1 {
      align-self: flex-start;
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

  @media (max-width: 492px) {
    .icons {
      font-size: 1.8rem;
    }

    .userInfo {
      h1 {
        font-size: 22px;
      }

      p {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 1009px) {
    div {
      .arrow {
        margin-left: 1rem;
        display: flex;
        font-size: 2.5rem;
        color: #768c9e;

        &:hover {
          filter: brightness(1.5);
        }
      }
    }
  }

  @media (max-width: 537px) {
    .icons {
      .search,
      .call {
        display: none;
      }
    }
  }
`;
