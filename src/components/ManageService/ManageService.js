import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './ManageService.css'

const ManageService = () => {

    const [Services, setServices] = useState();
    useEffect(() => {
        fetch('http://localhost:4000/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [Services]);

    const handleDelete = (id) =>{
        fetch('http://localhost:4000/delete/' + id, {
            method: 'DELETE'
        })
        .then(res => console.log('delete ' + id))
    }

    return (
        <div>
            <SideBar />
            <div style={{ marginLeft: "300px", width: '800px' }}>
                <table style={{ width: "100%" }}>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>

                    {

                        Services &&
                        Services.map((service, idx) =>
                            <tr>
                                <td>{service.name}</td>
                                <td>{service.price}</td>
                                <td> <button onClick={() => handleDelete(service._id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        )}
                </table>
            </div>

        </div>
    );
};

export default ManageService;