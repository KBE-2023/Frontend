import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
    domain={"dev-o3uywknd.us.auth0.com"}
    clientId={"RntZ6PNUlexykFAeZQO5m1Rv1lZD1fnj"}
    redirectUri={'http://localhost:3000'}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
