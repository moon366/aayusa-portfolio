import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import MusicPlayer from "./components/MusicPlayer";

const SUNFLOWER_URL = "https://aayusasunflower.vercel.app/#/gallery";

function App() {
  const [showAnkitamiss, setShowAnkitamiss] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === "#ankitamiss" || hash === "#/ankitamiss") {
        window.location.replace(SUNFLOWER_URL);
        setShowAnkitamiss(true);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  if (showAnkitamiss) {
    return null;
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
