import "../styles/globals.css";

import { AuthProvider } from "../context/Auth";
import { GunDBProvider } from "../context/GunDB";
import { FeedbackProvider } from "../context/Feedback";

import AppLayout from "../components/appLayout";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <GunDBProvider>
        <AuthProvider>
          <FeedbackProvider>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </FeedbackProvider>
        </AuthProvider>
      </GunDBProvider>
    </div>
  );
}

export default MyApp;
