import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from '../PaymentCard/PaymentCard';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IiMs8KTwBTHs89Bpskkl4Xp30htavtpSYOceHqm4AqRLXyZG0VvVUPEujEwk6RsFAZqQx48v8n2CwW5EXatVpoI003KTMdxPv');

const PaymentProcess = ({serviceData}) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCard serviceData={serviceData}/>
        </Elements>
    );
};

export default PaymentProcess;