import styled from "styled-components";

export const Li = styled.li`
  cursor: pointer;
  position: relative;
  background-color: #121214;
  padding: 8px;
  border-radius: 6px;
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    background-color: #343b41;
  }
  div {
    position: absolute;
    right: 2%;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
