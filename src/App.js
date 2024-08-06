import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
//import About from "./components/About/About";
import Events from "./components/Events/Events";
import Framework from "./components/Framework/Framework";
import CommunityContributors from "./components/CommunityContributors/CommunityContributors";
//import Closing from "./components/Closing/Closing";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <Preloader />}
      <div className={`App ${loading ? "no-scroll" : "scroll"}`}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/about" element={<About />} />*/}
          <Route path="/events" element={<Events />} />
          <Route path="/framework" element={<Framework />} />
          <Route path="/community-contributors" element={<CommunityContributors />} />
          {/*<Route path="/closing" element={<Closing />} />*/}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/*<Footer />*/}
      </div>
    </Router>
  );
}

export default App;
