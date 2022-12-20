// component that shows the credit card
import { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartTotal } from "../../store/cart/cart.selector";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [paymentInProgress, isPaymentInProgress] = useState();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    isPaymentInProgress(true);
    // make a payment intent to stripe indicating there is a payment about to happen.. This returns a secret key that is used in the actual payment call
    // invoke the serverless function and the path is the folder structure.
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    // Confirm payment by passing in the client secret received as a part of the earlier call.
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        // elements hook retrieves the CardElement details and passes it to confirm payment service.
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser,
        },
      },
    });
    isPaymentInProgress(false);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment succeeded");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button
          isLoading={paymentInProgress}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          {" "}
          Pay Now{" "}
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
