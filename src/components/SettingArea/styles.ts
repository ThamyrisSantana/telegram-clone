import styled from "styled-components";

export const Container = styled.div`
  grid-area: SA;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #6658c5;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  button {
    background-color: #6658c5;
    color: #b8b5ff;
    font-size: 3rem;
    width: 100%;
    height: 7rem;
    /* margin-top: 1rem; */

    border: none;
    cursor: pointer;

    &:hover {
      background-color: #4e2a85;
      filter: brightness(1.3);
    }

    .menu {
      /* margin-bottom: 1.3rem; */
    }
  }
`;
