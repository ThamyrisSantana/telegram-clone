import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: #17212b;

  display: flex;
  align-items: center;
  justify-self: flex-end;
  justify-content: space-between;

  input {
    width: 75%;
    height: 100%;

    align-self: flex-start;
    font-size: 25px;
    color: #768c9e;
    background-color: transparent;
    border: none;
  }

  ::placeholder {
    font-size: 25px;
    color: #768c9e;
  }

  input:focus {
    outline: none;
  }

  button {
    max-width: 75px;
    height: 77.75px;

    cursor: pointer;

    font-size: 2.7rem;
    background-color: transparent;
    color: #768c9e;
    border: none;

    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    margin: 0 15px;
  }

  button:hover {
    filter: brightness(2);
  }

  .emojiSection {
  }

  .sendMessage {
    color: #5288c1;
    transform: rotate(90deg);
  }

  @media (max-width: 1480px) {
    input {
      width: 65%;
    }
  }

  @media (max-width: 1245px) {
    input {
      width: 60%;
    }
  }

  @media (max-width: 1073px) {
    input {
      width: 55%;
    }
  }

  @media (max-width: 1009px) {
    input {
      width: 70%;
    }
  }

  @media (max-width: 732px) {
    input {
      width: 60%;
    }
  }

  @media (max-width: 548px) {
    input {
      width: 50%;
    }
  }

  @media (max-width: 492px) {
    input {
      width: 45%;
      ::placeholder {
        font-size: 20px;
      }
    }
    button {
      font-size: 2rem;
    }
  }

  @media (max-width: 338px) {
    input {
      width: 40%;
      ::placeholder {
        font-size: 16px;
      }
    }
    button {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 293px) {
    input {
      width: 32%;
      ::placeholder {
        font-size: 13px;
      }
    }
    button {
      margin: 0 12px;
      font-size: 20px;
    }
  }
`;
