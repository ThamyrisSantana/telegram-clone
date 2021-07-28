import styled from "styled-components";

export const Container = styled.div`
  grid-area: SA;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #1e253a;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  div {
    background-color: #9a9b9e;
    width: 5rem;
    height: 5rem;
    margin-top: 1rem;
    border-radius: 50%;
    flex-shrink: 0;
  }
`;
