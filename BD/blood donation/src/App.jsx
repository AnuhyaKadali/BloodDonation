import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Landingpage from "./components/Landingpage";
import StoriesSection from "./components/StoriesSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";
import Donate from "./pages/Donate";
import HostDrive from "./pages/HostDrive";
import Locations from "./pages/Locations";
import Stories from "./pages/Stories";
import UpcomingCamps from "./pages/UpcomingCamps";
import About from "./pages/About";
import Login from "./pages/Login";



import "./Styles.css";

function App() {
  return (
    <Router>
      <Routes>

        {/* ✅ Landing page FIRST */}
        <Route path="/" element={<Landingpage />} />

        {/* ✅ Login Page */}
        <Route path="/login" element={<Login />} />

        {/* ✅ Home Page */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <main>
                <HeroSection />
                <StoriesSection />
                <CallToActionSection />
              </main>
              <Footer />
            </>
          }
        />

        {/* ✅ Other Pages */}
        <Route path="/donate" element={<><Navbar /><Donate /></>} />
        <Route path="/host-drive" element={<><Navbar /><HostDrive /></>} />
        <Route path="/locations" element={<><Navbar /><Locations /></>} />
        <Route path="/upcoming-camps" element={<><Navbar /><UpcomingCamps /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/stories" element={<><Navbar /><Stories /></>} />
        <Route path="/login" element={<><Navbar /><Login /></>} />
      

      </Routes>
    </Router>
  );
}

export default App;
