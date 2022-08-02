import "../styles/globals.css";

import { AuthProvider } from "../context/Auth";
import { GunDBProvider } from "../context/GunDB";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <GunDBProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </GunDBProvider>
    </div>
  );
}

export default MyApp;
