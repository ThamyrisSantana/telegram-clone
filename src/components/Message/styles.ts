import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MessageContainerMe = styled.div`
  width: max-content;
  display: flex;
  height: 4rem;
  padding: 1rem;
  background-color: #2b5278;
  color: #edeef7;
  border-radius: 10px;
  align-self: flex-end;

  h1 {
    align-self: center;
    font-size: 22px;
    font-weight: 400;
    margin-right: 1rem;
  }

  div {
    height: 100%;
    display: flex;
    align-self: flex-end;
    color: #99acbd;
    align-items: flex-end;

    .check {
      font-size: 35px;
    }

    p {
      font-size: 23px;
      margin-right: 10px;
    }
  }
`;

export const MessageContainer = styled.div`
  margin-top: 2rem;
  width: max-content;
  display: flex;
  height: 4rem;
  padding: 1rem;
  background-color: #182533;
  color: #edeef7;
  border-radius: 10px;

  h1 {
    align-self: center;
    font-size: 22px;
    font-weight: 400;
    margin-right: 1rem;
  }

  div {
    height: 100%;
    display: flex;
    color: #99acbd;
    align-items: flex-end;

    p {
      font-size: 23px;
      margin-right: 10px;
    }
  }
`;
