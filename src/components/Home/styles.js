import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    font-size: 12px;
    justify-content: space-around;
    align-items: center;

    h1 {
      padding: 0 25px;
    }

    > h1 {
      border-right: 2px solid black;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 25px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
    }

    span {
      text-align: center;
      background-color: red;
      color: black;
      font-weight: bold;
      margin-top: 2px;
      padding: 5px;
      font-size: 14px;
    }

    button {
      background-color: aquamarine;
      margin-top: 10px;
      height: 40px;
      border: ${(props) =>
        props.apiLoading ? "2px solid black" : "1px solid black"};
      outline: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      cursor: ${(props) => props.apiLoading && "not-allowed"};

      &:hover {
        border: 2px solid black;
      }
    }
  }
`;
