import styled from "@emotion/styled";
import React, { useState,useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Search from "./section/Search";
import Tables from "./section/Tables";

const Section = ({props}) => {
  const [print, setPrint] = useState([]);
  const [product, setProduct] = useState({});
  const [tab, setTab] = useState([]);
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tableOne =()=> {}

  return (
    <>
      <HomeContainer>
        <RightContainer>
          <Table>
            <HeaderBar>
              <Box
                sx={{
                  maxWidth: { xs: 320, sm: 480 },
                  bgcolor: "background.paper",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons={false}
                  aria-label="scrollable prevent tabs example"
                >
                  <Tab onClick={()=>{tableOne()}} label="First Floor" />
                  <Tab label="Secand Floor" />
                </Tabs>
              </Box>
              <Search />
            </HeaderBar>
            <Tables />
          </Table>
        </RightContainer>
        <LeftContainer>
  
        </LeftContainer>
      </HomeContainer>
    </>
  );
};

export default Section;

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
`;
const RightContainer = styled.div`
  flex: 6;
`;
const LeftContainer = styled.div`
  flex: 4;
`;
const Table = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 6px;
`;
const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
