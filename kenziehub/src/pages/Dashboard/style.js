import styled from "styled-components";

export const Header = styled.header`
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  button {
    cursor: pointer;
    width: 79.54px;
    height: 31.95px;
    background: #212529;
    border: none;
    border-radius: 3.19812px;
    color: #ffffff;
  }
  button:hover {
    background: #343b41;
    border: none;
    border-radius: 3.19812px;
  }
  @media (min-width: 700px) {
    padding-left: 82px;
    padding-right: 82px;
  }
`;
export const SectionUser = styled.section`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const SectionTech = styled.section`
  margin: 0 auto;
  height: 400px;
  width: 80%;

  div {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    button {
      width: 32.49px;
      height: 32px;
      background: #212529;
      border-radius: 4px;
      border: none;
    }
    button:hover {
      background: #343b41;
    }
  }
  ul {
    list-style: none;
    margin-top: 16px;
    height: 40%;
    width: 100%;
    background-color: #212529;
    border-radius: 4px;
  }
  dialog {
    margin: 0 auto;
    margin-top: 10%;
    height: 342px;
    width: 369px;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;
    color: #ffffff;

    div {
      padding: 10px;
      height: 50px;
      background: #343b41;
      border-radius: 4px 4px 0px 0px;

      button {
        color: #ffffff;
        width: 32.49px;
        height: 32px;
        background: #343b41;
        border-radius: 4px;
        border: none;
      }
      button:hover {
        background: #212529;
      }
    }
    form {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      label {
        text-align: start;
      }
      input {
        height: 48px;
        background: #343b41;
        border: 1.2182px solid #f8f9fa;
        border-radius: 4px;
      }
      select {
        color: #ffffff;
        height: 48px;
        background: #343b41;
        border: 1.2182px solid #f8f9fa;
        border-radius: 4px;
      }
      button {
        color: #ffffff;
        margin-top: 10px;
        height: 48px;
        background: #ff577f;
        border: 1.2182px solid #ff577f;
        border-radius: 4.06066px;
      }
    }
  }
`;
