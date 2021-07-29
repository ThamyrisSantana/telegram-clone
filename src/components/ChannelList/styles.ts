import styled from "styled-components";

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;
  align-items: initial;

  background-color: #7868e6;
  border-right: 1px solid #493ca0;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    background-color: #7868e6;
    width: 5px;
    height: 8px;
  }

  .chat {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    height: 7rem;
    &:hover {
      background-color: #695ace;
    }

    .img {
      background-color: #b8b5ff;
      width: 5rem;
      height: 5rem;
      margin-left: 1rem;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .infos {
      color: #edeef7;
      height: 5rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      padding-left: 1rem;

      h1 {
        font-size: 25px;
      }
    }
  }
`;
