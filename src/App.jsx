import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp-signIn/SignUp";
import SignIn from "./pages/signUp-signIn/SignIn";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/dashboard/Dashboard";
import { Womens } from "./pages/womens/Womens";
import { Mens } from "./pages/mens/Mens";
import { HelpCenter } from "./pages/helpCenter/HelpCenter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/helpcenter" element={<HelpCenter />} />

        {/* Private routes  */}
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
