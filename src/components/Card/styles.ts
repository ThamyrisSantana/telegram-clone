import styled from "styled-components";

export const Div = styled.div`
  width: 20rem;
  height: 25rem;

  background-color: #e9e6ec;
  color: #292929;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 95%;
    height: 47%;

    margin-top: 0.5rem;
    object-fit: cover;
  }

  span {
    font-size: 13px;
    text-align: center;
    margin: 0.5rem 0.9rem 0.8rem 0.9rem;
  }

  div {
    width: 95%;
    display: flex;
    justify-content: center;
  }
`;

export const Button = styled.button`
  width: 45%;
  background: #7868e6;
  border: none;
  cursor: pointer;
  padding: 10px 0;
  margin-left: 5px;
  color: #fff;
  font-weight: 600;

  &:hover {
    background-color: #fff;
    color: #292929;
    transition: 0.5s;
  }
`;

export const ButtonSelected = styled.button`
  width: 45%;
  background: #5e51b1;
  /* filter: brightness(0.8); */
  border: none;
  cursor: pointer;
  padding: 10px 0;
  margin-left: 5px;
  color: #fff;
  font-weight: 600;

  transition: 0.2;

  &:hover {
    background-color: #fff;
    color: #292929;
    transition: 0.5s;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-top: 0.5rem;
  color: #292929;
`;
