import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Poster from './Components/Poster/Poster';
import fakeData from './fakeData/fakeData';
import Food from './Components/Food/Food';
import FoodCategory from './Components/FoodCategory/FoodCategory';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Confirmation from './Components/Confirmation/Confirmation';
import CheckOut from './Components/CheckOut/CheckOut';
import Login from './Components/Login/Login';


export const FoodContext = createContext();
export const CountContext = createContext();

function App() {
  const [category, setCategory] = useState(fakeData)
  const [count, setCount] = useState(1)
    
  return (
    <FoodContext.Provider value={[category, setCategory, count, setCount]}>
      <Router>
        <Navbar/>
       <Switch> 
        <Route path="/food/:id">
        <Food/>
        </Route>
        <Route path="foodCategory">
        <FoodCategory/>
        </Route>
        <Route path="/home">
         <Poster/>
        </Route>
        <Route exact path="/">
         <Poster/>
        </Route>
        <Route path="/confirmation/:id">
         <Confirmation/>
        </Route>
        <Route path="/login">
         <Login/>
        </Route>
        <Route path="/checkout">
         <CheckOut/>
        </Route>
        <Router path="*">
          <NotFound/>
        </Router>
       </Switch>
      </Router>
    </FoodContext.Provider>
  );
}

export default App;
