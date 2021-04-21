import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { UserContext } from '../../../App';
import { useParams } from 'react-router';

const PaymentCard = ({serviceData}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);

    const [loggedInUser] = useContext(UserContext);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            handleOrder(paymentMethod);
        }
    };

    const handleOrder = (paymentMethod) => {
        const date = new Date();     
        const just_date = date.toDateString('dd/MM/yyyy');
        const UserOrder = { ...loggedInUser, ...serviceData, date: just_date, paymentID: paymentMethod.id , orderStatus: "Pending"}

        fetch('http://localhost:4000/order', {
            method: 'POST',
            headers: { "content-Type": 'application/json'},
            body: JSON.stringify(UserOrder)
        })
            .then(res => alert("Order Placed"))
        }

    return (
       <div>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe} className="btn btn-primary mt-3">Place Order</button>
        </form>
        {
            paymentError && <p style={{ color:"red"}}>{paymentError}</p>
        }

       </div>
    );
};

export default PaymentCard;