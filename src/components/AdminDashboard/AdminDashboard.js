import React from 'react';
import AddService from '../AddService/AddService';
import SideBar from '../SideBar/SideBar';

const AdminDashboard = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <SideBar />
            </div>

            <div  className="col-md-8">
                <h1>Welcome to Dashboard</h1>
            </div>
        </div>
    );
};

export default AdminDashboard;