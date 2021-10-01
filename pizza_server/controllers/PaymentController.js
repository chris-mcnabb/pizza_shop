const Payment = require('../models/PaymentModel');

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

class PaymentController {

    async create_checkout_session  (req, res)  {
        try {
            const domainURL = process.env.DOMAIN;
            const {items} = req.body;
            /*if (products.length < 1 || !products)
                return res.send({
                    ok: false,
                    message: "Please select at least 1 product"
                });*/
            items.forEach(item => {
                delete item.toppings;
                delete item.category;
                delete item.size;
                item.currency = process.env.CURRENCY;
                item.amount *= 100;
            });
            // Create new Checkout Session for the order
            // Other optional params include:
            // [billing_address_collection] - to display billing address details on the page
            // [customer] - if you have an existing Stripe Customer ID
            // [payment_intent_data] - lets capture the payment later
            // [customer_email] - lets you prefill the email input in the form
            // For full details see https://stripe.com/docs/api/checkout/sessions/create
          const  session = await stripe.checkout.sessions.create({
                payment_method_types: process.env.PAYMENT_METHODS.split(", "),
                line_items: items,
                // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
                success_url: `${domainURL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${domainURL}/`
            });
            return res.send({ok: true, sessionId: session.id});
        } catch (error) {
             console.log("ERROOOOR =====>", error.raw.message);
            return res.send({ok: false, message: error.raw.message});
        }
    };


    async checkout_session  (req, res) {
        try {
            const {sessionId} = req.query;
            const session = await stripe.checkout.sessions.retrieve(sessionId);
            const customer = await stripe.customers.retrieve(session.customer);
            return res.send({ok: true, session: session, customer});
        } catch (error) {
            console.log("ERROR =====>", error.raw.message);
            return res.send({ok: false, message: error.raw.message});
        }
    };
}
module.exports = new PaymentController();
