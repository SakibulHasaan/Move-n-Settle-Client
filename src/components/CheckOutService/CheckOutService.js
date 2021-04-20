import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import "./CheckOutService.css"
import PaymentProcess from './PaymentProcess/PaymentProcess';


const CheckOutService = () => {
    const [loggedInUser] = useContext(UserContext)
    let { id } = useParams();
    const [ServiceData, setServiceData] = useState({})



    useEffect(() => {
        fetch('http://localhost:4000/find/' + id)
            .then((response) => response.json())
            .then(data => {
                // console.log(data);
                setServiceData(data[0])
            })
    }, [id])

    const handleOrder = (event) => {
        const date = new Date();
        const pData = { ...ServiceData, id: ServiceData._id }
        delete pData._id;
        const just_date = date.toDateString('dd/MM/yyyy')
        const UserOrder = { ...loggedInUser, ...pData, date: just_date }

        fetch('http://localhost:4000/order', {
            method: 'POST',
            headers: { "content-Type": 'application/json' },
            body: JSON.stringify(UserOrder)
        })
            .then(res => alert("Order Placed"))
        }

    return (
        <div className="container">
            <div className="CheckOutService">
                <div className="pl-3">
                    <h1 className="mt-3">Your have selected: {ServiceData.name}</h1>
                    <h3 className="mt-3"> Price ${ServiceData.price}</h3>
                    <h4 className="mt-3 my-5"> Description {ServiceData.description}</h4>
                    <PaymentProcess></PaymentProcess>
                    <button onClick={handleOrder} className="btn btn-info mt-5">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOutService;