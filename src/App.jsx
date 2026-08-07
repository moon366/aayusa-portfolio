import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import MusicPlayer from "./components/MusicPlayer";
import DivBox from "./components/DivBox";

const SUNFLOWER_URL = "https://aayusasunflower.vercel.app/#/gallery";

const SecretRouteRedirect = () => {
  const [isSecretRoute, setIsSecretRoute] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === "#ankitamiss" || hash === "#/ankitamiss") {
        setIsSecretRoute(true);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  useEffect(() => {
    if (isSecretRoute) {
      window.location.replace(SUNFLOWER_URL);
    }
  }, [isSecretRoute]);

  return null;
};

function App() {
  return (
    <DivBox>
      <SecretRouteRedirect />
      <div className="bg-white text-gray-900 antialiased">
        <ScrollToTop />
        <MusicPlayer />
        <Home />
      </div>
    </DivBox>
  );
}

export default App;
