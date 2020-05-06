import React from "react";
import styled from "styled-components/macro";
import {
  MenuOutlined,
  AppstoreOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Tabs } from "antd";
import MainGrid from "./MainGrid";
const { TabPane } = Tabs;

const MainContent = () => {
  return (
    <StyledMainContent>
      <ContentHeader>
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
        <Tabs defaultActiveKey="1">
          <TabPane tab="All" key="1" />
          <TabPane tab="To review" key="2" />
          <TabPane tab="Graded" key="3" />
        </Tabs>
      </ContentHeader>
      <MainGrid />
    </StyledMainContent>
  );
};

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderIcons = styled.div`
  display: flex;
  & button {
    border: none;
  }
`;

const FakeTitleWrapper = styled.div`
  text-align: center;
  margin-top: -10px;
`;
const FakeTitle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 8px;
  align-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 29px;
  color: #1b1f3c;
  & span {
    align-items: center;
    display: flex;
  }
`;
const FakeSubtitle = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #00072b;
`;

const StyledMainContent = styled.div``;

export default MainContent;
