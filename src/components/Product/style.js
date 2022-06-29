import styled from "styled-components";

export const ContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  gap: 10px;

  margin: 1vh auto;
  padding: 1rem;

  width: 90vw;
  max-width: 350px;

  background-color: var(--gray);

  img {
    width: 15rem;
    border-radius: 10px;
  }
  h2 {
    font-size: 1rem;
  }

  span {
    font-size: 1.3rem;
    font-weight: 700;
  }

  button {
    border: none;
    border-radius: 10px;

    width: 15rem;
    height: 1.5rem;

    &:hover {
      background-color: #17e674;
      color: #640f99;
    }
  }
`;

export const ContainerTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 1vh auto;

  border-radius: 10px;

  width: 90vw;
  height: 10rem;
  max-width: 700px;

  gap: 5vw;

  background-color: var(--blue);

  img {
    width: 7rem;
    height: 100%;
    border-radius: 10px;
  }

  span {
    width: 5rem;
  }

  h2 {
    font-size: 0.7rem;
    width: 20rem;
  }

  button {
    width: 7rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1vh;

  h2 {
    font-size: 0.5rem;

    color: var(--gray);

    width: 90%;
  }

  span {
    color: white;
    font-weight: 700;
  }
`;

export const ItemController = styled.div`
  display: flex;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;

    border: none;
    border-radius: 50px;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonAdd = styled.button`
  &:hover {
    background-color: lightgreen;
    color: white;
  }
`;

export const ButtonRemove = styled.button`
  &:hover {
    background-color: lightcoral;
    color: white;
  }
`;
