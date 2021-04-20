import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddService from './components/AddService/AddService';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import CheckOutService from './components/CheckOutService/CheckOutService';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <div className="App">
         
        <Router>
          
          <NavBar></NavBar>

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/adminDashboard">
              <AdminDashboard />
            </Route>

            {/* <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute> */}

            <PrivateRoute path="/addService">
                <AddService/>
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/checkout/:id">
              <CheckOutService></CheckOutService>
            </PrivateRoute>
            
          </Switch>
        </Router>


        </div>
      </UserContext.Provider>

  )
}

export default App;
