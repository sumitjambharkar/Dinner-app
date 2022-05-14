import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Dish from "./componets/Dish";
import Home from "./componets/Home";
import Login from "./componets/Login";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home />}/>
         
        
        <Route exact path="/login" element={<Login />}/>
        
        
        <Route exact  path="/dish" element={<Dish />} />
          
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
