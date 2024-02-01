import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './checkout-stripe-form';
import { stripeElement } from '@/types_and_interfaces/payments';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

export const StripeCheckoutElement: React.FC<stripeElement> = ({ clientSecret, order_detail, redirect_url }) => {
    const options = {
        clientSecret: clientSecret
    }

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm order_detail={order_detail} redirect_url={redirect_url} />
        </Elements>
    );
};

export default StripeCheckoutElement