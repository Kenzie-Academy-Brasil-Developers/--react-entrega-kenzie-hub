import styled from "styled-components";

export const HeaderDashboard = styled.header`
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
export const HeaderRegister = styled.header`
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  a {
    cursor: pointer;
    text-decoration: none;
    width: 79.54px;
    height: 31.95px;
    background: #212529;
    border: none;
    border-radius: 3.19812px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 700px) {
    padding-left: 82px;
    padding-right: 82px;
  }
`;
