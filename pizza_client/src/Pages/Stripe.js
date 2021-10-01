import React from "react";
import Order from "./Order";

import { StripeProvider, Elements } from "react-stripe-elements";

const Stripe = props => {

    return (
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
        <Elements>
                <Order  {...props} />
            </Elements>
        </StripeProvider>
    );
};

export default Stripe;
