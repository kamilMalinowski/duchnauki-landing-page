import { BrowserRouter, Route, Routes } from "react-router";

import { useEffect } from "react";
import { useLocation } from "react-router";

import HomePage from "./pages/HomePage";
import Other from "./pages/demos/Other";
import PageNotFound from "./pages/PageNotFound";

import "./App.scss";
import Game_1 from "./pages/demos/other/Game_1";

function App() {
  function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash]);

    return null;
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demos/other" element={<Other />} />
          <Route path="/demos/other/game_1" element={<Game_1 />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
