import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  header {
    display: flex;
    font-size: 12px;
    justify-content: space-around;
    align-items: center;
    padding: 10px;

    h1 {
      padding: 0 25px;
    }

    > h1 {
      border-left: 2px solid black;
    }
  }

  main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 25px;

    div.loading {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      img {
        width: 50px;
      }
    }

    div.account {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: rgb(253, 247, 227);
      padding: 5px;
      border-radius: 5px;
      border: 1px solid darkgray;
      box-shadow: 1px 2px 2px 1px darkgray;
      height: 150px;
      width: 200px;
      margin: 0 10px 10px 0;
      text-align: center;
      padding: 10px;

      dt {
        font-weight: bold;
        margin-top: 10px;
      }
    }
  }
`;
