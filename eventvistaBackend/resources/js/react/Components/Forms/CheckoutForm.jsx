import { useStripe, useElements, CardElement, PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = ({ clientSecret }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: "https://example.com/order/123/complete",
            },
        });

        if (error) {
            console.log(error.message);
        } else if (paymentIntent.status === 'succeeded') {
            // Payment succeeded
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement  />
            <button disabled={!stripe}>Submit</button>
        </form>
    );
};

export default CheckoutForm;