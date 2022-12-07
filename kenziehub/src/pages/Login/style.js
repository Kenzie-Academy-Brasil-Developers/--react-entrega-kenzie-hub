import styled from "styled-components";

export const DivLogo = styled.div`
  padding: 32px;
  display: flex;
  justify-content: center;
`;

export const Section = styled.section`
  padding: 16px;
  margin-top: 32px;
  margin: 0 auto;
  width: 339px;
  height: 470px;
  background-color: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  div {
    padding: 16px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 12px;

    button {
      margin-top: 12px;
      width: 100%;
      height: 40px;
      color: #ffffff;
      background: #59323f;
      border: 1.2182px solid #59323f;
      border-radius: 4.06066px;
    }
    button:hover {
      background: #ff577f;
      border: 1.2182px solid #ff577f;
    }
    label {
      text-align: start;
    }
    input {
      margin: 0 auto;
      width: 100%;
      height: 40px;
      background: #343b41;
      border: 0.973988px solid #343b41;
      border-radius: 4px;
      color: #ffffff;
    }
  }
  .Link {
    text-decoration: none;
    margin-top: 12px;
    width: 100%;
    height: 40px;
    color: #ffffff;
    background: #868e96;
    border: 1.2182px solid #868e96;
    border-radius: 4.06066px;
  }
  .Link:hover {
    background: #343b41;
    border: 1.2182px solid #343b41;
  }
`;
