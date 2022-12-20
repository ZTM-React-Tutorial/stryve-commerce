// this is a netlify's servless funciton..
// netlify when it build the project looks for a Netlify folfer and a functions folder to build serverless services. in this case create-payment-intent..
// the url/endpoint is the same as the name of the file.
// not this is a node applicaiton.

// we are requiring a dotenv lib and we are running config function that will load all the variables from .env file and add it to the process env./
require("dotenv").config();

// const stripe = require("stripe")(process.env.STRIPE_SECRET);
const stripe = require("stripe")(
  "sk_test_51MHABlDxgjOx3v9Rqf8tmpLjCFRIC2XsK6zKYRjXUh4BeNwZNiQIs2p2v8M8zmle2IFxoG6hpMXt5oAPcoqavndF001AskGjZp"
);
// function that will run when this serverless function receives a request.
exports.handler = async (event) => {
  try {
    // amount is in cents.. so $100 = 100 * 100
    const { amount } = JSON.parse(event.body);

    console.log("Amount : ", amount);
    // intent to make a payment.
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      //   accepts only card payments
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
