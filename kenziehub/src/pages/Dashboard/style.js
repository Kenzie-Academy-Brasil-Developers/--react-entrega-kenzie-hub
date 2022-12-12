import styled from "styled-components";

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
      cursor: pointer;
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
    padding: 16px;
    list-style: none;
    margin-top: 16px;
    width: 100%;
    background-color: #212529;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
