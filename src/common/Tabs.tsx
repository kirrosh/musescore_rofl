import React from "react";
import styled from "styled-components/macro";

const Tabs = ({ className }: { className?: string }) => {
  return (
    <StyledTabs className={className}>
      <StyledTabItem active>All</StyledTabItem>
      <StyledTabItem>To review</StyledTabItem>
      <StyledTabItem>Graded</StyledTabItem>
    </StyledTabs>
  );
};

const StyledTabItem = styled.div<{ active?: boolean }>`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  line-height: 28px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#4D9CDF" : "#333333")};
  border-bottom: ${(props) => props.active && "1px solid #4D9CDF"};
  &:hover {
    border-bottom: ${(props) =>
      `1px solid ${props.active ? "#4D9CDF" : "#333333"}`};
  }
`;

const StyledTabs = styled.div`
  display: flex;
  & ${StyledTabItem} {
    margin: 0 15px;
  }
`;

export default Tabs;
