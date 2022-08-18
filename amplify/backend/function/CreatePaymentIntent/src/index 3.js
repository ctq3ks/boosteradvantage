const stripe = require('stripe')('sk_test_51KwtY8JWWO2bb9v17eELX28D2Gtndf8HB4cGWy6415W0Bbhe20LkvR1tnsHPofdmr8ktzsH1EN7Fb0W6BcwpmEi500YD0gS9iH');
// This example sets up an endpoint using the Express framework.
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
   const { typeName, arguments } = event;

   if (typeName != 'Mutation') {
       throw new Error('Request is not a mutation');
   }

   if (!arguments?.amount) {
    throw new Error('Amount argument is required');
   }

   // Send the order id here and then in future use the id to total payments and make calculationns
   const paymentIntent = await stripe.paymentIntents.create({
        amount: arguments.amount,
        currency: 'usd'
   });

   return {
       clientSecret: paymentIntent.client_secret,
   }
};
