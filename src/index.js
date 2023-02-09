import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";

import App from "./App";
import { store, persistor } from "./store/store";

// import "./index.scss";
import { stripePromise } from "./utils/stripe/stripe.utils";
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { GlobalStyle } from "./global.style";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);

serviceWorkerRegistration.register();