import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './SideBar.css'

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch("https://infinite-mountain-25271.herokuapp.com/allAdmins")
                    .then((res) => res.json())
                    .then((admins) => {
                        const adminData = admins.find(
                            (admin) => admin.email === loggedInUser.email
                        );
                        console.log({ adminData });
                        if (adminData) {
                            setIsAdmin(true);
                        }
                      
                    });
    }, [])
    return (
        <div className="sidebar">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/allOrders">Orders</Link>
            {
                !isAdmin && <Link to="/addReview">Review Us</Link> 
            }
            {
                isAdmin &&
                <>
                    <Link to="/addService">Add Service</Link>
                    <Link to="/addAdmin">Add Admin</Link>
                    <Link to="/manageService">Manage Service</Link>
                </>
            }

        </div>
    );
};

export default SideBar;