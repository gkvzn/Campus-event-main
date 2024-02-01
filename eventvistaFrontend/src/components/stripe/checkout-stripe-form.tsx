import { stripeElement } from '@/types_and_interfaces/payments';
import { ErrorToast } from '@/utils/helper';
import { Button } from '@/utils/forms/button';
import { useStripe, useElements, PaymentElement, } from '@stripe/react-stripe-js';

import { useState } from 'react';

const CheckoutForm: React.FC<{ order_detail: stripeElement['order_detail'], redirect_url?: stripeElement['redirect_url'] | null }> = ({ order_detail, redirect_url = null }) => {

    if (redirect_url == null) redirect_url = process.env.NEXT_PUBLIC_APP_URL as string
    const stripe = useStripe()

    const elements = useElements()

    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = async () => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return
        }
        setIsLoading(true)

        const { error } = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: redirect_url as string,
            },
        })
        setIsLoading(false)

        if (error) {
            // Show error to your customer (for example, payment details incomplete)
            ErrorToast(error.message)
            return false
        } else {
            return false
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }

    };

    return (
        <div >
            <PaymentElement />
            <div className="order-button-payment mt-20">
                <Button onClick={handleSubmit} class='tp-btn text-center' spinnerClass="text-light"
                    Loader={isLoading}
                    type="button"
                    Text="Pay Now"
                />
            </div>
        </div>
    )
};

export default CheckoutForm;