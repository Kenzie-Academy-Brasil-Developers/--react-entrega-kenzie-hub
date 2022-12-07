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
  @media (min-width: 700px) {
    padding-left: 82px;
    padding-right: 82px;
  }
`;

export const Section = styled.section`
  margin: 20px auto;
  width: 330px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 34px, 18px, 34px, 18px;

  box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
  border-radius: 3.19812px;
  background: #212529;
  color: #ffffff;

  div {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  form {
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 8px;
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
  select {
    margin: 0 auto;
    width: 100%;
    height: 40px;
    background: #343b41;
    border: 0.973988px solid #343b41;
    border-radius: 4px;
    color: #ffffff;
  }
  button {
    width: 100%;
    height: 40px;
    background: #59323f;
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    color: #ffffff;
  }
  button:hover {
    background: #ff577f;
    border: 1.2182px solid #ff577f;
  }
`;
