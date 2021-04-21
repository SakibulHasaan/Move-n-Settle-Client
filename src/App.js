import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddAdmin from './components/AddAdmin/AddAdmin';
import AddReview from './components/AddReview/AddReview';
import AddService from './components/AddService/AddService';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AllOrders from './components/AllOrders/AllOrders';
import CheckOutService from './components/CheckOutService/CheckOutService/CheckOutService';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageService from './components/ManageService/ManageService';
import NavBar from './components/NavBar/NavBar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div>

        <Router>

          <NavBar></NavBar>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <PrivateRoute path="/dashboard">
              <AdminDashboard />
            </PrivateRoute>

            <PrivateRoute path="/addReview">
              <AddReview />
            </PrivateRoute>

            <PrivateRoute path="/addService">
              <AddService />
            </PrivateRoute>

            <PrivateRoute path="/manageService">
              <ManageService />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/checkout/:id">
              <CheckOutService></CheckOutService>
            </PrivateRoute>

            <PrivateRoute path="/addAdmin">
              <AddAdmin />
            </PrivateRoute>

            <PrivateRoute path="/allOrders">
              <AllOrders />
            </PrivateRoute>


          </Switch>
        </Router>


      </div>
    </UserContext.Provider>

  )
}

export default App;
