import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  > div {
    background: rgb(253, 247, 227);
    border: 1px solid darkgray;
    box-shadow: 1px 2px 5px 1px darkgray;
    width: 300px;
    height: 300px;
    border-radius: 5px;
    padding: 15px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      height: 100%;

      a {
        margin-top: 20px;
        color: #fff;
        background-color: darkblue;
        padding: 10px;
        border-radius: 4px;
        font-size: 16px;

        &:hover {
          background-color: blue;
        }
      }
    }
  }
`;
