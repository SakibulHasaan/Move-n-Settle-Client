import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import SideBar from '../SideBar/SideBar';
import './AllOrders.css'


const AllOrders = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [loggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [singleOrder, setSingleOrder] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);
    const onSubmit = (data) => {

        Object.keys(data).forEach(key => {

            if (data[key]) {
                fetch('http://localhost:4000/findOrder/' + key,)
                    .then(res => res.json())
                    .then(response => {

                        setSingleOrder(response);

                        const status = data[key];

                        const NewOrder = {
                            name: "Sakib",
                            orderStatus: status
                        }

                        fetch('http://localhost:4000/updateOrderStatus/' + key, {
                            method: 'PATCH',
                            headers: { "content-Type": 'application/json' },
                            body: JSON.stringify(NewOrder)
                        })
                            .then(response => console.log(response));

                    })

            }
        })

        reset();


    };

    useEffect(() => {
        fetch('http://localhost:4000/allOrders')
            .then((res) => res.json())
            .then((data) => {
                fetch("http://localhost:4000/allAdmins")
                    .then((res) => res.json())
                    .then((admins) => {
                        const adminData = admins.find(
                            (admin) => admin.email === loggedInUser.email
                        );
                        console.log({ adminData });
                        if (adminData) {
                            setOrders(data);
                            setIsAdmin(true);
                        }
                        else {
                            const specificUserData = data.filter(
                                (user) => user.email === loggedInUser.email
                            );
                            setOrders(specificUserData);
                        }
                    });

            });
    }, [orders]);

    return (
        <div>
            <SideBar />
            <div style={{ marginLeft: "300px" }} className="mr-5">
                <table style={{ width: "100%" }}>
                    <tr>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Date of Order</th>
                        <th>Order Status</th>
                        {
                            isAdmin && <th>User Email</th>
                        }
                        {
                            isAdmin && <th>Set Order Status</th>
                        }
                    </tr>

                    {orders.map((order, idx) =>
                        <tr>
                            <td>{order.name}</td>
                            <td>{order.price}</td>
                            <td>{order.date}</td>
                            <td>{order.orderStatus}</td> 
                            {
                                isAdmin && <td>{order.email}</td>
                            }

                            {
                                isAdmin && <td>
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <select {...register(`${order._id}`)}>
                                            <option value="">Select...</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Ongoing">Ongoing</option>
                                            <option value="Complete">Complete</option>
                                        </select>
                                        <input type="submit" className="ml-2" />
                                    </form>
                                </td>
                            }

                        </tr>
                    )}
                </table>
            </div>

        </div>
    );
};

export default AllOrders;