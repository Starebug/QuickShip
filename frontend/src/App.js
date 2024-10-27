import "./App.css";
import Application from "./components/Application";
import Approach from "./components/Approach";
import Backup_Manager from "./components/Backup_Manager";
import Benefits from "./components/Benefits";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Institute from "./components/Institute";
import Login from "./components/Login";
import Peer from "./components/Peer";
import Quote from "./components/Quote";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Deposit from "./components/Deposit";
import Success from "./components/Success";
import Failure from "./components/Failure";
import Widthdraw from "./components/Widthdraw";
import AboutUs from "./components/AboutUs";
import TrackingAndSupport from "./components/tracking";
import Shipment from "./components/shipment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TermsAndConditions from "./components/terms";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Quote />
              <Benefits />
              <Application />
              <Faq />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route  path="/p2p" element={<Peer />} />
        <Route  path="/ifb" element={<Institute />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/signup" element={<SignUp />} />
        <Route  path="/transfermoney" element={<Deposit />} />
        <Route  path="/widthdrawmoney" element={<Widthdraw />} />
        <Route  path="/success" element={<Success />} />
        <Route  path="/failure" element={<Failure />} />
        <Route  path="/AboutUs" element={<AboutUs />} />
        <Route  path="/tracking" element={<TrackingAndSupport />} />
        <Route  path="/shipments/*" element={<Shipment/>} />
        <Route  path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </>
  );
}

export default App;
