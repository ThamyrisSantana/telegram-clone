import styled from "styled-components";

export const Container = styled.div`
  grid-area: SC;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #7868e6;
  border-right: 1px solid #493ca0;

  input {
    width: 90%;
    height: 60%;

    background-color: #b8b5ff;
    border: none;
    border-radius: 7px;

    padding-left: 1rem;

    ::placeholder {
      font-size: 1.2rem;
      margin-left: 3rem;
      font-weight: 500;
    }
  }
`;
