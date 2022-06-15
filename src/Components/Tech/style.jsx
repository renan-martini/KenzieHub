import styled from "styled-components";

const StyledTech = styled.li`
  display: flex;
  justify-content: space-between;
  height: 48px;
  background-color: #121214;
  border-radius: 4px;
  align-items: center;
  padding: 12px;

  h3 {
    color: white;
    font-size: 14px;
  }

  p {
    color: #868e96;
    font-size: 12px;
  }

  &:hover {
    background-color: #343b41;
    cursor: pointer;
    p {
      color: white;
    }
  }
`;

export default StyledTech;
