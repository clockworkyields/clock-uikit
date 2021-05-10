import styled from "styled-components";

const StyledTh = styled.th`
  background: #ffb485;
  padding: 8px;
  font-size: 12px;
  color: #ed920e;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding-left: 16px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    padding-right: 16px;
  }
`;

export default StyledTh;
