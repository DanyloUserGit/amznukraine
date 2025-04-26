import React, { ReactNode } from "react";
import styled from "styled-components";

interface StyledMenuProps {
  open: boolean;
}

const StyledMenu = styled.nav<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  height: 100vh;
  width: 100%;
  overflow:hidden;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index:9;
  display: ${({ open }) => (open ? "block" : "none")};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }
  }
`;

interface MenuProps {
  open: boolean;
  children: ReactNode;
}

const Menu: React.FC<MenuProps> = ({ open, children }) => {
  return (
    <StyledMenu open={open}>
      {children}
    </StyledMenu>
  );
};

export default Menu;
