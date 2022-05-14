import React,{useState,createContext} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import ScrollToBottom from 'react-scroll-to-bottom';
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Tables = ()=> {
    const [tableNumber, setTableNumber] = useState('')
    console.log(tableNumber);
    const UserContext = createContext()

    const card = [1,2,3,4,5,6,7,8,9,10,11,12]
 
  return (
      <>
      <UserContext.Provider value={tableNumber}>
      <ScrollToBottom>
      <Main>
      {card.map((ele,i)=>(
        <React.Fragment key={i}>
        <Link to="/dish">
        <Card sx={{width: 250,margin:2,backgroundColor:"#FFA500" }}>
      <CardContent>
       <Typography sx={{fontWeight:600}} variant="h5" component="div">
        F {++i}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        New Customer
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
          Rs.2000
        </Typography>
        <Typography variant="body2">
         Dinner
        </Typography>
        <a href='/dish'>fff</a>
      </CardContent>
    </Card>
        </Link>
        </React.Fragment>
    ))}
      </Main>
      </ScrollToBottom>
      </UserContext.Provider>
    </>
  );
}
export default Tables;

const Main = styled.div`
display:flex;
justify-content:flex-start;
flex-wrap:wrap;`