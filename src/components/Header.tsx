import styled from "styled-components";
import Logo from "../assets/plana_logo.svg";

const StyledHeader = styled.header`
  height: 40px;
  min-height: 40px;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 5px;
  background-color: var(--ghost-white);
  position: relative;
`;

const Title = styled.h1`
  position: absolute;
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 769px) {
    text-align: right;
    padding-right: 20px;
    font-size: 150%;
  }
`;

const LogoWrapper = styled.div`
  height: 100%;
  padding-left: 20px;
  & img {
    height: 100%;
  }
`;

const Header = (): JSX.Element => (
  <StyledHeader>
    <LogoWrapper>
      <img src={Logo} alt="logo" />
    </LogoWrapper>
    <Title>There is no Plan B</Title>
  </StyledHeader>
);

export default Header;
