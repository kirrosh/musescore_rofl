import React from "react";
import styled from "styled-components/macro";
import MainGrid from "./MainGrid";
import ContentHeader from "../common/ContentHeader";

const MainContent = () => {
  return (
    <StyledMainContent>
      <ContentHeader />
      <MainGrid />
    </StyledMainContent>
  );
};

const StyledMainContent = styled.div``;

export default MainContent;
