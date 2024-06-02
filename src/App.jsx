import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Features from "./components/Features";
import Destination from "./components/Destination";
import About from "./components/About";
import Contact from "./components/Contact";
import BookingForm from "./components/Bookingform";
import ForgotPassword from './components/ForgotPassword';
import SunsetPicture from './components/SunsetPicture';
import PricingCard from "./components/PricingCard";
import PaymentPage from "./components/PaymentPage";

const AppContent = () => {
  const location = useLocation();
  
  // Paths where the Navbar and Footer should not be displayed
  const noNavFooterPaths = ["/login", "/register","/forgotpassword"];

  const isNoNavFooterPath = noNavFooterPaths.includes(location.pathname);

  // Check if the current path is the root path
  const isRootPath = location.pathname === "/";

  return (
    <>
      {isRootPath ? (
        <SunsetPicture />
      ) : (
        <>
          {!isNoNavFooterPath && <Navbar />}
          <main>
            <Routes>
              <Route path="/" element={<SunsetPicture />} />
              <Route path="/home" element={<Home />} />
              <Route path="/booking" element={<BookingForm />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/features" element={<Features />} />
              <Route path="/PricingCard" element={<PricingCard />} /> 
              <Route path="/payment" element={<PaymentPage />} /> {/* Add this line */}
            </Routes>
          </main>
          {!isNoNavFooterPath && <Footer />}
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;
