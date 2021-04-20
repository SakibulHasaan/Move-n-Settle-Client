import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <Link to="/">Home </Link> 
            <Link to="/addService">Add Service</Link> 
            <Link to="/addService">Manage Service</Link> 
            <Link to="/allOrders">All Orders</Link> 
        </div>
    );
};

export default SideBar;