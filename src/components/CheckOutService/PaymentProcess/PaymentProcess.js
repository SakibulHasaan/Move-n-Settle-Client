import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('sk_test_51IiMs8KTwBTHs89B1iW4cuXUB1zpVZFDLmhz1nYM4nLy0uUMfsvS8KeH2Sh4qyDLRhqWlVD2FAOv5X1wPGA4MRtc00aEEAMaoj');

const PaymentProcess = () => {
    return (
        <Elements stripe={stripePromise}>
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
        </Elements>
    );
};

export default PaymentProcess;