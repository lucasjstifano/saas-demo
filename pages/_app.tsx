import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/nav";

import UserProvider from "../context/user";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Nav />
      <Component {...pageProps} />;
    </UserProvider>
  );
}

export default MyApp;
