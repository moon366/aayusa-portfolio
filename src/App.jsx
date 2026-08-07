import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import MusicPlayer from "./components/MusicPlayer";
import PasswordGate from "./components/PasswordGate";

const SUNFLOWER_URL = "https://aayusasunflower.vercel.app/#/gallery";

function App() {
  const [isSecretRoute, setIsSecretRoute] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

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
    if (unlocked) {
      window.location.replace(SUNFLOWER_URL);
    }
  }, [unlocked]);

  if (isSecretRoute && !unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="bg-white text-gray-900 antialiased">
      <ScrollToTop />
      <MusicPlayer />
      <Home />
    </div>
  );
}

export default App;
