import styled from "styled-components/macro";

const LinkButton = styled.div<{ active?: boolean }>`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => (props.active ? "#4D9CDF" : "#ffffff")};
  border-bottom: ${(props) => props.active && "1px solid #4D9CDF"};
`;

export default LinkButton;
