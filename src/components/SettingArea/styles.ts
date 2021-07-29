import styled from "styled-components";

export const Container = styled.div`
  grid-area: SA;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #2c2e43;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  button {
    background-color: transparent;
    color: #b2b1b9;
    font-size: 3rem;
    width: 100%;
    height: 6.2rem;
    /* margin-top: 1rem; */

    border: none;
    cursor: pointer;

    &:hover {
      filter: brightness(1.3);
    }

    .menu {
      /* margin-bottom: 1.3rem; */
    }
  }
`;
