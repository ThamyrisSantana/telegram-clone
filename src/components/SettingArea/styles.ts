import styled from "styled-components";

export const Container = styled.div`
  grid-area: SA;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #0e1621;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  button {
    background-color: transparent;
    color: #768c9e;
    font-size: 3rem;
    width: 100%;
    height: 7rem;
    /* margin-top: 1rem; */

    border: none;
    cursor: pointer;

    &:hover {
      filter: brightness(2);
    }

    p {
      font-size: 20px;
      font-weight: 600;
    }

    .menu {
      /* margin-bottom: 1.3rem; */
    }
  }
`;
