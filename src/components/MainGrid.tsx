import React from "react";
import styled from "styled-components/macro";
import { UserOutlined, DashOutlined, AudioOutlined } from "@ant-design/icons";
import { Avatar, Select, Input, Button } from "antd";
import { ReactComponent as Sheet } from "../svg/fakeSheet.svg";
import fakeData, { Musician } from "./fakeData";

const { Option } = Select;

const MainGrid = () => {
  return (
    <StyledMainGrid>
      {[...fakeData, ...fakeData].map((m) => (
        <Card {...m} />
      ))}
    </StyledMainGrid>
  );
};

const Card = (props: Musician) => {
  return (
    <StyledCard>
      <CardHeader>
        <Avatar size={48} icon={<UserOutlined />} />
        <CardTitleWrapper>
          <CardTitle>Evan Flores</CardTitle>
          <CardSubtitle>French horn</CardSubtitle>
        </CardTitleWrapper>
        <div />

        <StyledDashButton icon={<DashOutlined />} />
      </CardHeader>
      <CardSheetWrapper>
        <Sheet />
      </CardSheetWrapper>
      <CardSoundTitle>Opener m.1-m.49 (w/mark time)</CardSoundTitle>
      <CardControls>
        <Input.Group compact>
          <Select defaultValue="grade" style={{ width: 100 }}>
            <Option value="Grrade">Grrade</Option>
            <Option value="grade">Grade</Option>
            <Option value="Grrrrade">Grrrrade</Option>
          </Select>
          <Input style={{ width: 50 }} defaultValue="89" />
          <Input style={{ width: 50 }} defaultValue="100" />
        </Input.Group>
      </CardControls>
      <StyledSearch placeholder="Enter comment..." suffix={suffix} />
    </StyledCard>
  );
};

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const StyledSearch = styled(Input)`
  margin: 8px;
  width: calc(100% - 16px);
`;

const StyledMainGrid = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  display: grid;
  justify-content: center;
  grid-gap: 78px;
  grid-template-columns: repeat(auto-fit, 310px);
  padding-bottom: 10px;
`;

const StyledCard = styled.div`
  background: #ffffff;
  box-shadow: 10px 20px 40px rgba(30, 50, 65, 0.25);
  border-radius: 10px;
  width: 310px;
  padding: 8px;
`;

const CardHeader = styled.div`
  padding: 20px 25px;
  display: grid;
  align-items: center;
  grid-gap: 20px;
  grid-template-columns: auto auto 1fr auto;
`;

const CardSheetWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CardTitleWrapper = styled.div`
  /* text-align: center; */
`;

const StyledDashButton = styled(Button)`
  border: none;
`;

const CardTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #61677c;
  text-shadow: 1px 1px 0px #ffffff;
  & span {
    align-items: center;
    display: flex;
  }
`;

const CardSubtitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #afb0b6;

  /* TextShadow */

  text-shadow: 1px 1px 0px #ffffff;
`;

const CardSoundTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  color: #4d4f56;
`;

const CardControls = styled.div`
  display: flex;
  justify-content: center;
  & > span {
    width: auto;
  }
`;

export default MainGrid;
