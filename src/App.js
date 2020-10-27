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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login'



export const FoodContext = createContext();



function App() {
  const [category, setCategory] = useState(fakeData)
  const [count, setCount] = useState(1)
  const [loggedInUser, setLoggedInUser] = useState([])

  return (
    <FoodContext.Provider value={{ category, setCategory, count, setCount, loggedInUser, setLoggedInUser }}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/food/:id">
            <Food />
          </Route>
          <Route path="foodCategory">
            <FoodCategory />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/confirmation/:id">
            <Confirmation />
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <CheckOut />
          </PrivateRoute>
          <Route path="/home">
            <Poster />
          </Route>
          <Route exact path="/">
            <Poster />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </FoodContext.Provider>
  );
}

export default App;
