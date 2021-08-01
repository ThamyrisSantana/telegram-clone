import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  grid-area: CD;

  background-color: #0e1621;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const MessageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  padding: 2rem 2rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: #17212b;

  display: flex;
  align-items: center;
  justify-self: flex-end;
  justify-content: space-between;

  input {
    width: 80%;
    height: 100%;

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
    width: 75px;
    height: 77.75px;

    cursor: pointer;

    font-size: 3rem;
    background-color: transparent;
    color: #768c9e;
    border: none;

    align-items: center;
    justify-content: center;
    padding-top: 1rem;
  }

  button:hover {
    filter: brightness(2);
  }

  .emojiSection {
    margin-right: 0.5rem;
    padding-left: 1rem;
  }
`;