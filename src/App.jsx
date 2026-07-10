import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Button from "./components/Button";
import ScrollToTop from "./components/ScrollToTop";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [showAnkitamiss, setShowAnkitamiss] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setShowAnkitamiss(window.location.hash === "#ankitamiss");
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  if (showAnkitamiss) {
    return <Button />;
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
