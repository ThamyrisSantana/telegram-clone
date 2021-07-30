import styled from "styled-components";

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;
  align-items: initial;

  background-color: #17212b;
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
      background: #202b36;
      border-radius: 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #73797f;
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      filter: blur(200%);
    }
  }
  .chat {
    /* width: 447px; */
    background-color: #17212b;

    flex-shrink: 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    height: 7rem;

    &:hover {
      transform: filter 1s;
      filter: brightness(1.2);
    }

    .img {
      background-color: #3e546a;
      width: 5rem;
      height: 5rem;
      margin-left: 1rem;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .infos {
      height: 5rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      padding-left: 1rem;

      p {
        color: #768c9e;
      }

      div {
        width: 310px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        p {
          align-self: center;
          justify-self: end;
          color: #768c9e;
        }
      }

      h1 {
        color: #edeef7;
        font-size: 25px;
      }
    }
  }
`;
