import React from "react";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="bg-white text-gray-900 antialiased">
      <ScrollToTop />
      <MusicPlayer />
      <Home />
    </div>
  );
}

export default App;
