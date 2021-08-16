import styled from "styled-components";

export const Container = styled.div`
  grid-area: CD;

  background-color: #0e1621;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: flex;
  }

  ::-webkit-scrollbar-track {
    background: #202b36;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #73797f;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    filter: blur(200%);
  }
  /* &:hover {
    ::-webkit-scrollbar {
      display: flex;
      width: 10px;
    }

  } */
`;

export const MessageContainer = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: space-between;

  padding: 2rem 2rem;
`;
