import React from "react";
import styled from "styled-components/macro";
import {
  MenuOutlined,
  AppstoreOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import IsMobileContext from "../tools/IsMobileContext";
import Tabs from "./Tabs";

const ContentHeader = () => {
  const isMobile = React.useContext(IsMobileContext);
  return (
    <StyledContentHeader isMobile={isMobile}>
      <HeaderIcons>
        <Button icon={<MenuOutlined />} />
        <Button icon={<AppstoreOutlined />} />
      </HeaderIcons>
      <FakeTitleWrapper>
        <FakeTitle>
          <YoutubeOutlined />
          Opener: Set 1-15 (w/mark time)
        </FakeTitle>
        <FakeSubtitle>Due 27 Apr</FakeSubtitle>
      </FakeTitleWrapper>
      <StyledTabs />
      {/* <StyledTabs defaultActiveKey="1">
        <TabPane tab="All" key="1" />
        <TabPane tab={<ReviewTab />} key="2" />
        <TabPane tab="Graded" key="3" />
      </StyledTabs> */}
    </StyledContentHeader>
  );
};

const HeaderIcons = styled.div`
  display: flex;
  & button {
    border: none;
    background: none;
    box-shadow: none;
  }
`;

const FakeTitleWrapper = styled.div`
  text-align: center;
  margin-top: -10px;
`;
const FakeTitle = styled.div`
  align-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 29px;
  color: #1b1f3c;
  & span {
    margin-right: 8px;
    /* align-items: center;
    display: flex; */
  }
`;
const FakeSubtitle = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #00072b;
`;

const StyledTabs = styled(Tabs)``;

const StyledContentHeader = styled.div<{ isMobile?: boolean }>`
  display: grid;
  align-items: center;
  margin-bottom: 55px;
  grid-template-areas: ${(props) =>
    props.isMobile
      ? `
    "a a"
    "b c"`
      : `"b a c"`};

  & ${HeaderIcons} {
    grid-area: b;
  }
  & ${FakeTitleWrapper} {
    grid-area: a;
  }
  & ${StyledTabs} {
    grid-area: c;
    justify-self: end;
  }
`;

export default ContentHeader;
