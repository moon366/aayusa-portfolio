import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import MusicPlayer from "./components/MusicPlayer";
import DivBox from "./components/DivBox";

const SUNFLOWER_URL = "https://aayusasunflower.vercel.app/#/gallery";

function App() {
  const [isSecretRoute, setIsSecretRoute] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      setIsSecretRoute(hash === "#ankitamiss" || hash === "#/ankitamiss");
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
    return <DivBox onUnlock={() => setUnlocked(true)} />;
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
