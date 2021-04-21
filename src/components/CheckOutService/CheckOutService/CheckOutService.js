import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import "./CheckOutService.css"
import PaymentProcess from '../PaymentProcess/PaymentProcess';


const CheckOutService = () => {
    let { id } = useParams();
    const [ServiceData, setServiceData] = useState({})
    useEffect(() => {
        fetch('http://localhost:4000/find/' + id)
            .then((response) => response.json())
            .then(data => {
                // console.log(data);
                setServiceData(data[0])
            })
    }, [id]);

    return (
        <div className="container">
            <div className="CheckOutService">
                <div className="pl-3">
                    <h1 className="mt-3">Your have selected: {ServiceData.name}</h1>
                    <h3 className="mt-3"> Price ${ServiceData.price}</h3>
                    <h4 className="mt-3"> Description {ServiceData.description}</h4>
                    <div className="mt-3" style={{width: '50%'}}>
                    <PaymentProcess serviceData={ServiceData}></PaymentProcess>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutService;