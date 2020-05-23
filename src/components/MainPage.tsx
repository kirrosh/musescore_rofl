import React from "react";
import { Layout, Breadcrumb } from "antd";
import MainContent from "./MainContent";
import PageHeader from "../common/PageHeader";
import IsMobileContext from "../tools/IsMobileContext";
const { Content } = Layout;

const MainPage = () => {
  const isMobile = React.useContext(IsMobileContext);
  return (
    <Layout className="layout">
      <PageHeader />
      <Content style={{ padding: "0 50px", marginTop: isMobile ? 118 : 64 }}>
        <Breadcrumb style={{ margin: "16px 0" }} separator=">">
          <Breadcrumb.Item href="">Assignments</Breadcrumb.Item>
          <Breadcrumb.Item>
            Wind Ensemble - Opener: Set 1-15 (w/mark time)
          </Breadcrumb.Item>
        </Breadcrumb>
        <MainContent />
      </Content>
    </Layout>
  );
};

export default MainPage;
