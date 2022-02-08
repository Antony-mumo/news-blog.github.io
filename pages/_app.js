import "../styles/globals.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function MyApp({ Component, pageProps }) {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <Component {...pageProps} />
      <PayPalButtons style={{ layout: "horizontal" }} />
    </PayPalScriptProvider>
  );
}

export default MyApp;
