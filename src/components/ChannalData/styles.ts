import styled from "styled-components";

export const Container = styled.div`
  grid-area: CD;

  background-color: #2c2e43;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const MessageContainer = styled.div``;

export const InputContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: #3e4056;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 80%;
    height: 100%;

    font-size: 25px;
    color: #b2b1b9;
    background-color: transparent;
    border: none;
  }

  ::placeholder {
    font-size: 25px;
    color: #b8b5ff;
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
    color: #b2b1b9;
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
