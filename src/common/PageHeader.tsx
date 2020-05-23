import React from "react";
import styled from "styled-components/macro";
import { Layout, Avatar } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";

import { ReactComponent as LogoIcon } from "../svg/Logo.svg";
import IsMobileContext from "../tools/IsMobileContext";

const { Header } = Layout;

const PageHeader = () => {
  const isMobile = React.useContext(IsMobileContext);
  return (
    <StyledHeader isMobile={isMobile}>
      <LogoIcon width={137} height={50} />
      <StyledNavigationMenu isMobile={isMobile}>
        <LinkButton>Classes</LinkButton>
        <LinkButton active>Assignments</LinkButton>
        <LinkButton>Library</LinkButton>
      </StyledNavigationMenu>
      <AccountAndSearch>
        <SearchIcon />
        <Avatar size={40} icon={<UserOutlined />} />
      </AccountAndSearch>
    </StyledHeader>
  );
};

const LinkButton = styled.div<{ active?: boolean }>`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#4D9CDF" : "#ffffff")};
  border-bottom: ${(props) => props.active && "1px solid #4D9CDF"};
  &:hover {
    border-bottom: ${(props) =>
      `1px solid ${props.active ? "#4D9CDF" : "#ffffff"}`};
  }
`;

const StyledNavigationMenu = styled.div<{ isMobile?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  & ${LinkButton} {
    margin: ${(props) => (props.isMobile ? "0 15px" : "0 55px")};
  }
`;

const SearchIcon = styled(SearchOutlined)`
  margin-right: 24px;
  & svg {
    width: 16px;
    height: 16px;
    color: white;
  }
`;

const AccountAndSearch = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(LogoIcon)``;

const StyledHeader = styled(Header)<{ isMobile?: boolean }>`
  align-items: center;
  display: grid;
  position: fixed;
  z-index: 1;
  width: 100%;
  grid-auto-rows: 70px auto;
  grid-template-areas: ${(props) =>
    props.isMobile
      ? `
    "b c"
    "a a"`
      : `"b a c"`};

  height: ${(props) => props.isMobile && "118px"};
  ${StyledNavigationMenu} {
    grid-area: a;
  }
  ${Logo} {
    grid-area: n;
  }
  ${AccountAndSearch} {
    grid-area: c;
    justify-self: end;
  }
`;

export default PageHeader;
