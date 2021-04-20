import React from 'react';
import AddService from '../AddService/AddService';
import SideBar from './SideBar/SideBar';

const AdminDashboard = () => {
    return (
        <div className="container-fluid row">
            <div className="col-md-4">
                <SideBar />
            </div>

            <div  className="col-md-8">
                <AddService/>
            </div>
        </div>
    );
};

export default AdminDashboard;