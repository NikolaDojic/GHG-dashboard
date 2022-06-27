import styled from "styled-components";

const StyledFooter = styled.footer`
  min-height: 60px;
  background-color: var(--bud-green);
  color: var(--ghost-white);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return <StyledFooter> just some footer</StyledFooter>;
};
export default Footer;
