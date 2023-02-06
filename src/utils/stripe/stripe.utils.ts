import { loadStripe } from "@stripe/stripe-js";

const stripe_publishable_key: string =
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string;

export const stripePromise = loadStripe(stripe_publishable_key);
