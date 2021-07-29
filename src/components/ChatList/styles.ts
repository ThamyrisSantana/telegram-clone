import styled from "styled-components";

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;
  align-items: initial;

  background-color: #3e4056;
  border-right: 1px solid #1a1c27;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  &:hover {
    ::-webkit-scrollbar {
      display: flex;
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #b2b1b9;
      border-radius: 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: rgb(105, 105, 105);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  .chat {
    background-color: #3e4056;

    flex-shrink: 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    height: 7rem;
    &:hover {
      filter: brightness(1.2);
    }

    .img {
      background-color: #b2b1b9;
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
