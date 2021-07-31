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

  .allChats {
    background-color: #25303e;
    p {
      color: #5eb5f7;
    }
    .chatIcon {
      color: #5eb5f7;
    }
  }

  button {
    background-color: transparent;
    color: #768c9e;
    font-size: 3.5rem;
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
  @media (max-width: 1245px) {
    button {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 1009px) {
    display: none;
  }
`;
