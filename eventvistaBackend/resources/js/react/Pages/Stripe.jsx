import React from 'react';
import ReactDOM from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../Components/Forms/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NIUy0Cth47xs3WC9tm8vZi0P6SmxOKYLjDhg3BWm5OR0Xg4GfmU90akrrwObn64iRo6qx1DaQ1QDYikZsCo4ljL00X9Maixp9');

export default function Stripe() {
    const options = {
        // passing the SetupIntent's client secret
        clientSecret: 'pi_3NJdUvCth47xs3WC0tLDktXy_secret_ox4Nkd29GorWoFUZwXBFE6thO',
        // Fully customizable with appearance API.
        appearance: {/*...*/ },
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
    );
};

