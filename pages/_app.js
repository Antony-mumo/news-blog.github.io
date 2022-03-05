import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
    );
  }
  
  export default MyApp;

  
  // import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
  // <PayPalScriptProvider options={{ "client-id": "test" }}>

    {/* <PayPalButtons style={{ layout: "horizontal" }} />   */}
  {/* </PayPalScriptProvider> */}