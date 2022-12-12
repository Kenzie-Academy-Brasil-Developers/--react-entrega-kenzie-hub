import styled from "styled-components";

export const DivModal = styled.div`
  position: absolute;
  top: 20%;
  left: 33%;
  /* height: 342px; */
  width: 369px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  color: #ffffff;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    padding: 12px;
    width: 100%;
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
      color: #ffffff;
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
      width: 100%;
      height: 48px;
      background: #ff577f;
      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;
    }
  }
`;
