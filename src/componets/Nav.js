import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PrintIcon from "@mui/icons-material/Print";
import { Link} from "react-router-dom";
import Option from "./Option";
import Menu from './Menu';

const Nav = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    " May",
    " June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const name = month[date.getMonth()];
  const d = date.getDate();
  

  return (
    <>
      <NavbarSection>
        <RightContainer>
          <Menu/>
        </RightContainer>
        <LeftContainer>
          <Day>
            <span>Running Day</span>
            <p>
              {d} {name}
            </p>
          </Day>
          <ShoppingBasketIcon />
          <EventNoteIcon />
          <PrintIcon />
          <Option/>
        </LeftContainer>
      </NavbarSection>
    </>
  );
};

export default Nav;
const NavbarSection = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #FFA500;
  padding: 1rem;
`;
const RightContainer = styled.div`
  align-items: center;
  display: flex;
  > .MuiSvgIcon-root {
    font-size: 2.1rem;
  }
  > h1 {
    font-size: 1.5rem;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  > .MuiSvgIcon-root {
    margin: 0.8rem 0.5rem 0.8rem 0.5rem;
  }
`;
const Day = styled.div`
  > span {
    font-size: 0.7rem;
  }
  p {
    font-size: 0.9rem;
  }
`;
const User = styled.div`
  margin-top: 0.8rem;
  text-decoration: none;
  place-items: center;
  > select {
    height: 30px;
    border: 0px;
    outline: 0px;
    background-color: #ffd580;
    font-size: 1.2rem;
    width: 9rem;
  }
`;
