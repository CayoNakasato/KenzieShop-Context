import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 5rem;
  max-height: 100px;

  position: fixed;
  top: 0;

  background-color: var(--blue);

  button {
    margin-right: 1rem;

    height: 2rem;
    width: 5rem;

    border-radius: 10px;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 5px;

    font-size: 1rem;

    color: white;

    background-color: var(--darkblue);

    &:hover {
      background-color: lightskyblue;
      color: white;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 1rem;

  h1 {
    color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  margin: 1rem;

  button {
    border: none;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 5px;

    width: 7rem;

    padding: 0.5rem;

    color: var(--gray);
    background-color: var(--darkblue);

    &:hover {
      background-color: lightskyblue;
      color: white;
    }

    span {
      color: white;
    }
  }

  button + button {
    margin-left: 1rem;
  }

  @media (min-width: 768px) {
    button {
      width: 15rem;

      font-size: 1.5rem;

      gap: 2rem;
    }
  }
`;
