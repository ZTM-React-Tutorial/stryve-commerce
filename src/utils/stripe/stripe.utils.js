import { loadStripe } from "@stripe/stripe-js";

// instanctiate a stripe instance.. this is a stripe instance that will be injected into the Element
// by default react will merge the key from the .env file innto process environment so its accessible via process.env property
export const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
