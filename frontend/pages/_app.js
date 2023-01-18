import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={"sandrino-dev.auth0.com"}
      clientId={"9f6ClmBt37ZGCXNqToPbefKmzVBSOLa2"}
      //redirectUri={"http://localhost:8080/kbe/getdata"}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
