import styled from "styled-components";

export const Container = styled.div`
  grid-area: SC;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #17212b;
  border-right: 1px solid #1a1c27;

  input {
    width: 90%;
    height: 60%;

    background-color: #242f3d;
    color: #b2b1b9;
    font-size: 20px;

    filter: brightness(1.2);
    border: none;
    border-radius: 7px;

    padding-left: 1rem;

    ::placeholder {
      font-size: 1.2rem;
      margin-left: 3rem;
      font-weight: 500;
      color: #566877;
    }
  }

  input:focus {
    outline: none;
  }

  @media (max-width: 1009px) {
    display: none;
  }
`;
